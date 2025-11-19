let teamAInput = document.querySelector(".teamA-input");
let teamABtn = document.querySelector(".teamA-btn");
let teamBInput = document.querySelector(".teamB-input");
let teamBBtn = document.querySelector(".teamB-btn");

let aH1 = document.querySelector(".teamA-header");
let teamAList = document.querySelector(".teamA-list");
let bH1 = document.querySelector(".teamB-header");
let teamBList = document.querySelector(".teamB-list");

let addPlayerInput = document.querySelector(".add-player-input");
let addPlayerBtn = document.querySelector(".add-player-button");

function changeNameA() {
  let teamAValue = teamAInput.value;
  aH1.innerHTML = teamAValue;
}

function changeNameB() {
  let teamBValue = teamBInput.value;
  bH1.innerHTML = teamBValue;
}

teamABtn.addEventListener("click", changeNameA);

teamBBtn.addEventListener("click", changeNameB);

///////////////////////////////////////////////////////////////////////

function addPlayers() {
  let playerName = addPlayerInput.value;
  let li = document.createElement("li");

  let deleteButtonA = document.createElement("button");
  deleteButtonA.innerText = "X";

  let deleteButtonB = document.createElement("button");
  deleteButtonB.innerText = "X";

  if (teamAList.childNodes.length > 4 && teamBList.childNodes.length > 4) {
    return null;
  }

  if (teamAList.childNodes.length < 5) {
    li.innerHTML = playerName;
    teamAList.append(li);
    li.append(deleteButtonA);
  } else {
    li.innerHTML = playerName;
    teamBList.append(li);
    li.append(deleteButtonB);
  }

  function deleteA() {
    li.remove();
  }

  function deleteB() {
    li.remove();
  }

  deleteButtonA.addEventListener("click", deleteA);
  deleteButtonB.addEventListener("click", deleteB);
}

addPlayerBtn.addEventListener("click", addPlayers);
