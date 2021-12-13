import { Strategy } from './types/strategy'
import parse from './parser'

export const toHTML = (code: string, strategy: Strategy = 'NONE'): string => {
  return parse(code, strategy)
}

export default toHTML
