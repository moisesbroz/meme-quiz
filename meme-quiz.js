//O código está organizado em seções
//Os comentários referentes as seções não vão possuir nenhuma linha de código na linha diretamente acima deles.
//Os comentários referentes ao propósito de uma variável (array e objetos inclusos) ou função vão estar na mesma linha em que foram escritos ou uma linha acima
//
//variáveis

var title = window.document.getElementById('a')

var level = window.document.body

var buttons = window.document.getElementById('buttons')
//intruções e perguntas dos níveis
const question = [null, "1", "2", "3"]
//número de botões no nível
var numberOfButtons = 4

//funções
//troca o título do jogo pela pergunta
function titleSet() {
	title.outerHTML = '<h1 id="a">a</h1>'
}
//adiciona o número do nível atual
function levelSet() {
	level.innerHTML = '1' + window.document.body.innerHTML
}
//cria os botões no modo de jogo iniciado
function buttonPlacer(n) {
	buttons.innerHTML = '<button></button>'
	for (let i=1; i<n; i++) {
		buttons.innerHTML = buttons.innerHTML + '<button></button>'
	}
}
//ativa todas as funções que iniciam o jogo
function startGame() {
	titleSet()
	levelSet()
}
//muda o nível atual para o próximo
function nextQuestion(i) {
	title.innerText = question[i]
}
//verifica se o jogador acertou
function verifier(isCorect) {
	if(isCorect) {
		nextQuestion()
	}
}
//sla \('<')/