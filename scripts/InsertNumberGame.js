//ToDo: Set a disabled Button for skip task, create a cool stats  at the end of the game

//Stats
let games = 0;
let skips = 0;
let tries = 0;

let taskTries = 0;

/**
 * Stats the game and generates the first task
 */
function startGame(level, difficulty) {

  document.getElementById("selectLevel").style.display = "none";
  document.getElementById("nextTaskBtn").style.visibility = "hidden";
  document.getElementById("insertNumberGameResults").style.display = "none";
  document.getElementById("insertNumberGame").style.display = "block";

  new NumberGame("value1", "value2", "operator", "result", level, difficulty);
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

  if (checkLevel("value1", "operator", "value2", "result")) {
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
  new NumberGame("value1", "value2", "operator", "result", 0);
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
function checkLevel(value1, operator, value2, result) {
  let a = document.getElementById(value1).value;
  let op = document.getElementById(operator).value;
  let b = document.getElementById(value2).value;
  let res = document.getElementById(result).value;

  console.log(a + op + b + "=" + res);
  console.log(a + op + b + "=" + res);
  console.log(a + op + b + "=" + res);
  console.log(a + op + b + "=" + res);

  if (op === "+" && ((parseInt(a) + parseInt(b)) === parseInt(res))) {
    return true;
  } else if (op === "-" && ((a - b) === res)) {
    return true;
  } else if (op === "*" && ((a * b) === res)) {
    return true;
  } else if (op === "/" && ((a / b) === res)) {
    return true;
  } else {
    console.log("Du dummer HS")
  }
}

