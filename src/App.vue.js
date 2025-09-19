import { stripEmpty, arrayTrim } from "../lib";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 引入图片
// const base64 = ref('');
// https://oss.ttz111.com/newrisk_online/fDrwU7bVRQVz84Mf4ybuknNZMLVN1kfvTXIU8iAj.jpg
const arrs = {
    company: {
        name: "TechNova Solutions",
        founded: 2012,
        location: "",
        departments: [
            {
                name: "Engineering",
                budget: 0,
                teams: [
                    {
                        name: "Frontend",
                        projects: ["", "Design System"],
                        members: [
                            {
                                id: "E101",
                                name: "Alice Johnson",
                                role: "Senior Vue Developer",
                                details: {
                                    age: 29,
                                    skills: ["Vue", "TypeScript", "TailwindCSS", "Vite"],
                                    email: "alice.j@technova.com",
                                    address: "",
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
                                    hobbies: ["", "Cycling", "Music"],
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
const data = stripEmpty(arrs, {});
console.log(data);
const arr = [
    { name: 123 },
    { name: 123, age: 123 }
];
console.log(arrayTrim(arr));
// const time = timeAgo(1758013775599,{
//   open:true,
//   cb:({}) => {
//     const str = `${minutes}分钟前`
//     return str
//   }
// });
// console.log(time)
// const result = omitDeep(data, ["user.profile.age", "meta.timestamp",'test']);
// console.log(result);
// console.log(arrayTrim([null,{},[],0,false,'',,{abc:123}]))
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({}, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
