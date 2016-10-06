# 2. Leer argumentos del command line

En Node es acceder a los argumentos que le pasó el usuario al programa. Se puede
hacer directamente con `process.argv`, pero eso significa que el usuario tendrá
que memorizarse que argumentos requiere el programa y en que orden.

Existen muchos módulos para facilitar el proceso, nosotros usaremos
[commander.js](https://github.com/tj/commander.js/). Este módulo te deja
especificar los argumentos que usará tu programa de un modo más simple.

Usa la función [option](https://github.com/tj/commander.js/#option-parsing) de
commander para especificar que `buscar-issues` tiene que recibir un argumento
`-r` o `--repo` que sea el nombre del usuario y repo (por ejemplo
juancaicedo/buscar-issues). Después lee el repo desde commander y imprímelo a la
pantalla.
