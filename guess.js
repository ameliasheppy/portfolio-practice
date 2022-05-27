function toDoList(event) {
  let input = prompt("What do you need to do today?");

  const todos = ["collect eggs", "clean litter box"];
  while (input !== "quit" && input !== "q") {
    if (input === "list") {
      console.log("********alert1");
      for (let i = 0; i < todos.length; i++) {
        alert(`${i}:${todos[i]}`);
      }
      console.log("alert2*************");
    } else if (input === "new") {
      const newToDo = prompt("Ok, what is your new to-do list item?");
      todos.push(newToDo);
      alert(`${newToDo} is now added to your list!`);
    } else if (input === "delete") {
      const index = parseInt(prompt("Ok, enter an index to delete:"));
      if (!Number.isNan(index)) {
        const deleted = todos.splice(index, 1);
        alert("Ok, deleted ${deleted[0]} for you.");
      } else {
        console.log("unknown index");
      }
    }
    input = prompt("What would you like to do?");
  }
  alert("Ok! See you next time!");
}
let launchList = document.querySelector("#launch-list");
launchList.addEventListener("click", toDoList);
