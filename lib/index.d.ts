import Vue, { ComponentOptions } from 'vue';
import { createDecorator, VueDecorator } from 'vue-class-component';
import { VueClass } from './declarations';
export interface Options extends ComponentOptions<Vue> {
    style?: string;
    scoped?: boolean;
}
declare function VueComponent<V extends Vue>(options: Options & ThisType<V>): <VC extends VueClass<V>>(target: VC) => VC;
declare function VueComponent<VC extends VueClass<Vue>>(target: VC): VC;
declare namespace VueComponent {
    function registerHooks(keys: string[]): void;
}
export { createDecorator, VueDecorator };
export default VueComponent;
