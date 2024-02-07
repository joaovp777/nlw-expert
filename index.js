const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      resposta: [
        "define",
        "var",
        "let",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console do navegador?",
      resposta: [
        "print()",
        "console.log()",
        "display()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para atribuição em JavaScript?",
      resposta: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      resposta: [
        "//",
        "/* */",
        "'",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de comparar duas variáveis em JavaScript?",
      resposta: [
        "equal()",
        "compare()",
        "==",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      resposta: [
        "toInt()",
        "parseInt()",
        "convertInt()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      resposta: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual símbolo é usado para acessar os métodos e propriedades de um objeto em JavaScript?",
      resposta: [
        ".",
        "->",
        "::",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a estrutura de controle usada para tomar decisões em JavaScript?",
      resposta: [
        "if/else",
        "for",
        "switch",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      resposta: [
        "function myFunction()",
        "declare function myFunction()",
        "def myFunction()",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de ' + totalDePerguntas
  
  //loop ou laco de repeticao 
  for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let resposta of item.resposta){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.resposta.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => { 
       const estaCorreta = event.target.value == item.correta // true
       
       corretas.delete(item)
       if(estaCorreta){
         corretas.add(item)
       }
  
       mostrarTotal.textContent = corretas.size + 'de ' + totalDePerguntas
     }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela 
  quiz.appendChild(quizItem)
  }