import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import * as esm from '@zzcpt/zztool';

// 让 Node 通过包名解析 exports，并单独检查只识别 main 的加载方式。
const require = createRequire(new URL('../package.json', import.meta.url));
const cjs = require('@zzcpt/zztool');
assert.equal(cjs.isEmpty([]), true);
assert.equal(esm.isEmpty([]), true);
assert.equal(require('.'), cjs);
assert.deepEqual(Object.keys(esm).sort(), Object.keys(cjs).sort());

// 在独立的浏览器全局环境中移除较新的内建方法，确保 UMD 可以直接作为脚本加载。
const browser = vm.createContext({ assert });
vm.runInContext(`
  this.window = this.self = this;
  delete this.globalThis;
  delete Object.entries;
  delete Object.values;
  delete Array.prototype.includes;
  delete String.prototype.padStart;
`, browser);
const pkg = require('./package.json');
vm.runInContext(readFileSync(require.resolve(pkg.browser), 'utf8'), browser);
vm.runInContext(`
  assert.equal(window.zztool.isEmpty([]), true);
  assert.equal(zztool.isEmpty({ key: '' }), true);
  assert.deepEqual(zztool.deepRenameKey({ a: 1 }, 'a', 'b'), { b: 1 });
  assert.deepEqual(zztool.toArray({ a: 1, b: 2 }), [1, 2]);
  assert.deepEqual(zztool.dataMerge([NaN, 3, NaN], [NaN], 2), [NaN, NaN]);
  assert.deepEqual(zztool.getTimeStep('08:00', '08:01', '00:01'), ['08:00', '08:01']);
  assert.equal(zztool.getRecentDate({ date: '2020-03-04T12:00:00' })[0], '2020-03-05');
`, browser);
