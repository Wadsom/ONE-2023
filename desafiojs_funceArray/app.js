let nSorteados = [];


function searchTag(tag, text) {
               let nametag = document.querySelector(tag);
               nametag.innerHTML = text;
               responsiveVoice.speak(text, 'Brazilian Portuguese Female', { rate: 1.2 });
}
searchTag('h1', ' Jogo do número secreto');
searchTag('p', 'Escolha um número entre 1 e 10');
function numRandom() {
               let num = parseInt(Math.random() * 10 + 1);
               let quantidade = nSorteados.length;
               if (quantidade == 3) {
                              nSorteados = [];
               }
               if (nSorteados.includes(num)) {
                              return numRandom();
               } else {
                              nSorteados.push(num);
                              return num;
               }

}
let numSecret = numRandom();
let btnNewGame = document.getElementById('reiniciar');
function newGame() {
               searchTag('h1', ' Jogo do número secreto');
               searchTag('p', 'Escolha um número entre 1 e 10');
               return numSecret = numRandom();
}
let tentativas = 0;
function verificarChute() {
               tentativas++;
               let chute = document.querySelector('input').value;
               if (chute == numSecret) {
                              searchTag('h1', "Acertou");
                              let sintaxe = tentativas > 1 ? "tentativas" : "tentativa";
                              let msg = `Parabéns, você acertou em ${tentativas} ${sintaxe}`;
                              searchTag('p', msg);

               } else {
                              if (numSecret < chute) {
                                             searchTag('p', 'Número é menor');
                              } else if (numSecret > chute) {
                                             searchTag('p', 'Número é maior');
                              }
               }
               chute = document.querySelector('input');
               chute.value = '';
}
console.log(nSorteados.length);
