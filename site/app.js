const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const counter = document.getElementById("task-count");

let count = 0;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = input.value.trim();
    if (!task) return;

    const item = document.createElement("li");
    item.textContent = task;

    item.addEventListener("click", function () {
        item.classList.toggle("done");
    });

    list.appendChild(item);
    count++;
    counter.textContent = `Всего задач: ${count}`;

    input.value = "";
});
