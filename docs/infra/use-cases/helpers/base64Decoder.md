# Base64 Decoder

Esse helper tem a função de decodificar valores em Base64 passados pelo CI por conta de caracteres que não são URL-safe.
Ele só entra em ação caso a `NODE_ENV` seja difrente de `local`, ou seja: caso esteja rodando o código na sua máquina com a `NODE_ENV=local`, o valor da variável no arquivo `.env` não precisa estar em Base64.

```js
// src/helpers/base64-decoder.js
import { NODE_ENV } from 'config'

export const base64Decoder = encoded => {
  if (NODE_ENV === 'local') return encoded

  const buffer = new Buffer.from(encoded, 'base64')
  return buffer.toString('utf-8')
}
```

O seu uso é primariamente no arquivo `config.js`, e fica assim:

```js
// src/config.js
import dotenv from 'dotenv'
import path from 'path'
import { base64Decoder } from 'helpers/base64-decoder'

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export const NEW_ENV = base64Decoder(process.env.NEW_ENV)
```
