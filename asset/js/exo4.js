function test() {
    let chaineAVerif = prompt("Veuillez saisir la chaine à vérifier");

    if (chaineAVerif.toLowerCase() == retournement(chaineAVerif)) {
        alert("Bravo ! " + chaineAVerif + " est un palyndrome");
    } else {
        alert("NON " + chaineAVerif + " n'est pas un palyndrome");
    }
}
function retournement(mot) {
    let motTab = mot.split("");
    console.log(motTab);
    console.log(motTab.reverse());
    return motTab.join("").toLowerCase();
}

