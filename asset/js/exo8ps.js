function test() {
    let lePrompt = prompt("Quel nombre à tester  ?");
    let leNombre = parseInt(lePrompt);
    let lePlusGrandDiviseur = 0;
    console.log("recherche du plus grand diviseur de : " +leNombre);
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
        alert("Le plus grand diviseur de 1 est : 1");
        return;
    }

    // on cherche son plus grand diviseur s'il existe 
    let midle = Math.trunc(leNombre / 2) + 1;
    for (let i = midle; i > 1; i--) {
        console.log("vla le i " + i);
        if (leNombre % i == 0) {
            console.log("ça se divise par : " + i);
            lePlusGrandDiviseur = i;
            console.log("avant break")
            break;
        }
    }
    if (lePlusGrandDiviseur == 0) {
        alert(`${leNombre} est un nombre premier, donc son plus grand diviseur est lui-même : ${leNombre}`)
    }
    else
    {
        alert(`Le plus grand diviseur de ${leNombre} est ${lePlusGrandDiviseur}`)
    }
}
