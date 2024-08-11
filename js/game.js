let rollNumber = 0;
let roundNumber = 1;
let diceAnywhere = [];
let diceOnTable = [];
let diceSelected = [];
let currentDieIndex;
let dieIndexHolder = [0, 1, 2, 3, 4];
let selectedDiceElements = [];

const diceArea = document.getElementById("diceArea");
const selectedDiceArea = document.getElementById("selectedDiceArea");
const rollButton = document.getElementById("rollDiceButton");
const roundNumberElement = document.getElementById("round-number");
const siteWrapper = document.getElementById("site-wrapper");
const siteCanvas = document.getElementById("site-canvas");
const speculativeScoreTab = document.getElementsByClassName("speculative-score");

rollButton.addEventListener("click", rollDie, false);

checkRollNumber();

function randomizeDie() {
    return Math.floor((Math.random() * 6) + 1);
}

function checkRollNumber() {
        switch(rollNumber){
            case 0:
                rollButton.className = "";
                rollNumber++;
                break;

            case 1:
                rollButton.className = "roll-1";
                rollNumber++;
                break;

            case 2:
                rollButton.className = "roll-2";
                rollNumber++;
                break;
 
            case 3:
                rollButton.className = "roll-3";
                rollButton.removeEventListener("click", rollDie, false);
                rollNumber++;
                setTimeout(function(){
                    rollButton.className = "roll-3 disabled";
                }, 500);
                break;

            default:
                console.log("Roll number error");
        }
}

function rollDie() {
    checkRollNumber();
    
    if (roundNumber === 1){
        document.getElementById("round-number-wrapper").className = "visible";
    }

    diceArea.innerHTML = "";
    diceOnTable = [];

    let amountToRoll = 5 - diceSelected.length;
     
    for(let i = 0; i < amountToRoll; i++){
        let diceRoll = randomizeDie();
        diceOnTable.push(diceRoll);
    }

    drawDiceOnTable();
    updateDiceAnywhere();    
    updateScoreTable();
}

function drawDiceOnTable() {
    dieIndexHolder = [0, 1, 2, 3, 4];

    for(let i = 0; i < diceOnTable.length; i++){
        drawDieOnTable(diceOnTable[i], dieIndexHolder[i]);
    }

    updateSelectedDiceElements();
	
    if(selectedDiceElements){
        for(let i = 0; i < selectedDiceElements.length; i++){
            selectedDiceElements[i].setAttribute("die-index", diceOnTable.length + i);
        }
    }
}

function selectDieFromTable() {
    let diceValue = parseInt(this.getAttribute("die-value"), 10);
    let position = diceOnTable.indexOf(diceValue);

    currentDieIndex = parseInt(this.getAttribute("die-index"), 10);
	
    diceOnTable.splice(position, 1);
	
    this.parentNode.removeChild(this);
	
    diceSelected.push(diceValue);
	
    drawSelectedDice(diceValue, currentDieIndex);
    updateDiceAnywhere();
    updateScoreTable();
}

function drawSelectedDice(value, index) {
    let dieDiv = document.createElement("div");
    dieDiv.className += "die-selected";

    selectedDiceArea.appendChild(dieDiv);

    dieDiv.setAttribute("die-value", value);
    dieDiv.setAttribute("die-index", index);
    dieDiv.addEventListener("click", removeDieSelection, false);
}

function removeDieSelection() {
    let diceValue = parseInt(this.getAttribute("die-value"), 10);
    let position = diceSelected.indexOf(diceValue);

    currentDieIndex = parseInt(this.getAttribute("die-index"), 10);
    
    diceSelected.splice(position, 1);
	
    diceOnTable.push(diceValue);
	
    drawDieOnTable(diceValue, currentDieIndex);

    this.parentNode.removeChild(this);
	
    updateDiceAnywhere();
    updateScoreTable();
}
 
function drawDieOnTable(value, index) {
    let dieDiv = document.createElement("div");
    dieDiv.className += "die";
    
    diceArea.appendChild(dieDiv);
    
    dieDiv.setAttribute("die-value", value);
    dieDiv.setAttribute("die-index", index);
    dieDiv.addEventListener("click", selectDieFromTable, false);
}

function hideSpeculativeScores() {
    for(let element of speculativeScoreTab){
        element.style.display = "none";
    }
}

function updateRoundNumber() {
    roundNumberElement.innerHTML = Math.min(roundNumber, 13);
}

function resetTable(){
    diceOnTable = [];
    diceSelected = [];
    dieIndexHolder = [0, 1, 2, 3, 4];
    
    updateDiceAnywhere();
    
    rollNumber = 0;    
    checkRollNumber();

    hideSpeculativeScores();

    updateRoundNumber();
    
    rollButton.addEventListener("click", rollDie, false);
	
    selectedDiceArea.innerHTML = "";
    diceArea.innerHTML = "";
}


function resetGame(){
    window.location.reload(false);
}

function updateSelectedDiceElements() {
    if(selectedDiceArea.innerHTML !== ""){
        selectedDiceElements = document.getElementsByClassName("die-selected");
    }
}

function updateDiceAnywhere(){
    if(diceSelected){
        diceAnywhere = diceOnTable.concat(diceSelected);
    }
    else {
        diceAnywhere = diceOnTable;
    }
}