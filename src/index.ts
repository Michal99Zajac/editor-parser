import ReactHtmlParser from 'react-html-parser'

import { Strategy } from './types/strategy'
import parse from './parser'

export const toHTML = (code: string, strategy: Strategy = 'NONE'): string => {
  return parse(code, strategy)
}

export const toReactHTML = (code: string, strategy: Strategy = 'NONE') => {
  return ReactHtmlParser(parse(code, strategy))
}

export default toHTML
