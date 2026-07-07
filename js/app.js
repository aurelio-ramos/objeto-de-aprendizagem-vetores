const data = window.OA_DATA;
const state = {
  vector: [],
  loopValues: [],
  loopIndex: 0,
  loopSum: 0,
  loopPhase: "initial",
  loopCurrentIndex: null,
  loopCurrentValue: null,
  loopPreviousSum: 0,
  statsValues: [],
  statsItems: [],
  statsRevealed: [],
  quizIndex: 0,
  quizMilho: 0,
  quizPipoca: 0,
  quizAnswered: false,
  quizResults: []
};

const FINAL_QUIZ = [
  {
    question: "O que é um vetor em programação?",
    options: [
      "Uma estrutura que guarda vários valores do mesmo tipo em posições indexadas.",
      "Um comando usado apenas para imprimir mensagens na tela.",
      "Uma variável que só pode guardar letras."
    ],
    correct: 0,
    explanation: "Vetor guarda vários valores organizados em posições, acessadas por índice.",
    hint: "Pense na ideia de um armário com várias gavetas organizadas.",
    correctFeedback: "Excelente! Você percebeu que o vetor organiza vários dados em uma única estrutura.",
    wrongFeedback: "Quase lá. Lembre-se: vetor não é um comando isolado, e sim uma estrutura para agrupar valores.",
    milho: 10,
    pipoca: 1
  },
  {
    question: "Se um vetor tem 5 posições e começa no índice 0, qual é o último índice?",
    options: ["3", "4", "5"],
    correct: 1,
    explanation: "Em um vetor com 5 posições iniciando em 0, os índices vão de 0 até 4.",
    hint: "Conte as posições: 0, 1, 2, 3... qual é a quinta?",
    correctFeedback: "Muito bem! Você já entendeu a lógica do índice inicial 0.",
    wrongFeedback: "Atenção à contagem começando em 0. Esse detalhe é muito importante em vetores.",
    milho: 20,
    pipoca: 1
  },
  {
    question: "Em notas[2], o número 2 representa: ",
    options: ["o conteúdo armazenado", "o índice da posição", "a quantidade total de notas"],
    correct: 1,
    explanation: "O número entre colchetes indica a posição, ou seja, o índice.",
    hint: "Pergunte a si mesmo: o número está dizendo onde o valor está ou qual valor é?",
    correctFeedback: "Boa! Você diferenciou corretamente índice e conteúdo.",
    wrongFeedback: "Não confunda posição com valor. O número nos colchetes mostra onde procurar.",
    milho: 30,
    pipoca: 2
  },
  {
    question: "Qual comando acessa o valor guardado na posição 1 do vetor valores?",
    options: ["valores(1)", "valores[1]", "[1]valores"],
    correct: 1,
    explanation: "O acesso correto usa colchetes: valores[1].",
    hint: "Observe o padrão usado ao longo do material para acessar um vetor.",
    correctFeedback: "Perfeito! A notação com colchetes está correta.",
    wrongFeedback: "Revise a sintaxe: em vetores, a posição é indicada entre colchetes.",
    milho: 40,
    pipoca: 2
  },
  {
    question: "Para percorrer todas as posições de um vetor, normalmente usamos:",
    options: ["uma repetição, como PARA", "apenas um SE", "somente uma variável booleana"],
    correct: 0,
    explanation: "Repetições permitem visitar uma a uma todas as posições do vetor.",
    hint: "Se você precisa passar por todas as posições, precisa repetir uma ação várias vezes.",
    correctFeedback: "Ótimo raciocínio! Estruturas de repetição são grandes parceiras dos vetores.",
    wrongFeedback: "Pense em como visitar todas as posições, uma por uma. Um comando de decisão sozinho não faz isso.",
    milho: 50,
    pipoca: 3
  },
  {
    question: "Se valores = [5, 7, 3], qual é a soma dos elementos?",
    options: ["12", "15", "16"],
    correct: 1,
    explanation: "5 + 7 + 3 = 15.",
    hint: "Some os três valores com calma antes de escolher.",
    correctFeedback: "Isso aí! Você somou corretamente os elementos do vetor.",
    wrongFeedback: "Vale a pena refazer a conta: some cada elemento do vetor passo a passo.",
    milho: 60,
    pipoca: 3
  },
  {
    question: "Dois vetores relacionados podem ser usados para:",
    options: [
      "guardar pares de informações, como nomes e notas.",
      "impedir que o programa use índices.",
      "substituir totalmente os comandos de repetição."
    ],
    correct: 0,
    explanation: "É comum relacionar vetores, por exemplo um para nomes e outro para notas.",
    hint: "Pense em situações em que uma informação precisa combinar com outra.",
    correctFeedback: "Excelente fechamento! Você entendeu bem como vetores podem trabalhar em conjunto.",
    wrongFeedback: "Lembre-se: vetores relacionados ajudam a conectar dados, como nome de estudante e sua nota.",
    milho: 100,
    pipoca: 5
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function randomContent() {
  return (Math.floor(Math.random() * 1010) / 10).toFixed(1);
}

function renderObjectives() {
  const target = $("#objectivesList");
  target.innerHTML = data.objectives.map((objective, index) => `
    <article class="objective-card">
      <span>${index + 1}</span>
      <p>${escapeHtml(objective)}</p>
    </article>
  `).join("");
}

function getRouteItems() {
  const routeMap = new Map(data.route.map(item => [item.target, item]));
  const orderedTargets = [
    "#modulo-1", "#modulo-2", "#modulo-3", "#simulador-1",
    "#modulo-4", "#modulo-5", "#simulador-2",
    "#modulo-6", "#modulo-7", "#modulo-8", "#modulo-9",
    "#simulador-final", "#sintese", "#avaliacao"
  ];

  return orderedTargets.map((target) => {
    const item = routeMap.get(target) || {};
    if (target === "#simulador-final") {
      return {
        label: item.label || "Simulador 3",
        target,
        title: item.title || "Soma, média, maior e menor",
        stage: item.stage || "Prática livre"
      };
    }
    if (target === "#avaliacao") {
      return {
        label: "Avaliação",
        target,
        title: "Questionário final — Show do Milhão do Vetor",
        stage: "Desafio final gamificado"
      };
    }
    return item;
  }).filter(item => item && item.target);
}

function renderRoute() {
  const items = getRouteItems();
  const cardHtml = items.map((item, index) => `
    <a class="route-card" href="${item.target}">
      <span class="route-card__step">${String(index + 1).padStart(2, "0")}</span>
      <span class="route-card__label">${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <em>${escapeHtml(item.stage)}</em>
    </a>
  `).join("");

  const drawerHtml = items.map((item, index) => `
    <a class="drawer-route-link" href="${item.target}">
      <span class="drawer-route-link__step">${String(index + 1).padStart(2, "0")}</span>
      <span class="drawer-route-link__content">
        <strong>${escapeHtml(item.label)}</strong>
        <em>${escapeHtml(item.title)}</em>
      </span>
    </a>
  `).join("");

  const target = $("#routeLinks");
  if (target) target.innerHTML = cardHtml;
  const drawer = $("#routeLinksDrawer");
  if (drawer) drawer.innerHTML = drawerHtml;
}

function vectorAccessLabel(name, index) {
  return `${name || "vetor"}[${index}]`;
}

function vectorBoxMarkup(value, index, name = "vetor", extraClass = "") {
  const access = vectorAccessLabel(name, index);
  return `
    <div class="vector-box ${extraClass}" data-access="${escapeHtml(access)}" title="Para obter este valor: ${escapeHtml(access)}">
      <span class="vector-box__index">${index}</span>
      <strong>${escapeHtml(value === "" ? "?" : value)}</strong>
    </div>
  `;
}

function vectorHtml(visual) {
  if (!visual) return "";
  return `
    <div class="visual-vector" aria-label="Representação visual do vetor ${escapeHtml(visual.label)}">
      <div class="visual-vector__label">${escapeHtml(visual.label)}</div>
      <div class="vector-boxes">
        ${visual.values.map((value, index) => vectorBoxMarkup(value, index, visual.label)).join("")}
      </div>
    </div>
  `;
}

function tablesHtml(tables = []) {
  return tables.map(table => `
    <div class="table-wrap">
      <h4>${escapeHtml(table.title)}</h4>
      <table>
        <thead>
          <tr>${table.headers.map(header => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${table.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `).join("");
}

function codesHtml(codes = []) {
  return codes.map(code => `
    <article class="code-card">
      <h4>${escapeHtml(code.title)}</h4>
      <pre><code>${escapeHtml(code.code)}</code></pre>
    </article>
  `).join("");
}

function choiceQuestionHtml(question, moduleNumber, questionIndex) {
  return `
    <fieldset class="activity-question activity-question--choice" data-question-type="choice" data-module="${moduleNumber}" data-question="${questionIndex}">
      <legend>${questionIndex + 1}. ${escapeHtml(question.prompt)}</legend>
      <div class="choice-list">
        ${question.options.map((option, optionIndex) => `
          <label class="choice-option" for="activity-${moduleNumber}-${questionIndex}-${optionIndex}">
            <input id="activity-${moduleNumber}-${questionIndex}-${optionIndex}" type="radio" name="activity-${moduleNumber}-${questionIndex}" value="${optionIndex}">
            <span>${escapeHtml(option)}</span>
          </label>
        `).join("")}
      </div>
      <p class="activity-feedback" id="activity-feedback-${moduleNumber}-${questionIndex}" aria-live="polite"></p>
    </fieldset>
  `;
}

function dragQuestionHtml(question, moduleNumber, questionIndex) {
  return `
    <section class="activity-question activity-question--drag" data-question-type="drag" data-module="${moduleNumber}" data-question="${questionIndex}">
      <h5>${questionIndex + 1}. ${escapeHtml(question.prompt)}</h5>
      <div class="drag-area">
        <div class="drag-bank" aria-label="Itens para arrastar">
          ${question.items.map(item => `
            <button class="drag-chip" type="button" draggable="true" data-item-id="${escapeHtml(item.id)}">${escapeHtml(item.text)}</button>
          `).join("")}
        </div>
        <div class="drop-grid" aria-label="Áreas para soltar">
          ${question.targets.map((target, targetIndex) => `
            <div class="drop-zone" data-accept="${escapeHtml(target.accept)}" data-target-index="${targetIndex}" tabindex="0">
              <span class="drop-zone__label">${escapeHtml(target.label)}</span>
              <strong class="drop-zone__value">Solte aqui</strong>
            </div>
          `).join("")}
        </div>
      </div>
      <p class="activity-feedback" id="activity-feedback-${moduleNumber}-${questionIndex}" aria-live="polite"></p>
    </section>
  `;
}

function questionHtml(question, moduleNumber, questionIndex) {
  if (question.type === "drag") return dragQuestionHtml(question, moduleNumber, questionIndex);
  return choiceQuestionHtml(question, moduleNumber, questionIndex);
}

function activityHtml(activity, moduleNumber) {
  if (!activity) return "";
  const questions = activity.questions.map((question, index) => questionHtml(question, moduleNumber, index)).join("");

  return `
    <section class="activity-box" aria-labelledby="atividade-${moduleNumber}" data-module="${moduleNumber}">
      <h4 id="atividade-${moduleNumber}">${escapeHtml(activity.title)}</h4>
      <p>${escapeHtml(activity.prompt)}</p>
      <div class="activity-form" data-module="${moduleNumber}">
        ${questions}
        <div class="button-row">
          <button class="btn check-activity" type="button" data-module="${moduleNumber}">Corrigir atividade</button>
          <button class="btn btn--ghost clear-activity" type="button" data-module="${moduleNumber}">Limpar respostas</button>
        </div>
        <p class="feedback activity-total" id="activity-total-${moduleNumber}" aria-live="polite">Escolha ou arraste as respostas e clique em corrigir.</p>
      </div>
    </section>
  `;
}


function simulatorOneHtml() {
  return `
    <section id="simulador-1" class="module-card module-card--simulator" aria-labelledby="sim-armario-titulo">
      <div class="module-card__header">
        <div>
          <p class="eyebrow">Simulador 1 • Depois do Módulo 3</p>
          <h3 id="sim-armario-titulo">Criando Vetores</h3>
        </div>
        <a class="top-link" href="#roteiro">voltar ao roteiro</a>
      </div>
      <p>Escolha uma posição, guarde um valor e veja a diferença entre índice e conteúdo. Neste objeto, o primeiro índice é sempre <code>0</code>.</p>
      <div class="vector-execution-grid" aria-label="Simulador de vetor e código Portugol da ação">
        <div class="vector-workspace">
          <div class="form-grid">
            <label>
              Tamanho do vetor
              <input id="vectorSize" type="number" min="3" max="12" value="6" />
            </label>
            <label>
              Índice
              <input id="vectorIndex" type="number" min="0" value="0" />
            </label>
            <label>
              Conteúdo
              <input id="vectorValue" type="text" value="7.0" />
            </label>
          </div>
          <div class="button-row">
            <button class="btn" id="createVector" type="button">Criar vetor</button>
            <button class="btn btn--secondary" id="storeValue" type="button">Guardar valor</button>
            <button class="btn btn--ghost" id="readValue" type="button">Ler posição</button>
          </div>
          <div id="vectorBoxes" class="vector-boxes" aria-live="polite"></div>
          <p id="vectorFeedback" class="feedback" aria-live="polite">Crie o vetor para começar.</p>
        </div>
        <aside class="portugol-panel" aria-labelledby="vector-portugol-title">
          <h4 id="vector-portugol-title">Código Portugol da ação</h4>
          <pre><code id="vectorActionCode" class="action-code"></code></pre>
          <p id="vectorActionHint" class="code-hint" aria-live="polite">Clique em um botão para ver o código correspondente.</p>
        </aside>
      </div>
    </section>
  `;
}


function simulatorTwoHtml() {
  return `
    <section id="simulador-2" class="module-card module-card--simulator" aria-labelledby="sim-loop-titulo-inline">
      <div class="module-card__header">
        <div>
          <p class="eyebrow">Simulador 2 • Depois do Módulo 5</p>
          <h3 id="sim-loop-titulo-inline">Percorrendo vetores com PARA</h3>
        </div>
        <a class="top-link" href="#roteiro">voltar ao roteiro</a>
      </div>
      <p>Observe como o índice <code>i</code> percorre todas as posições do vetor, começando em <code>0</code>, enquanto a soma é atualizada passo a passo.</p>
      <label>
        Valores do vetor, separados por vírgula
        <input id="loopValues" type="text" value="7, 8, 6, 9, 5" />
      </label>
      <div class="button-row">
        <button class="btn" id="startLoop" type="button">Iniciar</button>
        <button class="btn btn--secondary" id="nextLoop" type="button">Próximo passo</button>
      </div>
      <div id="loopBoxes" class="vector-boxes" aria-live="polite"></div>
      <p id="loopFeedback" class="feedback" aria-live="polite">Clique em iniciar.</p>
      <div class="loop-execution-grid" aria-label="Código em execução e memória do simulador">
        <div class="loop-code-panel">
          <h4>Código em execução</h4>
          <pre><code id="loopCode" class="loop-code"></code></pre>
        </div>
        <aside class="memory-panel" aria-labelledby="loop-memory-title">
          <h4 id="loop-memory-title">Memória</h4>
          <div id="loopMemory" class="memory-grid" aria-live="polite"></div>
        </aside>
      </div>
    </section>
  `;
}

function simulatorThreeHtml() {
  return `
    <section id="simulador-final" class="module-card module-card--simulator" aria-labelledby="sim-estatistica-titulo">
      <div class="module-card__header">
        <div>
          <p class="eyebrow">Simulador 3 • Depois do Módulo 9</p>
          <h3 id="sim-estatistica-titulo">Soma, média, maior e menor</h3>
        </div>
        <a class="top-link" href="#roteiro">voltar ao roteiro</a>
      </div>
      <p>Digite os valores inteiros para criar seu vetor, depois clique em calcular. 
      Use este simulador para treinar operações em vetores: tente calcular no caderno primeiro e depois confira o resultado.
      Para conferir os resultados como Quantidade, Soma, Média, Maior e Menor que aparecem ocultos clique em cada campo para mostrar ou ocultar e verificar se o seu algoritmo esta correto.</p>
      <label>
        Valores
        <input id="statsValues" type="text" value="1, 2, 3, 5, 8, 13, 21" />
      </label>
      <div class="button-row">
        <button class="btn" id="calculateStats" type="button">Calcular</button>
      </div>
      
      <div id="statsVector" class="vector-boxes" aria-live="polite"></div>
      <div id="statsResult" class="stats-grid" aria-live="polite"></div>
    </section>
  `;
}

function moduleHtml(module) {
  return `
    <article id="${module.id}" class="module-card">
      <div class="module-card__header">
        <div>
          <p class="eyebrow">Módulo ${module.number} • ${escapeHtml(module.stage)}</p>
          <h3>${escapeHtml(module.title)}</h3>
        </div>
        <a class="top-link" href="#roteiro">voltar ao roteiro</a>
      </div>
      <p class="guiding-question"><strong>Pergunta norteadora:</strong> ${escapeHtml(module.guidingQuestion)}</p>
      <div class="module-grid">
        <div>
          ${module.explanation.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          <p class="concept"><strong>Conceito importante:</strong> ${escapeHtml(module.concept)}</p>
        </div>
        ${vectorHtml(module.visual)}
      </div>
      ${tablesHtml(module.tables)}
      <div class="code-grid">${codesHtml(module.codes)}</div>
      ${activityHtml(module.activity, module.number)}
    </article>
  `;
}

function renderModules() {
  const target = $("#modulesList");
  target.innerHTML = data.modules.map(module => {
    const html = moduleHtml(module);
    if (Number(module.number) === 3) return html + simulatorOneHtml();
    if (Number(module.number) === 5) return html + simulatorTwoHtml();
    if (Number(module.number) === 9) return html + simulatorThreeHtml();
    return html;
  }).join("");
}

function renderSynthesis() {
  const target = $("#synthesisTable");
  target.innerHTML = `
    <table>
      <thead><tr><th>Conceito</th><th>Explicação simples</th></tr></thead>
      <tbody>
        ${data.synthesis.map(([concept, description]) => `<tr><td>${escapeHtml(concept)}</td><td>${escapeHtml(description)}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

function renderAssessment() {
  state.quizIndex = 0;
  state.quizMilho = 0;
  state.quizPipoca = 0;
  state.quizAnswered = false;
  state.quizResults = [];
  renderCurrentQuizQuestion();
  updateQuizScoreboard("Selecione uma alternativa e clique em responder.");
}

function getModuleByNumber(moduleNumber) {
  return data.modules.find(module => Number(module.number) === Number(moduleNumber));
}

function validateChoice(questionElement, question) {
  const selected = questionElement.querySelector("input[type='radio']:checked");
  if (!selected) {
    return { ok: false, message: "Escolha uma alternativa antes de corrigir." };
  }
  const ok = Number(selected.value) === Number(question.correct);
  return {
    ok,
    message: ok ? `Boa! ${question.feedback}` : "Ainda não. Revise a explicação do módulo e tente novamente."
  };
}

function validateDrag(questionElement, question) {
  const zones = Array.from(questionElement.querySelectorAll(".drop-zone"));
  const missing = zones.some(zone => !zone.dataset.itemId);
  if (missing) {
    return { ok: false, message: "Arraste um item para cada espaço antes de corrigir." };
  }
  const ok = zones.every(zone => zone.dataset.itemId === zone.dataset.accept);
  return {
    ok,
    message: ok ? `Boa! ${question.feedback}` : "Ainda há item no lugar errado. Ajuste os pares e tente novamente."
  };
}

function validateQuestion(questionElement) {
  const moduleNumber = Number(questionElement.dataset.module);
  const questionIndex = Number(questionElement.dataset.question);
  const module = getModuleByNumber(moduleNumber);
  const question = module?.activity?.questions?.[questionIndex];
  if (!question) {
    return { ok: false, message: "Não foi possível corrigir esta questão." };
  }
  if (question.type === "drag") return validateDrag(questionElement, question);
  return validateChoice(questionElement, question);
}

function markQuestion(questionElement, result) {
  const feedback = questionElement.querySelector(".activity-feedback");
  questionElement.classList.toggle("is-correct", result.ok);
  questionElement.classList.toggle("is-wrong", !result.ok);
  feedback.classList.toggle("is-correct", result.ok);
  feedback.classList.toggle("is-wrong", !result.ok);
  feedback.textContent = result.message;
}

function resetDragQuestion(questionElement) {
  const bank = questionElement.querySelector(".drag-bank");
  const chips = Array.from(questionElement.querySelectorAll(".drag-chip"));
  chips.forEach(chip => {
    chip.classList.remove("is-placed");
    chip.removeAttribute("aria-hidden");
    bank.appendChild(chip);
  });
  questionElement.querySelectorAll(".drop-zone").forEach(zone => {
    delete zone.dataset.itemId;
    zone.classList.remove("is-filled", "is-correct", "is-wrong");
    zone.querySelector(".drop-zone__value").textContent = "Solte aqui";
  });
}

function clearModuleActivity(moduleNumber) {
  const activityBox = $(`.activity-box[data-module="${moduleNumber}"]`);
  if (!activityBox) return;
  activityBox.querySelectorAll("input[type='radio']").forEach(input => { input.checked = false; });
  activityBox.querySelectorAll(".activity-question--drag").forEach(resetDragQuestion);
  activityBox.querySelectorAll(".activity-question").forEach(question => {
    question.classList.remove("is-correct", "is-wrong");
  });
  activityBox.querySelectorAll(".activity-feedback").forEach(feedback => {
    feedback.textContent = "";
    feedback.classList.remove("is-correct", "is-wrong");
  });
  const total = $(`#activity-total-${moduleNumber}`);
  if (total) total.textContent = "Escolha ou arraste as respostas e clique em corrigir.";
}

function checkModuleActivity(moduleNumber) {
  const activityBox = $(`.activity-box[data-module="${moduleNumber}"]`);
  if (!activityBox) return;
  const questions = Array.from(activityBox.querySelectorAll(".activity-question"));
  let correct = 0;
  questions.forEach(questionElement => {
    const result = validateQuestion(questionElement);
    markQuestion(questionElement, result);
    if (result.ok) correct += 1;
  });
  const total = $(`#activity-total-${moduleNumber}`);
  total.textContent = `Resultado: ${correct} de ${questions.length} questão(ões) correta(s). ${correct === questions.length ? "Excelente!" : "Revise as questões marcadas e tente novamente."}`;
}

function placeChipInZone(chip, zone) {
  const question = zone.closest(".activity-question--drag");
  const bank = question.querySelector(".drag-bank");

  const previousChipId = zone.dataset.itemId;
  if (previousChipId) {
    const previousChip = question.querySelector(`.drag-chip[data-item-id="${previousChipId}"]`);
    if (previousChip) {
      previousChip.classList.remove("is-placed");
      previousChip.removeAttribute("aria-hidden");
      bank.appendChild(previousChip);
    }
  }

  zone.dataset.itemId = chip.dataset.itemId;
  zone.classList.add("is-filled");
  zone.classList.remove("is-correct", "is-wrong");
  zone.querySelector(".drop-zone__value").textContent = chip.textContent;
  chip.classList.add("is-placed");
  chip.setAttribute("aria-hidden", "true");
}

function bindActivityInteractions() {
  const modulesList = $("#modulesList");
  let draggedChip = null;

  modulesList.addEventListener("dragstart", (event) => {
    const chip = event.target.closest(".drag-chip");
    if (!chip) return;
    draggedChip = chip;
    event.dataTransfer.setData("text/plain", chip.dataset.itemId);
    event.dataTransfer.effectAllowed = "move";
  });

  modulesList.addEventListener("dragover", (event) => {
    const zone = event.target.closest(".drop-zone");
    if (!zone) return;
    event.preventDefault();
    zone.classList.add("is-over");
  });

  modulesList.addEventListener("dragleave", (event) => {
    const zone = event.target.closest(".drop-zone");
    if (!zone) return;
    zone.classList.remove("is-over");
  });

  modulesList.addEventListener("drop", (event) => {
    const zone = event.target.closest(".drop-zone");
    if (!zone || !draggedChip) return;
    event.preventDefault();
    zone.classList.remove("is-over");
    placeChipInZone(draggedChip, zone);
    draggedChip = null;
  });

  modulesList.addEventListener("click", (event) => {
    const chip = event.target.closest(".drag-chip");
    const zone = event.target.closest(".drop-zone");
    const checkButton = event.target.closest(".check-activity");
    const clearButton = event.target.closest(".clear-activity");

    if (chip) {
      const question = chip.closest(".activity-question--drag");
      question.querySelectorAll(".drag-chip").forEach(item => item.classList.remove("is-selected"));
      chip.classList.add("is-selected");
      return;
    }

    if (zone) {
      const question = zone.closest(".activity-question--drag");
      const selectedChip = question.querySelector(".drag-chip.is-selected:not(.is-placed)");
      if (selectedChip) {
        placeChipInZone(selectedChip, zone);
        selectedChip.classList.remove("is-selected");
      }
      return;
    }

    if (checkButton) {
      checkModuleActivity(Number(checkButton.dataset.module));
      return;
    }

    if (clearButton) {
      clearModuleActivity(Number(clearButton.dataset.module));
    }
  });
}

function parseNumberList(raw) {
  return raw
    .split(",")
    .map(value => Number(value.trim().replace(",", ".")))
    .filter(value => !Number.isNaN(value));
}

function renderSimVector(activeIndex = null) {
  const target = $("#vectorBoxes");
  target.innerHTML = state.vector.map((value, index) => vectorBoxMarkup(value, index, "valores", activeIndex === index ? "is-active" : "")).join("");
}

function portugolLiteral(value) {
  const text = String(value ?? "").trim();
  if (text !== "" && !Number.isNaN(Number(text.replace(",", ".")))) {
    return text.replace(",", ".");
  }
  return `"${text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`;
}

function renderVectorActionCode(action = "initial", details = {}) {
  const codeTarget = $("#vectorActionCode");
  const hintTarget = $("#vectorActionHint");
  if (!codeTarget) return;

  const size = Math.max(1, Number(details.size ?? state.vector.length) || 1);
  const lastIndex = size - 1;
  const index = Number(details.index ?? $("#vectorIndex")?.value ?? 0);
  const value = details.value ?? $("#vectorValue")?.value ?? "";

  const snippets = {
    initial: {
      hint: "O código será atualizado conforme você cria, guarda ou lê uma posição do vetor.",
      lines: [
        "// Escolha uma ação do simulador.",
        "// O Portugol correspondente aparecerá aqui."
      ]
    },
    create: {
      hint: `A ação cria um vetor chamado valores com índices de 0 até ${lastIndex}.`,
      lines: [
        "// Botão: Criar vetor",
        `valores : vetor[0..${lastIndex}] de real`        
      ]
    },
    store: {
      hint: `A ação guarda ${value || "um conteúdo"} na posição valores[${index}].`,
      lines: [
        "// Botão: Guardar valor",
        `indice ← ${index}`,
        `conteudo ← ${portugolLiteral(value)}`,
        "valores[indice] ← conteudo"
      ]
    },
    read: {
      hint: `A ação lê o conteúdo armazenado em valores[${index}].`,
      lines: [
        "// Botão: Ler posição",
        `indice ← ${index}`,
        "valorLido ← valores[indice]",
        "escreva(valorLido)"
      ]
    },
    error: {
      hint: details.message || "Revise os dados informados antes de executar a ação.",
      lines: [
        "// Atenção",
        "// O índice informado está fora do intervalo do vetor."
      ]
    }
  };

  const snippet = snippets[action] || snippets.initial;
  codeTarget.textContent = snippet.lines.join("\n");
  if (hintTarget) hintTarget.textContent = snippet.hint;
}

function createVector() {
  const size = Math.max(3, Math.min(12, Number($("#vectorSize").value) || 6));
  $("#vectorSize").value = size;
  $("#vectorIndex").min = 0;
  $("#vectorIndex").max = size - 1;
  $("#vectorIndex").value = 0;
  $("#vectorValue").value = randomContent();
  state.vector = Array(size).fill("");
  renderSimVector();
  renderVectorActionCode("create", { size });
  $("#vectorFeedback").textContent = `Vetor criado com ${size} posições. Índices disponíveis: 0 até ${size - 1}.`;
}

function storeValue() {
  if (state.vector.length === 0) createVector();

  const index = Number($("#vectorIndex").value);
  const value = $("#vectorValue").value.trim();

  if (index < 0 || index >= state.vector.length) {
    const message = `Esse índice não existe. Use um índice entre 0 e ${state.vector.length - 1}.`;
    $("#vectorFeedback").textContent = message;
    renderVectorActionCode("error", { message });
    return;
  }

  state.vector[index] = value || randomContent();
  const storedValue = state.vector[index];
  renderSimVector(index);
  renderVectorActionCode("store", { index, value: storedValue });

  const nextIndex = index + 1 < state.vector.length ? index + 1 : 0;
  const nextRandomValue = randomContent();
  $("#vectorIndex").value = nextIndex;
  $("#vectorValue").value = nextRandomValue;

  $("#vectorFeedback").textContent = `Guardado: valores[${index}] recebeu ${storedValue}. Próximo índice sugerido: ${nextIndex}. Novo conteúdo aleatório: ${nextRandomValue}.`;
}

function readValue() {
  if (state.vector.length === 0) createVector();
  const index = Number($("#vectorIndex").value);
  if (index < 0 || index >= state.vector.length) {
    const message = `Esse índice não existe. Use um índice entre 0 e ${state.vector.length - 1}.`;
    $("#vectorFeedback").textContent = message;
    renderVectorActionCode("error", { message });
    return;
  }
  renderSimVector(index);
  const value = state.vector[index] || "vazio";
  renderVectorActionCode("read", { index, value });
  $("#vectorFeedback").textContent = `Leitura: valores[${index}] contém ${value}. O índice é ${index}; o conteúdo é ${value}.`;
}

function renderLoopBoxes(activeIndex = null) {
  const target = $("#loopBoxes");
  target.innerHTML = state.loopValues.map((value, index) => vectorBoxMarkup(value, index, "valores", activeIndex === index ? "is-active" : "")).join("");
}

function loopCodeLines() {
  const lastIndex = state.loopValues.length ? state.loopValues.length - 1 : "tamanho - 1";
  return [
    `valores ← [${state.loopValues.join(", ")}]`,
    "soma ← 0",
    `para i de 0 até ${lastIndex} faça`,
    "   valor ← valores[i]",
    "   soma ← soma + valor",
    "fimpara",
    "media ← soma / tamanho(valores)"
  ];
}

function renderLoopCodeLine(line, index, activeLine) {
  const isActive = index === activeLine;
  return `<span class="loop-code__line ${isActive ? "is-executing" : ""}" data-line="${index + 1}">${escapeHtml(line)}</span>`;
}

function renderLoopMemory(step = "check", current = null, previousSum = state.loopSum, newSum = state.loopSum) {
  const target = $("#loopMemory");
  if (!target) return;

  const hasValues = state.loopValues.length > 0;
  const isFinished = step === "finished" || (hasValues && state.loopPhase === "finished");
  const currentIndex = current !== null ? current : (isFinished ? null : state.loopIndex);
  const currentValue = hasValues && currentIndex !== null && currentIndex < state.loopValues.length
    ? state.loopValues[currentIndex]
    : "—";
  const indexValue = isFinished ? "fim" : (hasValues ? currentIndex : "—");
  const media = hasValues ? (state.loopSum / state.loopValues.length).toFixed(2) : "—";
  const nextIndex = isFinished
    ? "fim"
    : (step === "endLoop" ? (state.loopIndex >= state.loopValues.length ? "fim" : state.loopIndex) : state.loopIndex);

  const memoryItems = [
    { label: "valores", value: hasValues ? `[${state.loopValues.join(", ")}]` : "[]" },
    { label: "tamanho", value: hasValues ? state.loopValues.length : "—" },
    { label: "i", value: indexValue, active: step === "check" },
    { label: "valor", value: currentValue, active: step === "read" },
    { label: "valores[i]", value: currentValue, active: step === "read" },
    { label: "soma anterior", value: step === "sum" ? previousSum : state.loopSum },
    { label: "soma atual", value: step === "sum" ? newSum : state.loopSum, active: step === "sum" },
    { label: "próximo i", value: nextIndex, active: step === "endLoop" },
    { label: "média", value: isFinished ? media : "calcula no fim", active: step === "finished" }
  ];

  target.innerHTML = memoryItems.map(item => `
    <div class="memory-cell ${item.active ? "is-active" : ""}">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
    </div>
  `).join("");
}

function renderLoopCode(step = "check", current = null, previousSum = state.loopSum, newSum = state.loopSum) {
  const code = $("#loopCode");
  if (!code) return;

  const activeLineByStep = {
    check: 2,
    read: 3,
    sum: 4,
    endLoop: 5,
    finished: 6
  };
  let activeLine = activeLineByStep[step] ?? 2;
  if (!state.loopValues.length) activeLine = null;

  code.innerHTML = loopCodeLines()
    .map((line, index) => renderLoopCodeLine(line, index, activeLine))
    .join("");

  renderLoopMemory(step, current, previousSum, newSum);
}

function resetLoopStepState() {
  state.loopPhase = "check";
  state.loopCurrentIndex = null;
  state.loopCurrentValue = null;
  state.loopPreviousSum = 0;
}

function startLoop() {
  state.loopValues = parseNumberList($("#loopValues").value);
  state.loopIndex = 0;
  state.loopSum = 0;
  resetLoopStepState();
  renderLoopBoxes();
  renderLoopCode("check");
  $("#loopFeedback").textContent = state.loopValues.length
    ? `Repetição iniciada. Linha 3 ativa: o PARA começa em i = 0 e vai até ${state.loopValues.length - 1}. Clique em próximo passo.`
    : "Digite pelo menos um valor numérico separado por vírgula.";
}

function nextLoop() {
  if (state.loopValues.length === 0) startLoop();
  if (state.loopValues.length === 0) return;

  if (state.loopPhase === "finished") {
    const media = state.loopSum / state.loopValues.length;
    $("#loopFeedback").textContent = `Fim da repetição. Soma = ${state.loopSum}. Média = ${media.toFixed(2)}.`;
    renderLoopBoxes();
    renderLoopCode("finished");
    return;
  }

  if (state.loopPhase === "check") {
    if (state.loopIndex >= state.loopValues.length) {
      const media = state.loopSum / state.loopValues.length;
      state.loopPhase = "finished";
      $("#loopFeedback").textContent = `Linha 7: média ← soma / tamanho(valores). Soma = ${state.loopSum}. Média = ${media.toFixed(2)}.`;
      renderLoopBoxes();
      renderLoopCode("finished");
      return;
    }

    const currentIndex = state.loopIndex;
    const current = state.loopValues[currentIndex];
    state.loopCurrentIndex = currentIndex;
    state.loopCurrentValue = current;
    state.loopPreviousSum = state.loopSum;
    state.loopPhase = "read";
    renderLoopBoxes(currentIndex);
    renderLoopCode("read", currentIndex, state.loopSum, state.loopSum);
    $("#loopFeedback").textContent = `Linha 4: valor ← valores[${currentIndex}]. Agora valor recebe ${current}.`;
    return;
  }

  if (state.loopPhase === "read") {
    const currentIndex = state.loopCurrentIndex;
    const current = state.loopCurrentValue;
    const previousSum = state.loopPreviousSum;
    state.loopSum = previousSum + current;
    state.loopPhase = "sum";
    renderLoopBoxes(currentIndex);
    renderLoopCode("sum", currentIndex, previousSum, state.loopSum);
    $("#loopFeedback").textContent = `Linha 5: soma ← soma + valor. Soma anterior = ${previousSum}; valor = ${current}; nova soma = ${state.loopSum}.`;
    return;
  }

  if (state.loopPhase === "sum") {
    const currentIndex = state.loopCurrentIndex;
    state.loopIndex += 1;
    state.loopPhase = "endLoop";
    renderLoopBoxes(currentIndex);
    renderLoopCode("endLoop", currentIndex, state.loopPreviousSum, state.loopSum);
    $("#loopFeedback").textContent = `Linha 6: fimpara. O próximo índice será ${state.loopIndex >= state.loopValues.length ? "fim" : state.loopIndex}.`;
    return;
  }

  if (state.loopPhase === "endLoop") {
    if (state.loopIndex >= state.loopValues.length) {
      const media = state.loopSum / state.loopValues.length;
      state.loopPhase = "finished";
      renderLoopBoxes();
      renderLoopCode("finished");
      $("#loopFeedback").textContent = `Linha 7: média ← soma / tamanho(valores). Soma = ${state.loopSum}. Média = ${media.toFixed(2)}.`;
      return;
    }

    state.loopPhase = "check";
    renderLoopBoxes(state.loopIndex);
    renderLoopCode("check", state.loopIndex, state.loopSum, state.loopSum);
    $("#loopFeedback").textContent = `Linha 3: o PARA continua com i = ${state.loopIndex}.`;
  }
}

function renderStatsVector() {
  const target = $("#statsVector");
  if (!target) return;
  target.innerHTML = state.statsValues.map((value, index) => vectorBoxMarkup(value, index, "valores")).join("");
}

function renderStatsResult() {
  const target = $("#statsResult");
  if (!target) return;
  target.innerHTML = state.statsItems.map((item, index) => `
    <button class="stat-card stat-card--button" type="button" data-stat-index="${index}" aria-label="Mostrar ou ocultar ${escapeHtml(item.label)}">
      <span>${escapeHtml(item.label)}</span>
      <strong>${state.statsRevealed[index] ? escapeHtml(item.value) : "?"}</strong>
      <em>${state.statsRevealed[index] ? "Clique para ocultar" : "Clique para mostrar"}</em>
    </button>
  `).join("");
}

function toggleStatsResult(index) {
  if (index < 0 || index >= state.statsRevealed.length) return;
  state.statsRevealed[index] = !state.statsRevealed[index];
  renderStatsResult();
}

function calculateStats() {
  const values = parseNumberList($("#statsValues").value);
  const target = $("#statsResult");
  if (!values.length) {
    state.statsValues = [];
    state.statsItems = [];
    state.statsRevealed = [];
    renderStatsVector();
    target.innerHTML = `<p class="feedback">Digite valores numéricos separados por vírgula.</p>`;
    return;
  }
  state.statsValues = values;
  renderStatsVector();

  const sum = values.reduce((acc, value) => acc + value, 0);
  const average = sum / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);
  state.statsItems = [
    { label: "Quantidade", value: values.length },
    { label: "Primeiro índice", value: 0 },
    { label: "Último índice", value: values.length - 1 },
    { label: "Soma", value: sum.toFixed(2) },
    { label: "Média", value: average.toFixed(2) },
    { label: "Maior", value: max.toFixed(2) },
    { label: "Menor", value: min.toFixed(2) }
  ];
  state.statsRevealed = state.statsItems.map(() => false);
  renderStatsResult();
}

function renderCurrentQuizQuestion() {
  const question = FINAL_QUIZ[state.quizIndex];
  if (!question) return;

  $("#quizQuestion").textContent = question.question;
  $("#quizForm").innerHTML = question.options.map((option, index) => `
    <label class="choice-option millionaire-option" for="quiz-option-${state.quizIndex}-${index}">
      <input id="quiz-option-${state.quizIndex}-${index}" type="radio" name="quiz-option" value="${index}">
      <span>${escapeHtml(option)}</span>
    </label>
  `).join("");

  $("#quizFeedback").textContent = `Pergunta ${state.quizIndex + 1}: ${question.hint}`;
  $("#nextQuizQuestion").hidden = true;
  $("#submitQuizAnswer").disabled = false;
  state.quizAnswered = false;
  updateQuizScoreboard(`Dica da rodada: ${question.hint}`);
}

function updateQuizScoreboard(statusMessage = null) {
  const question = FINAL_QUIZ[state.quizIndex] || FINAL_QUIZ[FINAL_QUIZ.length - 1];
  const answeredCount = Math.min(state.quizIndex + (state.quizAnswered ? 1 : 0), FINAL_QUIZ.length);
  $("#quizStep").textContent = `${Math.min(state.quizIndex + 1, FINAL_QUIZ.length)} / ${FINAL_QUIZ.length}`;
  $("#quizMilho").textContent = String(state.quizMilho);
  $("#quizPipoca").textContent = String(state.quizPipoca);
  $("#quizRoundPrize").textContent = `🌽 ${question.milho} milho • 🍿 ${question.pipoca} pipoca${question.pipoca > 1 ? 's' : ''}`;
  $("#quizProgressBar").style.width = `${(answeredCount / FINAL_QUIZ.length) * 100}%`;
  if (statusMessage !== null) {
    $("#quizStatus").textContent = statusMessage;
  }
}

function submitQuizAnswer() {
  if (state.quizAnswered) return;
  const selected = $("#quizForm input[name='quiz-option']:checked");
  if (!selected) {
    $("#quizFeedback").textContent = `Antes de responder, pense na dica: ${FINAL_QUIZ[state.quizIndex].hint}`;
    updateQuizScoreboard("Escolha uma alternativa para tentar ganhar 🌽 milho e 🍿 pipocas.");
    return;
  }

  const question = FINAL_QUIZ[state.quizIndex];
  const selectedIndex = Number(selected.value);
  const isCorrect = selectedIndex === question.correct;

  if (isCorrect) {
    state.quizMilho += question.milho;
    state.quizPipoca += question.pipoca;
  }

  state.quizResults.push({ question: state.quizIndex, correct: isCorrect, selected: selectedIndex });
  state.quizAnswered = true;
  $$("#quizForm input[name='quiz-option']").forEach(input => { input.disabled = true; });
  $("#submitQuizAnswer").disabled = true;
  $("#nextQuizQuestion").hidden = false;

  const baseMessage = isCorrect
    ? `✅ ${question.correctFeedback} Você ganhou 🌽 ${question.milho} milho e 🍿 ${question.pipoca} pipoca${question.pipoca > 1 ? 's' : ''}.`
    : `❌ ${question.wrongFeedback} Nesta rodada você não ganhou prêmio.`;
  $("#quizFeedback").textContent = `${baseMessage} ${question.explanation}`;

  const isLast = state.quizIndex === FINAL_QUIZ.length - 1;
  updateQuizScoreboard(isLast
    ? "Resposta registrada! Agora clique em próxima pergunta para ver o resultado final do seu Show do Milhão do Vetor."
    : `Resposta registrada! ${isCorrect ? 'Muito bom, continue assim.' : 'Siga em frente, a próxima pode render muitos prêmios.'}`);
}

function nextQuizQuestion() {
  if (!state.quizAnswered) return;
  if (state.quizIndex < FINAL_QUIZ.length - 1) {
    state.quizIndex += 1;
    renderCurrentQuizQuestion();
    return;
  }

  const totalCorrect = state.quizResults.filter(item => item.correct).length;
  $("#quizQuestion").textContent = "Fim do questionário!";
  $("#quizForm").innerHTML = `
    <div class="quiz-finish-card">
      <h4>Resultado final</h4>
      <p>Você acertou <strong>${totalCorrect}</strong> de <strong>${FINAL_QUIZ.length}</strong> perguntas.</p>
      <p>Prêmios acumulados: <strong>🌽 ${state.quizMilho} milho</strong> e <strong>🍿 ${state.quizPipoca} pipoca${state.quizPipoca !== 1 ? 's' : ''}</strong>.</p>
      <p>Se quiser, clique em reiniciar para jogar novamente.</p>
    </div>
  `;
  $("#quizFeedback").textContent = totalCorrect === FINAL_QUIZ.length
    ? "🏆 Desempenho excelente! Você dominou o conteúdo de vetores."
    : totalCorrect >= 4
      ? "👏 Muito bom! Você acertou boa parte das questões e já está avançando bem."
      : "💡 Continue praticando. Revendo os módulos e simuladores, você vai evoluir rapidamente.";
  $("#nextQuizQuestion").hidden = true;
  updateQuizScoreboard("Questionário encerrado. Confira sua pontuação final em 🌽 milho e 🍿 pipocas e, se desejar, reinicie.");
}

function restartQuiz() {
  renderAssessment();
}

function bindAssessment() {
  $("#submitQuizAnswer").addEventListener("click", submitQuizAnswer);
  $("#nextQuizQuestion").addEventListener("click", nextQuizQuestion);
  $("#restartQuiz").addEventListener("click", restartQuiz);
}

function openRouteDrawer() {
  const drawer = $("#routeDrawer");
  const overlay = $("#routeDrawerOverlay");
  drawer.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
  requestAnimationFrame(() => drawer.classList.add("is-open"));
  $("#openRouteMenu").setAttribute("aria-expanded", "true");
}

function closeRouteDrawer() {
  const drawer = $("#routeDrawer");
  const overlay = $("#routeDrawerOverlay");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
  $("#openRouteMenu").setAttribute("aria-expanded", "false");
}

function bindRouteDrawer() {
  const openButton = $("#openRouteMenu");
  const closeButton = $("#closeRouteMenu");
  const overlay = $("#routeDrawerOverlay");
  if (!openButton || !closeButton || !overlay) return;
  openButton.addEventListener("click", openRouteDrawer);
  closeButton.addEventListener("click", closeRouteDrawer);
  overlay.addEventListener("click", closeRouteDrawer);
  $("#routeDrawer").addEventListener("click", (event) => {
    const link = event.target.closest("a[href^='#']");
    if (link) closeRouteDrawer();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeRouteDrawer();
  });
}

function updateCurrentSection(id) {
  const label = $("#currentSectionLabel");
  const target = document.getElementById(id);
  if (!label || !target) return;

  const heading = target.querySelector("h2, h3");
  label.textContent = heading ? heading.textContent.trim() : id;

  ["#navInicio", "#navModulos", "#navSintese", "#navAvaliacao", "#openRouteMenu"].forEach(selector => {
    const el = $(selector);
    if (el) el.classList.remove("is-active");
  });

  if (id === "inicio") $("#navInicio")?.classList.add("is-active");
  else if (id === "sintese") $("#navSintese")?.classList.add("is-active");
  else if (id === "avaliacao") $("#navAvaliacao")?.classList.add("is-active");
  else if (id === "roteiro") $("#openRouteMenu")?.classList.add("is-active");
  else if (id.startsWith("modulo-") || id.startsWith("simulador")) {
    $("#navModulos")?.classList.add("is-active");
    $("#openRouteMenu")?.classList.add("is-active");
  }

  $$(".drawer-route-link").forEach(link => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
}

function setupSectionTracking() {
  const tracked = ["inicio", "roteiro", ...data.modules.map(module => module.id), "simulador-1", "simulador-2", "simulador-final", "sintese", "avaliacao"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target?.id) updateCurrentSection(visible.target.id);
  }, {
    threshold: [0.2, 0.35, 0.6],
    rootMargin: "-20% 0px -45% 0px"
  });

  tracked.forEach(section => observer.observe(section));
  updateCurrentSection("inicio");
}

function bindSimulator() {
  $("#createVector").addEventListener("click", createVector);
  $("#storeValue").addEventListener("click", storeValue);
  $("#readValue").addEventListener("click", readValue);
  $("#startLoop").addEventListener("click", startLoop);
  $("#nextLoop").addEventListener("click", nextLoop);
  $("#calculateStats").addEventListener("click", calculateStats);
  $("#statsResult").addEventListener("click", (event) => {
    const button = event.target.closest(".stat-card--button");
    if (!button) return;
    toggleStatsResult(Number(button.dataset.statIndex));
  });
  createVector();
  startLoop();
  calculateStats();
}

function setupSmoothRouteFocus() {
  $$("a[href^='#']").forEach(link => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      setTimeout(() => {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }, 250);
    });
  });
}

function init() {
  renderObjectives();
  renderRoute();
  renderModules();
  renderSynthesis();
  renderAssessment();
  bindActivityInteractions();
  bindSimulator();
  bindAssessment();
  bindRouteDrawer();
  setupSmoothRouteFocus();
  setupSectionTracking();
}

document.addEventListener("DOMContentLoaded", init);
