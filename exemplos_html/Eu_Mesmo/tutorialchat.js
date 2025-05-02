// Tutorial Completo de JavaScript

// =====================
// 1. Introdução ao JavaScript
// =====================
// JavaScript (JS) é uma linguagem de programação usada principalmente para tornar páginas web interativas. Pode ser usada no navegador (front-end) ou no servidor (back-end, ex: Node.js).

// =====================
// 2. Variáveis e Constantes
// =====================
let nome = "João"; // pode ser alterado
typeof nome; // string

const idade = 30; // constante, não pode ser alterada
var cidade = "São Paulo"; // não recomendado hoje em dia

// =====================
// 3. Tipos de Dados
// =====================
let numero = 42;             // number
let texto = "Ola";          // string
let verdadeiro = true;      // boolean
let lista = [1, 2, 3];      // array
let objeto = { nome: "Ana", idade: 25 }; // objeto
let indefinido = undefined; // undefined
let nulo = null;            // null

// =====================
// 4. Operadores
// =====================
// Aritméticos: +, -, *, /, %, **
// Comparativos: ==, ===, !=, !==, >, <, >=, <=
// Lógicos: &&, ||, !

// =====================
// 5. Estruturas de Controle
// =====================
if (idade > 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// switch
switch (cidade) {
  case "São Paulo":
    console.log("Paulista");
    break;
  case "Rio":
    console.log("Carioca");
    break;
}

// while, for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// =====================
// 6. Funções
// =====================
function somar(a, b) {
  return a + b;
}

const subtrair = (a, b) => a - b; // arrow function

// =====================
// 7. Objetos e Arrays
// =====================
let pessoa = {
  nome: "Lucas",
  idade: 22,
  falar: function () {
    console.log("Oi, eu sou " + this.nome);
  },
};

pessoa.falar();

let numeros = [1, 2, 3];
numeros.push(4); // adiciona
numeros.pop();   // remove o último

// =====================
// 8. Funções de Alta Ordem
// =====================
numeros.map(n => n * 2); // transforma cada elemento
numeros.filter(n => n > 1); // filtra elementos

// =====================
// 9. Manipulação do DOM (Front-end)
// =====================
// document.getElementById, querySelector
let titulo = document.querySelector("h1");
titulo.textContent = "Novo Título";

// Eventos
let botao = document.getElementById("btn");
botao.addEventListener("click", () => {
  alert("Botão clicado!");
});

// =====================
// 10. JSON
// =====================
let json = JSON.stringify(pessoa); // objeto para string JSON
let obj = JSON.parse(json); // string JSON para objeto

// =====================
// 11. Promises e async/await (Assíncrono)
// =====================
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function executar() {
  console.log("Esperando...");
  await esperar(1000);
  console.log("Pronto!");
}

executar();

// =====================
// 12. Módulos (import/export)
// =====================
// export const minhaFuncao = () => {}
// import { minhaFuncao } from './modulo.js'

// =====================
// 13. Boas Práticas
// =====================
// - Use const e let (evite var)
// - Nomeie variáveis claramente
// - Separe lógica em funções reutilizáveis
// - Comente códigos complexos
// - Evite repetições (DRY - Don't Repeat Yourself)

// =====================
// 14. Ferramentas Comuns
// =====================
// - ESLint (padroniza)
// - Prettier (formatação)
// - Babel (transpila)
// - Webpack (bundler)

// =====================
// 15. Onde Usar?
// =====================
// - Front-end: React, Vue, Angular
// - Back-end: Node.js
// - Mobile: React Native
// - Desktop: Electron
// - APIs: Express.js

// =====================
// Fim do Tutorial
// =====================
// Agora é só praticar: crie projetos simples, experimente no console do navegador ou use plataformas como JSFiddle, CodePen e Replit para testar ideias.
