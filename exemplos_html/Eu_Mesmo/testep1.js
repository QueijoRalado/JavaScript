var altura_v = 2.67 // variável é um dado que pode mudar
let idade_v = 68 // let é um dado que pode ser usado dentro da função que foi criado
const nome_v = "Felipe Sergipe" // const é um dado que não pode ser transformado, ele é constante sempre
bv_v = true // dados booleanos podem armazenar as informações "true" e "false", indicando que certa informação pode ser verdadeira ou falsa
jogos_que_gosta_v = ["Hollow Knight", " Curse of the Dead Gods", " Celeste", " Moonlighter", " Rhythm Doctor"]

if (idade_v>=18){
    console.log("parabéns, você já pode ser preso!")
}

for (item of jogos_que_gosta_v){
    console.log(item)
}

console.log(jogos_que_gosta_v) // isso aqui "printa" qualquer coisa que estiver dentro dos parênteses e mostra pra mim no console da página, quando clico em "inspecionar"

alert("Ana Júlia volta pra mim") //isso aqui abre uma mensagem na tela

// -----------------------------------------------------------------------------------------------------------------

id_nome = document.getElementById("nome")
id_idade = document.getElementById("idade")
id_altura = document.getElementById("altura")
id_jogos = document.getElementById("jogos") // esse é o exemplo 1, ele faz a mesma coisa que o de baixo

id_nome.textContent =  nome_v
id_idade.textContent = idade_v
id_altura.textContent = altura_v
id_jogos.textContent = jogos_que_gosta_v

// -----------------------------------------------------------------------------------------------------------------

document.getElementById("nome").textContent = nome_v // getElementById pega um elemento html através de um ID que eu coloco nele, é tipo um RG do elemento que eu decido qual é, e
document.getElementById("idade").textContent = idade_v // através disso, eu posso mudar coisas no elemento por JS.
document.getElementById("altura").textContent = altura_v
document.getElementById("jogos").textContent = jogos_que_gosta_v // esse "textContent" pode ser utilizado para mudar diretamente o conteúdo de texto dentro da variável

// -----------------------------------------------------------------------------------------------------------------

let id_butao = document.getElementById("butao")
id_butao.addEventListener("click", botao_apertado)

function botao_apertado(){
    alert(bv_v)
}