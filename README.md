# editor-parser
Parser for converting text code to text code in html

### Example

text in text input: 

```
export function hello(what: string): void {
  console.log(`hello ${what}`)
}
```

should be converted to:

```html
<p><span class="red">export</span> <span class="red">function</span> <span class="purple">hello</span>(<span>what</span>: <span>string</span>): <span class="red">void</span> {</p>
<p>    <span class="purple">console</span>.<span>log</span>(<span class="blue">`hello <span>${<span>what</span>}</span>`</span>)</p>
<p>}</p>
```

and the final result in html should look like:

```typescript
export function hello(what: string): void {
  console.log(`hello ${what}`)
}
```

#### For

University Subject: Automaty, Jezyki i Obliczenia

Univeristy: University of Technology in Cracow

#### Main Support

Support for engineering work -> [workcode-frontend](https://github.com/Michal99Zajac/frontend-workcode)
