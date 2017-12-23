import posthtml from 'posthtml';
import scopeId from './plugins/scope-id';

export default (html = '', scoped = false, id) => {
  let plugins = [];
  let options = {
    sync: true
  };

  if (scoped === true) {
    plugins.push(scopeId);
    options.id = id;
  }
  const result = posthtml(plugins).process(html, options);
  return result.html;
};
