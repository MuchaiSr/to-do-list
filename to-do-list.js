(() => {
    const taskInput = document.querySelector("input");
    const addTaskButton = document.querySelector("button");
    const unorderedList = document.querySelector("ul");

    document.body.addEventListener("click", (event) => {
        if (event.target.textContent === "Add Task") {
            function createTaskList () {
                const taskList = document.createElement("li");
                taskList.textContent = taskInput.value.slice(0, 1).toUpperCase() + taskInput.value.slice(1).toLowerCase();
                unorderedList.appendChild(taskList);
    
                const removeButton = document.createElement("button");
                removeButton.textContent = "Remove";
                removeButton.style.marginLeft = "8px";
                taskList.appendChild(removeButton);
            }
            createTaskList();
            saveData();
        } else if (event.target.textContent === "Remove") {
            event.target.closest("li").remove();
            saveData();
        } else if (event.target.tagName === "LI") {
            event.target.style.textDecoration = "line-through";
            saveData();
        }
    });

    function saveData () {
        const rawData = [...document.querySelectorAll("li")].map((list) => {
            return { text: list.childNodes[0].textContent, // This saves the text task
                completed: list.style.textDecoration === "line-through" // This checks if task is marked as completed and how it's marked
            };
    });
        const stringData = JSON.stringify(rawData);
        localStorage.setItem("tasks", stringData);
    }

    function retrieveData () {
        const savedData = localStorage.getItem("tasks");
        const dataArray = savedData ? JSON.parse(savedData) : [];

        dataArray.forEach((data) => {
            const taskList = document.createElement("li");
            taskList.textContent = data.text;
            if (data.completed) taskList.style.textDecoration = "line-through";
            unorderedList.appendChild(taskList);

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.style.marginLeft = "8px";
            taskList.appendChild(removeButton);
        });
    }

    document.addEventListener("DOMContentLoaded", retrieveData);
})();