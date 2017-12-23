// import { ITree, INode } from 'posthtml';

/**
 * @desc 生成 scopeId 的 posthtml 插件
 * @param tree - dom 树
 * @returns 加上 scopeId 的 dom 树
 */
export default (tree) => {
  tree.walk((node) => {
    if (node.hasOwnProperty('tag')) {
      node.attrs = Object.assign({}, node.attrs, {
        [tree.options.id]: true
      });
    }
    return node;
  });
};
