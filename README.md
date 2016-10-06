# 4. Validar argumentos

Aun existe la posibilidad de que el usuario no le de un repo al programa. Si le
dan una respuesta en blanco a inquirer.

En node se puede usar la función `process.exit()` para terminar la ejecución de
un programa. Este método funciona igual que el `exit` de Unix. Pasarle un
valor de `0` significa que el programa terminó sin ningun problema, y un valor
de `1` significa que hubo algún error.

Después de recibir una respuesta de inquirer, revisa que el usuario pasó un
valor para repo. Si no, sal del processo con `1` y usa `console.error` para
decirle al usuario que el repo es necesario.
