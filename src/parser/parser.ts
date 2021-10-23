import { Strategy } from '../types/strategy'
import {
  toBashHTML,
  toDefaultHTML,
  toJavascriptHTML,
  toPythonHTML,
} from './strategies'

export function parse(code: string, strategy: Strategy): string {
  switch (strategy) {
    case 'BASH':
      return toBashHTML(code)
    case 'JAVASCRIPT':
      return toJavascriptHTML(code)
    case 'PYTHON':
      return toPythonHTML(code)
    case 'NONE':
      return toDefaultHTML(code)
    default:
      return toDefaultHTML(code)
  }
}

export default parse
