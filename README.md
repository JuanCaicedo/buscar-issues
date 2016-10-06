# 6. Leer multiples repos desde stdin

La mayoría de aplicaciónes de Unix pueden recibir datos o por argumentos o desde
stdin. Esto es muy importante, hace que tus aplicaciónes puedan interactuar con
otras aplicaciónes para formar programas más complejos, como piezas de lego.


Primero toca determinar si el programa esta recibiendo datos por pipe (`|`) o
por argumentos. Esto lo puedes revisar con
[process.stdin.isTTY](https://nodejs.org/dist/latest-v6.x/docs/api/process.html#process_tty_terminals_and_process_stdout).
Si este es `true`, puedes ejecutar el codigo que ya tienes. Si no, haz lo
siguiente.

Un modo de leer de stdin es con el módulo `readline`, el cual viene incluido con
node. Los docs estan
[aquí](https://nodejs.org/dist/latest-v4.x/docs/api/readline.html).

Crea un interfaz que tenga `input: process.stdin`. Escucha cada evento de tipo
`'line'`. El argumento que le pasará ese evento a su listener es el nombre de un
repo. Usa las mismas funciones que escribiste antes para buscar los issues de
ese repo y imprimirlos a la pantalla.

Puedes ensayar esto con un solo repo haciendo

```bash
$ echo "spanishdict/example-dfp-line-item-generator" | gh-pr
```

Y para varios repos

```bash
$ cat repos.txt | gh-pr
```
