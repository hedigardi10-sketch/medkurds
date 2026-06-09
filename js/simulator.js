let currentSimIndex = 0;
let currentNodeId = 'start';
let patientHealth = 100;
let simTimer = null;
let urgencyInterval = null;

function getScenarioData() {
    return allScenarios[currentLang] || allScenarios['ku'];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function openSimulator() {
    document.getElementById('sim-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    // Optionally shuffle scenarios
    // shuffleArray(scenarios); 
    startScenario(0);
}

function closeSimulator() {
    document.getElementById('sim-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    clearSimTimers();
}

function clearSimTimers() {
    clearInterval(simTimer);
    clearInterval(urgencyInterval);
}

function updateVitalsDisplay(vitals) {
    document.getElementById('sim-hr').innerText = vitals.hr;
    document.getElementById('sim-bp').innerText = vitals.bp;
    document.getElementById('sim-spo2').innerText = (vitals.spo2 === "CPR" || vitals.spo2 == 0) ? vitals.spo2 : vitals.spo2 + "%";
}

function updateHealthBar() {
    const healthBar = document.getElementById('sim-health-fill');
    healthBar.style.width = patientHealth + '%';
    
    if (patientHealth > 60) healthBar.style.background = '#4ade80'; // Green
    else if (patientHealth > 30) healthBar.style.background = '#facc15'; // Yellow
    else healthBar.style.background = '#ef4444'; // Red
}

function startScenario(index) {
    const data = getScenarioData();
    if (index >= data.scenarios.length) {
        showSimEnd(true);
        return;
    }
    
    clearSimTimers();
    currentSimIndex = index;
    currentNodeId = 'start';
    patientHealth = 100;
    updateHealthBar();
    
    loadNode();
}

function loadNode() {
    const data = getScenarioData();
    const scenario = data.scenarios[currentSimIndex];
    const node = scenario.nodes[currentNodeId];
    const ui = data.ui;
    
    document.getElementById('sim-title').innerText = scenario.title;
    document.getElementById('sim-desc').innerHTML = node.text;
    
    updateVitalsDisplay(node.vitals);
    
    const choicesDiv = document.getElementById('sim-choices');
    choicesDiv.innerHTML = '';
    
    if (node.isTerminal) {
        clearSimTimers();
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'sim-feedback ' + (node.success ? 'sim-correct' : 'sim-wrong');
        feedbackDiv.innerHTML = "<p>" + (node.success ? ui.simSuccess : ui.simDied) + "</p>";
        choicesDiv.appendChild(feedbackDiv);
        
        if (node.success) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'sim-btn next-btn';
            nextBtn.innerText = ui.simNext;
            nextBtn.onclick = () => startScenario(currentSimIndex + 1);
            choicesDiv.appendChild(nextBtn);
        } else {
            const retryBtn = document.createElement('button');
            retryBtn.className = 'sim-btn retry-btn';
            retryBtn.innerText = ui.simRetry;
            retryBtn.onclick = () => startScenario(currentSimIndex);
            choicesDiv.appendChild(retryBtn);
        }
        return;
    }
    
    // Shuffle choices for the node
    const shuffledChoices = [...node.choices];
    shuffleArray(shuffledChoices);
    
    shuffledChoices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'sim-btn';
        btn.innerText = choice.text;
        btn.onclick = () => handleSimChoice(choice);
        choicesDiv.appendChild(btn);
    });
    
    // Restart health drop timer for the new node (urgency)
    clearSimTimers();
    urgencyInterval = setInterval(() => {
        patientHealth -= 2;
        if (patientHealth <= 0) {
            patientHealth = 0;
            updateHealthBar();
            handleSimDeathByTime();
        }
        updateHealthBar();
    }, 1000);
}

function handleSimChoice(choice) {
    patientHealth += (choice.impact || 0);
    if (patientHealth > 100) patientHealth = 100;
    if (patientHealth < 0) patientHealth = 0;
    updateHealthBar();
    
    currentNodeId = choice.nextNodeId;
    
    if (patientHealth <= 0) {
        handleSimDeathByTime();
        return;
    }
    
    loadNode();
}

function handleSimDeathByTime() {
    clearSimTimers();
    const ui = getScenarioData().ui;
    document.getElementById('sim-title').innerText = ui.simTimeOutTitle;
    document.getElementById('sim-desc').innerHTML = ui.simTimeOutDesc;
    
    updateVitalsDisplay({ hr: 0, bp: "0/0", spo2: 0 });
    
    const choicesDiv = document.getElementById('sim-choices');
    choicesDiv.innerHTML = '<button class="sim-btn retry-btn" onclick="startScenario(currentSimIndex)">' + ui.simRetryState + '</button>';
}

function showSimEnd(success) {
    const ui = getScenarioData().ui;
    document.getElementById('sim-title').innerText = ui.simCongrats;
    document.getElementById('sim-desc').innerHTML = ui.simEndDesc;
    updateVitalsDisplay({ hr: 80, bp: "120/80", spo2: 99 });
    
    const choicesDiv = document.getElementById('sim-choices');
    choicesDiv.innerHTML = '<button class="sim-btn" onclick="closeSimulator()">' + ui.simClose + '</button>';
}
