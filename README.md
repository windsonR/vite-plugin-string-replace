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
           {
              fileName: 'aaa.txt', // if fileName set, this rule will only execute in this file.
              search: /a{5,}/g,
              replace: 'bbbbb',
           },
        ])
    ]
})
```

## Options

### search

A `string` or `RegExp` 

`search` option means that the specify content in files that you want to `SEARCH`

If `search` is a `string`, it means `SEARCH ALL` in file.

If `search` is a `RegExp`, it means `SEARCH` (ALL when it has `g` flag) in file.

### replace

A `string`

`replace` option means that the `SEARCH` result `REPLACE WITH` this option's config.

### fileName <deprecated>

A `string` or `RegExp`

`fileName` option means that in `WHICH` file, you want to `SEARCH` and `REPLACE WITH`

If `fileName` is a `string`, plugin will transform it into a `RegExp`

If `fileName` is a `RegExp`, it will only match the file which can match the `RegExp`

### globPattern & globOptions

`1.1.3` add `globby` support, and deprecated fileName options

When `globPattern` has been set, `fileName` will be ignored!

more usage and options, please see [globby](https://github.com/sindresorhus/globby?tab=readme-ov-file#patterns)
