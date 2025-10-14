let mois = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

let leMois = parseInt(prompt("Quel mois ? " + "\n\n" + "Donne un chiffre entre 1 et 12."));

console.log(mois);

if (leMois > 0 && leMois <= 12) {
    alert("Le numéro " + leMois + " correspond à " + mois[leMois - 1])
} else {
    alert("Le numéro de mois saisi (" + leMois + ") est incorrect. Il doit être compris entre 1 et 12.")
}
