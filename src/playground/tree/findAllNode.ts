/**
 * Finds all nodes in a tree that contain the given key-value pair.
 *
 * @param tree - the tree to search through
 * @param key - the key to look for in each node
 * @param value - the value to match with the key in each node
 * @returns an array containing all nodes that match the given key-value pair
 */

export default function findAllNode(tree: any, key: string, value: string | number): any[] {
  const result: any[] = []

  if (tree[key] === value)
    result.push(tree)

  if (tree.children && tree.children.length) {
    for (let i = 0; i < tree.children.length; i++) {
      const node = findAllNode(tree.children[i], key, value)
      if (node !== null)
        result.push(node)
    }
  }
  return [...new Set(result.flat(Infinity))]
}
