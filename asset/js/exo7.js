function test() {
    let chaineAVerif = prompt("Veuillez saisir le nom du fichier");
    let positPoint = chaineAVerif.indexOf(".");
    let extension = "";

    if (positPoint != -1) {
        extension = chaineAVerif.substr(positPoint + 1, chaineAVerif.length - positPoint);
        alert("L'extension du fichier " + chaineAVerif + " est : " + extension);
    } else {
        alert("Oups ce fichier n'a pas d'extension !");
    }
}
