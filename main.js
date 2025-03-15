(() => {
const unorderedList = document.createElement("ul");
document.body.appendChild(unorderedList);
const taskButton = document.createElement("button");
taskButton.textContent = "Add Task!";
unorderedList.appendChild(taskButton);
const clearAllButton = document.createElement("button");
clearAllButton.textContent = "Clear list!";
clearAllButton.setAttribute("style", "display: block; margin: 8px 0;");
unorderedList.appendChild(clearAllButton);

const taskItems = [];

unorderedList.addEventListener("click", (event) => {
    if(event.target === taskButton) {
        let taskQuestion = prompt("What task do you want to add?")
        let task = taskQuestion.slice(0, 1).toUpperCase() + taskQuestion.slice(1).toLowerCase()
        const list = document.createElement("li");
        list.textContent = task;

        const removeButton = document.createElement("button"); // Create the remove button here
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "8px";
        list.appendChild(removeButton); // Attach remove button to the task

        unorderedList.appendChild(list);
        taskItems.push(list);
    } else if (event.target.textContent === "Remove") {
        event.target.closest("li").remove();
    } else if (event.target.textContent === "Clear list!") {
        document.querySelectorAll("ul li").forEach((item) => item.remove());
    } else if (event.target.tagName === "LI") {
        event.target.closest("li").style.textDecoration = "line-through";
    }
});
})();
