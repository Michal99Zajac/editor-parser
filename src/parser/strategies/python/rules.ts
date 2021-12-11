export const pythonRules = {
  // STRINGS
  string: {
    // fstring, doubleString, singleString
    name: 'fstring',
    className: {
      string: 'string',
      f: 'purple',
      fstring: 'fstring',
    },
    regex: new RegExp(/(?<str>f?"(.*?)"|f?'(.*?)')/, 'g'),
    var: 'str',
  },
  fStringBrace: {
    name: 'fstring braces',
    className: {
      brace: 'purple',
      border: 'brace',
    },
    regex: new RegExp(
      /(?<brace>(?<=<span class="fstring">["'][\w\s\W]*){(.*?)}(?=[\w\s\W]*["']<\/span>))/,
      'g'
    ),
    var: 'brace',
  },
  // COMMENTS
  comment: {
    name: 'comment',
    className: 'comment',
    regex: new RegExp(/(?<comment>#.*)/, 'g'),
    var: 'comment',
  },
  // RESERVED
  def: {
    name: 'def',
    className: 'purple',
    regex: new RegExp(/(?<def>(?<=^|\s)def(?=$|\s))/, 'g'),
    var: 'def',
  },
  for: {
    name: 'for',
    className: 'purple',
    regex: new RegExp(/(?<for>(?<=^|\s)for(?=$|\s))/, 'g'),
    var: 'for',
  },
  in: {
    name: 'in',
    className: 'purple',
    regex: new RegExp(/(?<in>(?<=^|\s)in(?=$|\s|:))/, 'g'),
    var: 'in',
  },
  and: {
    name: 'and',
    className: 'purple',
    regex: new RegExp(/(?<and>(?<=^|\s)and(?=$|\s))/, 'g'),
    var: 'and',
  },
  or: {
    name: 'or',
    className: 'purple',
    regex: new RegExp(/(?<or>(?<=^|\s)or(?=$|\s))/, 'g'),
    var: 'or',
  },
  not: {
    name: 'not',
    className: 'purple',
    regex: new RegExp(/(?<not>(?<=^|\s)not(?=$|\s))/, 'g'),
    var: 'not',
  },
  class: {
    name: 'class',
    className: 'purple',
    regex: new RegExp(/(?<class>(?<=^|\s)class(?=$|\s))/, 'g'),
    var: 'class',
  },
  return: {
    name: 'return',
    className: 'purple',
    regex: new RegExp(/(?<return>(?<=^|\s)return(?=$|\s))/, 'g'),
    var: 'return',
  },
  lambda: {
    name: 'lambda',
    className: 'purple',
    regex: new RegExp(/(?<lambda>(?<=^|\s)lambda(?=$|[\s:]))/, 'g'),
    var: 'lambda',
  },
  pass: {
    name: 'pass',
    className: 'purple',
    regex: new RegExp(/(?<pass>(?<=^|\s)pass(?=$|\s))/, 'g'),
    var: 'pass',
  },
  try: {
    name: 'try',
    className: 'purple',
    regex: new RegExp(/(?<try>(?<=^|\s)try(?=$|\s|:))/, 'g'),
    var: 'try',
  },
  false: {
    name: 'false',
    className: 'purple',
    regex: new RegExp(/(?<false>(?<=^|[\W\s])False(?=$|[\W\s]))/, 'g'),
    var: 'false',
  },
  none: {
    name: 'none',
    className: 'purple',
    regex: new RegExp(/(?<none>(?<=^|[\s\W])None(?=$|[\W\s]))/, 'g'),
    var: 'none',
  },
  true: {
    name: 'true',
    className: 'yellow',
    regex: new RegExp(/(?<true>(?<=^|[\s\W])True(?=$|[\s\W]))/, 'g'),
    var: 'true',
  },
  as: {
    name: 'as',
    className: 'purple',
    regex: new RegExp(/(?<as>(?<=^|\s)as(?=$|\s))/, 'g'),
    var: 'as',
  },
  assert: {
    name: 'assert',
    className: 'purple',
    regex: new RegExp(/(?<assert>(?<=^|\s)assert(?=$|\s))/, 'g'),
    var: 'assert',
  },
  break: {
    name: 'break',
    className: 'purple',
    regex: new RegExp(/(?<break>(?<=^|\s)break(?=$|\s))/, 'g'),
    var: 'break',
  },
  continue: {
    name: 'continue',
    className: 'purple',
    regex: new RegExp(/(?<continue>(?<=^|\s)continue(?=$|\s))/, 'g'),
    var: 'continue',
  },
  del: {
    name: 'del',
    className: 'purple',
    regex: new RegExp(/(?<del>(?<=^|\s)del(?=$|\s))/, 'g'),
    var: 'del',
  },
  elif: {
    name: 'elif',
    className: 'purple',
    regex: new RegExp(/(?<elif>(?<=^|\s)elif(?=$|\s))/, 'g'),
    var: 'elif',
  },
  else: {
    name: 'else',
    className: 'purple',
    regex: new RegExp(/(?<else>(?<=^|\s)else(?=$|\s))/, 'g'),
    var: 'else',
  },
  except: {
    name: 'except',
    className: 'purple',
    regex: new RegExp(/(?<except>(?<=^|\s)except(?=$|\s))/, 'g'),
    var: 'except',
  },
  finally: {
    name: 'finally',
    className: 'purple',
    regex: new RegExp(/(?<finally>(?<=^|\s)finally(?=$|\s|:))/, 'g'),
    var: 'finally',
  },
  from: {
    name: 'from',
    className: 'purple',
    regex: new RegExp(/(?<from>(?<=^|\s)from(?=$|\s))/, 'g'),
    var: 'from',
  },
  global: {
    name: 'global',
    className: 'purple',
    regex: new RegExp(/(?<global>(?<=^|\s)global(?=$|\s))/, 'g'),
    var: 'global',
  },
  if: {
    name: 'if',
    className: 'purple',
    regex: new RegExp(/(?<if>(?<=^|\s)if(?=$|\s))/, 'g'),
    var: 'if',
  },
  is: {
    name: 'is',
    className: 'purple',
    regex: new RegExp(/(?<is>(?<=^|\s)is(?=$|\s))/, 'g'),
    var: 'is',
  },
  raise: {
    name: 'raise',
    className: 'purple',
    regex: new RegExp(/(?<raise>(?<=^|\s)raise(?=$|\s))/, 'g'),
    var: 'raise',
  },
  while: {
    name: 'while',
    className: 'purple',
    regex: new RegExp(/(?<while>(?<=^|\s)while(?=$|\s))/, 'g'),
    var: 'while',
  },
  with: {
    name: 'with',
    className: 'purple',
    regex: new RegExp(/(?<with>(?<=^|\s)with(?=$|\s))/, 'g'),
    var: 'with',
  },
  yield: {
    name: 'yield',
    className: 'purple',
    regex: new RegExp(/(?<yield>(?<=^|\s)yield(?=$|\s))/, 'g'),
    var: 'yield',
  },
  import: {
    name: 'import',
    className: 'purple',
    regex: new RegExp(/(?<import>(?<=^|\s)import(?=$|\s))/, 'g'),
    var: 'import',
  },
  // FLEX
  functionDeclaration: {
    name: 'function declaration',
    className: 'blue',
    regex: new RegExp(/(?<fd>(?<=def\s+)\w+(?=\s*\())/, 'g'),
    var: 'fd',
  },
  functionExecution: {
    name: 'function execution',
    className: 'cyan',
    regex: new RegExp(/(?<fe>(?<=[\s;]*)\w+(?=\([\W\w\s]*\)))/, 'gs'),
    var: 'fe',
  },
  number: {
    name: 'numbers',
    className: 'orange',
    regex: new RegExp(/(?<number>(?<=^|[\s\W])\d+(?=$|[\s\W]))/, 'g'),
    var: 'number',
  },
  fromDeclarration: {
    name: 'from import declaration',
    className: 'yellow',
    regex: new RegExp(/(?<fd>(?<=from\s[\w.]*)\w+(?=[\s.]))/, 'g'),
    var: 'fd',
  },
  importDeclarration: {
    name: 'import declaration',
    className: 'yellow',
    regex: new RegExp(/(?<id>(?<=import\s.*)\w+)/, 'g'),
    var: 'id',
  },
  chainStart: {
    name: 'start of chain',
    className: 'pink',
    regex: new RegExp(/(?<cs>(?<=\s|^)\w+(?=\.))/, 'g'),
    var: 'cs',
  },
  classDeclaration: {
    name: 'declaration of class',
    className: 'lime',
    regex: new RegExp(/(?<cd>(?<=class\s*)\w+(?=\s*(:|\()))/, 'g'),
    var: 'cd',
  },
  chainContinue: {
    name: 'continue of chain',
    className: 'yellow',
    regex: new RegExp(/(?<cc>(?<=\.)\w+(?=\.)|(?<=\.)\w+(?!\w*\())/, 'g'),
    var: 'cc',
  },
  decorator: {
    name: 'decorator',
    className: 'decorator',
    regex: new RegExp(/(?<decorator>(?<=$|\s*)@\w+)/, 'g'),
    var: 'decorator',
  },
  // OTHER
  other: {
    name: 'other words',
    className: 'fuchsia',
    regex: new RegExp(
      /(?<other>(?<!(class=".*">(\w)*)|(<\/?(\w)*)|(class="(\w)*)|(<span\s\w*))\w+)/,
      'g'
    ),
    var: 'other',
  },
}

export default pythonRules
