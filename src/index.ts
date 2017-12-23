import Vue, { ComponentOptions } from 'vue';
import Component, { createDecorator, VueDecorator } from 'vue-class-component';
import { VueClass } from './declarations'
import hash from './hash-sum';
import templateCompiler from './template-compiler/index';
import styleCompiler from './style-compiler/index';

export interface Options extends ComponentOptions<Vue> {
  style?: string;
  scoped?: boolean;
}

function VueComponent<V extends Vue>(options: Options & ThisType<V>): <VC extends VueClass<V>>(target: VC) => VC
function VueComponent<VC extends VueClass<Vue>>(target: VC): VC
function VueComponent(options: Options): any {
  let style: string;
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
  } else if (options.style) {
    style = options.style;
    const $style = document.createElement('style');
    $style.innerHTML = style;
    document.head.appendChild($style);
  }

  return Component(options);
}

namespace VueComponent {
  export function registerHooks(keys: string[]): void {
    Component.registerHooks(keys);
  }
}

export { createDecorator, VueDecorator };
export default VueComponent;
