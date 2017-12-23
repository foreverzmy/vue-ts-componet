import * as postcss from 'postcss';
import trim from './plugins/trim';
import scopeId from './plugins/scope-id';

export default (css, scoped = false, id) => {
  let plugins = [trim];
  if (scoped === true) {
    plugins.push(scopeId({
      id
    }));
  }
  const result = postcss(plugins).process(css);
  return result.css;
}