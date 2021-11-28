export function wrapPre(code: string[]): string {
  return '<pre class="pre">'.concat(code.join(' '), '</pre>')
}

export default wrapPre
