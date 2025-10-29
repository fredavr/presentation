function test() {
    let lePrompt = prompt("Quel nombre à tester  ?");
    let leNombre = parseInt(lePrompt);
    let leNombrePair = 2;
    let blabla = "";
    console.log(leNombre);

    if (isNaN(leNombre)) {
        alert("Le nombre saisi ne permet pas ce test !");
    }
    else {
        while (leNombrePair < leNombre) {
            console.log(leNombrePair);
            // On ajoute +2 à chaque fois pour rester dans les nombres pairs
            blabla += leNombrePair + " ";
            leNombrePair += 2;
        }
        if (blabla == "") {
            alert(`Il n'y a pas de nombres pairs compris entre 1 et ${leNombre}`);
        } 
        else{
            alert(`Tous les nombres pairs compris entre 1 et ${leNombre} sont : \n\n ${blabla}`);
        }
    };
}

