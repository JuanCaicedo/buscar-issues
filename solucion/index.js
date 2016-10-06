#! /usr/bin/env node
const commander = require('commander');

function leerArgumentos(args) {
   return commander
    .option('-r, --repo <user/repo>', 'El nombre de un repo de GitHub')
    .parse(args);
}

function imprimir(programa) {
  console.log(programa.repo);
}

function main() {
  Promise.resolve(process.argv)
    .then(leerArgumentos)
    .then(imprimir);
}

if (require.main === module) {
  main();
}
