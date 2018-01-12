# vue-ts-component

> TypeScript class decorator can scoped css for Vue component.

## Install

```bash
// npm
$ npm i -s vue-ts-component

// yarn
yarn add vue-ts-component
```

Example: [vue-ts-componnet](https://github.com/foreverzmy/vue-ts-component-demo)

```ts
import Vue from 'vue';
import Component from 'vue-ts-component';

@Component({
  name: 'HelloWorld',
  template: require('./HelloWorld.html'),
  style: require('./HelloWorld.scss'),
  scoped: true // open scoped for css
})
export default class HelloWorld extends Vue {
  public msg = 'Welcome to Your Vue.js App.';
}
```

## Use with vue-cli


## Other

Detail: [vue-class-component](https://www.npmjs.com/package/vue-class-component)

