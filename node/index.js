import * as zztool from "../dist/zztool.es.js";

const data = [
      { id: 1, pid: 0 },
      { id: 2, pid: 1 }
    ];
    const res = zztool.toTree(data, "pid", { children: "nodes" });
console.log(res)
