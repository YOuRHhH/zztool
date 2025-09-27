import { once } from '../lib';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const a = once(function init() {
    console.log('只执行一次');
});
setInterval(() => {
    console.log('setTimeout');
    a();
}, 1000);
// setInterval(() => {
//   fetch("https://openapi.lddgo.net/base/gtool/api/v1/QueryIdentity",{
//     method: "POST",
//     body: JSON.stringify({
//       id: getRandomIdcard()
//     }),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   }).then(res => res.json()).then(res => {
//       console.log(res);
//     })
// });
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
