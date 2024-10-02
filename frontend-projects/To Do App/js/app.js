const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");
const today = new Date();
const thisYear = today.getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const savedData = localStorage.getItem("toDoList");
  if (savedData) {
    toDoBox.innerHTML = savedData;
  }
  applyEventListeners();
});

const saveToLocalStorage = () => {
  localStorage.setItem("toDoList", toDoBox.innerHTML);
};

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${item}<i class="to-do-remove fas fa-times"></i>`;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
    saveToLocalStorage();
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
    saveToLocalStorage();
  });

  toDoBox.appendChild(listItem);
  saveToLocalStorage();
  applyEventListeners();
};

const applyEventListeners = () => {
  if (!toDoBox.hasListeners) {
    toDoBox.addEventListener("click", handleItemClick);
    toDoBox.hasListeners = true;
  }
};

const handleItemClick = (event) => {
  const target = event.target;
  if (target.classList.contains("to-do-remove")) {
    const listItem = target.closest("li");
    if (listItem) {
      listItem.remove();
      saveToLocalStorage();
    }
  } else if (target.tagName === "LI") {
    target.classList.toggle("done");
    saveToLocalStorage();
  }
};

document.getElementById(
  "footer"
).innerHTML = `Copyright © ${thisYear} | Yash Chintawar`;
