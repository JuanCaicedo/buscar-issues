# 6. Leer multiples repos desde stdin

La mayoría de aplicaciónes de Unix pueden recibir datos o por argumentos o desde
stdin. Esto es muy importante, hace que tus aplicaciónes puedan interactuar con
otras aplicaciónes para formar programas más complejos, como piezas de lego.

Un modo de leer de stdin es con el módulo `readline`, el cual viene incluido con
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
