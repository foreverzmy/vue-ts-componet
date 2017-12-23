import * as postcss from 'postcss';

export default postcss.plugin('trim', opts => css => {
  css.walk(({
    type,
    raws
  }) => {
    if (type === 'rule' || type === 'atrule') {
      raws.before = raws.after = '\n'
    }
  })
})