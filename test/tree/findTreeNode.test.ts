import { describe, expect, it } from 'vitest'
import findTreeNode from '../../src/playground/tree/findTreeNode'

describe('findTreeNode', () => {
  const tree = {
    id: 1,
    name: 'Parent',
    children: [
      {
        id: 2,
        name: 'Child 1',
        children: [],
      },
      {
        id: 3,
        name: 'Child 2',
        children: [
          {
            id: 4,
            name: 'Grandchild',
            children: [],
          },
        ],
      },
    ],
  }

  it('finds a node in a tree', () => {
    const result = findTreeNode(tree, 'id', 4)
    expect(result).toEqual({
      id: 4,
      name: 'Grandchild',
      children: [],
    })
  })

  it('return null if node is not found', () => {
    const result = findTreeNode(tree, 'id', 5)

    expect(result).toBeNull()
  })
})
