import Vue from 'vue'
import Component from '../src/index'
@Component({
  template: `
    <div class="hello">
      <h1>Hello Times: {{ helloTimes }}</h1>
    </div>`,
  style: `.hello{color:red;}`,
  scoped: true
})
export default class Hello extends Vue {
  helloTimes: number = 0
  sayHello() {
    this.helloTimes++;
  }
}