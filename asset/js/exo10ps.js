function test() {
    let lePrompt = prompt("Quel nombre à tester  ?");
    let leNombre = parseInt(lePrompt);
    let lePlusGrand = 0;
    let lePlusPetit = 0;
    let lePlusGrandDiviseur = 0;
    console.log("recherche du PGCD de 10 et de : " +leNombre);
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
        alert("Le PGCD de 10 et de 1 est : 1");
        return;
    }

    if (leNombre == 10) {
        alert("Le PGCD de 10 et de 10 est : 10");
        return;
    }

    // On cherche quel est le plus petit nombre des 2
    if (leNombre < 10 ) {
        lePlusPetit = leNombre;
        lePlusGrand = 10;
    } else {
        lePlusGrand = leNombre;
        lePlusPetit = 10;
    }
    // Si lePlusGrand se divise par lePlusPetit, ça sera lePlus¨Petit le PGCD
    if (lePlusGrand % lePlusPetit == 0) {
        alert(`Le PGCD de ${lePlusGrand} et ${lePlusPetit} est : ${lePlusPetit}`);
        return;
    }

    // on cherche le plus grand diviseur du plus petit nombre
    let midle = Math.trunc(lePlusPetit / 2) + 1;
    for (let i = midle; i > 1; i--) {
        console.log("vla le i " + i);
        if (lePlusPetit % i == 0) {
            console.log("ça se divise par : " + i);
            lePlusGrandDiviseur = i;
            // ce diviseur divise aussi lePlusGrand, ce sera le PGCD
            if (lePlusGrand % lePlusGrandDiviseur == 0) {
                console.log("Voila trouvé : " + lePlusGrandDiviseur);
                break;
            }
            else
            {lePlusGrandDiviseur = 0;}
        }
    }
    if (lePlusGrandDiviseur == 0) {
        alert(`Le PGCD de ${lePlusGrand} et ${lePlusPetit} est : 1`);
    }
    else
    {
        alert(`Le PGCD de ${lePlusGrand} et ${lePlusPetit} est : ${lePlusGrandDiviseur}`);        
    }
}
