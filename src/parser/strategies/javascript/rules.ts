export const javascriptRules = {
  function: {
    name: 'function',
    className: 'red',
    regex: new RegExp(/(?<function>(?<!\w)function)(?!\w)/, 'g'),
    var: 'function',
  },
  doubleString: {
    name: 'double string',
    className: 'dstring',
    regex: new RegExp(/(?<dstr>"(.*?)")/, 'g'),
    var: 'dstr',
  },
  singleString: {
    name: 'single string',
    className: 'sstring',
    regex: new RegExp(/(?<sstr>'(.*?)')/, 'g'),
    var: 'sstr',
  },
  backticks: {
    name: 'backticks',
    className: 'backticks',
    regex: new RegExp(/(?<backticks>`(.*?)`)/, 'gs'),
    var: 'backticks',
  },
  brace: {
    name: 'brace inside',
    className: {
      out: 'brace',
      brace: 'purple',
    },
    regex: new RegExp(/(?<=`.*)(?<brace>\${.*})(?=.*`)/, 'g'),
    var: 'brace',
  },
  return: {
    name: 'return',
    className: 'purple',
    regex: new RegExp(/(?<return>(?<!\w)return(?!\w))/, 'g'),
    var: 'return',
  },
  number: {
    name: 'numbers',
    className: 'orange',
    regex: new RegExp(/(?<number>(?<!\w)\d+(?!\w))/, 'g'),
    var: 'number',
  },
  fos: {
    name: 'func or object start',
    className: 'yellow',
    regex: new RegExp(/(?<fos>(?<!\w+)\w+(?=(\.|\((\w+,?\s?)*\)\.)))/, 'gs'),
    var: 'fos',
  },
  dev: {
    name: 'words between dots',
    className: 'red',
    regex: new RegExp(/(?<dev>(?<=\.)\w+(?=[.(]))/, 'g'),
    var: 'dev',
  },
  funcVars: {
    name: 'variables inside function declaration',
    className: 'blue',
    regex: new RegExp(
      /(?<funcV>(?<=(function\s+\w+(\s+)?\((\s+)?(\w+,(\s+)?)*?|constructor\((\s+)?(\w+,(\s+)?)*?|(const|let|var)\s+\w+\s+=\s+\((\s+)?(\w+,(\s+)?)*?))\w+(?=((\s+)?.*\)\s+({|=>))))/,
      'gs'
    ),
    var: 'funcV',
  },
  variable: {
    name: 'vatiables declaration',
    className: 'orange',
    regex: new RegExp(/(?<variable>(?<=(const|var|let)\s+)\w+(?=\s+=))/, 'g'),
    var: 'variable',
  },
  let: {
    name: 'let',
    className: 'purple',
    regex: new RegExp(/(?<let>(?<!\w)let(?!\w))/, 'g'),
    var: 'let',
  },
  const: {
    name: 'const',
    className: 'purple',
    regex: new RegExp(/(?<const>(?<!\w)const(?!\w))/, 'g'),
    var: 'const',
  },
  var: {
    name: 'var',
    className: 'purple',
    regex: new RegExp(/(?<var>(?<!\w)var(?!\w))/, 'g'),
    var: 'var',
  },
  export: {
    name: 'export',
    className: 'purple',
    regex: new RegExp(/(?<export>(?<!\w)export(?!\w))/, 'g'),
    var: 'export',
  },
  import: {
    name: 'import',
    className: 'purple',
    regex: new RegExp(/(?<import>(?<!\w)import(?!\w))/, 'g'),
    var: 'import',
  },
  from: {
    name: 'from',
    className: 'purple',
    regex: new RegExp(/(?<from>(?<!\w)from(?!\w))/, 'g'),
    var: 'from',
  },
  class: {
    name: 'class',
    className: 'purple',
    regex: new RegExp(/(?<class>(?<!\w)class(?![\w=]))/, 'g'),
    var: 'class',
  },
  constructor: {
    name: 'constructor',
    className: 'purple',
    regex: new RegExp(/(?<constructor>(?<!\w)constructor(?=\())/, 'g'),
    var: 'constructor',
  },
  this: {
    name: 'this',
    className: 'blue',
    regex: new RegExp(/(?<this>(?<!\w)this(?!\w))/, 'g'),
    var: 'this',
  },
  other: {
    name: 'other',
    className: 'gray',
    regex: new RegExp(/(?<other>\w+(?![^<]*>|[^<>]*<\/))/, 'g'),
    var: 'other',
  },
  exec: {
    name: 'function execution',
    className: 'pink',
    regex: new RegExp(/(?<exec>\w+(?=\(.*\)))/, 'g'),
    var: 'exec',
  },
  new: {
    name: 'new',
    className: 'purple',
    regex: new RegExp(/(?<new>(?<!\w+)new(?!\w+))/, 'g'),
    var: 'new',
  },
  funcDeclaration: {
    name: 'function declaration',
    className: 'blue',
    regex: new RegExp(/(?<funcd>(?<=function.*)\w+(?=\())/, 'g'),
    var: 'funcd',
  },
}

export default javascriptRules
