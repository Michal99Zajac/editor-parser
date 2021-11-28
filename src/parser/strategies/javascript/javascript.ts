import { StrategyFn } from '../../../types/strategy'

export const toJavascriptHTML: StrategyFn = (code: string) => {
  let result = code

  const fun = new RegExp(/(?<fun>function)/, 'g')
  const str = new RegExp(/(?<str>'.*'|".*"|`.*`)/, 'g')
  const inbrace = new RegExp(/(?<inbrace>\${.*})/, 'g')
  const re = new RegExp(/(?<re>return)/, 'g')
  const num = new RegExp(/(?<num>\d)/, 'g')

  result = result.replace(str, '<span class="str green">$<str></span>')
  result = result.replace(fun, '<span class="red">$<fun></span>')
  result = result.replace(inbrace, (...args) => {
    const { inbrace } = args[args.length - 1]
    const start = inbrace.slice(0, 2)
    const end = inbrace.slice(inbrace.length - 1, inbrace.length)
    const content = inbrace.slice(2, inbrace.length - 1)

    return `<span class="brace"><span class="purple">${start}</span>${content}<span class="purple">${end}</span></span>`
  })
  result = result.replace(re, '<span class="purple">$<re></span>')
  result = result.replace(num, '<span class="orange">$<num></span>')

  return result
}

export default toJavascriptHTML
