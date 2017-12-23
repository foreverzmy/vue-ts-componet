import Component, { createDecorator } from 'vue-class-component';
import hash from './hash-sum';
import templateCompiler from './template-compiler/index';
function VueComponent(options) {
    if (options.scoped) {
        let style;
        const scopeId = 'data-v-' + hash((options.template || '') + options.style);
        if (options.hasOwnProperty('template')) {
            options.template = templateCompiler(options.template, options.scoped, scopeId);
        }
        if (options.hasOwnProperty('style')) {
        }
    }
    return Component(options);
}
(function (VueComponent) {
    function registerHooks(keys) {
        Component.registerHooks(keys);
    }
    VueComponent.registerHooks = registerHooks;
})(VueComponent || (VueComponent = {}));
export { createDecorator };
export default VueComponent;
