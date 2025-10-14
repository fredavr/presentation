function test() {
    let chaineAVerif = prompt("Veuillez saisir la chaine à vérifier");
    let nombreCar = parseInt(chaineAVerif.length);
    let milieu = nombreCar / 2;

    if (nombreCar % 2 == 0) {
        /* C'est pair */
        alert("Le mileu de la chaîne : " + chaineAVerif + " est : " + chaineAVerif[milieu - 1] + chaineAVerif[milieu]);
    } else {
        /* C'est impair */
        alert("Le mileu de la chaîne : " + chaineAVerif + " est : " + chaineAVerif[Math.trunc(milieu)]);
    }
}

