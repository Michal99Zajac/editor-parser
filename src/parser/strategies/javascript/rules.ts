export const javascriptRules = {
  // STRINGS
  doubleString: {
    name: 'double string',
    className: 'javascript-string',
    regex: new RegExp(/(?<dstr>"(.*?)")/, 'g'),
    var: 'dstr',
  },
  singleString: {
    name: 'single string',
    className: 'javascript-string',
    regex: new RegExp(/(?<sstr>'(.*?)')/, 'g'),
    var: 'sstr',
  },
  backticks: {
    name: 'backticks',
    className: 'javascript-string javascript-format-string',
    regex: new RegExp(/(?<backticks>`(.*?)`)/, 'gs'),
    var: 'backticks',
  },
  backticksBrace: {
    name: 'fstring braces',
    className: {
      brace: 'javascript-in-string-brace',
      border: 'javascript-in-string-border',
    },
    regex: new RegExp(
      /(?<brace>(?<=<span class="backticks">`[\w\s\W]*)\${(.*?)}(?=[\w\s\W]*`<\/span>))/,
      'g'
    ),
    var: 'brace',
  },
  // COMMENTS
  commentSlash: {
    name: 'comment by slashes',
    className: 'javascript-comment',
    regex: new RegExp(/(?<comment>\/\/.*)/, 'g'),
    var: 'comment',
  },
  commentMultiline: {
    name: 'comment by slash and asterix',
    className: 'javascript-comment',
    regex: new RegExp(/(?<comment>\/\*(.*?)\*\/)/, 'gs'),
    var: 'comment',
  },
  // FLEX
  importDeclaration: {
    name: 'import declaration',
    className: 'javascript-import-declaration',
    regex: new RegExp(
      /(?<id>(?<=import\s*{?[\w\s,*]*)[\w*]+(?=[\w\s,}]+from))/,
      'gs'
    ),
    var: 'id',
  },
  chainStart: {
    name: 'start of chain',
    className: 'javascript-chain-start',
    regex: new RegExp(/(?<cs>(?<=[\s;]|^)\w+(?=(\[.*\])?\.))/, 'g'),
    var: 'cs',
  },
  chainContinue: {
    name: 'chain continue',
    className: 'javascript-chain-continue',
    regex: new RegExp(/(?<cc>(?<=\.)\w+(?=[[.;\s]))/, 'g'),
    var: 'cc',
  },
  functionExecution: {
    name: 'function execution',
    className: 'javascript-function-execution',
    regex: new RegExp(/(?<fe>(?<=[\s;]*)\w+(?=\([\W\w\s]*\)))/, 'gs'),
    var: 'fe',
  },
  functionDeclaration: {
    name: 'function declaration',
    className: 'javascript-function-declaration',
    regex: new RegExp(/(?<fd>(?<=function\s+)\w+(?=\s*\())/, 'g'),
    var: 'fd',
  },
  numbers: {
    name: 'numbers',
    className: 'javascript-number',
    regex: new RegExp(/(?<number>(?<=[\s\W])\d+(?=[\s\W]))/, 'g'),
    var: 'number',
  },
  // RESERVED
  break: {
    name: 'break',
    className: 'javascript-break',
    regex: new RegExp(/(?<break>(?<=^|[\s;])break(?=$|[\s;]))/, 'g'),
    var: 'break',
  },
  debugger: {
    name: 'debugger',
    className: 'javascript-debugger',
    regex: new RegExp(/(?<debugger>(?<=^|[\s;])debugger(?=$|[\s;]))/, 'g'),
    var: 'debugger',
  },
  export: {
    name: 'export',
    className: 'javascript-export',
    regex: new RegExp(/(?<export>(?<=^|[\s;])export(?=$|[\s{]))/, 'g'),
    var: 'export',
  },
  finally: {
    name: 'finally',
    className: 'javascript-finally',
    regex: new RegExp(/(?<finally>(?<=^|[\s;.])finally(?=$|[\s{(]))/, 'g'),
    var: 'finally',
  },
  in: {
    name: 'in',
    className: 'javascript-in',
    regex: new RegExp(/(?<in>(?<=^|[\s])in(?=$|[\s]))/, 'g'),
    var: 'in',
  },
  let: {
    name: 'let',
    className: 'javascript-let',
    regex: new RegExp(/(?<let>(?<=^|[\s;({])let(?=$|[\s}]))/, 'g'),
    var: 'let',
  },
  null: {
    name: 'null',
    className: 'javascript-null',
    regex: new RegExp(/(?<null>(?<=^|[\s\W])null(?=$|[\s\W]))/, 'g'),
    var: 'null',
  },
  public: {
    name: 'public',
    className: 'javascript-public',
    regex: new RegExp(/(?<public>(?<=^|[\s;])public(?=$|[\s;]))/, 'g'),
    var: 'public',
  },
  super: {
    name: 'super',
    className: 'javascript-super',
    regex: new RegExp(/(?<super>(?<=^|[\s;])super(?=$|[\s;(]))/, 'g'),
    var: 'super',
  },
  throw: {
    name: 'throw',
    className: 'javascript-throw',
    regex: new RegExp(/(?<throw>(?<=^|[\s;])throw(?=$|[\s;]))/, 'g'),
    var: 'throw',
  },
  try: {
    name: 'try',
    className: 'javascript-try',
    regex: new RegExp(/(?<try>(?<=^|[\s;])try(?=$|[\s;({]))/, 'g'),
    var: 'try',
  },
  arguments: {
    name: 'arguments',
    className: 'javascript-arguments',
    regex: new RegExp(/(?<try>(?<=^|[\s;]|\.\.\.)try(?=$|[\s;({[]))/, 'g'),
    var: 'arguments',
  },
  class: {
    name: 'class',
    className: 'javascript-class',
    regex: new RegExp(/(?<class>(?<=^|[\s;])class(?=$|[\s;]))/, 'g'),
    var: 'class',
  },
  default: {
    name: 'default',
    className: 'javascript-default',
    regex: new RegExp(/(?<default>(?<=^|[\s{])default(?=$|[\s:}]))/, 'g'),
    var: 'default',
  },
  else: {
    name: 'else',
    className: 'javascript-else',
    regex: new RegExp(/(?<else>(?<=^|[\s}])else(?=$|[\s{]))/, 'g'),
    var: 'else',
  },
  extends: {
    name: 'extends',
    className: 'javascript-extends',
    regex: new RegExp(/(?<extends>(?<=^|[\s])extends(?=$|[\s]))/, 'g'),
    var: 'extends',
  },
  if: {
    name: 'if',
    className: 'javascript-if',
    regex: new RegExp(/(?<if>(?<=^|[\s;])if(?=$|[\s(]))/, 'g'),
    var: 'if',
  },
  return: {
    name: 'return',
    className: 'javascript-return',
    regex: new RegExp(/(?<return>(?<=^|[\s;])return(?=$|[\s;]))/, 'g'),
    var: 'return',
  },
  switch: {
    name: 'switch',
    className: 'javascript-switch',
    regex: new RegExp(/(?<switch>(?<=^|[\s;])switch(?=$|[\s(]))/, 'g'),
    var: 'switch',
  },
  typeof: {
    name: 'typeof',
    className: 'javascript-typeof',
    regex: new RegExp(/(?<typeof>(?<=^|[\s\W])typeof(?=$|[\s]))/, 'g'),
    var: 'typeof',
  },
  while: {
    name: 'while',
    className: 'javascript-while',
    regex: new RegExp(/(?<while>(?<=^|[\s;])while(?=$|[\s(]))/, 'g'),
    var: 'while',
  },
  await: {
    name: 'await',
    className: 'javascript-await',
    regex: new RegExp(/(?<await>(?<=^|[\s;])await(?=$|[\s]))/, 'g'),
    var: 'await',
  },
  async: {
    name: 'async',
    className: 'javascript-async',
    regex: new RegExp(/(?<async>(?<=^|[\s\W])async(?=$|[\s]))/, 'g'),
    var: 'async',
  },
  undefined: {
    name: 'undefined',
    className: 'javascript-undefined',
    regex: new RegExp(/(?<undefined>(?<=^|[\s\W])undefined(?=$|[\s\W]))/, 'g'),
    var: 'undefined',
  },
  case: {
    name: 'case',
    className: 'javascript-case',
    regex: new RegExp(/(?<case>(?<=^|[\s;])case(?=$|[\s]))/, 'g'),
    var: 'case',
  },
  const: {
    name: 'const',
    className: 'javascript-const',
    regex: new RegExp(/(?<const>(?<=^|[\s;({])const(?=$|[\s}]))/, 'g'),
    var: 'const',
  },
  delete: {
    name: 'delete',
    className: 'javascript-delete',
    regex: new RegExp(/(?<delete>(?<=^|[\s;])delete(?=$|[\s]))/, 'g'),
    var: 'delete',
  },
  false: {
    name: 'false',
    className: 'javascript-false',
    regex: new RegExp(/(?<false>(?<=^|[\s\W])false(?=$|[\s\W]))/, 'g'),
    var: 'false',
  },
  for: {
    name: 'for',
    className: 'javascript-for',
    regex: new RegExp(/(?<for>(?<=^|[\s;])for(?=$|[\s(]))/, 'g'),
    var: 'for',
  },
  implements: {
    name: 'implements',
    className: 'javascript-implements',
    regex: new RegExp(/(?<implements>(?<=^|[\s])implements(?=$|[\s]))/, 'g'),
    var: 'implements',
  },
  private: {
    name: 'private',
    className: 'javascript-private',
    regex: new RegExp(/(?<private>(?<=^|[\s;])private(?=$|[\s;]))/, 'g'),
    var: 'private',
  },
  var: {
    name: 'var',
    className: 'javascript-var',
    regex: new RegExp(/(?<var>(?<=^|[\s;({])var(?=$|[\s}]))/, 'g'),
    var: 'var',
  },
  with: {
    name: 'with',
    className: 'javascript-with',
    regex: new RegExp(/(?<with>(?<=^|[\s;])with(?=$|[\s(]))/, 'g'),
    var: 'with',
  },
  boolean: {
    name: 'boolean',
    className: 'javascript-boolean',
    regex: new RegExp(/(?<boolean>(?<=^|[\s\W])boolean(?=$|[\s\W]))/, 'g'),
    var: 'boolean',
  },
  catch: {
    name: 'catch',
    className: 'javascript-catch',
    regex: new RegExp(/(?<catch>(?<=^|[\s;.])catch(?=$|[\s;({]))/, 'g'),
    var: 'catch',
  },
  continue: {
    name: 'continue',
    className: 'javascript-continue',
    regex: new RegExp(/(?<continue>(?<=^|[\s;])continue(?=$|[\s;]))/, 'g'),
    var: 'continue',
  },
  do: {
    name: 'do',
    className: 'javascript-do',
    regex: new RegExp(/(?<do>(?<=^|[\s;])do(?=$|[\s(]))/, 'g'),
    var: 'do',
  },
  function: {
    name: 'function',
    className: 'javascript-function',
    regex: new RegExp(/(?<function>(?<=^|[\s;])function(?=$|[\s(]))/, 'g'),
    var: 'function',
  },
  import: {
    name: 'import',
    className: 'javascript-import',
    regex: new RegExp(/(?<import>(?<=^|[\s;])import(?=$|[\s(]))/, 'g'),
    var: 'import',
  },
  interface: {
    name: 'interface',
    className: 'javascript-interface',
    regex: new RegExp(/(?<interface>(?<=^|[\s;])interface(?=$|[\s]))/, 'g'),
    var: 'interface',
  },
  new: {
    name: 'new',
    className: 'javascript-new',
    regex: new RegExp(/(?<new>(?<=^|[\s;=])new(?=$|[\s]))/, 'g'),
    var: 'new',
  },
  protected: {
    name: 'protected',
    className: 'javascript-protected',
    regex: new RegExp(/(?<protected>(?<=^|[\s;])protected(?=$|[\s;]))/, 'g'),
    var: 'protected',
  },
  static: {
    name: 'static',
    className: 'javascript-static',
    regex: new RegExp(/(?<static>(?<=^|[\s;])static(?=$|[\s;]))/, 'g'),
    var: 'static',
  },
  this: {
    name: 'this',
    className: 'javascript-this',
    regex: new RegExp(/(?<this>(?<=^|[\s\W])this(?=$|[\s\W]))/, 'g'),
    var: 'this',
  },
  true: {
    name: 'true',
    className: 'javascript-true',
    regex: new RegExp(/(?<true>(?<=^|[\s\W])true(?=$|[\s\W]))/, 'g'),
    var: 'true',
  },
  void: {
    name: 'void',
    className: 'javascript-void',
    regex: new RegExp(/(?<void>(?<=^|[\s\W])void(?=$|[\s\W]))/, 'g'),
    var: 'void',
  },
  as: {
    name: 'as',
    className: 'javascript-as',
    regex: new RegExp(/(?<as>(?<=^|[\s;])as(?=$|[\s;]))/, 'g'),
    var: 'as',
  },
  from: {
    name: 'from',
    className: 'javascript-from',
    regex: new RegExp(/(?<from>(?<=^|[\s])from(?=$|[\s]))/, 'g'),
    var: 'from',
  },
  // VARIABLE
  variable: {
    name: 'variables',
    className: 'javascript-variable',
    regex: new RegExp(
      /(?<variable>(?<!(class=".*">(\w)*)|(<\/?(\w)*)|(class="(-?\w-?\s?)*)|(<span\s\w*))\w+)/,
      'g'
    ),
    var: 'variable',
  },
}

export const reservedWords = [
  'for',
  'if',
  'switch',
  'try',
  'catch',
  'while',
  'do',
]

export default javascriptRules
