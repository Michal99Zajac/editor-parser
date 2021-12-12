export const bashRules = {
  // STRINGS
  string: {
    name: 'string',
    className: 'string',
    regex: new RegExp(/(?<string>"(.*?)")/, 'g'),
    var: 'string',
  },
  // COMMENT
  comment: {
    name: 'comment',
    className: 'comment',
    regex: new RegExp(/(?<comment>#.*)/, 'g'),
    var: 'comment',
  },
  // RESERVED
  echo: {
    name: 'echo',
    className: 'echo',
    regex: new RegExp(/(?<echo>(?<=^|[\s;])echo(?=[\s;]|$))/, 'g'),
    var: 'echo',
  },
  read: {
    name: 'read',
    className: 'read',
    regex: new RegExp(/(?<read>(?<=^|[\s;])read(?=[\s;]|$))/, 'g'),
    var: 'read',
  },
  if: {
    name: 'if',
    className: 'purple',
    regex: new RegExp(/(?<if>(?<=^|[\s;])if(?=[\s]|$))/, 'g'),
    var: 'if',
  },
  elif: {
    name: 'elif',
    className: 'purple',
    regex: new RegExp(/(?<elif>(?<=^|[\s;])elif(?=[\s]|$))/, 'g'),
    var: 'elif',
  },
  else: {
    name: 'else',
    className: 'purple',
    regex: new RegExp(/(?<else>(?<=^|[\s;])else(?=[\s;]|$))/, 'g'),
    var: 'else',
  },
  then: {
    name: 'then',
    className: 'purple',
    regex: new RegExp(/(?<then>(?<=^|[\s;])then(?=[\s;]|$))/, 'g'),
    var: 'then',
  },
  fi: {
    name: 'fi',
    className: 'purple',
    regex: new RegExp(/(?<fi>(?<=^|[\s;])fi(?=[\s;]|$))/, 'g'),
    var: 'fi',
  },
  case: {
    name: 'case',
    className: 'purple',
    regex: new RegExp(/(?<case>(?<=^|[\s;])case(?=[\s]|$))/, 'g'),
    var: 'case',
  },
  in: {
    name: 'in',
    className: 'purple',
    regex: new RegExp(/(?<in>(?<=^|[\s;])in(?=[\s;]|$))/, 'g'),
    var: 'in',
  },
  esac: {
    name: 'esac',
    className: 'purple',
    regex: new RegExp(/(?<esac>(?<=^|[\s;])esac(?=[\s;]|$))/, 'g'),
    var: 'esac',
  },
  for: {
    name: 'for',
    className: 'purple',
    regex: new RegExp(/(?<for>(?<=^|[\s;])for(?=[\s]|$))/, 'g'),
    var: 'for',
  },
  do: {
    name: 'do',
    className: 'purple',
    regex: new RegExp(/(?<do>(?<=^|[\s;])do(?=[\s;]|$))/, 'g'),
    var: 'do',
  },
  done: {
    name: 'done',
    className: 'purple',
    regex: new RegExp(/(?<done>(?<=^|[\s;])done(?=[\s;]|$))/, 'g'),
    var: 'done',
  },
  while: {
    name: 'while',
    className: 'purple',
    regex: new RegExp(/(?<while>(?<=^|[\s;])while(?=[\s]|$))/, 'g'),
    var: 'while',
  },
  function: {
    name: 'function',
    className: 'purple',
    regex: new RegExp(/(?<function>(?<=^|[\s;])function(?=[\s]|$))/, 'g'),
    var: 'function',
  },
  // FLEX
  variable: {
    name: 'variable',
    className: 'variable',
    regex: new RegExp(
      /(?<variable>(?<=[\s"]|^|\\\\|[^A-Za-z0-9_\\])\${?\w+}?(?=[\s"\W]|$))/,
      'g'
    ),
    var: 'variable',
  },
  functionDeclaration: {
    name: 'function declaration',
    className: 'blue',
    regex: new RegExp(/(?<fd>(?<=function\s+)\w+\(\))/, 'g'),
    var: 'fd',
  },
  forVariable: {
    name: 'variable inside for in',
    className: 'red',
    regex: new RegExp(/(?<fv>(?<=for\s+)\w+(?=\s+in))/, 'g'),
    var: 'fv',
  },
  variableExecution: {
    name: 'execution for variable',
    className: 'green',
    regex: new RegExp(/(?<ve>(?<=^|[\s;=])\$\(.*?\)(?=[\s;]))/, 'g'),
    var: 've',
  },
  execution: {
    name: 'execution',
    className: 'green',
    regex: new RegExp(/(?<execution>(?<=^|[\s;=])\(\(.*?\)\)(?=[\s;]))/, 'g'),
    var: 'execution',
  },
  // VARIABLE
  variableDeclaration: {
    name: 'variable declaration',
    className: 'lime',
    regex: new RegExp(
      /(?<vd>(?<!(class=".*">(\w)*)|(<\/?(\w)*)|(class="(\w)*)|(<span\s\w*))\w+(?==))/,
      'g'
    ),
    var: 'vd',
  },
}

export default bashRules
