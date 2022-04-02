let levelState = 0;
let name = "Peter";
let level = "";

function changeLevelName() {
  document.getElementById("labelLevel").innerText = "Klasse: " + (parseInt(document.getElementById("level").value) + 1);
}

/**
 * Starts the js
 */
function start() {
  changeLevelState();
}

function login() {
  logUser();
  levelState++;
  changeLevelState();
  setUser();
}


function displayGames(level) {
  if (level <= 1) {
    document.getElementById("sachaufgaben").style.display = "none";
  }

  levelState++;
  changeLevelState();

}


/**
 * Logs the user data
 */
function logUser() {
  console.log("User created: name:" + name);
}

function setUser() {
  document.getElementsByClassName("welcome")[0].innerHTML = "Willkommen, " + name;
  document.getElementsByClassName("welcome")[1].innerHTML = "Willkommen, " + name;
}

/**
 * Displays the current Site
 */
function changeLevelState() {
  if (levelState === 0) {
    document.getElementById("login").style.visibility = "flex";
    document.getElementById("class_selection").style.display = "none";
    document.getElementById("levels_selection").style.display = "none";
  } else if (levelState === 1) {
    document.getElementById("login").style.display = "none";
    document.getElementById("class_selection").style.display = "flex";
    document.getElementById("levels_selection").style.display = "none";
  } else {
    document.getElementById("login").style.display = "none";
    document.getElementById("class_selection").style.display = "none";
    document.getElementById("levels_selection").style.display = "flex";
  }

}