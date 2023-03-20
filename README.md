# utils-snap-fn

**Front-end tool function code snippets with full `typescript` support**

> Business development process, will often use `mobile judgment`, `browser type judgment`, `throttle function` and other common functions, in order to avoid the trouble of multiple copy and paste for different projects, here a unified package, and released to npm to improve development efficiency.
If you also have some common code, welcome to submit `pr` for this project.

## :building_construction: Install

### 1. npm

```bash
npm install utils-snap-fn -D
```

### 2. pnpm

```bash
pnpm add utils-snap-fn -D
```

## :anchor: Usage

### 1. on-demand import

```js
import { isMobile } from 'utils-snap-fn'

isMobile('13344445555') // true
```

### 2. full import

```js
import * as snapFn from 'utils-snap-fn'

snapFn.isMobile('18811112222') // true
snapFn.isMobile('28811112222') // false
```

## :package:  API DOC

### Regex

- [isMobile](https://github.com/guxuerui/utils-fn/blob/main/src/playground/isMobile.ts) -- judge if phone number
- [isSafari](https://github.com/guxuerui/utils-fn/blob/main/src/playground/isSafari.ts) -- judge if safari browser
