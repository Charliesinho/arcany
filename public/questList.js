const questList = {
    testQuest: {
      displayName: "A testing quest",
      description: "A quest to test the quest system on Arcany, get ready to collect some stuff!",
      requirements: { fishing: 2, combat: 2, crafting: 0, enchanting: 0, cooking: 0 },
      steps: [
        {
          stepDisplay: "A simple beggining",
          objectiveDisplay: "Find a stick and put it in the rock to get a key",
          objetiveType: "deliver",
          value: "stick",
          quantity: 1,
          reward: "chestKeyCommon",
          dialog: [
            { name: "Rick", scale: 2, customFunction: null, cutscene: null, expression: "normal", text: "This place is cool!" },
            { name: "Rick", scale: 2, customFunction: null, cutscene: null, expression: "slow", text: "Buut..." },
            { name: "Rick", scale: 2, customFunction: null, cutscene: null, expression: "slow", text: "Just" },
            { name: "Rick", scale: 2.5, customFunction: null, cutscene: null, expression: "slow", text: "be" },
            { name: "Rick", scale: 3, customFunction: null, cutscene: null, expression: "scream", text: "CAREFUL!!" },
            { name: "Rick", scale: 2, customFunction: null, cutscene: null, expression: "normal", text: "Actually" },
            { name: "Rick", scale: 1, customFunction: null, cutscene: null, expression: "normal", text: "Look at this area!" },
            { name: "Rick", scale: 1, customFunction: null, cutscene: [2000, 2000], expression: "normal", text: "You can even fish there" },
            { name: "Rick", scale: 1, customFunction: null, cutscene: [2000, 2000], expression: "slow", text: "..." },
            { name: "Rick", scale: 1, customFunction: null, cutscene: [2000, 2000], expression: "normal", text: "I think" },
            { name: "Rick", scale: 1, customFunction: null, cutscene: null, expression: "normal", text: "Anyway" },
            { name: "Rick", scale: 2, customFunction: null, cutscene: null, expression: "dreamy", text: "relaaaaaaaaaax my friend" },
            { name: "Rick", scale: 2, customFunction: null, cutscene: null, expression: "normal", text: "see you!" },
          ]
        },
        {
          stepDisplay: "And the adventure continues",
          objectiveDisplay: "Get a fish from the frog man",
          objetiveType: "interact",
          reward: "low",
          dialog: [
            { name: "Rick", scale: 2, customFunction: null, cutscene: null, expression: "scream", text: "OH GOD!" },
            { name: "Rick", scale: 2, customFunction: null, cutscene: null, expression: "slow", text: "You..." },
            { name: "Rick", scale: 2, customFunction: null, cutscene: null, expression: "scream", text: "SCARED ME!" },
            { name: "Rick", scale: 2, customFunction: null, cutscene: null, expression: "normal", text: "Anyway" },
            { name: "Rick", scale: 2, customFunction: null, cutscene: null, expression: "normal", text: "Take this fish and put it in that house over there" },
          ]
        },
        {
          stepDisplay: "And the adventure continues",
          objectiveDisplay: "Get a fish from the frog man",
          objetiveType: "deliver",
          value: "low",
          quantity: 1,
          reward: "fishrmanInventory",
          dialog: [
            { expression: "normal", text: "Good job, now you can get this." },
          ]
        },
      ]
    },
    secondQuest: {
      displayName: "A second quest",
      description: "Another quest to see how the dropdown behaves.",
      requirements: { fishing: 0, combat: 3, crafting: 1, enchanting: 1, cooking: 0 },
      steps: [
        {
          stepDisplay: "First challenge",
          objectiveDisplay: "Talk to the blacksmith",
          objetiveType: "interact",
          reward: "ironSword",
          dialog: [
            { name: "Rick", scale: 2, customFunction: null, cutscene: null, expression: "normal", text: "Hey there! Need a sword?" }
          ]
        }
      ]
    }
  };
  
  let selectedQuestStep = null;
Object.defineProperty(window, 'selectedQuestStep', {
  get() { return selectedQuestStep; },
  set(v) { selectedQuestStep = v; updateSelectionReadout(); highlightSelection(); }
});

function updateSelectionReadout() {
  document.getElementById('selection-readout').textContent = JSON.stringify(selectedQuestStep);
}

function setSelection(tuple) {
  window.selectedQuestStep = tuple;
}

function renderQuest(questKey) {
  const quest = questList[questKey];
  const root = document.getElementById('quest-container');
  root.innerHTML = '';

  // Header
  const header = document.createElement('div');
  header.className = 'quest-header';

  const title = document.createElement('h2');
  title.className = 'quest-title quest-title-btn';
  title.textContent = quest.displayName;
  title.title = 'Click to select quest';
  title.addEventListener('click', () => setSelection([questKey, null]));

  const keyBadge = document.createElement('div');
  keyBadge.className = 'quest-key';
  keyBadge.textContent = questKey;

  header.appendChild(title);
  header.appendChild(keyBadge);

  // Body
  const body = document.createElement('div');
  body.className = 'quest-body';

  const desc = document.createElement('div');
  desc.className = 'desc';
  desc.textContent = quest.description;

  const req = document.createElement('section');
  req.className = 'requirements';
  req.innerHTML = '<h4>Requirements</h4>';
  const ul = document.createElement('ul');
  Object.entries(quest.requirements || {}).forEach(([k, v]) => {
    const li = document.createElement('li');
    li.innerHTML = `<b>${k}</b>: ${v}`;
    ul.appendChild(li);
  });
  req.appendChild(ul);

  const steps = document.createElement('section');
  steps.className = 'steps';
  steps.innerHTML = '<h4>Steps</h4>';
  const ol = document.createElement('ol');

  (quest.steps || []).forEach((step, index) => {
    const stepNumber = index + 1;

    const li = document.createElement('li');
    li.className = 'step';
    li.dataset.stepNumber = String(stepNumber);
    li.title = `Click to select step ${stepNumber}`;

    // Toggle handler
    li.addEventListener('click', () => {
      if (
        !selectedQuestStep ||
        selectedQuestStep[0] !== questKey ||
        selectedQuestStep[1] !== stepNumber
      ) {
        // First click → starter
        setSelection([questKey, stepNumber, "starter"]);
      } else if (selectedQuestStep[2] === "starter") {
        // Second click → deliver
        setSelection([questKey, stepNumber, "deliver"]);
      } else {
        // Third click → cycle back to starter
        setSelection([questKey, stepNumber, "starter"]);
      }
    });

    const head = document.createElement('div');
    head.className = 'step-head';
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = `Step ${stepNumber}`;
    const h3 = document.createElement('h3');
    h3.className = 'step-title';
    h3.textContent = step.stepDisplay || `Step ${stepNumber}`;
    head.appendChild(badge);
    head.appendChild(h3);

    const kv = document.createElement('div');
    kv.className = 'kv';
    const kvItems = [
      ['Objective', step.objectiveDisplay],
      ['Type', step.objetiveType],
      ['Value', step.value],
      ['Quantity', step.quantity],
      ['Reward', step.reward],
    ];
    kvItems.forEach(([k, v]) => {
      if (v !== undefined && v !== null) {
        const p = document.createElement('div');
        p.innerHTML = `<b>${k}:</b> ${v}`;
        kv.appendChild(p);
      }
    });

    const dialog = document.createElement('div');
    dialog.className = 'dialog';
    (step.dialog || []).forEach(({ expression, text }) => {
      const row = document.createElement('div');
      row.className = 'line';
      const ex = document.createElement('div');
      ex.className = 'expr';
      ex.textContent = expression;
      const tx = document.createElement('div');
      tx.className = 'text';
      tx.textContent = text;
      row.appendChild(ex);
      row.appendChild(tx);
      dialog.appendChild(row);
    });

    li.appendChild(head);
    li.appendChild(kv);
    li.appendChild(dialog);
    ol.appendChild(li);
  });

  steps.appendChild(ol);

  body.appendChild(desc);
  body.appendChild(req);
  body.appendChild(steps);

  root.appendChild(header);
  root.appendChild(body);

  highlightSelection();
}

function highlightSelection() {
  const root = document.getElementById('quest-container');
  const all = root.querySelectorAll('.step');
  all.forEach(el => {
    el.classList.remove('active', 'starter', 'deliver');
  });

  if (!selectedQuestStep || selectedQuestStep[1] == null) return;
  const target = root.querySelector(`.step[data-step-number="${selectedQuestStep[1]}"]`);
  if (target) {
    target.classList.add('active');
    if (selectedQuestStep[2] === "starter") {
      target.classList.add('starter');
    } else if (selectedQuestStep[2] === "deliver") {
      target.classList.add('deliver');
    }
  }
}

function populateQuestDropdown() {
  const select = document.getElementById('questSelect');
  select.innerHTML = '';
  Object.keys(questList).forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = questList[key].displayName;
    select.appendChild(opt);
  });

  // Event listener for changing quest
  select.addEventListener('change', () => {
    setSelection(null); // reset variable
    renderQuest(select.value);
  });
}

// Init
populateQuestDropdown();
document.getElementById('questSelect').value = 'testQuest';
renderQuest('testQuest');
setSelection(['testQuest', null]);


// Track dialog state
let dialogIndex = -1;  // -1 means no dialog started yet
let dialogLines = [];
let typingInterval = null;
let lineFinished = false; // NEW: track if current line is done

// Start dialog for current quest + step
function startDialog() {
  if (!currentDialogTitle || currentDialogTitle.length < 2) return;

  const [questName, stepNumber, state] = currentDialogTitle;
  if (!questList[questName] || !questList[questName].steps[stepNumber - 1]) return;

  const step = questList[questName].steps[stepNumber - 1];
  dialogLines = step.dialog || [];
  dialogIndex = 0;

  if (dialogLines.length > 0 && state == "starter") {
    keyBlocker = true;
    openChatPanel();
    showDialogLine();
  }
}

// Show one line in the panel
function showDialogLine() {
    const line = dialogLines[dialogIndex];
    if (!line) return;

    // Set character name
    document.getElementById("charName").textContent = line.name || "NPC";

    // Handle camera scale
    if (line.scale !== undefined) {
        canvasLobby.style.transform = `scale(${line.scale})`
    }

    // Handle cutscene coordinates
    if (Array.isArray(line.cutscene) && line.cutscene.length >= 2) {
        secondaryCameraX = line.cutscene[0];
        secondaryCameraY = line.cutscene[1];
        cutscene = true;
    } else {
        cutscene = false;
    }

    const textElement = document.getElementById("chatText");
    textElement.innerHTML = ""; // clear previous text

    let i = 0;
    lineFinished = false; // reset
    clearInterval(typingInterval); // stop any previous typing loop

    // Set typing speed based on expression
    let speed = 50; // default (normal)
    if (line.expression === "slow") speed = 150;
    if (line.expression === "scream") speed = 20;
    if (line.expression === "dreamy") speed = 100;

    typingInterval = setInterval(() => {
        if (i >= line.text.length) {
            clearInterval(typingInterval);
            lineFinished = true; // done typing
            return;
        }

        const char = line.text[i];
        const span = document.createElement("span");

        // Preserve spaces
        if (char === " ") {
            span.innerHTML = "&nbsp;";
        } else {
            span.textContent = char;

            if (line.expression === "scream") {
                span.classList.add("vibrate");
                span.style.animationDelay = `${Math.random() * 0.2}s`;
                span.style.color = "#ff2b2b";
            }

            if (line.expression === "dreamy") {
                span.classList.add("dreamy");
                span.style.animationDelay = `${i * 0.1}s`; // wave offset per letter
                span.style.color = "#2b83ff";
            }
        }

        textElement.appendChild(span);
        i++;
    }, speed);
}


// Open and close helpers
function openChatPanel() {
  dialogOpened = true;
  canvasLobby.style.transform = `scale(2)`;
}

function closeChatPanel() {
  dialogOpened = false;
  dialogLines = [];
  dialogIndex = -1;
  lineFinished = false;
  canvasLobby.style.transform = `scale(1)`;
}

// Listen for keys
document.addEventListener("keydown", (e) => {
    if (!dialogAvailable) return;

    if (!dialogOpened) {
        if (e.key?.toLowerCase() === "e") {
            // No dialog active → start
            startDialog();
        }
        return;
    }

    // Dialog is open
    if (e.key?.toLowerCase() === "e") {
        if (dialogLines.length > 0) {
            const line = dialogLines[dialogIndex];

            if (!lineFinished) {
                // Finish current line instantly
                clearInterval(typingInterval);
                const textElement = document.getElementById("chatText");
                textElement.innerHTML = ""; // clear partial text

                for (let i = 0; i < line.text.length; i++) {
                    const char = line.text[i];
                    const span = document.createElement("span");

                    if (char === " ") {
                        span.innerHTML = "&nbsp;";
                    } else {
                        span.textContent = char;

                        if (line.expression === "scream") {
                            span.classList.add("vibrate");
                            span.style.animationDelay = `${Math.random() * 0.2}s`;
                            span.style.color = "red";
                        }

                        if (line.expression === "dreamy") {
                            span.classList.add("dreamy");
                            span.style.animationDelay = `${i * 0.1}s`;
                        }
                    }

                    textElement.appendChild(span);
                }

                lineFinished = true;
                return;
            }

            // Finished → advance
            dialogIndex++;
            if (dialogIndex < dialogLines.length) {
                showDialogLine();
            } else {
                closeChatPanel();
                keyBlocker = false;
            }
        }
    }

    if (e.key?.toLowerCase() === "escape") { // escape closes panel
        closeChatPanel();
        keyBlocker = false;
    }
});

