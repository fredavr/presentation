function test() {
    let tousLesNombresPremiers = [];
    let lePrompt = prompt("Quel nombre à tester  ?");
    let leNombre = parseInt(lePrompt);
    let blabla = "";
    console.log(leNombre);
    remplisTousLesNombresPremiers(leNombre,tousLesNombresPremiers);
    console.log(tousLesNombresPremiers + "/" + tousLesNombresPremiers.length);
    if (tousLesNombresPremiers.length == 0) {
        alert(`Il n'y a pas de nombres premiers compris entre 1 et ${leNombre}`);
    } 
    else{
        alert(`Tous les nombres premiers compris entre 1 et ${leNombre} sont : \n\n ${tousLesNombresPremiers.toString()}`);
    }

}

function remplisTousLesNombresPremiers(jusquaCeNombre,tabARemplir) {
    /* On remplit les premiers manuellement*/
    if (2 < jusquaCeNombre) {tabARemplir.push(2)};
    if (3 < jusquaCeNombre) {tabARemplir.push(3)};
    if (5 < jusquaCeNombre) {tabARemplir.push(5)};
    if (7 < jusquaCeNombre) {tabARemplir.push(7)};
    if (11 < jusquaCeNombre) {tabARemplir.push(11)};
    if (13 < jusquaCeNombre) {tabARemplir.push(13)};
    if (17 < jusquaCeNombre) {tabARemplir.push(17)};
    if (19 < jusquaCeNombre) {tabARemplir.push(19)};
    if (23 < jusquaCeNombre) {tabARemplir.push(23)};
    if (29 < jusquaCeNombre) {tabARemplir.push(29)};
    let nombreATester = 31;
    while (nombreATester < jusquaCeNombre) {
        console.log("pour " + nombreATester);
        if (estUnNombrePremier(nombreATester)) {
            tabARemplir.push(nombreATester);
        }
        // on ne teste pas les paires d'ou le *2
        nombreATester += 2;
    }
}

function estUnNombrePremier(nombreAVerif) {
    console.log("estUnNombreEntier ?" + nombreAVerif);
    let racine = Math.trunc(Math.sqrt(nombreAVerif)) + 1;
    /* le 1 est faux */
    if (nombreAVerif <= 1) {
        console.log("c'est le 1");
        return false;
    }
    /* le 2 et le 3 est vrai */
    if (nombreAVerif == 2 || nombreAVerif == 3) {
        console.log("c'est le 2 ou 3");
        return true;
    }
    /* si c'est pair c'est faux */
    if (nombreAVerif % 2 == 0) {
        console.log("c'est un pair");
        return false;
    }
    for (let i = 3; i < racine; i+=2) {
        console.log("vla le i " + i);
        if (nombreAVerif % i == 0) {
            console.log("ça se divise par : " + i);
            return false;
        }
        console.log("ensuite ");
    }
    console.log(`oui ${nombreAVerif} est Un Nombre Entier.`);
    return true;
}
  