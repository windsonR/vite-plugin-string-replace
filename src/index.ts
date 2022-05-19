import type {Plugin,} from 'vite'
import type {TransformResult} from 'rollup'

export type Option = {
  /**
   * RegExp need to be global
   * string will default to be global
   */
  search: RegExp | string,
  replace: string,
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
        const {search, replace} = option
        if (search instanceof RegExp) {
          result = result.replace(search, replace)
        } else {
          result = result.replaceAll(search, replace)
        }
      })
      return code
    }
  }
}