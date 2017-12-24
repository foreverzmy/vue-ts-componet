import Component, { createDecorator } from 'vue-class-component';
import hash from './hash-sum';
import templateCompiler from './template-compiler/index';
import styleCompiler from './style-compiler/index';
function VueComponent(options) {
    let style;
    if (options.scoped) {
        const scopeId = 'data-v-' + hash((options.template || '') + options.style);
        if (options.hasOwnProperty('template')) {
            options.template = templateCompiler(options.template, options.scoped, scopeId);
        }
        if (options.hasOwnProperty('style')) {
            style = styleCompiler(options.style, options.scoped, scopeId);
            const $style = document.createElement('style');
            $style.innerHTML = style;
            document.head.appendChild($style);
        }
    }
    else if (options.style) {
        style = options.style;
        const $style = document.createElement('style');
        $style.innerHTML = style;
        document.head.appendChild($style);
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
