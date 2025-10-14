let nombres = [];
let unNombre = prompt("Remplis le tableau de nombres. Fais Annuler lorsqu'il n'y a plus de nombres à saisir.");
let unNombreInt = parseFloat(unNombre);
let entiersImpairs = [];

while (unNombre != null) {
    /* si le premier caractère saisi est " ça sera une chaine sinon un float */
    if (unNombre[0] == '"') {
        nombres.push(unNombre);
    } else {
        nombres.push(unNombreInt);
    }

    unNombre = prompt("Remplis le tableau de nombres. Fais Annuler lorsqu'il n'y a plus de nombres à saisir.");
    unNombreInt = parseFloat(unNombre);
}
console.log(nombres);

/* construction du tableau des nombres entiers impairs*/
nombres.forEach(function (n) {
    if (typeof n == "number" && n % 2 != 0 && Number.isInteger(n)) {
        entiersImpairs.push(n);
    }
});
console.log(entiersImpairs);

/* Faire le produit de tous les entiers ipairs*/
let produit = 1;

entiersImpairs.forEach(function(int) {
    produit = produit * int; 
});

if (nombres.length < 1) {
    alert("Aucun nombre n'a été saisi, le produit est impossible à calculer !");
} else if (entiersImpairs.length < 1) {
    alert("Pour rappel le tableau était : " + nombres + " et aucun  entier impair n'est  retenu donc le produit est impossible à calculer");
} else {
    alert("Pour rappel le tableau était : " + nombres + " les entiers impairs retenus : " + entiersImpairs + " et le produit est : " + produit);
}
    


