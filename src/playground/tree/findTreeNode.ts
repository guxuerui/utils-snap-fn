/**
 * findTreeNode - A function that traverses an object tree to find a node that matches a given key and value.
 *
 * @param {Object} tree - The object tree to traverse.
 * @param {string} key - The key to look for within each node of the tree.
 * @param {string | number} value - The value to match against the key within each node of the tree.
 * @returns {Object | null} - The node that matches the key and value, or null if no match is found.
 */

export default function findTreeNode(tree: any, key: string, value: string | number): any {
  if (tree[key] === value)
    return tree

  if (tree.children && tree.children.length) {
    for (let i = 0; i < tree.children.length; i++) {
      const node = findTreeNode(tree.children[i], key, value)
      if (node !== null)
        return node
    }
  }
  return null
}
