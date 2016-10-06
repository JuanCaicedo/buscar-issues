# 1. Hello-world

Has un archivo `index.js` que escriba `'hello world'` en el terminal.

#### Hashbang/shebang

En Unix, todo archivo puede tener una línea al comienzo que le dice al sistema
como ejecutarlo. Si quieres, puedes [leer más aquí](https://en.wikipedia.org/wiki/Shebang_(Unix)).

Añadele a tu archivo una línea al principio que diga esto (mantén en mente que
esto no es javascript, es bash y no sera ejecutado por node)

```bash
#! /usr/bin/env node
```

Ahora puedes ejecutar `$ ./index.js`. Si recibes un error de permisos, puedes
ejecutar `$ chmod 777 index.js`.

#### npm bin y npm link

Nos interesa poder acceder este script desde cualquier parte. Eso se puede hacer
añadiendole la propiedad `bin` a nuestro `package.json`. Npm usa esta
propiedad cuando instala un módulo para dejarte acceder al script directamente.

```json
  "bin": "index.js"
```

Antes de publicar nuestro módulo npm, es útil poder ejecutarlo localmente. Desde
el archivo de tu proyecto puedes usar

```bash
$ npm link
```

Esto creará un symlink desde la instalación global de node a tu proyecto. Ahora
desde cualquier otro folder puedes utilizar

```bash
$ npm link <nombre>
```

lo cual creará un symlink desde el `node_modules` de ese folder al symlink
global. Con eso podrás ejecutar tu aplicación con `$ <nombre>`.

#### Posible error

Si ves un error que diga

```
command not found
```

es posible arreglarlo añadiendo los `node_modules` locales a tu path, que lo
puedes hacer con

```
export PATH="./node_modules/.bin:$PATH"
```

Lo puedes añadir a tu `~/.profile` para no repetirlo con cada nueva sesión de
bash.
