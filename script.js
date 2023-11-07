function saveName() {
  const name = document.getElementById("nameInput").value;
  localStorage.setItem("userName", name);
  displaySavedName();
}

function deleteName() {
  localStorage.removeItem("userName");
  displaySavedName();
}

function displaySavedName() {
  const savedName = localStorage.getItem("userName");
  const savedNameSpan = document.getElementById("savedName");
  if (savedName) {
    savedNameSpan.innerText = savedName;
  } else {
    savedNameSpan.innerText = "";
  }
}

displaySavedName();
