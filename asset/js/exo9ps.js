function test() {
    let lePrompt = prompt("Quel nombre à tester  ?");
    let leNombre = parseInt(lePrompt);
    let lePlusPetitDiviseur = 0;
    console.log("recherche du plus petit diviseur de : " +leNombre);
    if (lePrompt == null) {return;}

    if (isNaN(leNombre)) {
        alert("La saisie est incorrecte : " + lePrompt + "\nVeuillez recommencer le test.");
        return;
    }

    if (leNombre == 0) {
        alert("0 ne peut pes être testé.");
        return;
    }
    if (leNombre == 1) {
        alert("Le plus petit diviseur de 1 est : 1");
        return;
    }

    // on cherche son divieur s'il existe jusqu'a ce que l'on sache que c'est un nombre premier
    let racine = Math.trunc(Math.sqrt(leNombre)) + 1;
    for (let i = 2; i < racine; i++) {
        console.log("vla le i " + i);
        if (leNombre % i == 0) {
            console.log("ça se divise par : " + i);
            lePlusPetitDiviseur = i;
            break;
        }
    }
    if (lePlusPetitDiviseur == 0) {
        alert(`${leNombre} est un nombre premier, donc son plus petit diviseur est : 1`)
    }
    else
    {
        alert(`Le plus petit diviseur de ${leNombre}, autre que 1, est ${lePlusPetitDiviseur}`)
    }
}
