#! /usr/bin/env node
'use strict';
const GitHubApi = require('github');
const commander = require('commander');
const inquirer = require('inquirer');

function leerArgumentos(args) {
   return commander
    .option('-r, --repo <user/repo>', 'El nombre de un repo de GitHub')
    .parse(args);
}

function preguntarRepoSiFalta(programa) {
  let repo = programa.repo;

  if(!programa.repo) {
    return inquirer.prompt([{
        name: 'repo',
        message: 'Que repo te interesa?'
      }])
      .then(function(respuesta) {
        return respuesta.repo;
      });
  }

  return repo;
}

function validarRepo(repo) {
  if(!repo) {
    console.error('Por favor di cual repo te interesa');
    process.exit(1);
  }
  return repo;
}

function buscarIssues(repo) {
  const partes = repo.split('/');
  const github = new GitHubApi();
  return github.issues.getForRepo({
    user: partes[0],
    repo: partes[1]
  });
}

function soloTitulos(issuesCompletos) {
  return issuesCompletos.map(issue => issue.title);
}

function imprimirIssues(issues) {
  issues.map(x => console.log(x));
}

function cogerErrores(error) {
  console.error('Hubo un error inesperado!');
  console.error('Por favor mándale un mensaje a los desarrolladores con:');
  console.error(error.stack);
}

function main() {
  Promise.resolve(process.argv)
    .then(leerArgumentos)
    .then(preguntarRepoSiFalta)
    .then(validarRepo)
    .then(buscarIssues)
    .then(soloTitulos)
    .then(imprimirIssues)
    .catch(cogerErrores);
}

if (require.main === module) {
  main();
}
