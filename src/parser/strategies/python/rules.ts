export const pythonRules = {
  // STRINGS
  string: {
    name: 'string',
    className: {
      string: 'python-string',
      f: 'python-fstring-f',
      fstring: 'python-fstring',
    },
    regex: new RegExp(/(?<str>f?"(.*?)"|f?'(.*?)')/, 'gs'),
    var: 'str',
  },
  fStringBrace: {
    name: 'fstring braces',
    className: {
      brace: 'python-in-string-brace',
      border: 'python-in-string-border',
    },
    regex: new RegExp(
      /(?<brace>(?<=<span class="python-fstring">["'][\w\s\W]*){(.*?)}(?=[\w\s\W]*["']<\/span>))/,
      'g'
    ),
    var: 'brace',
  },
  // COMMENTS
  comment: {
    name: 'comment',
    className: 'python-comment',
    regex: new RegExp(/(?<comment>#.*)/, 'g'),
    var: 'comment',
  },
  // RESERVED
  def: {
    name: 'def',
    className: 'python-def',
    regex: new RegExp(/(?<def>(?<=^|\s)def(?=$|\s))/, 'g'),
    var: 'def',
  },
  for: {
    name: 'for',
    className: 'python-for',
    regex: new RegExp(/(?<for>(?<=^|\s)for(?=$|\s))/, 'g'),
    var: 'for',
  },
  in: {
    name: 'in',
    className: 'python-in',
    regex: new RegExp(/(?<in>(?<=^|\s)in(?=$|\s|:))/, 'g'),
    var: 'in',
  },
  and: {
    name: 'and',
    className: 'python-and',
    regex: new RegExp(/(?<and>(?<=^|\s)and(?=$|\s))/, 'g'),
    var: 'and',
  },
  or: {
    name: 'or',
    className: 'python-or',
    regex: new RegExp(/(?<or>(?<=^|\s)or(?=$|\s))/, 'g'),
    var: 'or',
  },
  not: {
    name: 'not',
    className: 'python-not',
    regex: new RegExp(/(?<not>(?<=^|\s)not(?=$|\s))/, 'g'),
    var: 'not',
  },
  class: {
    name: 'class',
    className: 'python-class',
    regex: new RegExp(/(?<class>(?<=^|\s)class(?=$|\s))/, 'g'),
    var: 'class',
  },
  return: {
    name: 'return',
    className: 'python-return',
    regex: new RegExp(/(?<return>(?<=^|\s)return(?=$|\s))/, 'g'),
    var: 'return',
  },
  lambda: {
    name: 'lambda',
    className: 'python-lambda',
    regex: new RegExp(/(?<lambda>(?<=^|[\s\W])lambda(?=$|[\s\W]))/, 'g'),
    var: 'lambda',
  },
  pass: {
    name: 'pass',
    className: 'python-pass',
    regex: new RegExp(/(?<pass>(?<=^|\s)pass(?=$|\s))/, 'g'),
    var: 'pass',
  },
  try: {
    name: 'try',
    className: 'python-try',
    regex: new RegExp(/(?<try>(?<=^|\s)try(?=$|\s|:))/, 'g'),
    var: 'try',
  },
  false: {
    name: 'false',
    className: 'python-false',
    regex: new RegExp(/(?<false>(?<=^|[\W\s])False(?=$|[\W\s]))/, 'g'),
    var: 'false',
  },
  none: {
    name: 'none',
    className: 'python-none',
    regex: new RegExp(/(?<none>(?<=^|[\s\W])None(?=$|[\W\s]))/, 'g'),
    var: 'none',
  },
  true: {
    name: 'true',
    className: 'python-true',
    regex: new RegExp(/(?<true>(?<=^|[\s\W])True(?=$|[\s\W]))/, 'g'),
    var: 'true',
  },
  as: {
    name: 'as',
    className: 'python-as',
    regex: new RegExp(/(?<as>(?<=^|\s)as(?=$|\s))/, 'g'),
    var: 'as',
  },
  assert: {
    name: 'assert',
    className: 'python-assert',
    regex: new RegExp(/(?<assert>(?<=^|\s)assert(?=$|\s))/, 'g'),
    var: 'assert',
  },
  break: {
    name: 'break',
    className: 'python-break',
    regex: new RegExp(/(?<break>(?<=^|\s)break(?=$|\s))/, 'g'),
    var: 'break',
  },
  continue: {
    name: 'continue',
    className: 'python-continue',
    regex: new RegExp(/(?<continue>(?<=^|\s)continue(?=$|\s))/, 'g'),
    var: 'continue',
  },
  del: {
    name: 'del',
    className: 'python-del',
    regex: new RegExp(/(?<del>(?<=^|\s)del(?=$|\s))/, 'g'),
    var: 'del',
  },
  elif: {
    name: 'elif',
    className: 'python-elif',
    regex: new RegExp(/(?<elif>(?<=^|\s)elif(?=$|\s))/, 'g'),
    var: 'elif',
  },
  else: {
    name: 'else',
    className: 'python-else',
    regex: new RegExp(/(?<else>(?<=^|\s)else(?=$|\s))/, 'g'),
    var: 'else',
  },
  except: {
    name: 'except',
    className: 'python-except',
    regex: new RegExp(/(?<except>(?<=^|\s)except(?=$|\s))/, 'g'),
    var: 'except',
  },
  finally: {
    name: 'finally',
    className: 'python-finally',
    regex: new RegExp(/(?<finally>(?<=^|\s)finally(?=$|\s|:))/, 'g'),
    var: 'finally',
  },
  from: {
    name: 'from',
    className: 'python-from',
    regex: new RegExp(/(?<from>(?<=^|\s)from(?=$|\s))/, 'g'),
    var: 'from',
  },
  global: {
    name: 'global',
    className: 'python-global',
    regex: new RegExp(/(?<global>(?<=^|\s)global(?=$|\s))/, 'g'),
    var: 'global',
  },
  if: {
    name: 'if',
    className: 'python-if',
    regex: new RegExp(/(?<if>(?<=^|\s)if(?=$|\s))/, 'g'),
    var: 'if',
  },
  is: {
    name: 'is',
    className: 'python-is',
    regex: new RegExp(/(?<is>(?<=^|\s)is(?=$|\s))/, 'g'),
    var: 'is',
  },
  raise: {
    name: 'raise',
    className: 'python-raise',
    regex: new RegExp(/(?<raise>(?<=^|\s)raise(?=$|\s))/, 'g'),
    var: 'raise',
  },
  while: {
    name: 'while',
    className: 'python-while',
    regex: new RegExp(/(?<while>(?<=^|\s)while(?=$|\s))/, 'g'),
    var: 'while',
  },
  with: {
    name: 'with',
    className: 'python-with',
    regex: new RegExp(/(?<with>(?<=^|\s)with(?=$|\s))/, 'g'),
    var: 'with',
  },
  yield: {
    name: 'yield',
    className: 'python-yield',
    regex: new RegExp(/(?<yield>(?<=^|\s)yield(?=$|\s))/, 'g'),
    var: 'yield',
  },
  import: {
    name: 'import',
    className: 'python-import',
    regex: new RegExp(/(?<import>(?<=^|\s)import(?=$|\s))/, 'g'),
    var: 'import',
  },
  // FLEX
  functionDeclaration: {
    name: 'function declaration',
    className: 'python-function-declaration',
    regex: new RegExp(/(?<fd>(?<=def\s+)\w+(?=\s*\())/, 'g'),
    var: 'fd',
  },
  functionExecution: {
    name: 'function execution',
    className: 'python-function-execution',
    regex: new RegExp(/(?<fe>(?<=[\s;]*)\w+(?=\([\W\w\s]*\)))/, 'gs'),
    var: 'fe',
  },
  number: {
    name: 'numbers',
    className: 'python-number',
    regex: new RegExp(/(?<number>(?<=^|[\s\W])\d+(?=$|[\s\W]))/, 'g'),
    var: 'number',
  },
  fromDeclaration: {
    name: 'from import declaration',
    className: 'python-from-declaration',
    regex: new RegExp(/(?<fd>(?<=from\s[\w.]*)\w+(?=[\s.]))/, 'g'),
    var: 'fd',
  },
  importDeclarration: {
    name: 'import declaration',
    className: 'python-import-declaration',
    regex: new RegExp(/(?<id>(?<=import\s.*)\w+)/, 'g'),
    var: 'id',
  },
  chainStart: {
    name: 'start of chain',
    className: 'python-chain-start',
    regex: new RegExp(/(?<cs>(?<=\s|^)\w+(?=\.))/, 'g'),
    var: 'cs',
  },
  classDeclaration: {
    name: 'declaration of class',
    className: 'python-class-declaration',
    regex: new RegExp(/(?<cd>(?<=class\s*)\w+(?=\s*(:|\()))/, 'g'),
    var: 'cd',
  },
  chainContinue: {
    name: 'continue of chain',
    className: 'python-chain-continue',
    regex: new RegExp(/(?<cc>(?<=\.)\w+(?=\.)|(?<=\.)\w+(?!\w*\())/, 'g'),
    var: 'cc',
  },
  decorator: {
    name: 'decorator',
    className: 'python-decorator',
    regex: new RegExp(/(?<decorator>(?<=$|\s*)@\w+)/, 'g'),
    var: 'decorator',
  },
  // VARIABLES
  variable: {
    name: 'variable',
    className: 'python-variable',
    regex: new RegExp(
      /(?<variable>(?<!(class=".*">@?(\w)*)|(<\/?(\w)*)|(class="(-?\w-?\s?)*)|(<span\s\w*))\w+)/,
      'g'
    ),
    var: 'variable',
  },
}

export default pythonRules
