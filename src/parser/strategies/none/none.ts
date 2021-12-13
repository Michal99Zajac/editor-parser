import { StrategyFn } from '../../../types/strategy'

export const toDefaultHTML: StrategyFn = (code: string) => {
  return `<pre>${code}</pre>`
}

export default toDefaultHTML
