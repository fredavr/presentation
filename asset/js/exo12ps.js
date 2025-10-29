function test() {
    let lePrompt = prompt("Vous allez saisir 2 nombres afin de rechercher leur PGCD.\n\nVeuillez saisir le premier nombre : ");
    let leNombre = parseInt(lePrompt);

    if (!verifSaisie(lePrompt,leNombre)) {return;};

    let lePlusGrand = leNombre;
    let lePlusPetit = 0;

    lePrompt = prompt("Veuillez saisir le second nombre : ");
    leNombre = parseInt(lePrompt);

    if (!verifSaisie(lePrompt,leNombre)) {return;};

    if (leNombre == lePlusGrand) {
        alert(`Le PGCD de ${lePlusGrand} et ${leNombre} est : ${lePlusGrand}`);
        return;
    }

    // On cherche quel est le plus petit nombre des 2
    if (leNombre < lePlusGrand ) {
        lePlusPetit = leNombre;
    } else {
        lePlusPetit = lePlusGrand;
        lePlusGrand = leNombre;
    }

    let lePlusGrandDiviseur = 0;
    console.log(`recherche du PGCD de ${lePlusPetit} et de ${lePlusGrand}`);

    if (lePlusPetit == 1) {
        alert(`Le PGCD entre 1 et ${lePlusGrand} est : 1`);
        return;
    }

    if (leNombre == 10) {
        alert("Le PGCD de 10 et de 10 est : 10");
        return;
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

function verifSaisie(lePrompt,leNombre) {
    if (lePrompt == null) {return false;}

    if (isNaN(leNombre)) {
        alert("La saisie est incorrecte : " + lePrompt + "\nVeuillez recommencer le test.");
        return false;
    }

    if (leNombre == 0) {
        alert("0 ne peut pes être testé.");
        return false;
    }
    return true;
}    
