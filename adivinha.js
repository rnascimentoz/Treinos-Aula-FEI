let numeroSecreto = Math.floor(Math.random() * 101);

function verificar() {
  const palpite = Number(document.getElementById("palpite").value);
  const mensagem = document.getElementById("mensagem");

  if (palpite < 0 || palpite > 100 || isNaN(palpite)) {
    mensagem.textContent = "Digite um número válido entre 0 e 100!";
    return;
  }

  if (palpite < numeroSecreto) {
    mensagem.textContent = "O número secreto é MAIOR!";
  } else if (palpite > numeroSecreto) {
    mensagem.textContent = "O número secreto é MENOR!";
  } else {
    mensagem.textContent = "🎉 Você acertou!";
    document.body.style.backgroundColor = "green";
  }
}