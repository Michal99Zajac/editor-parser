export const javascriptRules = {
  // STRINGS
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
  backticksBrace: {
    name: 'fstring braces',
    className: {
      brace: 'purple',
      border: 'brace',
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
    className: 'comment',
    regex: new RegExp(/(?<comment>\/\/.*)/, 'g'),
    var: 'comment',
  },
  commentMultiline: {
    name: 'comment by slash and asterix',
    className: 'comment',
    regex: new RegExp(/(?<comment>\/\*(.*?)\*\/)/, 'gs'),
    var: 'comment',
  },
  // FLEX
  importDeclaration: {
    name: 'import declaration',
    className: 'yellow',
    regex: new RegExp(
      /(?<id>(?<=import\s*{?[\w\s,*]*)[\w*]+(?=[\w\s,}]+from))/,
      'gs'
    ),
    var: 'id',
  },
  chainStart: {
    name: 'start of chain',
    className: 'pink',
    regex: new RegExp(/(?<cs>(?<=[\s;]|^)\w+(?=(\[.*\])?\.))/, 'g'),
    var: 'cs',
  },
  chainContinue: {
    name: 'chain continue',
    className: 'red',
    regex: new RegExp(/(?<cc>(?<=\.)\w+(?=[[.;\s]))/, 'g'),
    var: 'cc',
  },
  functionExecution: {
    name: 'function execution',
    className: 'cyan',
    regex: new RegExp(/(?<fe>(?<=[\s;]*)\w+(?=\([\W\w\s]*\)))/, 'gs'),
    var: 'fe',
  },
  functionDeclaration: {
    name: 'function declaration',
    className: 'blue',
    regex: new RegExp(/(?<fd>(?<=function\s+)\w+(?=\s*\())/, 'g'),
    var: 'fd',
  },
  numbers: {
    name: 'numbers',
    className: 'orange',
    regex: new RegExp(/(?<number>(?<=[\s\W])\d+(?=[\s\W]))/, 'g'),
    var: 'number',
  },
  // RESERVED
  break: {
    name: 'break',
    className: 'purple',
    regex: new RegExp(/(?<break>(?<=^|[\s;])break(?=$|[\s;]))/, 'g'),
    var: 'break',
  },
  debugger: {
    name: 'debugger',
    className: 'purple',
    regex: new RegExp(/(?<debugger>(?<=^|[\s;])debugger(?=$|[\s;]))/, 'g'),
    var: 'debugger',
  },
  export: {
    name: 'export',
    className: 'purple',
    regex: new RegExp(/(?<export>(?<=^|[\s;])export(?=$|[\s{]))/, 'g'),
    var: 'export',
  },
  finally: {
    name: 'finally',
    className: 'purple',
    regex: new RegExp(/(?<finally>(?<=^|[\s;.])finally(?=$|[\s{(]))/, 'g'),
    var: 'finally',
  },
  in: {
    name: 'in',
    className: 'purple',
    regex: new RegExp(/(?<in>(?<=^|[\s])in(?=$|[\s]))/, 'g'),
    var: 'in',
  },
  let: {
    name: 'let',
    className: 'purple',
    regex: new RegExp(/(?<let>(?<=^|[\s;({])let(?=$|[\s}]))/, 'g'),
    var: 'let',
  },
  null: {
    name: 'null',
    className: 'yellow',
    regex: new RegExp(
      /(?<null>(?<=^|[\s;(=!<>{[,])null(?=$|[\s;=!><)}\],]))/,
      'g'
    ),
    var: 'null',
  },
  public: {
    name: 'public',
    className: 'purple',
    regex: new RegExp(/(?<public>(?<=^|[\s;])public(?=$|[\s;]))/, 'g'),
    var: 'public',
  },
  super: {
    name: 'super',
    className: 'purple',
    regex: new RegExp(/(?<super>(?<=^|[\s;])super(?=$|[\s;(]))/, 'g'),
    var: 'super',
  },
  throw: {
    name: 'throw',
    className: 'purple',
    regex: new RegExp(/(?<throw>(?<=^|[\s;])throw(?=$|[\s;]))/, 'g'),
    var: 'throw',
  },
  try: {
    name: 'try',
    className: 'purple',
    regex: new RegExp(/(?<try>(?<=^|[\s;])try(?=$|[\s;({]))/, 'g'),
    var: 'try',
  },
  arguments: {
    name: 'arguments',
    className: 'purple',
    regex: new RegExp(/(?<try>(?<=^|[\s;]|\.\.\.)try(?=$|[\s;({[]))/, 'g'),
    var: 'arguments',
  },
  class: {
    name: 'class',
    className: 'purple',
    regex: new RegExp(/(?<class>(?<=^|[\s;])class(?=$|[\s;]))/, 'g'),
    var: 'class',
  },
  default: {
    name: 'default',
    className: 'purple',
    regex: new RegExp(/(?<default>(?<=^|[\s{])default(?=$|[\s:}]))/, 'g'),
    var: 'default',
  },
  else: {
    name: 'else',
    className: 'purple',
    regex: new RegExp(/(?<else>(?<=^|[\s}])else(?=$|[\s{]))/, 'g'),
    var: 'else',
  },
  extends: {
    name: 'extends',
    className: 'purple',
    regex: new RegExp(/(?<extends>(?<=^|[\s])extends(?=$|[\s]))/, 'g'),
    var: 'extends',
  },
  if: {
    name: 'if',
    className: 'purple',
    regex: new RegExp(/(?<if>(?<=^|[\s;])if(?=$|[\s(]))/, 'g'),
    var: 'if',
  },
  return: {
    name: 'return',
    className: 'purple',
    regex: new RegExp(/(?<return>(?<=^|[\s;])return(?=$|[\s;]))/, 'g'),
    var: 'return',
  },
  switch: {
    name: 'switch',
    className: 'purple',
    regex: new RegExp(/(?<switch>(?<=^|[\s;])switch(?=$|[\s(]))/, 'g'),
    var: 'switch',
  },
  typeof: {
    name: 'typeof',
    className: 'purple',
    regex: new RegExp(/(?<typeof>(?<=^|[\s(;])typeof(?=$|[\s]))/, 'g'),
    var: 'typeof',
  },
  while: {
    name: 'while',
    className: 'purple',
    regex: new RegExp(/(?<while>(?<=^|[\s;])while(?=$|[\s(]))/, 'g'),
    var: 'while',
  },
  await: {
    name: 'await',
    className: 'purple',
    regex: new RegExp(/(?<await>(?<=^|[\s;])await(?=$|[\s]))/, 'g'),
    var: 'await',
  },
  case: {
    name: 'case',
    className: 'purple',
    regex: new RegExp(/(?<case>(?<=^|[\s;])case(?=$|[\s]))/, 'g'),
    var: 'case',
  },
  const: {
    name: 'const',
    className: 'purple',
    regex: new RegExp(/(?<const>(?<=^|[\s;({])const(?=$|[\s}]))/, 'g'),
    var: 'const',
  },
  delete: {
    name: 'delete',
    className: 'purple',
    regex: new RegExp(/(?<delete>(?<=^|[\s;])delete(?=$|[\s]))/, 'g'),
    var: 'delete',
  },
  false: {
    name: 'false',
    className: 'purple',
    regex: new RegExp(
      /(?<false>(?<=^|[\s;(=><!{[,])false(?=$|[\s;=!><)}\],]))/,
      'g'
    ),
    var: 'false',
  },
  for: {
    name: 'for',
    className: 'purple',
    regex: new RegExp(/(?<for>(?<=^|[\s;])for(?=$|[\s(]))/, 'g'),
    var: 'for',
  },
  implements: {
    name: 'implements',
    className: 'purple',
    regex: new RegExp(/(?<implements>(?<=^|[\s])implements(?=$|[\s]))/, 'g'),
    var: 'implements',
  },
  private: {
    name: 'private',
    className: 'purple',
    regex: new RegExp(/(?<private>(?<=^|[\s;])private(?=$|[\s;]))/, 'g'),
    var: 'private',
  },
  var: {
    name: 'var',
    className: 'purple',
    regex: new RegExp(/(?<var>(?<=^|[\s;({])var(?=$|[\s}]))/, 'g'),
    var: 'var',
  },
  with: {
    name: 'with',
    className: 'purple',
    regex: new RegExp(/(?<with>(?<=^|[\s;])with(?=$|[\s(]))/, 'g'),
    var: 'with',
  },
  boolean: {
    name: 'boolean',
    className: 'purple',
    regex: new RegExp(
      /(?<boolean>(?<=^|[\s;(=!<>{[,])boolean(?=$|[\s;=!><)}\],]))/,
      'g'
    ),
    var: 'boolean',
  },
  catch: {
    name: 'catch',
    className: 'purple',
    regex: new RegExp(/(?<catch>(?<=^|[\s;.])catch(?=$|[\s;({]))/, 'g'),
    var: 'catch',
  },
  continue: {
    name: 'continue',
    className: 'purple',
    regex: new RegExp(/(?<continue>(?<=^|[\s;])continue(?=$|[\s;]))/, 'g'),
    var: 'continue',
  },
  do: {
    name: 'do',
    className: 'purple',
    regex: new RegExp(/(?<do>(?<=^|[\s;])do(?=$|[\s(]))/, 'g'),
    var: 'do',
  },
  function: {
    name: 'function',
    className: 'purple',
    regex: new RegExp(/(?<function>(?<=^|[\s;])function(?=$|[\s(]))/, 'g'),
    var: 'function',
  },
  import: {
    name: 'import',
    className: 'purple',
    regex: new RegExp(/(?<import>(?<=^|[\s;])import(?=$|[\s(]))/, 'g'),
    var: 'import',
  },
  interface: {
    name: 'interface',
    className: 'purple',
    regex: new RegExp(/(?<interface>(?<=^|[\s;])interface(?=$|[\s]))/, 'g'),
    var: 'interface',
  },
  new: {
    name: 'new',
    className: 'purple',
    regex: new RegExp(/(?<new>(?<=^|[\s;=])new(?=$|[\s]))/, 'g'),
    var: 'new',
  },
  protected: {
    name: 'protected',
    className: 'purple',
    regex: new RegExp(/(?<protected>(?<=^|[\s;])protected(?=$|[\s;]))/, 'g'),
    var: 'protected',
  },
  static: {
    name: 'static',
    className: 'purple',
    regex: new RegExp(/(?<static>(?<=^|[\s;])static(?=$|[\s;]))/, 'g'),
    var: 'static',
  },
  this: {
    name: 'this',
    className: 'blue',
    regex: new RegExp(
      /(?<this>(?<=^|[\s;(=!<>{[,])this(?=$|[\s;=!><)}\],]))/,
      'g'
    ),
    var: 'this',
  },
  true: {
    name: 'true',
    className: 'purple',
    regex: new RegExp(
      /(?<true>(?<=^|[\s;(=!<>{[,])true(?=$|[\s;=!><)}\],]))/,
      'g'
    ),
    var: 'true',
  },
  void: {
    name: 'void',
    className: 'purple',
    regex: new RegExp(
      /(?<void>(?<=^|[\s;(=!<>{[,])void(?=$|[\s;=!><)(}\],]))/,
      'g'
    ),
    var: 'void',
  },
  as: {
    name: 'as',
    className: 'purple',
    regex: new RegExp(/(?<as>(?<=^|[\s;])as(?=$|[\s;]))/, 'g'),
    var: 'as',
  },
  from: {
    name: 'from',
    className: 'purple',
    regex: new RegExp(/(?<from>(?<=^|[\s])from(?=$|[\s]))/, 'g'),
    var: 'from',
  },
  // OTHER
  other: {
    name: 'other [variables]',
    className: 'fuchsia',
    regex: new RegExp(
      /(?<other>(?<!(class=".*">(\w)*)|(<\/?(\w)*)|(class="(\w)*)|(<span\s\w*))\w+)/,
      'g'
    ),
    var: 'other',
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
