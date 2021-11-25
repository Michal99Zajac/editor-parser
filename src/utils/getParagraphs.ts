export function getParagraphs(content: string, divider = '\n'): string[] {
  return content
    .split(divider)
    .map((line) => '<p class="wParagraph">'.concat(line, '</p>'))
}

export default getParagraphs
