/* Video 3
let saludo = 'hola mundo';
console.log(saludo);

let elemento;
elemento = document;
elemento = document.head;
elemento = document.body;
elemento = document.title;
console.log(elemento);
*/

/* Video 4
let elemento;
elemento = window;
console.log(elemento);

let elemento;
elemento = document.querySelector('h2');
elemento = document.querySelector('title');
elemento = document.querySelector('.subtitulo');
elemento = document.styleSheets;
elemento = document.links;
console.log(elemento);
*/

/* Video 4
const elemento = document.getElementById('t-cursos');
const elemento = document.getElementById('mensajes');
const elemento = document.getElementsByClassName('list');
console.log(elemento);

const padre = document.querySelector('ul');
console.log(padre);
console.log(padre.childElementCount);
console.log(padre.children);
console.log(padre.children[1]);
console.log(padre.firstElementChild);
console.log(padre.lastElementChild);

const abuelo = document.querySelector('ul.listas-cursos > li.list');
console.log(abuelo);
console.log(abuelo.parentElement);
console.log(abuelo.parentElement.parentElement);
*/

const hermanos = document.querySelector('ul.listas-cursos > li.list');
console.log(hermanos.nextElementSibling);
