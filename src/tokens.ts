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