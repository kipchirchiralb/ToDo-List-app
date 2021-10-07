// DOM VARIABLES
const addTaskInput = document.querySelector("#add-task");
const myList = document.querySelector("#to-do-list");
const addTaskBtn = document.querySelector("#add-task-btn");
const clearInputField = document.querySelector("#clear-input-field");
const showCompleteBtn = document.querySelector("#show-complete-btn");
const hideCompleteBtn = document.querySelector("#hide-complete-btn");
const checkBtns = document.querySelectorAll(".unchecked-btn");
const completeTasks = document.querySelectorAll(".checked-btn");
const clearList = document.querySelector("#clear-all-tasks");

// EVENT LISTENERS

// adding a task to the task list and clearing the input field
addTaskInput.addEventListener("keypress", function (e) {
  console.log("smsm");
  if (e.key === "Enter") {
    addTaskToList();
  }
});

addTaskBtn.addEventListener("click", addTaskToList);

clearInputField.addEventListener("click", function (e) {
  addTaskInput.value = "";
});

clearList.addEventListener("click", function (e) {
  myList.innerHTML = "";
});

// toggle between showing and hiding complete tasks
showCompleteBtn.addEventListener("click", showCompleteTasks);
hideCompleteBtn.addEventListener("click", hideCompleteTasks);

// FUNCTIONS

function addTaskToList() {
  if (addTaskInput.value.length == 0) {
    alert("Task field empty");
  } else {
    let text = addTaskInput.value;
    // if (text!=items[i]) - store items in local storage
    let newItem = document.createElement("li");
    let indicatorBtn = document.createElement("button");
    indicatorBtn.textContent = "";
    indicatorBtn.classList.add("unchecked-btn");
    let textNode = document.createTextNode(text);
    newItem.append(textNode);
    newItem.appendChild(indicatorBtn);
    myList.appendChild(newItem);
    addTaskInput.value = "";
  }
}

function showCompleteTasks() {
  hideCompleteBtn.classList.remove("hide");
  showCompleteBtn.classList.add("hide");
  completeTasks.classList.remove("hide");
}

function hideCompleteTasks() {
  showCompleteBtn.classList.remove("hide");
  hideCompleteBtn.classList.add("hide");
  completeTasks.classList.add("hide");
}

for (let i = 0; i < checkBtns.length; i++) {
  function checkBtn() {
    checkBtns[i].classList.add("checked-btn");
    checkBtns[i].classList.remove("unchecked-btn");
    console.log("checkBtns[i].textContent");
  }
  checkBtns[i].addEventListener("click", checkBtn);
  console.log(checkBtns[i]);
}
