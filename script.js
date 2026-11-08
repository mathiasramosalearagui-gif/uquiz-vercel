// CONFIGURAÇÃO DA API BACKEND
// Local: use 'http://127.0.0.1:3000/api/ranking'
// Produção (Render): mude para 'https://seu-app.onrender.com/api/ranking'
const API_URL = 'http://127.0.0.1:3000/api/ranking';

// BANCO DE DADOS DE QUESTÕES - AULAS 70 E 71 (UX DESIGN)
const quizDatabase = {
  facil: [
    {
      question: "1. O que significa a sigla UX?",
      options: ["User Experience (Experiência do Usuário)", "User X-Ray (Raio-X do Usuário)", "Universal X-Design", "User Extension"],
      answer: 0,
      explanation: "UX significa User Experience, referente a como uma pessoa se sente ao interagir com um produto."
    },
    {
      question: "2. Quem popularizou o termo 'User Experience' nos anos 1990?",
      options: ["Steve Jobs", "Don Norman", "Jakob Nielsen", "Bill Gates"],
      answer: 1,
      explanation: "Don Norman criou e popularizou o termo enquanto trabalhava como arquiteto de UX na Apple."
    },
    {
      question: "3. Qual é a principal diferença entre UI e UX?",
      options: [
        "UI é a programação do servidor e UX é o banco de dados.",
        "UI cuida da interface visual e UX foca em toda a experiência e uso.",
        "UI e UX são exatamente a mesma coisa.",
        "UX cuida das cores e UI cuida do marketing."
      ],
      answer: 1,
      explanation: "UI (User Interface) é a camada visual do app, enquanto UX é a experiência geral do usuário."
    },
    {
      question: "4. O conceito clássico de 'Portas de Norman' exemplifica:",
      options: [
        "Portas automáticas de alta tecnologia.",
        "Objetos cujo design confunde se devemos empurrar ou puxar.",
        "Portas que só abrem por aplicativo.",
        "Sistemas de segurança física."
      ],
      answer: 1,
      explanation: "As Portas de Norman são exemplos de design ruim, onde a forma do objeto não deixa claro a ação."
    },
    {
      question: "5. O que busca o Design Centrado no Usuário (UCD)?",
      options: [
        "Focar apenas no menor custo do código.",
        "Colocar as necessidades e limitações dos usuários no centro do projeto.",
        "Desenvolver sem testar com usuários.",
        "Priorizar apenas os desejos da equipe de vendas."
      ],
      answer: 1,
      explanation: "O UCD foca em projetar produtos adaptados ao comportamento e necessidades reais das pessoas."
    },
    {
      question: "6. O que é uma 'Persona' na Análise do Usuário?",
      options: [
        "O próprio criador do projeto.",
        "Um perfil fictício baseado em dados reais que representa um grupo de usuários.",
        "Um ator contratado para propaganda.",
        "O assistente virtual do sistema."
      ],
      answer: 1,
      explanation: "Personas representam o público-alvo para orientar as decisões de design."
    },
    {
      question: "7. Qual subárea da UX organiza os conteúdos e telas de forma estruturada?",
      options: ["Arquitetura de Informação", "Animação 3D", "Programação Back-end", "Copywriting de Vendas"],
      answer: 0,
      explanation: "A Arquitetura de Informação estrutura a navegação e o conteúdo para ser fácil de encontrar."
    },
    {
      question: "8. O que a Usabilidade avalia em um aplicativo móvel?",
      options: [
        "O espaço de armazenamento ocupado.",
        "A facilidade, eficiência e satisfação ao realizar tarefas no app.",
        "A quantidade de propagandas.",
        "O preço do celular do usuário."
      ],
      answer: 1,
      explanation: "Usabilidade mede o quão simples e eficiente é para o usuário concluir seus objetivos."
    },
    {
      question: "9. Qual item a seguir é um elemento típico de UI (User Interface)?",
      options: ["Um botão de ação colorido", "A emoção do usuário", "O tempo de entrega de uma encomenda", "A regra de negócio do banco"],
      answer: 0,
      explanation: "Botões, menus, ícones e esquemas de cores são componentes visuais diretos da UI."
    },
    {
      question: "10. Por que o feedback visual imediato é essencial em interfaces móveis?",
      options: [
        "Para consumir mais bateria do aparelho.",
        "Para o usuário saber que sua ação foi reconhecida pelo aplicativo.",
        "Para preencher espaço na tela.",
        "Para obrigar o usuário a clicar duas vezes."
      ],
      answer: 1,
      explanation: "O feedback dá a certeza de que a tela registrou o toque ou comando do usuário."
    }
  ],
  medio: [
    {
      question: "1. Segundo Don Norman, o termo 'Affordance' refere-se a:",
      options: [
        "O valor financeiro de uma licença de software.",
        "As propriedades percebidas de um objeto que sugerem como ele pode ser usado.",
        "O tempo de resposta do servidor.",
        "A quantidade de linhas de código do sistema."
      ],
      answer: 1,
      explanation: "Affordances são as relações entre as propriedades de um objeto e as capacidades do usuário."
    },
    {
      question: "2. Qual a diferença entre Pesquisa Qualitativa e Quantitativa em UX?",
      options: [
        "Qualitativa entende comportamentos e porquês; Quantitativa mede dados numéricos.",
        "Qualitativa usa apenas robôs; Quantitativa usa apenas papel.",
        "Não existe diferença entre elas.",
        "Quantitativa ouve 1 pessoa; Qualitativa mede milhões."
      ],
      answer: 0,
      explanation: "Qualitativa investiga sentimentos e motivos; Quantitativa analisa números e estatísticas."
    },
    {
      question: "3. O que é o Mapeamento da Jornada do Usuário (User Journey Map)?",
      options: [
        "Um mapa do GPS da cidade.",
        "Uma representação visual dos passos, emoções e interações do usuário com o produto.",
        "O organograma da empresa.",
        "O histórico de compras do cartão."
      ],
      answer: 1,
      explanation: "O Journey Map ilustra o caminho do usuário desde o primeiro contato até o objetivo final."
    },
    {
      question: "4. Em qual empresa Don Norman teve o 1º cargo oficial com 'UX' no título?",
      options: ["Microsoft", "Google", "Apple", "IBM"],
      answer: 2,
      explanation: "Norman foi 'User Experience Architect' na Apple nos anos 1990."
    },
    {
      question: "5. O que são Microinterações em um app mobile?",
      options: [
        "Pequenos detalhes de animação e feedback que respondem a ações do usuário.",
        "Formulários extensos com 20 campos.",
        "E-mails automáticos de marketing.",
        "Grandes atualizações de sistema."
      ],
      answer: 0,
      explanation: "Exemplos: animação ao dar 'curtir', vibração leve ao erro ou ícone de carregamento."
    },
    {
      question: "6. Qual subárea da UX cuida da resposta do app aos gestos e toques em tempo real?",
      options: ["Design de Interação (IxD)", "Copywriting", "Branding", "SEO"],
      answer: 0,
      explanation: "Design de Interação define como o sistema se comporta durante as ações do usuário."
    },
    {
      question: "7. O que são Heurísticas de Usabilidade?",
      options: [
        "Leis de trânsito digital.",
        "Diretrizes e boas práticas para avaliar e evitar falhas na interface.",
        "Linguagens de programação mobile.",
        "Sistemas de segurança de banco."
      ],
      answer: 1,
      explanation: "Heurísticas (como as de Nielsen) são regras gerais para garantir usabilidade sólida."
    },
    {
      question: "8. Na Análise do Usuário, o que significa a expressão 'Pain Points'?",
      options: [
        "Dores físicas ao usar o telefone.",
        "Problemas, frustrações ou barreiras que o usuário enfrenta em sua rotina.",
        "Botões vermelhos na tela.",
        "Falhas de bateria do celular."
      ],
      answer: 1,
      explanation: "Identificar os Pontos de Dor permite criar soluções que eliminem esses obstáculos."
    },
    {
      question: "9. Qual é o foco da Acessibilidade (a11y) no design de aplicativos?",
      options: [
        "Garantir acesso apenas a celulares caros.",
        "Garantir que o app possa ser utilizado por qualquer pessoa, inclusive pessoas com deficiências.",
        "Restringir acessos por senha.",
        "Diminuir a resolução das imagens."
      ],
      answer: 1,
      explanation: "Acessibilidade inclui leitores de tela, bom contraste e facilidade de leitura para todos."
    },
    {
      question: "10. Qual a relação entre Arquitetura de Informação e a Interface (UI)?",
      options: [
        "A Arquitetura cria a estrutura; a UI reveste com o visual e elementos visuais.",
        "A UI é feita primeiro e a Arquitetura só depois de pronto.",
        "A Arquitetura substitui completamente a UI.",
        "Nenhuma das duas é usada em aplicativos."
      ],
      answer: 0,
      explanation: "A Arquitetura organiza os dados e a UI constrói a camada visual para o usuário interagir."
    }
  ],
  dificil: [
    {
      question: "1. Don Norman dividiu o processamento emocional do design em 3 níveis. Quais são?",
      options: [
        "Visceral, Comportamental e Reflexivo",
        "Visual, Auditivo e Tátil",
        "Fácil, Médio e Avançado",
        "Consciente, Subconsciente e Inconsciente"
      ],
      answer: 0,
      explanation: "Visceral (estética imediata), Comportamental (usabilidade) e Reflexivo (memória e significado)."
    },
    {
      question: "2. No modelo de Norman, o 'Abismo da Execução' (Gulf of Execution) é:",
      options: [
        "A diferença entre a intenção do usuário e as ações que o sistema permite realizar.",
        "A demora da conexão de internet.",
        "A perda de dados quando o app fecha sozinho.",
        "O tamanho do arquivo do aplicativo."
      ],
      answer: 0,
      explanation: "É o esforço necessário para entender como traduzir seu desejo em ações na interface."
    },
    {
      question: "3. Qual a diferença entre 'Affordance' e 'Signifier' (Sinalizador)?",
      options: [
        "Affordance é o sinal visual; Signifier é o preço do produto.",
        "Affordance é a possibilidade física de ação; Signifier é a dica visual que indica onde e como agir.",
        "São sinônimos idênticos.",
        "Signifier só existe no papel."
      ],
      answer: 1,
      explanation: "Signifiers trazem os sinais claros (ex: botão desenhado) de onde a ação (Affordance) ocorre."
    },
    {
      question: "4. O 'Abismo da Avaliação' (Gulf of Evaluation) ocorre quando:",
      options: [
        "O usuário tem dificuldade em interpretar o novo estado do sistema após realizar uma ação.",
        "A loja de aplicativos recusa a publicação do app.",
        "O professor dá nota baixa ao trabalho.",
        "O usuário não avalia o app na loja."
      ],
      answer: 0,
      explanation: "Mede o esforço do usuário para entender se a ação dele deu certo e o que mudou na tela."
    },
    {
      question: "5. O método 'Think-Aloud Protocol' em testes com usuários consiste em:",
      options: [
        "Usar inteligência artificial para narrar as telas.",
        "Pedir que o participante fale seus pensamentos em voz alta enquanto realiza uma tarefa.",
        "Gravar um áudio explicativo no WhatsApp.",
        "Fazer reuniões em grupo sem computador."
      ],
      answer: 1,
      explanation: "Permite ao pesquisador entender as dúvidas e raciocínio do usuário em tempo real."
    },
    {
      question: "6. O conceito de 'Modelo Mental' em UX Design é:",
      options: [
        "O código-fonte salvo no servidor.",
        "A ideia preconcebida que o usuário tem sobre como um sistema funciona.",
        "Um documento em PDF fornecido pela empresa.",
        "O banco de dados do aplicativo."
      ],
      answer: 1,
      explanation: "Quanto mais próximo o app estiver do modelo mental do usuário, mais intuitivo ele será."
    },
    {
      question: "7. O que é o método de 'Card Sorting' (Ordenação de Cartões)?",
      options: [
        "Técnica onde usuários organizam tópicos em categorias para estruturar a Arquitetura de Informação.",
        "Um jogo de cartas para treinar designers.",
        "Organizar a fila de tarefas no projeto.",
        "Cadastrar cartões de crédito na loja."
      ],
      answer: 0,
      explanation: "Ajuda a descobrir como os próprios usuários organizam e rotulam as informações."
    },
    {
      question: "8. A Lei de Fitts em interfaces mobile estabelece que:",
      options: [
        "O tempo para alcançar um alvo depende da distância até ele e do tamanho do alvo.",
        "Quanto mais colorido o botão, mais rápido o toque.",
        "Telas maiores deixam o app mais lento.",
        "O toque sempre deve ocorrer no topo da tela."
      ],
      answer: 0,
      explanation: "Botões principais no mobile devem ser amplos e posicionados perto do alcance do polegar."
    },
    {
      question: "9. O 'Efeito Estética-Usabilidade' demonstra que:",
      options: [
        "Interfaces bonitas sempre rodam mais rápido.",
        "Usuários tendem a perceber interfaces esteticamente atraentes como mais fáceis de usar.",
        "Apps bonitos vendem menos.",
        "Design simples nunca funciona."
      ],
      answer: 1,
      explanation: "Uma estética harmoniosa gera uma percepção mais positiva e tolerante a pequenas falhas."
    },
    {
      question: "10. Em pesquisas de UX, o que é o 'Viés de Confirmação'?",
      options: [
        "A confirmação de envio do formulário.",
        "A tendência do pesquisador de buscar dados que apenas confirmem suas ideias prévias.",
        "A verificação em duas etapas de login.",
        "A nota final da matéria."
      ],
      answer: 1,
      explanation: "É um erro metodológico onde o pesquisador ignora dados reais que contradizem sua hipótese."
    }
  ]
};

// ESTADO DA APLICAÇÃO
let currentLevel = 'facil';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let playerName = 'Jogador';

// ELEMENTOS DO DOM
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const rankingScreen = document.getElementById('ranking-screen');
const nicknameInput = document.getElementById('player-nickname');

const levelBadge = document.getElementById('current-level-badge');
const scoreDisplay = document.getElementById('current-score');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackMessage = document.getElementById('feedback-message');
const btnNext = document.getElementById('btn-next');
const questionNumberText = document.getElementById('question-number-text');
const progressPercent = document.getElementById('progress-percent');
const progressFill = document.getElementById('progress-fill');

// FUNÇÃO DE CONEXÃO COM TENTATIVAS AUTOMÁTICAS (RETRIES)
async function fetchWithRetry(url, options = {}, retries = 3, delay = 1500) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
    } catch (err) {
      if (i === retries - 1) throw err;
    }
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  throw new Error("Não foi possível conectar ao servidor após várias tentativas.");
}

// INICIA O JOGO VALIDANDO O NICKNAME
function initGame(level) {
  const nameValue = nicknameInput.value.trim();
  if (!nameValue) {
    alert("Por favor, digite seu Nickname antes de iniciar!");
    nicknameInput.focus();
    return;
  }
  playerName = nameValue;
  startQuiz(level);
}

// INICIAR QUIZ
function startQuiz(level) {
  currentLevel = level;
  currentQuestions = [...quizDatabase[level]];
  currentQuestionIndex = 0;
  score = 0;

  const levelLabels = { facil: '🌱 Fácil', medio: '⚡ Médio', dificil: '🔥 Difícil' };
  levelBadge.textContent = levelLabels[level];

  homeScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  rankingScreen.classList.remove('active');
  quizScreen.classList.add('active');

  loadQuestion();
}

// CARREGAR PERGUNTA
function loadQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  
  scoreDisplay.textContent = score;
  questionNumberText.textContent = `Questão ${currentQuestionIndex + 1} de 10`;
  const percent = ((currentQuestionIndex + 1) / 10) * 100;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;

  questionText.textContent = q.question;
  optionsContainer.innerHTML = '';
  feedbackMessage.className = 'feedback-box hidden';
  feedbackMessage.textContent = '';
  btnNext.classList.add('hidden');

  q.options.forEach((optText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = optText;
    btn.onclick = () => selectOption(index);
    optionsContainer.appendChild(btn);
  });
}

// RESPOSTA E FEEDBACK INSTANTÂNEO
function selectOption(selectedIndex) {
  const q = currentQuestions[currentQuestionIndex];
  const buttons = optionsContainer.querySelectorAll('.option-btn');

  buttons.forEach(btn => btn.disabled = true);

  if (selectedIndex === q.answer) {
    buttons[selectedIndex].classList.add('correct');
    score++;
    scoreDisplay.textContent = score;
    
    feedbackMessage.className = 'feedback-box correct-bg';
    feedbackMessage.innerHTML = `<strong>✨ Resposta Correta!</strong><br>${q.explanation}`;
  } else {
    buttons[selectedIndex].classList.add('wrong');
    buttons[q.answer].classList.add('correct');
    
    feedbackMessage.className = 'feedback-box wrong-bg';
    feedbackMessage.innerHTML = `<strong>❌ Resposta Incorreta.</strong><br>${q.explanation}`;
  }

  feedbackMessage.classList.remove('hidden');
  btnNext.classList.remove('hidden');
}

// PRÓXIMA QUESTÃO
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

// ----------------------------------------------------
// INTEGRAÇÃO COM O BACKEND (EXPRESS + MONGOOSE)
// ----------------------------------------------------

// POST: Envia a pontuação para o MongoDB com retries
async function saveScoreToBackend(name, finalScore, level) {
  try {
    const levelNames = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' };
    const response = await fetchWithRetry(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        score: finalScore,
        level: levelNames[level] || level
      })
    }, 3, 1500);

    const data = await response.json();
    console.log('Resposta do Servidor:', data);
  } catch (error) {
    console.error("Erro ao salvar pontuação no banco:", error);
  }
}

// TELA DE RESULTADOS (COM CONFETES E SALVAMENTO)
function showResults() {
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');

  const finalScoreEl = document.getElementById('final-score-number');
  const perfMsg = document.getElementById('performance-msg');
  const statAccuracy = document.getElementById('stat-accuracy');
  const statLevel = document.getElementById('stat-level');
  const resultIcon = document.getElementById('result-icon');
  const resultTitle = document.getElementById('result-title');
  const resultPlayerName = document.getElementById('result-player-name');

  if (resultPlayerName) resultPlayerName.textContent = playerName;
  finalScoreEl.textContent = score;

  const accuracy = (score / 10) * 100;
  statAccuracy.textContent = `${accuracy}%`;

  const levelNames = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' };
  statLevel.textContent = levelNames[currentLevel];

  if (score >= 9) {
    resultIcon.textContent = '👑';
    resultTitle.textContent = 'Mestre de UX!';
    perfMsg.textContent = 'Excelente! Você domina Don Norman e a teoria de UX!';
  } else if (score >= 6) {
    resultIcon.textContent = '🎯';
    resultTitle.textContent = 'Muito Bom!';
    perfMsg.textContent = 'Ótimo trabalho! Tem bom domínio da matéria.';
  } else {
    resultIcon.textContent = '📚';
    resultTitle.textContent = 'Continue Estudando!';
    perfMsg.textContent = 'Revise os tópicos das Aulas 70 e 71 e tente novamente!';
  }

  if (score >= 8 && typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  }

  saveScoreToBackend(playerName, score, currentLevel);
}

// GET: BUSCA RANKING COM RETRIES E RECONEXÃO FÁCIL
async function showLeaderboardScreen() {
  homeScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  quizScreen.classList.remove('active');
  rankingScreen.classList.add('active');

  const rankingList = document.getElementById('ranking-list');
  rankingList.innerHTML = '<p class="loading-txt">⏳ Conectando ao banco de dados... (aguarde)</p>';

  try {
    const response = await fetchWithRetry(API_URL, {}, 3, 2000);
    const players = await response.json();
    rankingList.innerHTML = '';
    let pos = 1;

    if (!Array.isArray(players) || players.length === 0) {
      rankingList.innerHTML = '<p class="loading-txt">Nenhuma pontuação registrada ainda!</p>';
      return;
    }

    players.forEach(data => {
      let posDisplay = `#${pos}`;
      if (pos === 1) posDisplay = '🥇';
      else if (pos === 2) posDisplay = '🥈';
      else if (pos === 3) posDisplay = '🥉';

      const item = document.createElement('div');
      item.className = 'ranking-item';
      item.innerHTML = `
        <span class="ranking-pos">${posDisplay}</span>
        <span class="ranking-name">${data.name} <small style="opacity:0.6">(${data.level})</small></span>
        <span class="ranking-score-badge">${data.score} pts</span>
      `;
      rankingList.appendChild(item);
      pos++;
    });
  } catch (error) {
    console.error('Erro ao buscar ranking:', error);
    rankingList.innerHTML = `
      <div style="text-align: center; padding: 12px 0;">
        <p class="loading-txt" style="margin-bottom: 12px;">O servidor demorou a responder.</p>
        <button class="btn-action btn-secondary" onclick="showLeaderboardScreen()" style="padding: 8px 16px; font-size: 12px;">🔄 Tentar Novamente</button>
      </div>
    `;
  }
}

function goToHome() {
  quizScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  rankingScreen.classList.remove('active');
  homeScreen.classList.add('active');
}