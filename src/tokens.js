import * as terms from "./parser.terms.js"

const keywordsMap = new Map([
  ['proceso', terms.proceso],
  ['finproceso', terms.finproceso],
  ['definir', terms.definir],
  ['como', terms.como],
  ['escribir', terms.escribir],
  ['leer', terms.leer],
  ['si', terms.si],
  ['sino', terms.sino],
  ['entonces', terms.entonces],
  ['finsi', terms.finsi],
  ['segun', terms.segun],
  ['hacer', terms.hacer],
  ['finsegun', terms.finsegun],
  ['entero', terms.entero],
  ['real', terms.real],
  ['logico', terms.logico],
  ['cadena', terms.cadena],
  ['caracter', terms.caracter],
  ['mod', terms.mod],
  ['div', terms.div],
  ['mientras', terms.mientras],
  ['finmientras', terms.finmientras],
  ['para', terms.para],
  ['finpara', terms.finpara],
  ['hasta', terms.hasta],
  ['repetir', terms.repetir],
  ['subproceso', terms.subproceso],
  ['finsubproceso', terms.finsubproceso],
  ['funcion', terms.funcion],
  ['finfuncion', terms.finfuncion],
  ['romper', terms.romper],
  ['continuar', terms.continuar],
  ['retornar', terms.retornar],
  ['verdadero', terms._true],
  ['falso', terms._false],
  ['true', terms._true],
  ['false', terms._false],
  ['procedimiento', terms.subproceso],
  ['finprocedimiento', terms.finsubproceso],
  ['subalgoritmo', terms.subproceso],
  ['finsubalgoritmo', terms.finsubproceso],
  ['dimension', terms.dimension],
])

export function keywords(name) {
  name = name?.toLowerCase()
  return keywordsMap.has(name) ? keywordsMap.get(name) : -1
}

