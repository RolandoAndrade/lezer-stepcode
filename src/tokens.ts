import {ExternalTokenizer, ContextTracker} from "@lezer/lr"

const keywordsMap = new Map([
  ['proceso', proceso],
  ['finproceso', finproceso],
  ['definir', definir],
  ['como', como],
  ['escribir', escribir],
  ['leer', leer],
  ['si', si],
  ['sino', sino],
  ['entonces', entonces],
  ['finsi', finsi],
  ['segun', segun],
  ['hacer', hacer],
  ['finsegun', finsegun],
  ['entero', entero],
  ['real', real],
  ['caracter', caracter],
  ['logico', logico],
  ['cadena', cadena],
])

export function keywords(name: string) {
  name = name?.toLowerCase()
  return keywordsMap.has(name) ? keywordsMap.get(name) : -1
}

export const otherwiseToken = new ExternalTokenizer((input, stack) => {
  let {next} = input
  if (next == plus || next == minus) {
    input.advance()
    if (next == input.next) {
      input.advance()
      let mayPostfix = !stack.context && stack.canShift(incdec)
      input.acceptToken(mayPostfix ? incdec : incdecPrefix)
    }
  }
  return -1
}, {contextual: true})