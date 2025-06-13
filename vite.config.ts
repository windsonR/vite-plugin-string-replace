import { defineConfig } from 'vite'
import Replace from './src'

export default defineConfig({
  plugins: [
    Replace([
      {
        search: '#AAAAA#',
        replace: 'aaaaa',
        globPattern: '*/index.ts'
      },
      {
        search: '#BBBBB#',
        replace: 'bbbbb'
      },
      {
        search: '#ABCD#',
        // replace could be a function,
        replace: ( v,index,fullCode)=>{
          console.log(v,index, fullCode);
          return '测试 replace 函数';
        }
      },
      {
        search: '#CCCCC#',
        replace: 'ccccc',
        fileName: /index\.ts/
      },
      {
        search: '#DDDDD#',
        replace: 'ddddd',
        fileName: /index\.ts/
      },
      {
        search: '#EEEEE#',
        replace: 'eeeee',
        fileName: 'index.ts'
      },
      {
        search: '#FFFFF#',
        replace: 'fffff',
        fileName: /index1\.ts/
      },
    ])
  ],
  build: {
    sourcemap: true,
  }
})
