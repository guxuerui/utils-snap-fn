# utils-snap-fn

**Front-end tool function code snippets with full `typescript` support**

> Business development process, will often use `mobile judgment`, `browser type judgment`, `throttle function` and other common functions, in order to avoid the trouble of multiple copy and paste for different projects, here a unified package, and released to npm to improve development efficiency.
If you also have some common code, welcome to submit `pr` for this project.

## :building_construction: Install

```bash
# npm
npm i utils-snap-fn -D

# yarn
yarn add utils-snap-fn -D

# pnpm
pnpm add utils-snap-fn -D
```

## :anchor: Usage

### 1. on-demand import

```js
import { isMobile } from 'utils-snap-fn'
```

### 2. full import

```js
import * as snapFn from 'utils-snap-fn'

// example
snapFn.isMobile('18811112222') // true
snapFn.isMobile('28811112222') // false
```

### 3. CDN

You can download the `utils-snap-fn.browser.js` file from the `lib` directory and use it directly.
It also supports CDN, so you can include it in your HTML file through the CDN link

```js
// <script src="./js/utils-snap-fn.browser.js"></script>

isMobile('13344445555') // true
```

### 4. CJS

You can download the `utils-snap-fn.cjs.js` file from the `lib` directory and use it directly.
It is designed to be used in a Node.js environment, so you can import it in your Node.js code

## :package:  API DOC

> The examples below assume the use of import on demand

### 1. Regex

- [isMobile](https://github.com/guxuerui/utils-fn/blob/main/src/playground/isMobile.ts) -- check if an phone number

```js
isMobile('13344445555') // true
isMobile('28811112222') // false
```

- [isSafari](https://github.com/guxuerui/utils-fn/blob/main/src/playground/isSafari.ts) -- check if is safari browser

```js
isSafari() // true or false
```

- [isEamil](https://github.com/guxuerui/utils-fn/blob/main/src/playground/isEmail.ts) -- Check if is an email address

```js
isEmail('123@gmail.com') // true
isEmail('123@.exm.com') // false
```

- [isIdCard](https://github.com/guxuerui/utils-fn/blob/main/src/playground/isIdCard.ts) -- Check if is an IdCard number

```js
isIdCard('13068219990814293X') // true
isIdCard('187329473298') // false
```

## LICENSE

[MIT](https://github.com/guxuerui/utils-fn/blob/main/LICENSE)
