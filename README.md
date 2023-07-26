# utils-snap-fn

> Collect some common utility functions for use in work. If you also have some common code, welcome to submit `pr` for this project.

**Front-end tool function code snippets with full `typescript` support**. If you are using `TS` too, you can use these in `Vue`, `Svelte`, `React` files, try it!

## :building_construction: Install

```bash
# npm
npm i utils-snap-fn -D

# yarn
yarn add utils-snap-fn -D

# pnpm
pnpm add utils-snap-fn -D
```

## :anchor: Usage Example

### 1. On-demand Import

```js
import { isPhoneNum } from 'utils-snap-fn'
```

### 2. Full Import

```js
import * as snapFn from 'utils-snap-fn'

// example
snapFn.isPhoneNum('18811112222') // true
snapFn.isPhoneNum('28811112222') // false
```

### 3. CDN

You can download the `utils-snap-fn.browser.js` file from the `lib` directory and use it directly.
It also supports CDN, so you can include it in your HTML file through the CDN link

```js
// <script src="./js/utils-snap-fn.browser.js"></script>

isPhoneNum('13344445555') // true
```

### 4. CJS

You can download the `utils-snap-fn.cjs.js` file from the `lib` directory and use it directly.
It is designed to be used in a Node.js environment, so you can import it in your Node.js code

## :package:  API DOC

> The examples below assume the use of import on demand

### 1. Regex

- [isPhoneNum](https://github.com/guxuerui/utils-fn/blob/main/src/playground/regexp/isPhoneNum.ts) -- check if an phone number

```js
isPhoneNum('13344445555') // true
isPhoneNum('28811112222') // false
```

- [isSafari](https://github.com/guxuerui/utils-fn/blob/main/src/playground/regexp/isSafari.ts) -- check if is safari browser

```js
isSafari() // true or false
```

- [isMobile](https://github.com/guxuerui/utils-fn/blob/main/src/playground/regexp/isMobile.ts) -- check if is Mobile device

```js
isMobile() // true or false
```

- [isEmail](https://github.com/guxuerui/utils-fn/blob/main/src/playground/regexp/isEmail.ts) -- Check if is an email address

```js
isEmail('123@gmail.com') // true
isEmail('123@.exm.com') // false
```

- [isIdCard](https://github.com/guxuerui/utils-fn/blob/main/src/playground/regexp/isIdCard.ts) -- Check if is an IdCard number

```js
isIdCard('13068219990814293X') // true
isIdCard('187329473298') // false
```

- [isIpv4](https://github.com/guxuerui/utils-fn/blob/main/src/playground/regexp/isIpv4.ts) -- Check if is an IPV4 address

```js
isIpv4('192.168.1.1') // true
isIpv4('19.256.3.2') // false
```

- [isIpv6](https://github.com/guxuerui/utils-fn/blob/main/src/playground/regexp/isIpv6.ts) -- Check if is an IPV6 address

```js
isIpv6('2001:0db8::1:0:0:1') // true
isIpv6('2001:0db8:85a3::8a2e:03707334') // false
```

- [isValidUUID](https://github.com/guxuerui/utils-fn/blob/main/src/playground/regexp/isValidUUID.ts) -- Check if is an valid UUID

```js
isValidUUID(generateUUID()) // true
```

### 2. Array

- [isArrayEqual](https://github.com/guxuerui/utils-fn/blob/main/src/playground/array/isArrayEqual.ts) -- Check if two arrays are equal

```js
isArrayEqual([1, 2, 3], [1, 2, 3]) // true
isArrayEqual([1, 2, 3], [1, 2, 3, 4]) // false
```

- [removeDuplicatesObj](https://github.com/guxuerui/utils-fn/blob/main/src/playground/array/removeDuplicatesObj.ts) -- Remove duplicate objects

```js
const arr = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Bob' },
  { id: 5, name: 'Jane' },
]

const actual = removeDuplicatesObj(arr, 'name')
/*
output:

[
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 4, name: 'Bob' },
]
*/
```

### 3. Random

- [generateUUID](https://github.com/guxuerui/utils-fn/blob/main/src/playground/random/randomUUID.ts) -- Generate random UUID

```js
generateUUID() // random UUID
```

- [randomNum](https://github.com/guxuerui/utils-fn/blob/main/src/playground/random/randomNum.ts) -- Generate random number

```js
randomNum(11, 800) // random number
```

- [randomColor](https://github.com/guxuerui/utils-fn/blob/main/src/playground/random/randomColor.ts) -- Generate random hex color or rgba color

```js
randomColor('hex') // random hex color, example: #f31a34

randomColor('rgb', 0.5) // random rgba color, example: rgba(31, 55, 78, 0.5)

randomColor('rgb') // random rgba color, example: rgba(31, 55, 78, 1)
```

### 4. String

- [capitalsFirstLetter](https://github.com/guxuerui/utils-fn/blob/main/src/playground/string/capitalsFirstLetter.ts) -- Capitals first letter

```js
capitalsFirstLetter('hello') // Hello
```

### 5. Tree

- [findTreeNode](https://github.com/guxuerui/utils-fn/blob/main/src/playground/tree/findTreeNode.ts) -- Find a tree node

```js
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

const result = findTreeNode(tree, 'id', 4)
/*
output:

{
  id: 4,
  name: 'Grandchild',
  children: [],
}
*/
```

- [findAllNode](https://github.com/guxuerui/utils-fn/blob/main/src/playground/tree/findAllNode.ts) -- Find all objects that meet the criteria, and return an array

```js
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

const result = findAllNode(tree, 'type', 'file')
/*
output:

[
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
  }
]
*/
```

### 6. Dom

- [getScrollTop](https://github.com/guxuerui/utils-fn/blob/main/src/playground/dom/getScrollTop.ts) -- Get document scrollTop value

```js
const scrollTopVal = getScrollTop()
```

- [setScrollTop](https://github.com/guxuerui/utils-fn/blob/main/src/playground/dom/setScrollTop.ts) -- Set document scrollTop value

```js
setScrollTop(0)
```

- [scrollTo](https://github.com/guxuerui/utils-fn/blob/main/src/playground/dom/scrollTo.ts) -- Scroll to document top

```js
scrollTo(0, 1)
```

> Continuously updating...

## LICENSE

[MIT](https://github.com/guxuerui/utils-snap-fn/blob/main/LICENSE)
