# utils-snap-fn

**Front-end tools function snap code**

> Goal: Efficient completion of functional code development

Business development process, will often use `date formatting`, `browser type judgment`, `throttle function` and other common functions, in order to avoid the trouble of multiple copy and paste for different projects, here a unified package, and released to npm to improve development efficiency.

If you also have a common code, welcome to submit pr for this project.

## :building_construction: install and usage

### 1. npm

```bash
npm install utils-snap-fn -D
```

```js
// on-demand introduction
import { isMobile } from 'utils-snap-fn'

isMobile('13344445555') // true
```

## :package:  API DOC

### Phone

- [isMobile](https://github.com/guxuerui/utils-fn/blob/main/src/playground/index.ts) -- judge if phone number
