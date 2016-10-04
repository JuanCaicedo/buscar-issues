# buscar-issues
Taller para JSConfCo 2016 acerca de como hacer aplicaciones para el command line

## Antes de empezar

Debes tener un systema con bash. Puede ser Mac o Linux, o Windows 10 con
[bash habilitado](http://stackoverflow.com/questions/36352627/how-to-enable-bash-in-windows-10-developer-preview).

Debes tener installado node.js v4+. Si no lo tiene, [descárgalo aquí](https://nodejs.org/en/download/).

```bash
$ git clone https://github.com/JuanCaicedo/buscar-issues.git
$ npm install
```

## Hello-world

Has un archivo `index.js` que escriba `'hello world'` en la terminal.

##### Hashbang/shebang

En Unix, todo archivo puede tener una linea al comienzo que le dice al systema
como ejecutarlo. Si quieres, puedes [leer más aquí](https://en.wikipedia.org/wiki/Shebang_(Unix)).

Añadele a tu archivo una linea al principio que diga esto (manten en mente que
esto no es javascript, es bash y no sera ejecutado por node)

```bash
#! /usr/bin/env node
```

Ahora puedes ejecutar `$ ./index.js`.

##### npm bin y npm link

Nos interesa poder acceder este script desde cualquier parte. Eso se puede hacer
añadiendole la propriedad `bin` a nuestro `package.json`. Npm usa esta
propriedad cuando installa un modulo para dejarte acceder al script directamente.

```json
  "bin": "index.js"
```

Antes de publicar nuestro modulo npm, es útil poder ejecutarlo localmente. Desde
el archivo de tu projecto puedes usar

```bash
$ npm link
```

Esto creará un symlink desde la instalación global de node a tu projecto. Ahora
desde cualquier otro folder puedes utilizar

```bash
$ npm link <nombre>
```

lo cual creará un symlink desde el `node_modules` de ese folder al symlink
global. Con eso podrás ejecutar tu aplicación con `$ <nombre>`.

##### Possible error

Si ves un error que diga

```
command not found
```

es possible arreglarlo añadiendo los `node_modules` locales a tu path, que lo
puedes hacer con

```
export PATH="./node_modules/.bin:$PATH"
```

Lo puedes añadir a tu `~/.profile` para no repetirlo con cada nueva session de
bash.
