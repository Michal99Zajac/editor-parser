export const bashRules = {
  // STRINGS
  string: {
    name: 'string',
    className: 'bash-string',
    regex: new RegExp(/(?<string>"(.*?)")/, 'g'),
    var: 'string',
  },
  // COMMENT
  comment: {
    name: 'comment',
    className: 'bash-comment',
    regex: new RegExp(/(?<comment>#.*)/, 'g'),
    var: 'comment',
  },
  // RESERVED
  echo: {
    name: 'echo',
    className: 'bash-echo',
    regex: new RegExp(/(?<echo>(?<=^|[\s;])echo(?=[\s;]|$))/, 'g'),
    var: 'echo',
  },
  read: {
    name: 'read',
    className: 'bash-read',
    regex: new RegExp(/(?<read>(?<=^|[\s;])read(?=[\s;]|$))/, 'g'),
    var: 'read',
  },
  if: {
    name: 'if',
    className: 'bash-if',
    regex: new RegExp(/(?<if>(?<=^|[\s;])if(?=[\s]|$))/, 'g'),
    var: 'if',
  },
  elif: {
    name: 'elif',
    className: 'bash-elif',
    regex: new RegExp(/(?<elif>(?<=^|[\s;])elif(?=[\s]|$))/, 'g'),
    var: 'elif',
  },
  else: {
    name: 'else',
    className: 'bash-else',
    regex: new RegExp(/(?<else>(?<=^|[\s;])else(?=[\s;]|$))/, 'g'),
    var: 'else',
  },
  then: {
    name: 'then',
    className: 'bash-then',
    regex: new RegExp(/(?<then>(?<=^|[\s;])then(?=[\s;]|$))/, 'g'),
    var: 'then',
  },
  fi: {
    name: 'fi',
    className: 'bash-fi',
    regex: new RegExp(/(?<fi>(?<=^|[\s;])fi(?=[\s;]|$))/, 'g'),
    var: 'fi',
  },
  case: {
    name: 'case',
    className: 'bash-case',
    regex: new RegExp(/(?<case>(?<=^|[\s;])case(?=[\s]|$))/, 'g'),
    var: 'case',
  },
  in: {
    name: 'in',
    className: 'bash-in',
    regex: new RegExp(/(?<in>(?<=^|[\s;])in(?=[\s;]|$))/, 'g'),
    var: 'in',
  },
  esac: {
    name: 'esac',
    className: 'bash-esac',
    regex: new RegExp(/(?<esac>(?<=^|[\s;])esac(?=[\s;]|$))/, 'g'),
    var: 'esac',
  },
  for: {
    name: 'for',
    className: 'bash-for',
    regex: new RegExp(/(?<for>(?<=^|[\s;])for(?=[\s]|$))/, 'g'),
    var: 'for',
  },
  do: {
    name: 'do',
    className: 'bash-do',
    regex: new RegExp(/(?<do>(?<=^|[\s;])do(?=[\s;]|$))/, 'g'),
    var: 'do',
  },
  done: {
    name: 'done',
    className: 'bash-done',
    regex: new RegExp(/(?<done>(?<=^|[\s;])done(?=[\s;]|$))/, 'g'),
    var: 'done',
  },
  while: {
    name: 'while',
    className: 'bash-while',
    regex: new RegExp(/(?<while>(?<=^|[\s;])while(?=[\s]|$))/, 'g'),
    var: 'while',
  },
  function: {
    name: 'function',
    className: 'bash-function',
    regex: new RegExp(/(?<function>(?<=^|[\s;])function(?=[\s]|$))/, 'g'),
    var: 'function',
  },
  // FLEX
  variable: {
    name: 'variable',
    className: 'bash-variable',
    regex: new RegExp(
      /(?<variable>(?<=[\s"]|^|\\\\|[^A-Za-z0-9_\\])\${?\w+}?(?=[\s"\W]|$))/,
      'g'
    ),
    var: 'variable',
  },
  functionDeclaration: {
    name: 'function declaration',
    className: 'bash-function-declaration',
    regex: new RegExp(/(?<fd>(?<=function\s+)\w+\(\))/, 'g'),
    var: 'fd',
  },
  forVariable: {
    name: 'variable inside for in',
    className: 'bash-for-variable',
    regex: new RegExp(/(?<fv>(?<=for\s+)\w+(?=\s+in))/, 'g'),
    var: 'fv',
  },
  variableExecution: {
    name: 'execution for variable',
    className: 'bash-variable-execution',
    regex: new RegExp(/(?<ve>(?<=^|[\s;=])\$\(.*?\)(?=[\s;]))/, 'g'),
    var: 've',
  },
  execution: {
    name: 'execution',
    className: 'bash-execution',
    regex: new RegExp(/(?<execution>(?<=^|[\s;=])\(\(.*?\)\)(?=[\s;]))/, 'g'),
    var: 'execution',
  },
  // VARIABLE
  variableDeclaration: {
    name: 'variable declaration',
    className: 'bash-variable-declaration',
    regex: new RegExp(
      /(?<vd>(?<!(class=".*">(\w)*)|(<\/?(\w)*)|(class="(\w)*)|(<span\s\w*))\w+(?==))/,
      'g'
    ),
    var: 'vd',
  },
}

export default bashRules
