const addTaskInput = document.querySelector("#add-task")
const myList = document.querySelector("#to-do-list")
const addTaskBtn = document.querySelector("#add-task-btn")
const clearInputField = document.querySelector("#clear-input-field")
const showCompleteBtn = document.querySelector("#show-complete-btn")
const hideCompleteBtn = document.querySelector("#hide-complete-btn")


// adding a task to the task list and clearing the input field
addTaskInput.addEventListener("keypress", function(e) {
    console.log("smsm")
    if (e.key === "Enter") {
        addTaskToList()
    }
})

addTaskBtn.addEventListener("click", addTaskToList)

clearInputField.addEventListener("click", function(e) {
    addTaskInput.value = ""
})

function addTaskToList() {
    let text = addTaskInput.value
        // if (text!=items[i]) - store items in local storage
    let newItem = document.createElement("li")
    let indicatorBtn = document.createElement("button")
    indicatorBtn.textContent = ""
    let textNode = document.createTextNode(text)
    newItem.append(textNode)
    newItem.appendChild(indicatorBtn)
    myList.appendChild(newItem)
    addTaskInput.value = ""

}


// toggle between showing and hiding complete tasks
showCompleteBtn.addEventListener("click", showCompleteTasks)
hideCompleteBtn.addEventListener("click", hideCompleteTasks)

function showCompleteTasks() {
    hideCompleteBtn.classList.remove("hide")
    showCompleteBtn.classList.add("hide")
}

function hideCompleteTasks() {
    showCompleteBtn.classList.remove("hide")
    hideCompleteBtn.classList.add("hide")
}

// function bindButtons(){
//     var buttons = $('#buttons button');

//     buttons.on('click', function(e){
//       var $this = $(this);
//       buttons.removeClass('selected').addClass('disabled');
//       $this.addClass('selected').removeClass('disabled');

//       switch ($this.attr('id')){
//           case 'yes': 
//               val = true;
//               break;
//           case 'no': 
//               val = false;
//               break;
//       }
//       //do something with the list
//     })
//   }