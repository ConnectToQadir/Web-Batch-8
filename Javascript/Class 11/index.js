

var allTasks = [];
var task = document.getElementById("taskInput");



window.addEventListener("load",()=>{
    if(window.localStorage.getItem("tasks")){
        allTasks = JSON.parse(window.localStorage.getItem("tasks"))
        listTasks()
    }
})



function addTask() {
  allTasks.unshift(task.value);
  listTasks()
  task.value = ""
  task.focus()
}

function removeTask(index) {
  allTasks.splice(index, 1);
  listTasks()
}

// <div class="task">
//                 <p>Task 1</p>
//                 <i class="bx bx-trash"></i>
//             </div>


var tasksDiv = document.getElementById("tasks");

function listTasks() {

    tasksDiv.innerHTML = ""

    allTasks.forEach((v, i) => {

    var task = document.createElement("div");
    task.classList.add("task");

    var p = document.createElement("p");
    p.innerText = v;

    var trash = document.createElement("i");
    trash.classList.add("bx");
    trash.classList.add("bx-trash");
    trash.addEventListener("click",()=>removeTask(i))


    task.appendChild(p);
    task.appendChild(trash);

    
    tasksDiv.appendChild(task);



    // Storing tasks in local storage
    window.localStorage.setItem("tasks",JSON.stringify(allTasks))

  });
}

listTasks();
