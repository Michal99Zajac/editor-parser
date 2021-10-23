export type Strategy = 'PYTHON' | 'JAVASCRIPT' | 'BASH' | 'NONE'
export type StrategyFn = (code: string) => string
