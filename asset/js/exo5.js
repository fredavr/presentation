let chaineAVerif = prompt("Veuillez saisir la chaine à vérifier");
let nombreCar = parseInt(chaineAVerif.length);
let milieu = nombreCar / 2;

if (nombreCar % 2 == 0) {
    /* C'est pair */
    alert("Voici le mileu de la chaîne : " + chaineAVerif[milieu - 1] + chaineAVerif[milieu]);
} else {
    /* C'est impair */
    alert("Voici le mileu de la chaîne : " + chaineAVerif[Math.trunc(milieu)]);

}


