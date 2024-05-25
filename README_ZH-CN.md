# vite-plugin-string-replace

## 使用方法

1. install

   `yarn add vite-plugin-string-replace -D`

2. 配置 `vite.config.ts`

```javascript
import StringReplace from 'vite-plugin-string-replace'

defineConfig({
  plugins: [
    StringReplace([
      {
        search: 'aaaaa', // 在所有文件内容中搜索这个字符串
        replace: 'bbbbb', // 然后使用这个字符串进行替换
      },
      {
        search: /a{5,}/g, // 也可以使用正则表达式来进行搜索
        replace: 'bbbbb', // 同样也会进行替换
      },
      {
        fileName: 'aaa.txt', // 如果设置了文件名,那么这条规则只会在这个文件中执行
        search: /a{5,}/g,
        replace: 'bbbbb',
      },
    ])
  ]
})
```

## 配置选项

### search

一个 `字符串` 或 `正则表达式`

`search` 配置表示你想要在某个文件中`搜索`的内容

如果 `search` 是 一个 `字符串`, 它就表明在文件中 `搜索全部`.

如果 `search` 是 一个 `正则表达式`, 它就表明在文件中 `搜索` (如果正则表达式包含`g`标识).

### replace

一个 `字符串`

`replace` 配置表示你想要在某个文件中将`搜索`的目标`替代为`的内容

### fileName <已废弃>

一个 `字符串` 或 `正则表达式`

`fileName` 配置表示在 `某个` 文件, 你想要 `搜索` 并且将其`替换`

如果 `fileName` 是 一个 `字符串`, 插件会将其转换为一个 `正则表达式`

如果 `fileName` 是 一个 `正则表达式`, 那么插件将会仅`替换`满足`正则表达式`条件的文件

### globPattern & globOptions

`1.1.3` 新增了 `globby` 支持, 同时也废弃了 `fileName` 配置

当你设置了`globPattern`,`fileName`选项会被忽略!

更多详情请查看 [globby](https://github.com/sindresorhus/globby?tab=readme-ov-file#patterns)的文档
