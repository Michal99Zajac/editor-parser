import { StrategyFn } from '../../../types/strategy'
import jr, { reservedWords } from './rules'
import rgxReplace from '../../../utils/rgxReplace'

export const toJavascriptHTML: StrategyFn = (code: string) => {
  const result = rgxReplace(code, [
    // STRINGS
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
      regex: jr.backticksBrace.regex,
      replacer: (...args: any) => {
        const { brace } = args[args.length - 1]
        const start = brace.slice(0, 2)
        const end = brace.slice(brace.length - 1, brace.length)
        const content = brace.slice(2, brace.length - 1)

        return `<span class="${jr.backticksBrace.className.border}"><span class="${jr.backticksBrace.className.brace}">${start}</span>${content}<span class="${jr.backticksBrace.className.brace}">${end}</span></span>`
      },
    },
    // COMMENTS
    {
      regex: jr.commentMultiline.regex,
      replacer: `<span class="${jr.commentMultiline.className}">$<${jr.commentMultiline.var}></span>`,
    },
    {
      regex: jr.commentSlash.regex,
      replacer: `<span class="${jr.commentSlash.className}">$<${jr.commentSlash.var}></span>`,
    },
    // FLEX
    {
      regex: jr.importDeclaration.regex,
      replacer: (...args: any) => {
        const { id } = args[args.length - 1]

        return id === 'as'
          ? id
          : `<span class="${jr.importDeclaration.className}">${id}</span>`
      },
    },
    {
      regex: jr.chainStart.regex,
      replacer: `<span class="${jr.chainStart.className}">$<${jr.chainStart.var}></span>`,
    },
    {
      // !important [above functionExecution]
      regex: jr.functionDeclaration.regex,
      replacer: `<span class="${jr.functionDeclaration.className}">$<${jr.functionDeclaration.var}></span>`,
    },
    {
      regex: jr.functionExecution.regex,
      replacer: (...args: any) => {
        const { fe } = args[args.length - 1]

        return reservedWords.includes(fe)
          ? fe
          : `<span class="${jr.functionExecution.className}">${fe}</span>`
      },
    },
    {
      regex: jr.chainContinue.regex,
      replacer: `<span class="${jr.chainContinue.className}">$<${jr.chainContinue.var}></span>`,
    },
    {
      regex: jr.numbers.regex,
      replacer: `<span class="${jr.numbers.className}">$<${jr.numbers.var}></span>`,
    },
    // RESERVED
    {
      regex: jr.break.regex,
      replacer: `<span class="${jr.break.className}">$<${jr.break.var}></span>`,
    },
    {
      regex: jr.debugger.regex,
      replacer: `<span class="${jr.debugger.className}">$<${jr.debugger.var}></span>`,
    },
    {
      regex: jr.export.regex,
      replacer: `<span class="${jr.export.className}">$<${jr.export.var}></span>`,
    },
    {
      regex: jr.finally.regex,
      replacer: `<span class="${jr.finally.className}">$<${jr.finally.var}></span>`,
    },
    {
      regex: jr.in.regex,
      replacer: `<span class="${jr.in.className}">$<${jr.in.var}></span>`,
    },
    {
      regex: jr.let.regex,
      replacer: `<span class="${jr.let.className}">$<${jr.let.var}></span>`,
    },
    {
      regex: jr.null.regex,
      replacer: `<span class="${jr.null.className}">$<${jr.null.var}></span>`,
    },
    {
      regex: jr.public.regex,
      replacer: `<span class="${jr.public.className}">$<${jr.public.var}></span>`,
    },
    {
      regex: jr.super.regex,
      replacer: `<span class="${jr.super.className}">$<${jr.super.var}></span>`,
    },
    {
      regex: jr.throw.regex,
      replacer: `<span class="${jr.throw.className}">$<${jr.throw.var}></span>`,
    },
    {
      regex: jr.try.regex,
      replacer: `<span class="${jr.try.className}">$<${jr.try.var}></span>`,
    },
    {
      regex: jr.arguments.regex,
      replacer: `<span class="${jr.arguments.className}">$<${jr.arguments.var}></span>`,
    },
    {
      regex: jr.class.regex,
      replacer: `<span class="${jr.class.className}">$<${jr.class.var}></span>`,
    },
    {
      regex: jr.default.regex,
      replacer: `<span class="${jr.default.className}">$<${jr.default.var}></span>`,
    },
    {
      regex: jr.else.regex,
      replacer: `<span class="${jr.else.className}">$<${jr.else.var}></span>`,
    },
    {
      regex: jr.extends.regex,
      replacer: `<span class="${jr.extends.className}">$<${jr.extends.var}></span>`,
    },
    {
      regex: jr.if.regex,
      replacer: `<span class="${jr.if.className}">$<${jr.if.var}></span>`,
    },
    {
      regex: jr.return.regex,
      replacer: `<span class="${jr.return.className}">$<${jr.return.var}></span>`,
    },
    {
      regex: jr.switch.regex,
      replacer: `<span class="${jr.switch.className}">$<${jr.switch.var}></span>`,
    },
    {
      regex: jr.typeof.regex,
      replacer: `<span class="${jr.typeof.className}">$<${jr.typeof.var}></span>`,
    },
    {
      regex: jr.while.regex,
      replacer: `<span class="${jr.while.className}">$<${jr.while.var}></span>`,
    },
    {
      regex: jr.await.regex,
      replacer: `<span class="${jr.await.className}">$<${jr.await.var}></span>`,
    },
    {
      regex: jr.case.regex,
      replacer: `<span class="${jr.case.className}">$<${jr.case.var}></span>`,
    },
    {
      regex: jr.const.regex,
      replacer: `<span class="${jr.const.className}">$<${jr.const.var}></span>`,
    },
    {
      regex: jr.delete.regex,
      replacer: `<span class="${jr.delete.className}">$<${jr.delete.var}></span>`,
    },
    {
      regex: jr.false.regex,
      replacer: `<span class="${jr.false.className}">$<${jr.false.var}></span>`,
    },
    {
      regex: jr.for.regex,
      replacer: `<span class="${jr.for.className}">$<${jr.for.var}></span>`,
    },
    {
      regex: jr.implements.regex,
      replacer: `<span class="${jr.implements.className}">$<${jr.implements.var}></span>`,
    },
    {
      regex: jr.private.regex,
      replacer: `<span class="${jr.private.className}">$<${jr.private.var}></span>`,
    },
    {
      regex: jr.var.regex,
      replacer: `<span class="${jr.var.className}">$<${jr.var.var}></span>`,
    },
    {
      regex: jr.with.regex,
      replacer: `<span class="${jr.with.className}">$<${jr.with.var}></span>`,
    },
    {
      regex: jr.boolean.regex,
      replacer: `<span class="${jr.boolean.className}">$<${jr.boolean.var}></span>`,
    },
    {
      regex: jr.catch.regex,
      replacer: `<span class="${jr.catch.className}">$<${jr.catch.var}></span>`,
    },
    {
      regex: jr.continue.regex,
      replacer: `<span class="${jr.continue.className}">$<${jr.continue.var}></span>`,
    },
    {
      regex: jr.do.regex,
      replacer: `<span class="${jr.do.className}">$<${jr.do.var}></span>`,
    },
    {
      regex: jr.function.regex,
      replacer: `<span class="${jr.function.className}">$<${jr.function.var}></span>`,
    },
    {
      regex: jr.import.regex,
      replacer: `<span class="${jr.import.className}">$<${jr.import.var}></span>`,
    },
    {
      regex: jr.interface.regex,
      replacer: `<span class="${jr.interface.className}">$<${jr.interface.var}></span>`,
    },
    {
      regex: jr.new.regex,
      replacer: `<span class="${jr.new.className}">$<${jr.new.var}></span>`,
    },
    {
      regex: jr.protected.regex,
      replacer: `<span class="${jr.protected.className}">$<${jr.protected.var}></span>`,
    },
    {
      regex: jr.static.regex,
      replacer: `<span class="${jr.static.className}">$<${jr.static.var}></span>`,
    },
    {
      regex: jr.this.regex,
      replacer: `<span class="${jr.this.className}">$<${jr.this.var}></span>`,
    },
    {
      regex: jr.true.regex,
      replacer: `<span class="${jr.true.className}">$<${jr.true.var}></span>`,
    },
    {
      regex: jr.void.regex,
      replacer: `<span class="${jr.void.className}">$<${jr.void.var}></span>`,
    },
    {
      regex: jr.as.regex,
      replacer: `<span class="${jr.as.className}">$<${jr.as.var}></span>`,
    },
    {
      regex: jr.from.regex,
      replacer: `<span class="${jr.from.className}">$<${jr.from.var}></span>`,
    },
    // OTHER
    {
      regex: jr.other.regex,
      replacer: `<span class="${jr.other.className}">$<${jr.other.var}></span>`,
    },
  ])

  return `<pre>${result}</pre>`
}

export default toJavascriptHTML
