alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

while (chute != numeroSecreto) {
    console.log(`Voce errou!`);
}
if (chute == numeroSecreto) {
    console.log(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    console.log("Fim de jogo");
}