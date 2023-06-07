import { describe, expect, it } from 'vitest'
import findAllNode from '../../src/playground/tree/findAllNode'

describe('findAllNode', () => {
  const tree = {
    id: 1,
    name: 'Parent',
    type: 'folder',
    children: [
      {
        id: 2,
        name: 'Child 1',
        type: 'file',
        children: [],
      },
      {
        id: 3,
        name: 'Child 2',
        type: 'folder',
        children: [
          {
            id: 4,
            name: 'Grandchild',
            type: 'file',
            children: [],
          },
        ],
      },
    ],
  }

  it('find all objects that meet the criteria', () => {
    const result = findAllNode(tree, 'type', 'file')
    expect(result).toEqual([
      {
        id: 2,
        name: 'Child 1',
        type: 'file',
        children: [],
      },
      {
        id: 4,
        name: 'Grandchild',
        type: 'file',
        children: [],
      },
    ])
  })

  it('return an empty array if node is not found', () => {
    const result = findAllNode(tree, 'type', 'subfile')

    expect(result).toEqual([])
  })
})
