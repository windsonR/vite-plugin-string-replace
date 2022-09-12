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
