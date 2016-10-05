# Antes de empezar

Deberías tener un systema con bash. Puede ser Mac o Linux, o Windows 10 con
[bash habilitado](http://stackoverflow.com/questions/36352627/how-to-enable-bash-in-windows-10-developer-preview).

Deberías tener installado node.js v4+. Si no lo tiene,
[descárgalo aquí](https://nodejs.org/en/download/).

```bash
$ git clone https://github.com/JuanCaicedo/buscar-issues.git
$ npm install
```

Debrías entender como funcionan
[las promises](http://bluebirdjs.com/docs/why-promises.html).

# 1. Hello-world

Has un archivo `index.js` que escriba `'hello world'` en la terminal.

#### Hashbang/shebang

En Unix, todo archivo puede tener una linea al comienzo que le dice al systema
como ejecutarlo. Si quieres, puedes [leer más aquí](https://en.wikipedia.org/wiki/Shebang_(Unix)).

Añadele a tu archivo una linea al principio que diga esto (manten en mente que
esto no es javascript, es bash y no sera ejecutado por node)

```bash
#! /usr/bin/env node
```

Ahora puedes ejecutar `$ ./index.js`.

#### npm bin y npm link

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

#### Possible error

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

# 2. Leer argumentos del command line

En Node es acceder a los argumentos que le pasó el usuario al programa. Se puede
hacer directamente con `process.argv`, pero eso significa que el usuario tendrá
que memorizarse que argumentos requiere el programa y en que orden.

Existen muchos módulos para facilitar el proceso, nosotros usaremos
[commander.js](https://github.com/tj/commander.js/). Este modulo te deja
especificar los argumentos que usará tu programa de un modo más simple.

Usa la función [option](https://github.com/tj/commander.js/#option-parsing) de
commander para especificar que `buscar-issues` tiene que recibir un argumento
`-r` o `--repo` que sea el nombre del usario y repo (por ejemplo
juancaicedo/buscar-issues). Después lee el repo desde commander y imprímelo a la
pantalla.

# 3. Interactuar con el usuario

Para recibir inputs del usuario de un modo más activo, usaremos otro modulo
llamado [Inquirer.js](https://github.com/sboudrias/Inquirer.js). Inquirer te
deja ponerle mensajes al usuario y grabar su respuestas.

Si el usuario no le pasa un repo a la aplicación, utiliza la función `prompt` de
inquirer para preguntarles que repo quieren.

Inquirer usa promesas.

# 4. Validar argumentos

Aun existe la posibilidad de que el usuario no le de un repo al programa. Si le
dan una respuesta en blanco a inquirer.

En node se puede usar la funcion `process.exit()` para terminar la ejecución de
un programa. Este methodo functiona igual que el `exit` de Unix. Pasarle un
valor de `0` significa que el programa termino sin ningun problema, y un valor
de `1` significa que hubo algun error.

Después de recibir una respuesta de inquirer, revisa que el usuario pasó un
valor para repo. Si no, sal del processo con `1` y usa `console.error` para
decirle al usuario que el repo es necessario.

# 5. Buscar los issues en github

Ahora que estamos seguros que tendremos un repo, podemos usar el API de github
para buscar todos los issues de ese repo. En ves de usar el API directamente,
se puede utilizar el módulo
[node-github](https://github.com/mikedeboer/node-github).

Existe una función
[issues.getForRepo](http://mikedeboer.github.io/node-github/#api-issues-getForRepo)
que busca las issues (recibe un user y un repo). Si no le pasas un callback, te
dará una promesa. La respuesta sera un array de objetos.

En vez de escribir el valor de `repo` a la pantalla, pasaselo a node-github para
buscar los issues de ese repositorio. Tendras que separar `repo` en dos partes
(user y repo), lo cual puedes hacer usando la función `split()` de un string.

Luego usa la función `map` de un array para sacar solo el título de cada issue
(la propiedad se llama `title`).

Finalmente, escribe todos los títulos a la pantalla. En Unix, varios resultados
deben estar separados por el carácter de nueva linea (\n). Puedes o usar otro
`map` con `console.log`, o puedes usar la función `join()` de un array.

# 6. Leer multiples repos desde stdin

La mayoría de aplicaciónes de Unix puden recibir datos o por argumentos o desde
stdin. Esto es muy importante, hace que tus aplicaciónes puedan interactuar con
otras aplicaciónes para formar programas más complejos, como piezas de lego.

Un modo de leer de stdin es con el modulo `readline`, el cual viene incluido con
node. Los docs estan
[aquí](https://nodejs.org/dist/latest-v4.x/docs/api/readline.html).

Crea un interfaz con `input:process.stdin`. Escucha cada evento tipo `'line'`.
El argumento que le pasará ese evento a su listener es el nombre de un repo. Usa
las mismas funciones que escribiste antes para buscar los issues de ese repo y
imprimirlos a la pantalla.

Puedes ensayar esto con un solo repo haciendo

```bash
$ echo "spanishdict/example-dfp-line-item-generator" | gh-pr
```

Y para varios repos

```bash
$ cat repos.txt | gh-pr
```
