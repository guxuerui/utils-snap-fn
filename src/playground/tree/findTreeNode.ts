/**
 * findTreeNode - A function that traverses an object tree to find a node that matches a given key and value.
 *
 * @param tree - The object tree to traverse.
 * @param key - The key to look for within each node of the tree.
 * @param value - The value to match against the key within each node of the tree.
 * @returns The node that matches the key and value, or null if no match is found.
*/

type TreeNode<T, U> = {
  id: T
  name: U
  [key: string]: T | U | TreeNode<T, U>[]
  children: TreeNode<T, U>[]
}

export default function findTreeNode(tree: TreeNode<number, string>, key: string, value: string | number): TreeNode<number, string> | null {
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
