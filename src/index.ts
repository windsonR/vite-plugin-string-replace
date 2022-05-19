import type {Plugin,} from 'vite'
import type {TransformResult} from 'rollup'

export type Option = {
  /**
   * RegExp need to be global
   * string will default to be global
   */
  search: RegExp | string,
  /**
   * use replace to replace the search result
   */
  replace: string,
  /**
   * if set fileName,search and replace will only occur in this file
   */
  fileName?: string,
}

export default (options: Array<Option> = []): Plugin => {
  return {
    name: 'vite-plugin-string-replace',
    async transform(code: string, id: string): Promise<TransformResult> {
      if (options.length === 0) {
        return code
      }
      let result = code
      options.forEach(option=>{
        const {search, replace, fileName} = option
        if (fileName && id.indexOf(fileName) <= 0) {
          return
        }
        if (search instanceof RegExp) {
          result = result.replace(search, replace)
        } else {
          result = result.replaceAll(search, replace)
        }
      })
      return result
    }
  }
}