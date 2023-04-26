/**
 * Copies a string or number to the clipboard using the `navigator.clipboard.writeText()` method.
 * If a callback function is provided, it will be called after the data is successfully copied to the clipboard.
 * If an error occurs while attempting to copy the data, the error will be caught and logged to the console.
 *
 * @param data - Any thing to copy to the clipboard.
 * @param callback - An optional callback function to call after the data is copied to the clipboard.
 * @example
 * Copy a string to the clipboard
 * await copyToClipboard('Hello, world!')
 *
 * @example
 * Copy a number to the clipboard and log a message to the console after it is copied
 * await copyToClipboard(123, () => console.log('Number copied to clipboard!'))
 *
 * @throws If an error occurs while attempting to copy the data to the clipboard.
 */
export default function copyToClipboard(data: any, callback?: Function): Promise<void>;
