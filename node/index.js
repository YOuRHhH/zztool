import * as zztool from "../dist/zztool.es.js";
function time(fn) {
  const start = performance.now();
  const result = fn();
  const duration = performance.now() - start;
  console.log(`${duration.toFixed(2)}ms`);
}
!(function () {
  time(() => {
    const arr = zztool.getRandomArray(100, 1, 100);
    const a = zztool.chunkArrayItem(arr, 1);
    // console.log(a);
  });
})();
!(function () {
  time(() => {
    const res = zztool.renameKeysByPath(
      { a: { b: { c: 1 }, c: 1 } },
      "a.c,a.b.c",
      "a.xxx,a.b.xxx"
    );
  });
})();

!(function () {
  time(() => {
    const arrs = {
      company: {
        name: "TechNova Solutions",
        founded: 2012,
        location: "San Francisco, USA",
        departments: [
          {
            name: "Engineering",
            budget: 2500000,
            teams: [
              {
                name: "Frontend",
                projects: ["Website Redesign", "Design System"],
                members: [
                  {
                    id: "E101",
                    name: "Alice Johnson",
                    role: "Senior Vue Developer",
                    details: {
                      age: 29,
                      skills: ["Vue", "TypeScript", "TailwindCSS", "Vite"],
                      email: "alice.j@technova.com",
                      address: "123 Market St, San Francisco, CA",
                      hobbies: ["Hiking", "Photography", "Cooking"],
                    },
                  },
                  {
                    id: "E102",
                    name: "Bob Martinez",
                    role: "UI Engineer",
                    details: {
                      age: 26,
                      skills: ["HTML", "CSS", "JavaScript", "Figma"],
                      email: "bob.m@technova.com",
                      address: "456 Pine St, San Francisco, CA",
                      hobbies: ["Gaming", "Cycling", "Music"],
                    },
                  },
                ],
              },
              {
                name: "Backend",
                projects: ["API Gateway", "Auth Service"],
                members: [
                  {
                    id: "E201",
                    name: "Charlie Kim",
                    role: "Node.js Developer",
                    details: {
                      age: 32,
                      skills: ["Node.js", "Express", "PostgreSQL", "Redis"],
                      email: "charlie.k@technova.com",
                      address: "789 Howard St, San Francisco, CA",
                      hobbies: [],
                    },
                  },
                  {
                    id: "E202",
                    name: "Dana White",
                    role: "DevOps Engineer",
                    details: {
                      age: 34,
                      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
                      email: "dana.w@technova.com",
                      address: "1010 Mission St, San Francisco, CA",
                      hobbies: ["Running", "Traveling", "Board Games"],
                    },
                  },
                ],
              },
            ],
          },
          {
            name: "Marketing",
            budget: 1200000,
            teams: [
              {
                name: "Content",
                projects: ["Blog", null],
                members: [
                  {
                    id: "M101",
                    name: "Evelyn Zhao",
                    role: "",
                    details: {
                      age: 0,
                      skills: [],
                      email: "evelyn.z@technova.com",
                      address: "222 Mission St, San Francisco, CA",
                      hobbies: [undefined, NaN, 0],
                    },
                  },
                  {
                    id: "M102",
                    name: "Frank Lin",
                    role: false,
                    details: {
                      age: 30,
                      skills: ["SEO", "Google Analytics", "Content Marketing"],
                      email: "frank.l@technova.com",
                      address: "333 Howard St, San Francisco, CA",
                      hobbies: ["Basketball", "", false],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    };
    const data = zztool.stripEmpty(arrs);
    console.log(JSON.stringify(data));
  });
})();
