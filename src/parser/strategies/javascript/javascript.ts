import { StrategyFn } from '../../../types/strategy'
import jr from './rules'
import rgxReplace from '../../../utils/rgxReplace'

export const toJavascriptHTML: StrategyFn = (code: string) => {
  const result = rgxReplace(code, [
    {
      regex: jr.doubleString.regex,
      replacer: `<span class="${jr.doubleString.className}">$<${jr.doubleString.var}></span>`,
    },
    {
      regex: jr.singleString.regex,
      replacer: `<span class="${jr.singleString.className}">$<${jr.singleString.var}></span>`,
    },
    {
      regex: jr.backticks.regex,
      replacer: `<span class="${jr.backticks.className}">$<${jr.backticks.var}></span>`,
    },
    {
      regex: jr.funcVars.regex,
      replacer: `<span class="${jr.funcVars.className}">$<${jr.funcVars.var}></span>`,
    },
    {
      regex: jr.function.regex,
      replacer: `<span class="${jr.function.className}">$<${jr.function.var}></span>`,
    },
    {
      regex: jr.brace.regex,
      replacer: (...args: any) => {
        const { brace } = args[args.length - 1]
        const start = brace.slice(0, 2)
        const end = brace.slice(brace.length - 1, brace.length)
        const content = brace.slice(2, brace.length - 1)

        return `<span class="${jr.brace.className.out}"><span class="${jr.brace.className.brace}">${start}</span>${content}<span class="${jr.brace.className.brace}">${end}</span></span>`
      },
    },
    {
      regex: jr.number.regex,
      replacer: `<span class="${jr.number.className}">$<${jr.number.var}></span>`,
    },
    {
      regex: jr.new.regex,
      replacer: `<span class="${jr.new.className}">$<${jr.new.var}></span>`,
    },
    {
      regex: jr.this.regex,
      replacer: `<span class="${jr.this.className}">$<${jr.this.var}></span>`,
    },
    {
      regex: jr.dev.regex,
      replacer: `<span class="${jr.dev.className}">$<${jr.dev.var}></span>`,
    },
    {
      regex: jr.fos.regex,
      replacer: `<span class="${jr.fos.className}">$<${jr.fos.var}></span>`,
    },
    {
      regex: jr.variable.regex,
      replacer: `<span class="${jr.variable.className}">$<${jr.variable.var}></span>`,
    },
    {
      regex: jr.return.regex,
      replacer: `<span class="${jr.return.className}">$<${jr.return.var}></span>`,
    },
    {
      regex: jr.const.regex,
      replacer: `<span class="${jr.const.className}">$<${jr.const.var}></span>`,
    },
    {
      regex: jr.let.regex,
      replacer: `<span class="${jr.let.className}">$<${jr.let.var}></span>`,
    },
    {
      regex: jr.var.regex,
      replacer: `<span class="${jr.var.className}">$<${jr.var.var}></span>`,
    },
    {
      regex: jr.import.regex,
      replacer: `<span class="${jr.import.className}">$<${jr.import.var}></span>`,
    },
    {
      regex: jr.export.regex,
      replacer: `<span class="${jr.export.className}">$<${jr.export.var}></span>`,
    },
    {
      regex: jr.from.regex,
      replacer: `<span class="${jr.from.className}">$<${jr.from.var}></span>`,
    },
    {
      regex: jr.funcDeclaration.regex,
      replacer: `<span class="${jr.funcDeclaration.className}">$<${jr.funcDeclaration.var}></span>`,
    },
    {
      regex: jr.class.regex,
      replacer: `<span class="${jr.class.className}">$<${jr.class.var}></span>`,
    },
    {
      regex: jr.constructor.regex,
      replacer: `<span class="${jr.constructor.className}">$<${jr.constructor.var}></span>`,
    },
    {
      regex: jr.exec.regex,
      replacer: `<span class="${jr.exec.className}">$<${jr.exec.var}></span>`,
    },
    {
      regex: jr.other.regex,
      replacer: `<span class="${jr.other.className}">$<${jr.other.var}></span>`,
    },
  ])

  return result
}

export default toJavascriptHTML
