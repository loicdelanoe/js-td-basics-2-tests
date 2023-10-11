// Jour suivant

/* 
- Stockez le jour actuel (nom du jour, type texte) dans une constante
- Ecrivez des tests qui stockent dans une variable le nom du jour suivant dans chaque cas de figure 
et, si le nom du jour qui se trouve dans la constante n'est pas un des 7 de jours de la semaine,
affiche dasn la console "Erreur : jour non reconnu !"
- Testez si la variable qui conntienyt le nom du jour n'ets pas vide et,
dans ce cas, affichez dans la console le message "Demain, nous serons …"
*/
const getDay = new Date().getDay();
const dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

const currentDay = dayNames[getDay];

switch (currentDay) {
    case "Dimanche":
        console.log("Demain nous serons Lundi");
        break;
    case "Lundi":
        console.log("Demain nous serons Mardi");
        break;
    case "Mardi":
        console.log("Demain nous serons Mercredi");
        break;
    case "Mercredi":
        console.log("Demain nous serons Jeudi");
        break;
    case "Jeudi":
        console.log("Demain nous serons Vendredi");
        break;
    case "Vendredi":
        console.log("Demain nous serons Samedi");
        break;
    case "Samedi":
        console.log("Demain nous serons Dimanche");
        break;
    default:
        console.log("Erreur : jour non reconnu !")
}