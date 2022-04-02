//ToDo: Set a disabled Button for skip task, create a cool stats  at the end of the game

//Stats
let games = 0;
let skips = 0;
let tries = 0;

let taskTries = 0;

let level = 0;

/**
 * Stats the game and generates the first task
 */
function startGame(level) {
  this.level = level;
  document.getElementById("nextTaskBtn").style.visibility = "hidden";
  document.getElementById("insertNumberGameResults").style.display = "none";
  document.getElementById("insertNumberGame").style.display = "block";

  new GASLogic("value1", "value2", "operator", level);
  document.getElementById("text").innerText = "Mhhh, schwierige Aufgabe...";
}


/**
 * Stats a new Task
 */
function nextTask() {
  newTask();
  skips++;
  console.log("SKips" + skips)
}

/**
 * Ends game and skip to the result page
 * @constructor
 */
function Done() {
  //change menu
  document.getElementById("insertNumberGame").style.display = "none";
  document.getElementById("insertNumberGameResults").style.display = "inherit";

  //Set stats
  document.getElementById("tasks").innerText = "Aufgaben gelöst: " + games;
  document.getElementById("skips").innerText = "Aufgaben verworfen: " + skips;
  document.getElementById("tries").innerText = "Fehler: " + tries;
}

function submitNumberGame() {

  if (checkLevel("value1", "operator", "value2")) {
    updateText("WoW, super gemacht!")
    setTimeout("newTask()", 1000);
  } else {

    //Update text
    updateText("You dumb fuck!");

    //Update Stats
    updateTriesPlayer();
    taskTries++;

    if (taskTries === 2) {
      document.getElementById("nextTaskBtn").style.visibility = "visible";
    }

  }

}


/**
 * Updates player played games count
 */
function updateGamesPlayer() {
  games++;
}

/**
 * Updates player tries count
 */
function updateTriesPlayer() {
  tries++;
}

function newTask() {
  //Update Stats
  updateGamesPlayer();
  updateTriesPlayer();

  //Skip Button
  taskTries = 0;
  document.getElementById("nextTaskBtn").style.visibility = "hidden";

  //Update Text
  updateText("Mhhh, schwierige Aufgabe...");

  //Generate new game
  new GASLogic("value1", "value2", "operator", this.level);
}

/**
 * Updates the text
 * @param text
 */
function updateText(text) {
  document.getElementById("text").innerText = text;
}

/**
 * Checks if the Task is solved successfully
 * @returns {boolean}
 */
function checkLevel(value1, operator, value2) {
  let a = document.getElementById(value1).value;
  let op = document.getElementById(operator).value;
  let b = document.getElementById(value2).value;

  if (op === "=") {
    if (a === b) {
      return true;
    }
  } else if (op === ">") {
    console.log("S")
    if (a > b) {
      return true;
    }
  } else if (op === "<") {
    if (a < b) {
      return true
    }
  } else {
    console.log(a  + "|" + op + "|" + b);
    return false;
  }

  return true;

}

