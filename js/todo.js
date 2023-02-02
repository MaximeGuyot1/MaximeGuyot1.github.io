// Définition des variables utiles pour après

const newTask = document.getElementById("newTask"); // Le cadre input où on met le nom de la tâche
const tasks = document.getElementById("cadre"); // La où les tâches se placeront une fois crées
const resetButton = document.querySelector("button"); // Le bouton reset
const notif = new Notification("Todolist maison", {
  // La notif au loading de la page
  body: "Renseignez vos objectifs du jour !",
  icon: "objectif.jpg",
});
var tableauTache = []; // Le tableau qui servira à stocker les tâches
var tacheOuPas;

//--------------------Loading de la page--------------------

window.addEventListener("load", () => {
  // On demande la permission pour envoyer une notif et si on l'as à chaque refresh on envoie la notif

  Notification.requestPermission().then((perm) => {
    if (perm == "granted") {
      notif;
    }
  });

  // On vérifie si il y a des tâches sauvegardées, si oui on les affiche et sinon on ne fait rien
  var leTableauTache = JSON.parse(localStorage.getItem("tableauTache"));
  if (!leTableauTache || leTableauTache === "") {
    console.log("Pas de tâche");
    tacheOuPas = false;
  }

  // Si il y a bien des tâches de la veille, on les ajoute
  else {
    leTableauTache.forEach((tache) => {
      var tacheVeille = document.createElement("p");
      tacheVeille.innerText = tache;
      tasks.appendChild(tacheVeille);
      tacheOuPas = true;
      tasks.style.border = "1px solid black";
    });
  }
});

//----------------------------------------------------------

//-------Quand l'utilisateur va ajouter une tâche, dès qu'il appuie sur entrée (dans le cadre prévu à cet effet) la tâche est ajoutée-------
newTask.addEventListener("keypress", (e) => {
  var keypressed = e.key;

  if (keypressed == "Enter" && newTask.value != "") {
    var nouvelleTache = document.createElement("p");
    nouvelleTache.innerText = newTask.value;

    // La on vérifie avant d'attribuer à notre tableau du vide si y'as bien une/des valeur(s) à récupérer
    if (tacheOuPas == true) {
      tableauTache = JSON.parse(localStorage.getItem("tableauTache"));
    }

    // Dans notre tableau on met notre nouvelle tâche et on l'envoie dans localstorage pour s'en souvenir au prochain allumage de la page
    tableauTache.push(newTask.value);
    localStorage.setItem("tableauTache", JSON.stringify(tableauTache));

    // On insère notre nouvelle tâche dans la div prévu à cet effet et on enlève le texte de l'input
    tasks.appendChild(nouvelleTache);
    newTask.value = "";
    tasks.style.border = "1px solid black";
  } else {
    return null;
  }

  nouvelleTache.addEventListener("click", () => {
    tableauTache = JSON.parse(localStorage.getItem("tableauTache"));
    let tacheASupp = nouvelleTache.innerText;
    tableauTache.forEach((element) => {
      if (element === tacheASupp) {
        let index = tableauTache.indexOf(element);
        console.log(index);
        tableauTache.splice(index, 1);
        localStorage.setItem("tableauTache", JSON.stringify(tableauTache));
      }
    });

    nouvelleTache.remove();
  });
});

//------------------------------------------------------------------------------------------------------------------------------------------

resetButton.addEventListener("click", () => {
  localStorage.clear();
  numeroTache = 0;
});
