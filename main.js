const newTask = document.getElementById("newTask");
const tasks = document.getElementById("cadre");

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

/*
const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm == "granted") {
      new Notification("bosse connard", {
        body: "Oui oui bosse !",
      });
    }
  });
}); */

window.addEventListener("load", () => {
  Notification.requestPermission().then((perm) => {
    if (perm == "granted") {
      new Notification("Calendrier maison", {
        body: "Renseignez vos objectifs du jour !",
        icon: "objectif.jpg",
      });
    }
  });
});
