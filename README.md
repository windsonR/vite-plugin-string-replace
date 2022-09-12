# vite-plugin-string-replace

[中文文档](./README_ZH-CN.md)

## how to use

1. install

   `yarn add vite-plugin-string-replace -D`

2. config `vite.config.ts`

```javascript
import StringReplace from 'vite-plugin-string-replace'

defineConfig({
    plugins: [
        StringReplace([
            {
                search: 'aaaaa', // search this string in content
                replace: 'bbbbb', // replace search string with this
            },
            {
                search: /a{5,}/g, // you can use RegEXP to search in content
                replace: 'bbbbb', // replace search string with this
            },
        ])
    ]
})
```
