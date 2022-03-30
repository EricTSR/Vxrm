let user, level;

function changeLevelName() {
  document.getElementById("labelLevel").innerText = "Klasse: " + (parseInt(document.getElementById("level").value) + 1);
}


function logUser() {
  user = document.getElementById("username").innerText;
  level = document.getElementById("level").value;

  window.location.href = "../sites/home.html";

  console.log("User created: Name: " + user + " | Level: " + level);
}