import { defineConfig } from 'vite'
import Replace from './src'

export default defineConfig({
  plugins: [
    Replace([
      {
        search: '#AAAAA#',
        replace: 'aaaaa'
      },
      {
        search: '#BBBBB#',
        replace: 'bbbbb'
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
      }
    ])
  ],
  build: {
    sourcemap: true,
  }
})
