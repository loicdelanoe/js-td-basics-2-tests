/*
TESTS - PRÉPA 1
Ecrire un programme JS qui calcule la facture d’un client qui achète N articles vendus au prix x
sachant qu’on accorde 10% de ristourne si le client achète au moins 20 articles.
*/

const articles = 2;
const prix = 20;
let facture;

if (articles >= 20) {
    facture = (articles * prix) * 0.9;
    console.log(`Votre facture est de ${facture}€ sachant qu'il y a 10% de ristourne`);
} else {
    facture = (articles * prix);
    console.log(`Votre facture est de ${facture}€`);
}