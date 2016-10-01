# buscar-issues
Taller para JSConfCo 2016 acerca de como hacer aplicaciones para el command line

## Antes de empezar

Debes tener installado node.js v4+. Si no lo tiene, [descárgalo aquí](https://nodejs.org/en/download/).

```bash
$ git clone https://github.com/JuanCaicedo/buscar-issues.git
$ npm install
```

## Hello-world

Has un archivo `index.js` que escriba `'hello world'` en la terminal.

###### Hashbang/shebang

En Unix, todo archivo puede tener una linea al comienzo que le dice al systema
como ejecutarlo. Si quieres, puedes [leer más aquí](https://en.wikipedia.org/wiki/Shebang_(Unix)).

Añadele a tu archivo una linea al principio que diga esto (manten en mente que
esto no es javascript, es bash y no sera ejecutado por node)

```bash
#! /usr/bin/env node
```
