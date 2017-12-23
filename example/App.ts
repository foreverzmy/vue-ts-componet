import Vue from 'vue'
import Component from '../src/index'
import Hello from './Hello';


@Component({
  template: require('./App.html'),
  props: {
    propMessage: String
  },
  components: {
    Hello
  }
})
export default class App extends Vue {
  // props have to be declared for typescript
  propMessage: string
  // inital data
  msg: number = 123
  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage
  // lifecycle hook
  mounted() {
    this.greet()
  }
  // computed
  get computedMsg() {
    return 'computed ' + this.msg
  }
  // method
  greet() {
    alert('greeting: ' + this.msg)
    this.$refs.helloComponent.sayHello()
  }
  // dynamic component
  $refs: {
    helloComponent: Hello
  }
}