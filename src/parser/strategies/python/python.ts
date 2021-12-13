import { StrategyFn } from '../../../types/strategy'
import pr from './rules'
import rgxReplace from '../../../utils/rgxReplace'

export const toPythonHTML: StrategyFn = (code: string) => {
  const result = rgxReplace(code, [
    // STRINGS
    {
      regex: pr.string.regex,
      replacer: (...args: any) => {
        const { str } = args[args.length - 1]

        if (str.charAt(0) === 'f') {
          const f = str.slice(0, 1)
          const content = str.slice(1)

          return `<span class="${pr.string.className.f}">${f}</span><span class="${pr.string.className.fstring}">${content}</span>`
        } else {
          return `<span class="${pr.string.className.string}">${str}</span>`
        }
      },
    },
    {
      regex: pr.fStringBrace.regex,
      replacer: (...args: any) => {
        const { brace } = args[args.length - 1]
        const start = brace.slice(0, 1)
        const end = brace.slice(brace.length - 1, brace.length)
        const content = brace.slice(1, brace.length - 1)

        return `<span class="${pr.fStringBrace.className.border}"><span class="${pr.fStringBrace.className.brace}">${start}</span>${content}<span class="${pr.fStringBrace.className.brace}">${end}</span></span>`
      },
    },
    // COMMENTS
    {
      regex: pr.comment.regex,
      replacer: `<span class="${pr.comment.className}">$<${pr.comment.var}></span>`,
    },
    // FLEX RULES
    {
      regex: pr.fromDeclaration.regex,
      replacer: `<span class="${pr.fromDeclaration.className}">$<${pr.fromDeclaration.var}></span>`,
    },
    {
      regex: pr.importDeclarration.regex,
      replacer: `<span class="${pr.importDeclarration.className}">$<${pr.importDeclarration.var}></span>`,
    },
    {
      regex: pr.chainStart.regex,
      replacer: `<span class="${pr.chainStart.className}">$<${pr.chainStart.var}></span>`,
    },
    {
      regex: pr.number.regex,
      replacer: `<span class="${pr.number.className}">$<${pr.number.var}></span>`,
    },
    {
      regex: pr.classDeclaration.regex,
      replacer: `<span class="${pr.classDeclaration.className}">$<${pr.classDeclaration.var}></span>`,
    },
    {
      regex: pr.decorator.regex,
      replacer: `<span class="${pr.decorator.className}">$<${pr.decorator.var}></span>`,
    },
    {
      // !important [above functionExecution]
      regex: pr.functionDeclaration.regex,
      replacer: `<span class="${pr.functionDeclaration.className}">$<${pr.functionDeclaration.var}></span>`,
    },
    {
      regex: pr.functionExecution.regex,
      replacer: `<span class="${pr.functionExecution.className}">$<${pr.functionExecution.var}></span>`,
    },
    {
      regex: pr.chainContinue.regex,
      replacer: `<span class="${pr.chainContinue.className}">$<${pr.chainContinue.var}></span>`,
    },
    // RESERVED
    {
      regex: pr.def.regex,
      replacer: `<span class="${pr.def.className}">$<${pr.def.var}></span>`,
    },
    {
      regex: pr.for.regex,
      replacer: `<span class="${pr.for.className}">$<${pr.for.var}></span>`,
    },
    {
      regex: pr.in.regex,
      replacer: `<span class="${pr.in.className}">$<${pr.in.var}></span>`,
    },
    {
      regex: pr.and.regex,
      replacer: `<span class="${pr.and.className}">$<${pr.and.var}></span>`,
    },
    {
      regex: pr.or.regex,
      replacer: `<span class="${pr.or.className}">$<${pr.or.var}></span>`,
    },
    {
      regex: pr.not.regex,
      replacer: `<span class="${pr.not.className}">$<${pr.not.var}></span>`,
    },
    {
      regex: pr.class.regex,
      replacer: `<span class="${pr.class.className}">$<${pr.class.var}></span>`,
    },
    {
      regex: pr.return.regex,
      replacer: `<span class="${pr.return.className}">$<${pr.return.var}></span>`,
    },
    {
      regex: pr.lambda.regex,
      replacer: `<span class="${pr.lambda.className}">$<${pr.lambda.var}></span>`,
    },
    {
      regex: pr.pass.regex,
      replacer: `<span class="${pr.pass.className}">$<${pr.pass.var}></span>`,
    },
    {
      regex: pr.try.regex,
      replacer: `<span class="${pr.try.className}">$<${pr.try.var}></span>`,
    },
    {
      regex: pr.false.regex,
      replacer: `<span class="${pr.false.className}">$<${pr.false.var}></span>`,
    },
    {
      regex: pr.none.regex,
      replacer: `<span class="${pr.none.className}">$<${pr.none.var}></span>`,
    },
    {
      regex: pr.true.regex,
      replacer: `<span class="${pr.true.className}">$<${pr.true.var}></span>`,
    },
    {
      regex: pr.as.regex,
      replacer: `<span class="${pr.as.className}">$<${pr.as.var}></span>`,
    },
    {
      regex: pr.assert.regex,
      replacer: `<span class="${pr.assert.className}">$<${pr.assert.var}></span>`,
    },
    {
      regex: pr.break.regex,
      replacer: `<span class="${pr.break.className}">$<${pr.break.var}></span>`,
    },
    {
      regex: pr.continue.regex,
      replacer: `<span class="${pr.continue.className}">$<${pr.continue.var}></span>`,
    },
    {
      regex: pr.del.regex,
      replacer: `<span class="${pr.del.className}">$<${pr.del.var}></span>`,
    },
    {
      regex: pr.elif.regex,
      replacer: `<span class="${pr.elif.className}">$<${pr.elif.var}></span>`,
    },
    {
      regex: pr.else.regex,
      replacer: `<span class="${pr.else.className}">$<${pr.else.var}></span>`,
    },
    {
      regex: pr.except.regex,
      replacer: `<span class="${pr.except.className}">$<${pr.except.var}></span>`,
    },
    {
      regex: pr.finally.regex,
      replacer: `<span class="${pr.finally.className}">$<${pr.finally.var}></span>`,
    },
    {
      regex: pr.from.regex,
      replacer: `<span class="${pr.from.className}">$<${pr.from.var}></span>`,
    },
    {
      regex: pr.global.regex,
      replacer: `<span class="${pr.global.className}">$<${pr.global.var}></span>`,
    },
    {
      regex: pr.if.regex,
      replacer: `<span class="${pr.if.className}">$<${pr.if.var}></span>`,
    },
    {
      regex: pr.is.regex,
      replacer: `<span class="${pr.is.className}">$<${pr.is.var}></span>`,
    },
    {
      regex: pr.raise.regex,
      replacer: `<span class="${pr.raise.className}">$<${pr.raise.var}></span>`,
    },
    {
      regex: pr.while.regex,
      replacer: `<span class="${pr.while.className}">$<${pr.while.var}></span>`,
    },
    {
      regex: pr.with.regex,
      replacer: `<span class="${pr.with.className}">$<${pr.with.var}></span>`,
    },
    {
      regex: pr.yield.regex,
      replacer: `<span class="${pr.yield.className}">$<${pr.yield.var}></span>`,
    },
    {
      regex: pr.import.regex,
      replacer: `<span class="${pr.import.className}">$<${pr.import.var}></span>`,
    },
    // VARIABLES
    {
      regex: pr.variable.regex,
      replacer: `<span class="${pr.variable.className}">$<${pr.variable.var}></span>`,
    },
  ])

  return `<pre>${result}</pre>`
}

export default toPythonHTML
