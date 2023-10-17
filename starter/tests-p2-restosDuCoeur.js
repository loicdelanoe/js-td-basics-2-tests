/*
TESTS - PRÉPA 2 : Les restos du cœur
Un magasin accorde une remise de 10% si l’achat est supérieur à 25€.
Quand la remise est supérieure à 5€, le magasin verse 10% de celle-ci aux restos du cœur
avec un maximum de 2€.
Ecrire le programme JS qui, à partir du montant des achats,
calcule et affiche la somme versée aux restos du cœur.
*/

/* Tester avec des montants d'achat de
- 20€ (pas de remise, pas de montant versé)
- 30€ (remise de 3€, pas de montant versé)
- 60€ (remise de 6€, 0.6€ versés)
- 100€ (remise de 10€, 1€ versés)
- 200€ (remise de 20€, 2€ versés)
- 1000€ (remise de 100€, 2€ versés)
*/

const achat = 60;
let remise;
let remiseResto;

if (achat > 25) {
    remise = achat * 0.1;
    if (remise > 5) {
        remiseResto = remise * 0.1;
        if (remiseResto > 2) {
            remiseResto = 2;
            console.log(`La somme versée aux restos du coeur est de ${remiseResto.toFixed(2)}€`);
        } else {
            console.log(`La somme versée aux restos du coeur est de ${remiseResto.toFixed(2)}€`);
        }
    } else {
        console.log(`Vous avez fait un achat de ${achat}, avec une remise de ${remise.toFixed(2)}€`)
    }
} else {
    console.log(`Vous avez fait un achat de ${achat}€, mais pas de remise :(`);
}