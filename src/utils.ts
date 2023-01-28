export const DEFAULT_FILE_NAME = /.*/.source

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
}

export type OptionWithName = Option & {
  /**
   * if set fileName,search and replace will only occur in this file
   */
  fileName?: string| RegExp,
}
export class ReplacementMap{
  // @ts-ignore
  private CACHE: Record<string, Array<Option>> = {}
  
  has(k: string){
    return (k in this.CACHE)
  }
  set(k:string, v: Option){
    if (this.has(k)) {
      this.CACHE[k] = [
        ...this.CACHE[k],
        v,
      ]
    } else {
      this.CACHE[k] = [
        v,
      ]
    }
  }
  get(k: string):Array<Option>|undefined{
    if (this.has(k)) {
      return this.CACHE[k]
    }
    return undefined
  }
  defaultFile(): Array<Option>{
    if (this.has(DEFAULT_FILE_NAME)) {
      return this.CACHE[DEFAULT_FILE_NAME]
    }
    return []
  }
  files(){
    return Object.keys(this.CACHE).filter(k=>k!==DEFAULT_FILE_NAME)
  }
  length() {
    return Object.keys(this.CACHE).length
  }
}
export const CACHED_REPLACE_OPTIONS = new ReplacementMap()

export function generateReplacementMap(options: Array<OptionWithName>){
  options.forEach(({search, replace, fileName})=>{
    // if fileName not set or is undefined
    if (fileName === undefined) {
      CACHED_REPLACE_OPTIONS.set(DEFAULT_FILE_NAME, {
        search,
        replace,
      })
    }
    // if fileName is string
    if (typeof fileName === 'string'){
      CACHED_REPLACE_OPTIONS.set(fileName, {
        search,
        replace,
      })
    }
    // if fileName is regex
    if (fileName instanceof RegExp){
      CACHED_REPLACE_OPTIONS.set(fileName.source, {
        search,
        replace,
      })
    }
    // else drop it
  })
}
