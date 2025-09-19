const { groupBy } = require("../dist/zztool.umd.js");

describe("groupBy", () => {
  const users = [
    { id: 1, city: "Beijing" },
    { id: 2, city: "Shanghai" },
    { id: 3, city: "Beijing" },
    { id: 4, city: null },
    { id: 5 }, // city undefined
  ];

  test("按 city 分组", () => {
    const result = groupBy(users, "city");
    expect(result).toEqual({
      Beijing: [
        { id: 1, city: "Beijing" },
        { id: 3, city: "Beijing" }
      ],
      Shanghai: [
        { id: 2, city: "Shanghai" }
      ],
      others: [
        { id: 4, city: null },
        { id: 5 }
      ]
    });
  });

  test("空数组返回空对象", () => {
    expect(groupBy([], "city")).toEqual({});
  });

  test("无 key 参数返回空对象", () => {
    expect(groupBy(users, undefined)).toEqual({});
  });

  test("对象中 key 值为数字", () => {
    const nums = [
      { id: 1, type: 1 },
      { id: 2, type: 2 },
      { id: 3, type: 1 },
    ];
    const result = groupBy(nums, "type");
    expect(result).toEqual({
      "1": [
        { id: 1, type: 1 },
        { id: 3, type: 1 }
      ],
      "2": [
        { id: 2, type: 2 }
      ]
    });
  });

  test("对象中 key 值为布尔值", () => {
    const bools = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true },
    ];
    const result = groupBy(bools, "active");
    expect(result).toEqual({
      "true": [
        { id: 1, active: true },
        { id: 3, active: true }
      ],
      "false": [
        { id: 2, active: false }
      ]
    });
  });
});