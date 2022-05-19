# vite-plugin-string-replace

## how to use

`yarn add vite-plugin-string-replace -D`
in `vite.config.ts`

`import StringReplace from 'vite-plugin-string-replace'`

`
defineConfig({
plugins: [
StringReplace([
{
search: 'aaaaa',
replace: 'bbbbb',
},
{
search: /a{5,}/g,
replace: 'bbbbb',
},
])
]
})
`