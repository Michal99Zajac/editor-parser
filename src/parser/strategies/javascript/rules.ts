export const javascriptRules = {
  fun: {
    name: 'function',
    className: 'red',
    regex: new RegExp(/(?<fun>function)/, 'g'),
    var: 'fun',
  },
  str: {
    name: 'strings',
    className: 'str green',
    regex: new RegExp(/(?<str>'.*'|".*"|`.*`)/, 'g'),
    var: 'str',
  },
  inbrace: {
    name: 'brace inside',
    className: {
      out: 'brace',
      brace: 'purple',
    },
    regex: new RegExp(/(?<inbrace>\${.*})/, 'g'),
    var: 'inbrace',
  },
  re: {
    name: 'return',
    className: 'purple',
    regex: new RegExp(/(?<re>return)/, 'g'),
    var: 're',
  },
  num: {
    name: 'numbers',
    className: 'orange',
    regex: new RegExp(/(?<num>\d)/, 'g'),
    var: 'num',
  },
}

export default javascriptRules
