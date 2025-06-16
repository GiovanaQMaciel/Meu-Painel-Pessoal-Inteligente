// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Lista de 50 frases motivacionais
const frases = [
  { frase: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.", autor: "Vidal Sassoon" },
  { frase: "Você é mais corajoso do que acredita, mais forte do que parece e mais inteligente do que pensa.", autor: "A.A. Milne" },
  { frase: "Acredite que você pode, assim você já está no meio do caminho.", autor: "Theodore Roosevelt" },
  { frase: "A jornada de mil milhas começa com um passo.", autor: "Lao Tzu" },
  { frase: "A única limitação é aquela que você impõe na sua mente.", autor: "Napoleon Hill" },
  { frase: "Não espere. O tempo nunca será 'certo'.", autor: "Napoleon Hill" },
  { frase: "Coragem não é ausência de medo, é a determinação de que algo é mais importante que o medo.", autor: "Ambrose Redmoon" },
  { frase: "Quanto mais difícil é a vitória, maior é a felicidade de vencer.", autor: "Pelé" },
  { frase: "Foque no processo, não no resultado.", autor: "Cal Newport" },
  { frase: "Você falhará 100% das chances que não aproveitar.", autor: "Wayne Gretzky" },
  { frase: "A disciplina é a ponte entre metas e realizações.", autor: "Jim Rohn" },
  { frase: "Não importa o quão devagar você vá, desde que não pare.", autor: "Confúcio" },
  { frase: "Sonhe grande e ouse falhar.", autor: "Norman Vaughan" },
  { frase: "A ação distingue os líderes dos que apenas falam.", autor: "William Arthur Ward" },
  { frase: "Para vencer, primeiro você deve acreditar que pode.", autor: "Nikos Kazantzakis" },
  { frase: "Seja a mudança que você quer ver no mundo.", autor: "Mahatma Gandhi" },
  { frase: "A persistência realiza o impossível.", autor: "Provérbio Oriental" },
  { frase: "O sucesso é a soma de pequenos esforços repetidos dia sim, dia não.", autor: "Robert Collier" },
  { frase: "Você não encontra um caminho para a felicidade. Você cria.", autor: "Thích Nhất Hạnh" },
  { frase: "Não conte os dias, faça os dias contarem.", autor: "Muhammad Ali" },
  { frase: "Torne-se o que você nasceu para ser.", autor: "Howard Thurman" },
  { frase: "Grandes coisas nunca vêm da zona de conforto.", autor: "Neil Strauss" },
  { frase: "Você é responsável pelo que você é e não pode culpar ninguém.", autor: "Anna Frank" },
  { frase: "Abraços fortes vêm depois de quedas fortes.", autor: "Autor Desconhecido" },
  { frase: "A vida começa onde sua zona de conforto termina.", autor: "Neale Donald Walsch" },
  { frase: "A única vez que você deve olhar para trás é para ver o quão longe chegou.", autor: "Autor Desconhecido" },
  { frase: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.", autor: "Eleanor Roosevelt" },
  { frase: "Não tenha medo de desistir do bom para perseguir o ótimo.", autor: "John D. Rockefeller" },
  { frase: "Vitória é o que acontece quando a gente insiste em tentar.", autor: "Autor Desconhecido" },
  { frase: "Gratidão transforma o que temos em suficiente.", autor: "Melody Beattie" },
  { frase: "Cada dia é uma nova chance de mudar sua vida.", autor: "Desconhecido" },
  { frase: "Não veja problemas, veja soluções.", autor: "Autor Desconhecido" },
  { frase: "O único modo de fazer um excelente trabalho é amar o que você faz.", autor: "Steve Jobs" },
  { frase: "O que você faz hoje pode melhorar todos os seus amanhãs.", autor: "Ralph Marston" },
  { frase: "Seja você a inspiração que você precisa.", autor: "Autor Desconhecido" },
  { frase: "A persistência é o caminho do êxito.", autor: "Charles Chaplin" },
  { frase: "Você não é o que conquistou, você é o que superou.", autor: "Autor Desconhecido" },
  { frase: "Dificuldades preparam pessoas comuns para destinos extraordinários.", autor: "C.S. Lewis" },
  { frase: "Transforme seus sonhos em planos e seus planos em ação.", autor: "Autor Desconhecido" },
  { frase: "Acredite em si mesmo e todo o resto virá.", autor: "Elissa Gabrielle" },
  { frase: "Comece onde você está. Use o que você tem. Faça o que puder.", autor: "Arthur Ashe" },
  { frase: "Você é mais forte do que imagina.", autor: "Autor Desconhecido" },
  { frase: "Não desista. Sofra agora e viva o resto da vida como um campeão.", autor: "Muhammad Ali" },
  { frase: "Grandes realizações levam tempo. Tenha paciência.", autor: "Autor Desconhecido" },
  { frase: "Seu maior limitador é você mesmo.", autor: "Autor Desconhecido" },
  { frase: "O sucesso depende da preparação anterior, e sem ela o fracasso é certo.", autor: "Confúcio" },
  { frase: "Você atrai o que você é, não o que você quer.", autor: "Wayne Dyer" },
  { frase: "A melhor hora para plantar uma árvore foi há 20 anos. A segunda melhor hora é agora.", autor: "Provérbio Chinês" },
];

// Rota para frase aleatória
app.get('/frase/random', (req, res) => {
  const idx = Math.floor(Math.random() * frases.length);
  res.json(frases[idx]);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
