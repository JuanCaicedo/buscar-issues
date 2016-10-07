# 3. Interactuar con el usuario

Para recibir inputs del usuario de un modo más activo, usaremos otro módulo
llamado [Inquirer.js](https://github.com/sboudrias/Inquirer.js). Inquirer te
deja ponerle mensajes al usuario y grabar su respuestas.

Si el usuario no le pasa un repo a la aplicación, utiliza la función `prompt` de
inquirer para preguntarles que repo quieren.

Inquirer usa promesas. Acuérdate de poner una función de `catch` al final de las
cadenas de promesas para coger los errores.

Al final deberías poder ejecutar `$ buscar-issues`, ver un mensaje pidiendote un
repo, y decirle `spanishdict/example-dfp-line-item-generator`.
