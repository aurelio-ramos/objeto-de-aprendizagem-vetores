window.OA_DATA = {
  "objectives": [
    "Entender o que é um vetor em programação.",
    "Diferenciar variável simples e vetor.",
    "Identificar índice e conteúdo de um vetor.",
    "Declarar vetores com nome, tamanho e tipo de dado.",
    "Usar vetores iniciando no índice 0.",
    "Ler dados e armazenar em um vetor.",
    "Mostrar dados armazenados em um vetor.",
    "Usar repetição junto com vetor.",
    "Resolver problemas simples usando soma, média, maior e menor valor.",
    "Relacionar dois vetores, como nomes e notas de estudantes."
  ],
  "route": [
    {
      "label": "Módulo 1",
      "target": "#modulo-1",
      "title": "Por que precisamos de vetores?",
      "stage": "Começando pelo problema"
    },
    {
      "label": "Módulo 2",
      "target": "#modulo-2",
      "title": "Índice e conteúdo do vetor",
      "stage": "Entendendo as posições"
    },
    {
      "label": "Módulo 3",
      "target": "#modulo-3",
      "title": "Declarando um vetor",
      "stage": "Criando a estrutura"
    },
    {
      "label": "Simulador 1",
      "target": "#simulador-1",
      "title": "Criando Vetores",
      "stage": "Prática após declarar vetores"
    },
    {
      "label": "Módulo 4",
      "target": "#modulo-4",
      "title": "Lendo dados para dentro de um vetor",
      "stage": "Preenchendo o vetor"
    },
    {
      "label": "Módulo 5",
      "target": "#modulo-5",
      "title": "Mostrando os dados de um vetor",
      "stage": "Exibindo os valores"
    },
    {
      "label": "Simulador 2",
      "target": "#simulador-2",
      "title": "Percorrendo vetores com PARA",
      "stage": "Prática após mostrar dados"
    },
    {
      "label": "Módulo 6",
      "target": "#modulo-6",
      "title": "Somando valores de um vetor",
      "stage": "Calculando total"
    },
    {
      "label": "Módulo 7",
      "target": "#modulo-7",
      "title": "Calculando média com vetor",
      "stage": "Calculando média"
    },
    {
      "label": "Módulo 8",
      "target": "#modulo-8",
      "title": "Maior e menor valor em um vetor",
      "stage": "Comparando valores"
    },
    {
      "label": "Módulo 9",
      "target": "#modulo-9",
      "title": "Usando dois vetores relacionados",
      "stage": "Ligando informações"
    },
    {
      "label": "Síntese",
      "target": "#sintese",
      "title": "O que aprendemos?",
      "stage": "Revisão"
    },
    {
      "label": "Avaliação",
      "target": "#avaliacao",
      "title": "Controle de gastos semanais",
      "stage": "Desafio final"
    },
    {
      "label": "Simulador 3",
      "target": "#simulador-final",
      "title": "Soma, média, maior e menor",
      "stage": "Prática livre"
    }
  ],
  "modules": [
    {
      "id": "modulo-1",
      "number": 1,
      "title": "Por que precisamos de vetores?",
      "stage": "Começando pelo problema",
      "guidingQuestion": "Como guardar vários dados parecidos sem se perder?",
      "explanation": [
        "Uma variável simples guarda apenas um valor por vez. Por exemplo: idade ← 25. Nesse caso, a variável simples idade guarda apenas um número.",
        "Agora pense em uma turma com 5 estudantes. Se quisermos guardar a idade de todos, poderíamos criar idade1, idade2, idade3, idade4 e idade5. Funciona, mas não é prático.",
        "Com vetor, podemos guardar tudo em uma única estrutura chamada idades, com várias posições: idades[0], idades[1], idades[2], idades[3] e idades[4].",
        "Neste objeto, todo vetor começa no índice 0. Assim, um vetor com 5 posições vai do índice 0 até o índice 4.",
        "Pense no vetor como um armário com gavetas numeradas. O nome do armário é o nome do vetor. O número da gaveta é o índice. O valor guardado dentro da gaveta é o conteúdo."
      ],
      "concept": "Vetor é uma variável que guarda vários valores do mesmo tipo, cada um em uma posição identificada por um índice. Aqui, o primeiro índice sempre é 0.",
      "tables": [
        {
          "title": "Analogia do armário",
          "headers": [
            "Gaveta / índice",
            "Conteúdo"
          ],
          "rows": [
            [
              "0",
              "20"
            ],
            [
              "1",
              "35"
            ],
            [
              "2",
              "28"
            ],
            [
              "3",
              "42"
            ],
            [
              "4",
              "31"
            ]
          ]
        }
      ],
      "visual": {
        "label": "idades",
        "values": [
          "20",
          "35",
          "28",
          "42",
          "31"
        ]
      },
      "codes": [
        {
          "title": "Sem vetor",
          "code": "idade1 ← 20\nidade2 ← 35\nidade3 ← 28\nidade4 ← 42\nidade5 ← 31"
        },
        {
          "title": "Com vetor iniciando em 0",
          "code": "idades[0] ← 20\nidades[1] ← 35\nidades[2] ← 28\nidades[3] ← 42\nidades[4] ← 31"
        }
      ],
      "activity": {
        "title": "Atividade de reforço — Módulo 1",
        "prompt": "Observe os dados: Segunda: 30, Terça: 32, Quarta: 31, Quinta: 29, Sexta: 28.",
        "questions": [
          {
            "type": "choice",
            "prompt": "Esses dados podem ser guardados em um vetor?",
            "options": [
              "Sim, porque são valores do mesmo tipo.",
              "Não, porque são de dias diferentes.",
              "Não, porque vetor guarda apenas um valor."
            ],
            "correct": 0,
            "feedback": "Correto: são temperaturas, ou seja, dados numéricos do mesmo tipo."
          },
          {
            "type": "choice",
            "prompt": "Qual nome de vetor combina melhor com esses dados?",
            "options": [
              "temperaturas",
              "nomes",
              "aprovado"
            ],
            "correct": 0,
            "feedback": "O nome temperaturas representa bem os valores guardados."
          },
          {
            "type": "choice",
            "prompt": "Quantas posições esse vetor teria?",
            "options": [
              "4 posições",
              "5 posições",
              "6 posições"
            ],
            "correct": 1,
            "feedback": "São 5 valores, um para cada dia listado."
          },
          {
            "type": "choice",
            "prompt": "Se o vetor começa em 0, quais são os índices?",
            "options": [
              "1, 2, 3, 4 e 5",
              "0, 1, 2, 3 e 4",
              "0, 2, 4, 6 e 8"
            ],
            "correct": 1,
            "feedback": "Um vetor com 5 posições começa em 0 e termina em 4."
          },
          {
            "type": "choice",
            "prompt": "Que tipo de dado esse vetor guardaria?",
            "options": [
              "caractere",
              "lógico",
              "inteiro ou real"
            ],
            "correct": 2,
            "feedback": "Temperaturas são números, então podem ser inteiro ou real."
          }
        ]
      }
    },
    {
      "id": "modulo-2",
      "number": 2,
      "title": "Índice e conteúdo do vetor",
      "stage": "Entendendo as posições",
      "guidingQuestion": "O número da gaveta é a mesma coisa que o valor guardado?",
      "explanation": [
        "O índice indica a posição do vetor. O conteúdo é o valor guardado naquela posição.",
        "Quando escrevemos notas[2], estamos apontando para a posição 2 do vetor notas.",
        "O computador não mostra o número 2. Ele mostra o valor guardado dentro da posição 2.",
        "Esse é um ponto essencial: índice é endereço; conteúdo é o dado armazenado."
      ],
      "concept": "Não confunda posição com valor. Em notas[2], o número 2 é o índice; a nota guardada ali é o conteúdo.",
      "tables": [
        {
          "title": "Notas guardadas",
          "headers": [
            "Índice",
            "Conteúdo"
          ],
          "rows": [
            [
              "notas[0]",
              "7.5"
            ],
            [
              "notas[1]",
              "8.0"
            ],
            [
              "notas[2]",
              "6.5"
            ]
          ]
        },
        {
          "title": "Preços de produtos",
          "headers": [
            "Produto",
            "Posição",
            "Preço"
          ],
          "rows": [
            [
              "Produto 0",
              "precos[0]",
              "5.00"
            ],
            [
              "Produto 1",
              "precos[1]",
              "8.50"
            ],
            [
              "Produto 2",
              "precos[2]",
              "12.00"
            ]
          ]
        }
      ],
      "visual": {
        "label": "notas",
        "values": [
          "7.5",
          "8.0",
          "6.5"
        ]
      },
      "codes": [
        {
          "title": "Acessando uma posição",
          "code": "notas[0] ← 7.5\nnotas[1] ← 8.0\nnotas[2] ← 6.5\n\nescreva(notas[1])\n// Saída: 8.0"
        },
        {
          "title": "Outro exemplo",
          "code": "precos[0] ← 5.00\nprecos[1] ← 8.50\nprecos[2] ← 12.00\n\nescreva(precos[2])\n// Saída: 12.00"
        }
      ],
      "activity": {
        "title": "Atividade de reforço — Módulo 2",
        "prompt": "Dado o vetor: idades[0] = 18, idades[1] = 25, idades[2] = 40, idades[3] = 33.",
        "questions": [
          {
            "type": "choice",
            "prompt": "Qual é o conteúdo de idades[2]?",
            "options": [
              "2",
              "25",
              "40",
              "33"
            ],
            "correct": 2,
            "feedback": "idades[2] aponta para a posição 2, cujo conteúdo é 40."
          },
          {
            "type": "choice",
            "prompt": "Qual é o índice onde está guardado o valor 25?",
            "options": [
              "0",
              "1",
              "2",
              "3"
            ],
            "correct": 1,
            "feedback": "O valor 25 está guardado em idades[1]."
          },
          {
            "type": "choice",
            "prompt": "O que será mostrado por escreva(idades[3])?",
            "options": [
              "3",
              "18",
              "25",
              "33"
            ],
            "correct": 3,
            "feedback": "idades[3] contém 33."
          },
          {
            "type": "drag",
            "prompt": "Arraste cada termo para sua explicação correta.",
            "items": [
              {
                "id": "indice",
                "text": "Índice"
              },
              {
                "id": "conteudo",
                "text": "Conteúdo"
              },
              {
                "id": "vetor",
                "text": "Vetor"
              }
            ],
            "targets": [
              {
                "accept": "indice",
                "label": "Número da posição no vetor"
              },
              {
                "accept": "conteudo",
                "label": "Valor guardado em uma posição"
              },
              {
                "accept": "vetor",
                "label": "Estrutura que guarda vários valores do mesmo tipo"
              }
            ],
            "feedback": "Índice localiza; conteúdo é o valor; vetor é a estrutura completa."
          }
        ]
      }
    },
    {
      "id": "modulo-3",
      "number": 3,
      "title": "Declarando um vetor",
      "stage": "Criando a estrutura",
      "guidingQuestion": "Como avisar ao algoritmo que teremos várias posições?",
      "explanation": [
        "Antes de usar um vetor, precisamos declarar três informações: o nome do vetor, a quantidade de posições e o tipo de dado.",
        "O nome deve representar o que será guardado. Exemplo: notas, idades, nomes, precos e temperaturas.",
        "Neste objeto, usamos vetores começando em 0. Na declaração valores : vetor[0..4] de real, temos 5 posições: 0, 1, 2, 3 e 4.",
        "O tipo de dado precisa combinar com o conteúdo: real para notas e preços, inteiro para idades e quantidades, caractere para nomes."
      ],
      "concept": "Exemplo: notas : vetor[0..4] de real cria um vetor chamado notas, com posições de 0 até 4, para guardar 5 números reais.",
      "tables": [
        {
          "title": "Exemplos de declaração",
          "headers": [
            "Necessidade",
            "Declaração"
          ],
          "rows": [
            [
              "Guardar 10 idades",
              "idades : vetor[0..9] de inteiro"
            ],
            [
              "Guardar 5 nomes",
              "nomes : vetor[0..4] de caractere"
            ],
            [
              "Guardar 20 preços",
              "precos : vetor[0..19] de real"
            ]
          ]
        }
      ],
      "visual": {
        "label": "notas",
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ]
      },
      "codes": [
        {
          "title": "Declaração básica",
          "code": "notas : vetor[0..4] de real"
        },
        {
          "title": "Exemplo completo simples",
          "code": "algoritmo \"ExemploVetor\"\n\nvar\n   notas : vetor[0..2] de real\n\ninicio\n   notas[0] <- 7.0\n   notas[1] <- 8.5\n   notas[2] <- 6.0\n\n   escreva(\"Primeira nota: \", notas[0])\n   escreva(\"Segunda nota: \", notas[1])\n   escreva(\"Terceira nota: \", notas[2])\n\nfimalgoritmo"
        }
      ],
      "activity": {
        "title": "Atividade de reforço — Módulo 3",
        "prompt": "Escolha a declaração correta para cada situação. Lembre-se: neste objeto, o vetor começa em 0.",
        "questions": [
          {
            "type": "choice",
            "prompt": "Um vetor para guardar 7 temperaturas deve ser declarado como:",
            "options": [
              "temperaturas : vetor[1..7] de real",
              "temperaturas : vetor[0..6] de real",
              "temperaturas : vetor[0..7] de caractere"
            ],
            "correct": 1,
            "feedback": "Com 7 posições iniciando em 0, os índices vão de 0 até 6."
          },
          {
            "type": "choice",
            "prompt": "Um vetor para guardar 12 vendas mensais deve ir de:",
            "options": [
              "0 até 11",
              "1 até 12",
              "0 até 12"
            ],
            "correct": 0,
            "feedback": "São 12 posições: 0, 1, 2, ..., 11."
          },
          {
            "type": "choice",
            "prompt": "Um vetor de nomes deve usar qual tipo?",
            "options": [
              "real",
              "inteiro",
              "caractere"
            ],
            "correct": 2,
            "feedback": "Nomes são textos, portanto o tipo é caractere."
          },
          {
            "type": "choice",
            "prompt": "Um vetor para 10 quantidades em estoque pode ser:",
            "options": [
              "quantidades : vetor[0..9] de inteiro",
              "quantidades : vetor[0..10] de caractere",
              "quantidades : vetor[1..9] de real"
            ],
            "correct": 0,
            "feedback": "De 0 até 9 temos exatamente 10 posições."
          }
        ]
      }
    },
    {
      "id": "modulo-4",
      "number": 4,
      "title": "Lendo dados para dentro de um vetor",
      "stage": "Preenchendo o vetor",
      "guidingQuestion": "Como preencher várias posições sem repetir muito código?",
      "explanation": [
        "Podemos preencher um vetor posição por posição, mas isso fica repetitivo.",
        "Para evitar repetição desnecessária, usamos o comando para.",
        "O índice i começa em 0 e vai até a última posição do vetor.",
        "Em um vetor com 5 posições, o laço vai de 0 até 4. Assim, o algoritmo preenche notas[0], notas[1], notas[2], notas[3] e notas[4]."
      ],
      "concept": "Usar repetição com vetor permite preencher muitas posições com poucas linhas de código.",
      "tables": [
        {
          "title": "Como o i muda",
          "headers": [
            "Valor de i",
            "Posição acessada"
          ],
          "rows": [
            [
              "0",
              "notas[0]"
            ],
            [
              "1",
              "notas[1]"
            ],
            [
              "2",
              "notas[2]"
            ],
            [
              "3",
              "notas[3]"
            ],
            [
              "4",
              "notas[4]"
            ]
          ]
        }
      ],
      "visual": {
        "label": "notas",
        "values": [
          "?",
          "?",
          "?",
          "?",
          "?"
        ]
      },
      "codes": [
        {
          "title": "Sem repetição",
          "code": "leia(notas[0])\nleia(notas[1])\nleia(notas[2])"
        },
        {
          "title": "Com repetição",
          "code": "para i de 0 ate 4 faca\n   escreva(\"Digite a nota do estudante \", i, \":\")\n   leia(notas[i])\nfimpara"
        },
        {
          "title": "Programa completo",
          "code": "algoritmo \"LerNotas\"\n\nvar\n   notas : vetor[0..4] de real\n   i : inteiro\n\ninicio\n   para i de 0 ate 4 faca\n      escreva(\"Digite a nota do estudante \", i, \":\")\n      leia(notas[i])\n   fimpara\n\nfimalgoritmo"
        }
      ],
      "activity": {
        "title": "Atividade de reforço — Módulo 4",
        "prompt": "Monte mentalmente um algoritmo para ler o preço de 4 produtos e guardar no vetor precos.",
        "questions": [
          {
            "type": "choice",
            "prompt": "Qual declaração está correta?",
            "options": [
              "precos : vetor[0..3] de real",
              "precos : vetor[1..4] de caractere",
              "precos : vetor[0..4] de inteiro"
            ],
            "correct": 0,
            "feedback": "Quatro preços iniciando em 0 usam índices 0, 1, 2 e 3."
          },
          {
            "type": "choice",
            "prompt": "Qual repetição percorre as 4 posições?",
            "options": [
              "para i de 1 ate 4 faca",
              "para i de 0 ate 3 faca",
              "para i de 0 ate 4 faca"
            ],
            "correct": 1,
            "feedback": "Para 4 posições iniciando em 0, o índice vai de 0 até 3."
          },
          {
            "type": "choice",
            "prompt": "Qual comando lê o preço na posição atual?",
            "options": [
              "leia(precos[i])",
              "leia(precos)",
              "leia(i[precos])"
            ],
            "correct": 0,
            "feedback": "precos[i] acessa a posição indicada pelo índice i."
          },
          {
            "type": "drag",
            "prompt": "Arraste os passos para a ordem correta de leitura do vetor.",
            "items": [
              {
                "id": "declarar",
                "text": "Declarar o vetor precos"
              },
              {
                "id": "repetir",
                "text": "Criar repetição de 0 até 3"
              },
              {
                "id": "ler",
                "text": "Ler precos[i]"
              },
              {
                "id": "fim",
                "text": "Finalizar a repetição"
              }
            ],
            "targets": [
              {
                "accept": "declarar",
                "label": "1º passo"
              },
              {
                "accept": "repetir",
                "label": "2º passo"
              },
              {
                "accept": "ler",
                "label": "3º passo"
              },
              {
                "accept": "fim",
                "label": "4º passo"
              }
            ],
            "feedback": "Primeiro declaramos, depois repetimos, lemos cada posição e encerramos a repetição."
          }
        ]
      }
    },
    {
      "id": "modulo-5",
      "number": 5,
      "title": "Mostrando os dados de um vetor",
      "stage": "Exibindo os valores",
      "guidingQuestion": "Depois de guardar os dados, como mostrar tudo na tela?",
      "explanation": [
        "Depois de preencher o vetor, podemos mostrar os valores usando outra repetição.",
        "A lógica é parecida com a leitura: o índice i percorre todas as posições do vetor.",
        "Se o vetor tem 5 posições, mostramos de notas[0] até notas[4].",
        "Isso ajuda a conferir se os dados foram guardados corretamente."
      ],
      "concept": "Para mostrar um vetor, percorremos suas posições e escrevemos o conteúdo de cada uma.",
      "tables": [
        {
          "title": "Exemplo com dados",
          "headers": [
            "Índice",
            "Conteúdo"
          ],
          "rows": [
            [
              "0",
              "7.0"
            ],
            [
              "1",
              "8.5"
            ],
            [
              "2",
              "6.0"
            ],
            [
              "3",
              "9.0"
            ],
            [
              "4",
              "5.5"
            ]
          ]
        }
      ],
      "visual": {
        "label": "notas",
        "values": [
          "7.0",
          "8.5",
          "6.0",
          "9.0",
          "5.5"
        ]
      },
      "codes": [
        {
          "title": "Mostrar valores",
          "code": "para i de 0 ate 4 faca\n   escreva(notas[i])\nfimpara"
        },
        {
          "title": "Programa completo: ler e mostrar notas",
          "code": "algoritmo \"LerMostrarNotas\"\n\nvar\n   notas : vetor[0..4] de real\n   i : inteiro\n\ninicio\n   para i de 0 ate 4 faca\n      escreva(\"Digite a nota do estudante \", i, \":\")\n      leia(notas[i])\n   fimpara\n\n   escreva(\"Notas digitadas:\")\n\n   para i de 0 ate 4 faca\n      escreva(\"Índice \", i, \": \", notas[i])\n   fimpara\n\nfimalgoritmo"
        }
      ],
      "activity": {
        "title": "Atividade de reforço — Módulo 5",
        "prompt": "Você precisa ler a idade de 6 pessoas, guardar em um vetor e mostrar todas as idades.",
        "questions": [
          {
            "type": "choice",
            "prompt": "Quais índices devem ser usados para 6 idades?",
            "options": [
              "0 até 5",
              "1 até 6",
              "0 até 6"
            ],
            "correct": 0,
            "feedback": "Se são 6 posições e começa em 0, o último índice é 5."
          },
          {
            "type": "choice",
            "prompt": "Qual comando mostra a idade da posição atual?",
            "options": [
              "escreva(idades[i])",
              "escreva(i[idades])",
              "escreva(idades) sem índice"
            ],
            "correct": 0,
            "feedback": "idades[i] acessa cada posição do vetor."
          },
          {
            "type": "choice",
            "prompt": "Por que usamos uma repetição para mostrar os dados?",
            "options": [
              "Porque evita escrever um comando para cada posição.",
              "Porque vetor não aceita escrita na tela.",
              "Porque o índice não pode mudar."
            ],
            "correct": 0,
            "feedback": "A repetição percorre as posições automaticamente."
          }
        ]
      }
    },
    {
      "id": "modulo-6",
      "number": 6,
      "title": "Somando valores de um vetor",
      "stage": "Calculando total",
      "guidingQuestion": "Como calcular o total de vários valores guardados?",
      "explanation": [
        "Podemos percorrer o vetor e somar seus valores.",
        "Para isso, usamos uma variável acumuladora. Normalmente ela começa com zero.",
        "A cada posição do vetor, somamos o conteúdo na variável soma.",
        "Exemplo: soma ← soma + notas[i]. Se i vale 2, o algoritmo soma o conteúdo de notas[2]."
      ],
      "concept": "A variável acumuladora guarda o total parcial enquanto o vetor é percorrido.",
      "tables": [
        {
          "title": "Soma de notas",
          "headers": [
            "Índice",
            "Nota"
          ],
          "rows": [
            [
              "0",
              "7.0"
            ],
            [
              "1",
              "8.0"
            ],
            [
              "2",
              "6.0"
            ],
            [
              "Resultado",
              "21.0"
            ]
          ]
        }
      ],
      "visual": {
        "label": "notas",
        "values": [
          "7.0",
          "8.0",
          "6.0"
        ]
      },
      "codes": [
        {
          "title": "Comando principal",
          "code": "soma <- soma + notas[i]"
        },
        {
          "title": "Programa completo: soma das notas",
          "code": "algoritmo \"SomaNotas\"\n\nvar\n   notas : vetor[0..4] de real\n   i : inteiro\n   soma : real\n\ninicio\n   soma <- 0\n\n   para i de 0 ate 4 faca\n      escreva(\"Digite a nota do estudante \", i, \":\")\n      leia(notas[i])\n   fimpara\n\n   para i de 0 ate 4 faca\n      soma <- soma + notas[i]\n   fimpara\n\n   escreva(\"Soma das notas: \", soma)\n\nfimalgoritmo"
        }
      ],
      "activity": {
        "title": "Atividade de reforço — Módulo 6",
        "prompt": "Imagine um vetor gastos com os valores de alimentação durante 7 dias.",
        "questions": [
          {
            "type": "choice",
            "prompt": "Qual declaração está correta?",
            "options": [
              "gastos : vetor[0..6] de real",
              "gastos : vetor[1..7] de caractere",
              "gastos : vetor[0..7] de lógico"
            ],
            "correct": 0,
            "feedback": "São 7 valores reais, com índices de 0 até 6."
          },
          {
            "type": "choice",
            "prompt": "Qual variável normalmente usamos para somar todos os valores?",
            "options": [
              "total ou soma",
              "indiceFinal",
              "texto"
            ],
            "correct": 0,
            "feedback": "total ou soma funciona como acumulador."
          },
          {
            "type": "choice",
            "prompt": "Qual comando acumula o gasto da posição atual?",
            "options": [
              "total ← total + gastos[i]",
              "gastos[i] ← total + i",
              "total ← i + i"
            ],
            "correct": 0,
            "feedback": "O acumulador recebe o valor anterior mais o conteúdo de gastos[i]."
          },
          {
            "type": "choice",
            "prompt": "Antes de começar a soma, total deve receber:",
            "options": [
              "0",
              "1",
              "o último índice"
            ],
            "correct": 0,
            "feedback": "Começamos com total igual a 0 para não interferir na soma."
          }
        ]
      }
    },
    {
      "id": "modulo-7",
      "number": 7,
      "title": "Calculando média com vetor",
      "stage": "Calculando média",
      "guidingQuestion": "Como descobrir um valor médio a partir de vários dados?",
      "explanation": [
        "A média é calculada assim: média = soma dos valores / quantidade de valores.",
        "Se temos 5 notas, somamos as 5 notas e dividimos por 5.",
        "O vetor ajuda porque os valores ficam organizados e podem ser percorridos com repetição.",
        "A média pode ser usada para notas, temperaturas, gastos, preços e outros dados numéricos."
      ],
      "concept": "Para calcular média com vetor, primeiro somamos os valores e depois dividimos pela quantidade de posições.",
      "tables": [
        {
          "title": "Exemplo de média",
          "headers": [
            "Valores",
            "Cálculo"
          ],
          "rows": [
            [
              "7, 8, 6, 9, 5",
              "soma = 35"
            ],
            [
              "Quantidade",
              "5"
            ],
            [
              "Média",
              "35 / 5 = 7"
            ]
          ]
        }
      ],
      "visual": {
        "label": "notas",
        "values": [
          "7",
          "8",
          "6",
          "9",
          "5"
        ]
      },
      "codes": [
        {
          "title": "Programa completo: média da turma",
          "code": "algoritmo \"MediaTurma\"\n\nvar\n   notas : vetor[0..4] de real\n   i : inteiro\n   soma, media : real\n\ninicio\n   soma <- 0\n\n   para i de 0 ate 4 faca\n      escreva(\"Digite a nota do estudante \", i, \":\")\n      leia(notas[i])\n      soma <- soma + notas[i]\n   fimpara\n\n   media <- soma / 5\n\n   escreva(\"Média da turma: \", media)\n\nfimalgoritmo"
        }
      ],
      "activity": {
        "title": "Atividade de reforço — Módulo 7",
        "prompt": "Agora pense em um vetor com 7 temperaturas. Você deseja calcular a média.",
        "questions": [
          {
            "type": "choice",
            "prompt": "Qual fórmula calcula a média?",
            "options": [
              "media ← soma / quantidade",
              "media ← soma + quantidade",
              "media ← quantidade / maior"
            ],
            "correct": 0,
            "feedback": "Média é soma dos valores dividida pela quantidade de valores."
          },
          {
            "type": "choice",
            "prompt": "Se são 7 temperaturas, a divisão deve ser por:",
            "options": [
              "6",
              "7",
              "8"
            ],
            "correct": 1,
            "feedback": "A quantidade de valores é 7."
          },
          {
            "type": "choice",
            "prompt": "Se a soma for 35 e a quantidade for 5, a média será:",
            "options": [
              "5",
              "7",
              "35"
            ],
            "correct": 1,
            "feedback": "35 dividido por 5 é igual a 7."
          }
        ]
      }
    },
    {
      "id": "modulo-8",
      "number": 8,
      "title": "Maior e menor valor em um vetor",
      "stage": "Comparando valores",
      "guidingQuestion": "Como comparar vários valores sem fazer tudo manualmente?",
      "explanation": [
        "Também podemos descobrir o maior e o menor valor guardado em um vetor.",
        "A ideia é considerar o primeiro valor do vetor, no índice 0, como maior e menor no início.",
        "Depois, comparamos com os próximos valores. Se aparecer um valor maior, atualizamos a variável maior. Se aparecer um valor menor, atualizamos a variável menor.",
        "Essa estratégia é útil em muitos contextos: maior preço, menor temperatura, maior nota, menor gasto, maior produção."
      ],
      "concept": "Começar com maior <- valores[0] e menor <- valores[0] evita usar um valor inventado. A referência inicial vem do próprio vetor.",
      "tables": [
        {
          "title": "Temperaturas",
          "headers": [
            "Valores",
            "Resultado"
          ],
          "rows": [
            [
              "30, 32, 28, 35, 29",
              "Maior = 35; Menor = 28"
            ]
          ]
        }
      ],
      "visual": {
        "label": "temperaturas",
        "values": [
          "30",
          "32",
          "28",
          "35",
          "29"
        ]
      },
      "codes": [
        {
          "title": "Programa completo",
          "code": "algoritmo \"MaiorMenorTemperaturas\"\n\nvar\n   temperaturas : vetor[0..4] de real\n   i : inteiro\n   maior, menor : real\n\ninicio\n   para i de 0 ate 4 faca\n      escreva(\"Digite a temperatura do dia \", i, \":\")\n      leia(temperaturas[i])\n   fimpara\n\n   maior <- temperaturas[0]\n   menor <- temperaturas[0]\n\n   para i de 1 ate 4 faca\n      se temperaturas[i] > maior entao\n         maior <- temperaturas[i]\n      fimse\n\n      se temperaturas[i] < menor entao\n         menor <- temperaturas[i]\n      fimse\n   fimpara\n\n   escreva(\"Maior temperatura: \", maior)\n   escreva(\"Menor temperatura: \", menor)\n\nfimalgoritmo"
        }
      ],
      "activity": {
        "title": "Atividade de reforço — Módulo 8",
        "prompt": "Observe as temperaturas: 30, 32, 28, 35, 29.",
        "questions": [
          {
            "type": "choice",
            "prompt": "Qual é o maior valor?",
            "options": [
              "28",
              "32",
              "35"
            ],
            "correct": 2,
            "feedback": "35 é o maior valor da lista."
          },
          {
            "type": "choice",
            "prompt": "Qual é o menor valor?",
            "options": [
              "28",
              "29",
              "30"
            ],
            "correct": 0,
            "feedback": "28 é o menor valor da lista."
          },
          {
            "type": "choice",
            "prompt": "Por que começamos maior e menor com temperaturas[0]?",
            "options": [
              "Porque precisamos de um valor inicial real do próprio vetor.",
              "Porque o índice 0 sempre é o maior.",
              "Porque o índice 0 deve ser ignorado."
            ],
            "correct": 0,
            "feedback": "Usar o primeiro conteúdo do vetor evita começar com um valor inventado."
          },
          {
            "type": "choice",
            "prompt": "Qual comparação atualiza o maior valor?",
            "options": [
              "se temperaturas[i] > maior entao maior ← temperaturas[i]",
              "se temperaturas[i] < maior entao maior ← temperaturas[i]",
              "se i > maior entao maior ← i"
            ],
            "correct": 0,
            "feedback": "Comparamos o conteúdo da posição atual com o maior valor encontrado."
          }
        ]
      }
    },
    {
      "id": "modulo-9",
      "number": 9,
      "title": "Usando dois vetores relacionados",
      "stage": "Ligando informações",
      "guidingQuestion": "Como guardar informações diferentes, mas relacionadas?",
      "explanation": [
        "Às vezes, precisamos guardar informações diferentes, mas relacionadas. Exemplo: nome do estudante e nota.",
        "Como nome é texto e nota é número, não devemos guardar os dois no mesmo vetor homogêneo.",
        "A solução é usar dois vetores: um vetor para nomes e outro para notas.",
        "O índice faz a ligação entre os dados. Se nomes[1] é Carlos, então notas[1] é a nota de Carlos."
      ],
      "concept": "Dois vetores podem se relacionar pelo mesmo índice. A posição 0 de um vetor conversa com a posição 0 do outro vetor.",
      "tables": [
        {
          "title": "Relação entre vetores",
          "headers": [
            "Índice",
            "Nome",
            "Nota"
          ],
          "rows": [
            [
              "0",
              "Ana",
              "8.0"
            ],
            [
              "1",
              "Carlos",
              "6.5"
            ],
            [
              "2",
              "Maria",
              "9.0"
            ]
          ]
        }
      ],
      "visual": {
        "label": "notas",
        "values": [
          "8.0",
          "6.5",
          "9.0"
        ]
      },
      "codes": [
        {
          "title": "Relação por índice",
          "code": "nomes[0] = \"Ana\"\nnotas[0] = 8.0\n\nnomes[1] = \"Carlos\"\nnotas[1] = 6.5"
        },
        {
          "title": "Programa completo: nome, nota e situação",
          "code": "algoritmo \"NomeNotaSituacao\"\n\nvar\n   nomes : vetor[0..4] de caractere\n   notas : vetor[0..4] de real\n   i : inteiro\n\ninicio\n   para i de 0 ate 4 faca\n      escreva(\"Digite o nome do estudante do índice \", i, \":\")\n      leia(nomes[i])\n\n      escreva(\"Digite a nota de \", nomes[i], \":\")\n      leia(notas[i])\n   fimpara\n\n   escreva(\"Resultado da turma:\")\n\n   para i de 0 ate 4 faca\n      se notas[i] >= 7 entao\n         escreva(nomes[i], \" - Nota: \", notas[i], \" - Aprovado\")\n      senao\n         se notas[i] >= 5 entao\n            escreva(nomes[i], \" - Nota: \", notas[i], \" - Recuperação\")\n         senao\n            escreva(nomes[i], \" - Nota: \", notas[i], \" - Reprovado\")\n         fimse\n      fimse\n   fimpara\n\nfimalgoritmo"
        }
      ],
      "activity": {
        "title": "Atividade de reforço — Módulo 9",
        "prompt": "Considere dois vetores relacionados: nomes e notas.",
        "questions": [
          {
            "type": "choice",
            "prompt": "Se nomes[1] = \"Carlos\" e notas[1] = 6.5, o que isso significa?",
            "options": [
              "Carlos tem nota 6.5.",
              "Carlos está no índice 6.5.",
              "A nota de Carlos está em nomes[6]."
            ],
            "correct": 0,
            "feedback": "O mesmo índice liga o nome à nota."
          },
          {
            "type": "choice",
            "prompt": "Por que usamos dois vetores nesse caso?",
            "options": [
              "Porque nome é texto e nota é número.",
              "Porque vetor não aceita índice 0.",
              "Porque é obrigatório usar dois vetores sempre."
            ],
            "correct": 0,
            "feedback": "Cada vetor deve guardar dados do mesmo tipo."
          },
          {
            "type": "choice",
            "prompt": "Qual índice liga produtos[3] ao seu preço?",
            "options": [
              "O índice 3 em precos[3].",
              "O índice 0 em precos[0].",
              "O valor R$ 3,00."
            ],
            "correct": 0,
            "feedback": "O mesmo índice relaciona os dados entre os vetores."
          },
          {
            "type": "drag",
            "prompt": "Arraste cada informação para o vetor correto.",
            "items": [
              {
                "id": "nome",
                "text": "\"Ana\""
              },
              {
                "id": "nota",
                "text": "8.0"
              },
              {
                "id": "produto",
                "text": "\"Arroz\""
              },
              {
                "id": "preco",
                "text": "24.90"
              }
            ],
            "targets": [
              {
                "accept": "nome",
                "label": "Vetor nomes"
              },
              {
                "accept": "nota",
                "label": "Vetor notas"
              },
              {
                "accept": "produto",
                "label": "Vetor produtos"
              },
              {
                "accept": "preco",
                "label": "Vetor preços"
              }
            ],
            "feedback": "Textos ficam em vetores de caractere; números ficam em vetores numéricos."
          }
        ]
      }
    }
  ],
  "synthesis": [
    [
      "Variável simples",
      "Guarda um valor por vez."
    ],
    [
      "Vetor",
      "Guarda vários valores do mesmo tipo."
    ],
    [
      "Índice",
      "Número da posição no vetor. Neste objeto, começa em 0."
    ],
    [
      "Conteúdo",
      "Valor guardado em uma posição."
    ],
    [
      "valores[0]",
      "Acessa a primeira posição do vetor valores."
    ],
    [
      "Última posição",
      "Em um vetor com 5 posições, a última posição é 4."
    ],
    [
      "Repetição com vetor",
      "Permite preencher ou mostrar várias posições."
    ],
    [
      "Soma",
      "Usa uma variável acumuladora."
    ],
    [
      "Média",
      "Soma dividida pela quantidade."
    ],
    [
      "Maior e menor",
      "Compara os valores armazenados."
    ],
    [
      "Dois vetores relacionados",
      "Usam o mesmo índice para ligar informações."
    ]
  ],
  "assessment": {
    "title": "Controle de gastos semanais",
    "context": "Muitas famílias precisam controlar seus gastos durante a semana. Para isso, podemos criar um algoritmo que guarde os gastos de cada dia em um vetor e depois calcule informações importantes.",
    "tasks": [
      "Declare um vetor chamado gastos com 7 posições do tipo real, iniciando no índice 0.",
      "Leia o valor gasto em cada dia da semana, usando os índices de 0 até 6.",
      "Mostre todos os valores digitados.",
      "Calcule e mostre o total gasto na semana.",
      "Calcule e mostre a média diária de gastos.",
      "Mostre o maior gasto da semana.",
      "Mostre o menor gasto da semana.",
      "Se a média for maior que 100, mostre: Atenção: gastos altos na semana. Caso contrário, mostre: Gastos dentro do esperado."
    ],
    "model": "algoritmo \"ControleGastosSemana\"\n\nvar\n   gastos : vetor[0..6] de real\n   i : inteiro\n   total, media, maior, menor : real\n\ninicio\n   total <- 0\n\n   para i de 0 ate 6 faca\n      escreva(\"Digite o gasto do índice \", i, \":\")\n      leia(gastos[i])\n      total <- total + gastos[i]\n   fimpara\n\n   media <- total / 7\n\n   maior <- gastos[0]\n   menor <- gastos[0]\n\n   para i de 1 ate 6 faca\n      se gastos[i] > maior entao\n         maior <- gastos[i]\n      fimse\n\n      se gastos[i] < menor entao\n         menor <- gastos[i]\n      fimse\n   fimpara\n\n   escreva(\"Gastos informados:\")\n\n   para i de 0 ate 6 faca\n      escreva(\"Índice \", i, \": R$ \", gastos[i])\n   fimpara\n\n   escreva(\"Total gasto na semana: R$ \", total)\n   escreva(\"Média diária de gastos: R$ \", media)\n   escreva(\"Maior gasto da semana: R$ \", maior)\n   escreva(\"Menor gasto da semana: R$ \", menor)\n\n   se media > 100 entao\n      escreva(\"Atenção: gastos altos na semana.\")\n   senao\n      escreva(\"Gastos dentro do esperado.\")\n   fimse\n\nfimalgoritmo",
    "rubric": [
      {
        "item": "Declarou corretamente o vetor com índice inicial 0",
        "points": 1.0
      },
      {
        "item": "Leu os 7 valores usando repetição de 0 até 6",
        "points": 1.5
      },
      {
        "item": "Mostrou os valores armazenados",
        "points": 1.0
      },
      {
        "item": "Calculou corretamente o total",
        "points": 1.5
      },
      {
        "item": "Calculou corretamente a média",
        "points": 1.5
      },
      {
        "item": "Encontrou maior e menor valor",
        "points": 2.0
      },
      {
        "item": "Usou condição para exibir a mensagem final",
        "points": 1.0
      },
      {
        "item": "Organização, clareza e comentários no código",
        "points": 0.5
      }
    ],
    "extra": "Adapte o algoritmo para usar também um vetor com os nomes dos dias da semana nos índices de 0 até 6: Segunda, Terça, Quarta, Quinta, Sexta, Sábado e Domingo. Depois mostre: Segunda: R$ 80.00, Terça: R$ 120.00, e assim por diante."
  }
};
