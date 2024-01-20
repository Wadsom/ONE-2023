

searchTag('h1', ' Jogo do número secreto');
searchTag('p', 'Escolha um número entre 1 e 10');
const num = document.querySelector('input').value;
function searchTag(tag, text) {
               let nametag = document.querySelector(tag);
               nametag.innerHTML = text;
}
let numSecret = parseInt(Math.random * 10 + 1);
let sintaxe = tentativas > 1 ? "tentativas" : "tentativa";
function verificarChute() {
               if (numSecret != num) {

                              alert('Tente novamente!');
               }

}
