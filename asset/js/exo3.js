function test() {
    let chaineNombres = prompt("Veuillez saisir la chaine de nombres");
    let mauvaiseSaisie = false;
    let SommeNombres = 0;

    if (chaineNombres.length == 1) {
        if (parseInt(chaineNombres) >= 0 && parseInt(chaineNombres) <= 9) {
            SommeNombres += parseInt(chaineNombres);
        } else {
            /* cherche dans la table des Majuscules */
            mauvaiseSaisie = true;
            SommeNombres = 0;
        } 
    }
    while (chaineNombres.length > 1) {
        console.log(chaineNombres);
        SommeNombres = 0
        for (let idx = 0; idx < chaineNombres.length; idx++) {
            /* vérifie que c'est bien un nombre */
            if (parseInt(chaineNombres[idx]) >= 0 && parseInt(chaineNombres[idx]) <= 9) {
                SommeNombres += parseInt(chaineNombres[idx]);
            } else {
                /* cherche dans la table des Majuscules */
                idx = chaineNombres.length;
                mauvaiseSaisie = true;
                SommeNombres = 0;
            } 
        }
        chaineNombres = "" + SommeNombres + "";
    }

    if (mauvaiseSaisie) {
        alert("La chaine saisie ne contient pas que des nombres.");
    } else {
        alert(SommeNombres)
    }
}

