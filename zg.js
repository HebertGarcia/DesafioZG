// A variável "numero" é criada e recebe o valor convertido para inteiro do conteúdo do elemento HTML com o id "numero". Isso é feito usando a função "parseInt"
function reproduzir() {
  const numero = parseInt(document.getElementById("numero").value);
  
  // Verificar se o número é válido (Se o número for "NaN" (não é um número) ou menor ou igual a zero)
  if (isNaN(numero) || numero <= 0) {
    document.getElementById("resultado").innerHTML = "Número inválido de patinhos.";
    return;
  }

  // Limpar a tela (O elemento HTML com o id "resultado" tem o seu conteúdo limpo (tornando-o vazio), usando a propriedade "innerHTML" e atribuindo uma string vazia)
  document.getElementById("resultado").innerHTML = "";

  //É iniciado um loop "for" que vai de variável "numero" até 1, decrementando (diminuindo i--) "i" a cada iteração.
  for (let i = numero; i > 0; i--) {
    const linha1 = `${i} ${i === 1 ? 'patinho' : 'patinhos'} ${i === 1 ? 'foi' : 'foram'} passear`; // Muda a gramática de acordo com o número de patinhos informados e altera o texto de singular para plural (Ex: 1 patinho foi passear ou 2 patinhos foram passear)
    const linha2 = "Além das montanhas para brincar";
    const linha3 = "A mamãe gritou: Quá, quá, quá, quá";
    const linha4 = i > 1 ? `Mas só ${i - 1} ${i === 2 ? 'patinho voltou de lá' : 'patinhos voltaram de lá'}.` : ""; //Subtrai um patinho a cada iteração e quando chega no 1 (Ex: 3, 2, 1) sai da iteração e também altera o texto de singular para plural (Ex: Mas só 1 patinho voltou de lá ou 2 patinhos voltaram de lá)
  
    
    // Exibir as linhas na tela (Isso é feito adicionando a string formatada usando a propriedade "innerHTML" e o operador "+="", que concatena as strings)
    document.getElementById("resultado").innerHTML += `<p>${linha1}</p>`;
    document.getElementById("resultado").innerHTML += `<p>${linha2}</p>`;
    document.getElementById("resultado").innerHTML += `<p>${linha3}</p>`;
    if (linha4 !== "") { // Se linha4 não for vazia, linha4 será exibida no elemento HTML com o id "resultado".
      document.getElementById("resultado").innerHTML += `<p>${linha4}</p>`;
    }
  }
  
  //Após o loop "for", são criadas mais quatro variáveis de texto
  const linha5 = "A mamãe patinha foi procurar";
  const linha6 = "Além das montanhas na beira do mar";
  const linha7 = "A mamãe gritou: Quá, quá, quá, quá";
  const linha8 = numero === 1 ? 'E 1 patinho voltou de lá.' : `E os ${numero} patinhos voltaram de lá.`; // Altera o texto de singular para plural (Ex: E 1 patinho voltou de lá ou 2 patinhos voltaram de lá)

  // Exibir as linhas das últimas quatro variáveis na tela.
  document.getElementById("resultado").innerHTML += `<p>${linha5}</p>`;
  document.getElementById("resultado").innerHTML += `<p>${linha6}</p>`;
  document.getElementById("resultado").innerHTML += `<p>${linha7}</p>`;
  document.getElementById("resultado").innerHTML += `<p>${linha8}</p>`;
}
