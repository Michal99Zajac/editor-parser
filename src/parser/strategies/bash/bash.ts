import { StrategyFn } from '../../../types/strategy'
import { rgxReplace } from '../../../utils/rgxReplace'
import br from './rules'

export const toBashHTML: StrategyFn = (code: string) => {
  const result = rgxReplace(code, [
    // STRINGS
    {
      regex: br.string.regex,
      replacer: `<span class="${br.string.className}">$<${br.string.var}></span>`,
    },
    // COMMENT
    {
      regex: br.comment.regex,
      replacer: `<span class="${br.comment.className}">$<${br.comment.var}></span>`,
    },
    // FLEX
    {
      regex: br.variable.regex,
      replacer: `<span class="${br.variable.className}">$<${br.variable.var}></span>`,
    },
    {
      regex: br.functionDeclaration.regex,
      replacer: `<span class="${br.functionDeclaration.className}">$<${br.functionDeclaration.var}></span>`,
    },
    {
      regex: br.forVariable.regex,
      replacer: `<span class="${br.forVariable.className}">$<${br.forVariable.var}></span>`,
    },
    {
      regex: br.variableExecution.regex,
      replacer: `<span class="${br.variableExecution.className}">$<${br.variableExecution.var}></span>`,
    },
    {
      regex: br.execution.regex,
      replacer: `<span class="${br.execution.className}">$<${br.execution.var}></span>`,
    },
    // RESERVED
    {
      regex: br.echo.regex,
      replacer: `<span class="${br.echo.className}">$<${br.echo.var}></span>`,
    },
    {
      regex: br.read.regex,
      replacer: `<span class="${br.read.className}">$<${br.read.var}></span>`,
    },
    {
      regex: br.if.regex,
      replacer: `<span class="${br.if.className}">$<${br.if.var}></span>`,
    },
    {
      regex: br.elif.regex,
      replacer: `<span class="${br.elif.className}">$<${br.elif.var}></span>`,
    },
    {
      regex: br.else.regex,
      replacer: `<span class="${br.else.className}">$<${br.else.var}></span>`,
    },
    {
      regex: br.then.regex,
      replacer: `<span class="${br.then.className}">$<${br.then.var}></span>`,
    },
    {
      regex: br.fi.regex,
      replacer: `<span class="${br.fi.className}">$<${br.fi.var}></span>`,
    },
    {
      regex: br.case.regex,
      replacer: `<span class="${br.case.className}">$<${br.case.var}></span>`,
    },
    {
      regex: br.in.regex,
      replacer: `<span class="${br.in.className}">$<${br.in.var}></span>`,
    },
    {
      regex: br.esac.regex,
      replacer: `<span class="${br.esac.className}">$<${br.esac.var}></span>`,
    },
    {
      regex: br.for.regex,
      replacer: `<span class="${br.for.className}">$<${br.for.var}></span>`,
    },
    {
      regex: br.do.regex,
      replacer: `<span class="${br.do.className}">$<${br.do.var}></span>`,
    },
    {
      regex: br.done.regex,
      replacer: `<span class="${br.done.className}">$<${br.done.var}></span>`,
    },
    {
      regex: br.while.regex,
      replacer: `<span class="${br.while.className}">$<${br.while.var}></span>`,
    },
    {
      regex: br.function.regex,
      replacer: `<span class="${br.function.className}">$<${br.function.var}></span>`,
    },
    // VARIABLE
    {
      regex: br.variableDeclaration.regex,
      replacer: `<span class="${br.variableDeclaration.className}">$<${br.variableDeclaration.var}></span>`,
    },
  ])

  return `<pre>${result}</pre>`
}

export default toBashHTML
