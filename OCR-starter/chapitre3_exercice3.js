// Seconde suivante

/*
- Stockez dans trois variables
    * l'heure actuelle
    * les minutes actuelles
    * les secondes actuelles
- … (TODO)
*/

const currentTime = new Date();

const currentHour = currentTime.getHours();
const currentMinutes =  currentTime.getMinutes();
const currentSeconds = currentTime.getSeconds();

console.log(currentHour, currentMinutes, currentSeconds);