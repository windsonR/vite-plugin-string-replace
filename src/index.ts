import type {Plugin,} from 'vite'
import MagicString from 'magic-string'
import {CACHED_REPLACE_OPTIONS, generateReplacementMap, Option, OptionWithName,} from './utils'

export default (options: Array<OptionWithName> = []): Plugin => {
  return {
    name: 'vite-plugin-string-replace',
    enforce: 'pre',
    async configResolved(){
      await generateReplacementMap(options)
    },
    async transform(code: string, id: string) {
      if (CACHED_REPLACE_OPTIONS.length() === 0) {
        return null
      }
      const ms = new MagicString(code)
      // 1. replace in specify file
      const replacementSpecifyFiles: Array<Option> = []
      const specifyFiles = CACHED_REPLACE_OPTIONS.files().filter(k => {
        return new RegExp(k).test(id);
      })
      specifyFiles.forEach(k => {
        replacementSpecifyFiles.push(...(CACHED_REPLACE_OPTIONS.get(k) ?? []))
      })
      // 2. replace in all(.*) file
      replacementSpecifyFiles.push(...CACHED_REPLACE_OPTIONS.defaultFile())
      // 3. do replace
      replacementSpecifyFiles.forEach(({ search, replace }) => {
        let regex = search as RegExp
        if (typeof search === 'string') {
          regex = new RegExp(search, 'g')
        }
        // replaceAll's 2nd parameter could be string or function!
        ms.replaceAll(regex,replace)
      })
      // if string has been changed, then return map, else return null
      if (ms.hasChanged()) {
        return {
          code: ms.toString(),
          map: ms.generateMap({
            file: id,
            includeContent: true,
          })
        }
      }
      return null
    }
  }
}
