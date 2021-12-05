type rgxModel = {
  regex: RegExp
  replacer: any
}

export function rgxReplace(content: string, rules: rgxModel[]): string {
  let result = content

  rules.forEach((r) => {
    result = result.replace(r.regex, r.replacer)
  })

  return result
}

export default rgxReplace
