import { StrategyFn } from '../../../types/strategy'
import { rgxReplace } from '../../../utils/rgxReplace'
import br from './rules'

export const toBashHTML: StrategyFn = (code: string) => {
  const result = rgxReplace(code, [])

  return `<pre>${result}</pre>`
}

export default toBashHTML
