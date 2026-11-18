import assert from 'node:assert/strict';
import { execFileSync, execSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = fileURLToPath(new URL('..', import.meta.url));
const consumer = mkdtempSync(join(tmpdir(), 'zztool-consumer-'));
const installed = join(consumer, 'node_modules', '@zzcpt', 'zztool');
const requireFromConsumer = createRequire(join(consumer, 'entry.cjs'));
let pkg;

after(() => rmSync(consumer, { recursive: true, force: true }));
before(() => {
  // 只解包实际会发布的文件，使测试既能发现漏发入口，也能离线运行。
  const output = execSync('npm pack --json --offline --ignore-scripts', {
    cwd: root, encoding: 'utf8', env: { ...process.env, npm_config_pack_destination: consumer },
  });
  const [{ filename }] = JSON.parse(output);
  mkdirSync(installed, { recursive: true });
  execFileSync('tar', ['-xf', join(consumer, filename), '--strip-components', '1', '-C', installed]);
  pkg = JSON.parse(readFileSync(join(installed, 'package.json'), 'utf8'));
});

test('独立项目的 .cjs 文件可以按包名 require 并判断空数组', () => {
  const entry = join(consumer, 'repro.cjs');
  writeFileSync(entry, "const { isEmpty } = require('@zzcpt/zztool');\nconsole.log(isEmpty([]));\n");
  assert.equal(execFileSync(process.execPath, [entry], { encoding: 'utf8' }).trim(), 'true');
});

test('通过 main 字段加载与 CommonJS 包名入口一致', () => {
  // 直接 require 包目录会使用 main，即使 Node 本身支持 exports。
  assert.equal(requireFromConsumer(installed), requireFromConsumer('@zzcpt/zztool'));
});

test('ESM 支持具名导入且导出与 CommonJS 一致', () => {
  const source = `
    import { isEmpty } from '@zzcpt/zztool';
    import * as api from '@zzcpt/zztool';
    console.log(JSON.stringify({ empty: isEmpty([]), names: Object.keys(api).sort() }));
  `;
  const output = execFileSync(process.execPath, ['--input-type=module', '-e', source], {
    cwd: consumer, encoding: 'utf8',
  });
  const cjs = requireFromConsumer('@zzcpt/zztool');
  assert.deepEqual(JSON.parse(output), { empty: true, names: Object.keys(cjs).sort() });
});

// 每个用例使用独立的全局对象，移除新内建方法不会影响 Node 或其他用例。
function loadBrowser(entry) {
  const context = vm.createContext({ assert });
  vm.runInContext(`
    this.window = this.self = this;
    this.location = { href: 'https://example.test/?mode=browser' };
    delete this.globalThis;
    delete Object.entries;
    delete Object.values;
    delete Array.prototype.includes;
    delete String.prototype.padStart;
  `, context);
  vm.runInContext(readFileSync(join(installed, entry), 'utf8'), context, { filename: entry });
  return context;
}

for (const field of ['browser', 'jsdelivr']) {
  test(`通过 ${field} 加载普通脚本时暴露完整的 zztool 全局对象`, () => {
    const browser = loadBrowser(pkg[field]);
    const cjs = requireFromConsumer('@zzcpt/zztool');
    assert.deepEqual(Object.keys(browser.zztool).sort(), Object.keys(cjs).sort());
    vm.runInContext(`
      assert.equal(window.zztool.isEmpty([]), true);
      assert.equal(zztool.getUrlParam().mode, 'browser');
    `, browser);
  });
}

test('ES6 环境支持对象遍历、忽略嵌套字段与 JSON 对象转数组', () => {
  vm.runInContext(`
    const data = { user: { name: '', age: 0 } };
    assert.equal(zztool.isEmpty(data), true);
    assert.equal(zztool.isEmpty(data, { ignoreKeys: ['user.name'] }), false);
    assert.deepEqual(zztool.deepRenameKey({ a: 1 }, 'a', 'b'), { b: 1 });
    assert.deepEqual(zztool.toArray({ a: 1, b: 2 }), [1, 2]);
    assert.deepEqual(zztool.toArray('{"b":2,"a":1}'), [2, 1]);
  `, loadBrowser(pkg.browser));
});

test('集合运算正确匹配 NaN 和正负零，并保留差集中重复值的顺序', () => {
  vm.runInContext(`
    const left = [NaN, 3, -0, NaN, 3];
    const right = [0, NaN, 4, 4];
    assert.deepEqual(zztool.dataMerge(left, right, 2), [NaN, -0, NaN]);
    assert.deepEqual(zztool.dataMerge(left, right, 3), [3, 3]);
    assert.deepEqual(zztool.dataMerge(left, right, 4), [3, 3, 4, 4]);
  `, loadBrowser(pkg.browser));
});

test('ES6 环境可补齐时间字段并按本地日历生成近期日期', () => {
  vm.runInContext(`
    assert.deepEqual(zztool.getTimeStep('08:00', '08:01', '00:01'), ['08:00', '08:01']);
    const date = new Date(2020, 2, 4, 12);
    assert.equal(zztool.getRecentDate({ date })[0], '2020-03-05');
    Math.random = () => 0;
    const id = zztool.getRandomIdcard(2000, 2000);
    assert.equal(id.slice(6, 17), '20000101000');
    assert.equal(zztool.regIdcard(id), true);
  `, loadBrowser(pkg.browser));
});
