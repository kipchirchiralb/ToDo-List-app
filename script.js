// DOM VARIABLES
const addTaskInput = document.querySelector("#add-task");
const myList = document.querySelector("#to-do-list");
const addTaskBtn = document.querySelector("#add-task-btn");
const clearInputField = document.querySelector("#clear-input-field");
const showCompleteBtn = document.querySelector("#show-complete-btn");
const hideCompleteBtn = document.querySelector("#hide-complete-btn");
const checkBtns = document.querySelectorAll(".check-btn");
const completeTasks = document.querySelectorAll(".checked-btn");
const clearList = document.querySelector("#clear-all-tasks");

// EVENT LISTENERS

// adding a task to the task list and clearing the input field
addTaskInput.addEventListener("keypress", function (e) {
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

// check buttons
for (let i = 0; i < checkBtns.length; i++) {
  checkBtns[i].addEventListener("click", checkBtn);
}

// FUNCTIONS

function addTaskToList() {
  if (addTaskInput.value.length == 0) {
    alert("Task field empty");
  } else {
    let text = addTaskInput.value;
    // if (text!=items[i]) - store items in local storage
    let newTask = `<li>
    <input type="checkbox" id="checkbox" name="checkbox">
    <label for = "checkbox">${text}</label>
    </li>`;

    myList.append(newTask.value);
    addTaskInput.value = "";
  }
}

function showCompleteTasks() {
  hideCompleteBtn.classList.remove("hide");
  showCompleteBtn.classList.add("hide");
}

function hideCompleteTasks() {
  showCompleteBtn.classList.remove("hide");
  hideCompleteBtn.classList.add("hide");
}

function checkBtn() {
  for (let i = 0; i < checkBtns.length; i++) {
    if (checkBtns[i].classList.hasOwnProperty("unchecked-btn")) {
      console.log("unchecked button");
    }
  }
  // checkBtns[i].classList.add("checked-btn");
  // checkBtns[i].classList.remove("unchecked-btn");
  // console.log("checkBtns[i].textContent");
}
