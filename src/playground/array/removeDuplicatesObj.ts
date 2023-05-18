/**
 * Removes duplicate objects from an array based on a specified key.
 * @param arr The array of objects to remove duplicates from.
 * @param key The key to use as the basis for removing duplicates.
 * @returns An array of unique objects based on the specified key.
 */

export default function removeDuplicatesObj(arr: any[], key: string): any[] {
  if (arr === null || arr === undefined)
    return []

  if (arr && arr.length <= 1)
    return arr

  return arr.filter((obj, index, self) =>
    index === self.findIndex(t => t[key] === obj[key]),
  )
}
