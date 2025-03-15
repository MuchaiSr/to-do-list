(() => {
    const taskInput = document.getElementById("taskInput");
    const unorderedList = document.createElement("ul");
    document.body.appendChild(unorderedList);

    document.body.addEventListener("click", (event) => {
        if (event.target.textContent === "Add Task") {
        const taskList = document.createElement("li");
        const lowerCaseTask = taskInput.value; // There is a need to make the input case insensitive
        const task = lowerCaseTask.slice(0, 1).toUpperCase() + lowerCaseTask.slice(1).toLowerCase();
        taskList.textContent = task;
        unorderedList.appendChild(taskList);
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "8px";
        taskList.appendChild(removeButton);

        saveTasks();

        } else if (event.target.textContent === "Remove") {
            event.target.closest("li").remove();
            saveTasks();
        } else if (event.target.tagName === "LI") {
            event.target.style.textDecoration = "line-through"
        }
    })

    function saveTasks() {
        const taskItems = [...document.querySelectorAll("li")].map((item) => item.firstChild.textContent);
        const stringTasks = JSON.stringify(taskItems);
        localStorage.setItem("tasks", stringTasks);
        console.log("Saved Items:", localStorage.getItem("tasks"));
    }

    function loadTasks() {
        const retrieveSavedItems = localStorage.getItem("tasks");
        const taskArray = retrieveSavedItems ? JSON.parse(retrieveSavedItems) : [];

        taskArray.forEach(task => {
            const list = document.createElement("li");
            list.textContent = task;
            unorderedList.appendChild(list);
            
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.style.marginLeft = "8px";
            list.appendChild(removeButton);
        });
    }

    document.addEventListener("DOMContentLoaded", loadTasks);
})();