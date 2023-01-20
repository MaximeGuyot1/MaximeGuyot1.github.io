const newTask = document.getElementById("newTask");
const tasks = document.getElementById("cadre");
const notif = new Notification("Todolist maison", {
  body: "Renseignez vos objectifs du jour !",
  icon: "objectif.jpg",
});

newTask.addEventListener("keypress", (e) => {
  var keypressed = e.key;

  if (keypressed == "Enter" && newTask.value != "") {
    console.log(newTask.value);
    var nouvelleTache = document.createElement("p");
    nouvelleTache.innerText = newTask.value;
    tasks.appendChild(nouvelleTache);
    newTask.value = "";

    tasks.style.border = "1px solid black";
  }
  nouvelleTache.addEventListener("click", () => {
    nouvelleTache.remove();
  });
});

window.addEventListener("load", () => {
  Notification.requestPermission().then((perm) => {
    if (perm == "granted") {
      notif;
    }
  });
});

var math = 7 * Math.pow(10, 2);
console.log(math);
