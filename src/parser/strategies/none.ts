import { StrategyFn } from '../../types/strategy'

export const toDefaultHTML: StrategyFn = (code: string) => {
  return '<p>DEFAULT STRATEGY</p>'
}

export default toDefaultHTML
