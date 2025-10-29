function test() {
    let lePrompt = prompt("Vous allez saisir 2 nombres afin de rechercher leur PPCM.\n\nVeuillez saisir le premier nombre : ");
    let leNombre = parseInt(lePrompt);

    if (!verifSaisie(lePrompt,leNombre)) {return;};

    let lePlusGrand = leNombre;
    let lePlusPetit = 0;

    lePrompt = prompt("Veuillez saisir le second nombre : ");
    leNombre = parseInt(lePrompt);

    if (!verifSaisie(lePrompt,leNombre)) {return;};

    if (leNombre == lePlusGrand) {
        alert(`Le PPCM de ${lePlusGrand} et ${leNombre} est : ${lePlusGrand}`);
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
    console.log(`recherche du PPCM de ${lePlusPetit} et de ${lePlusGrand}`);

    if (lePlusPetit == 1) {
        alert(`Le PPCM entre 1 et ${lePlusGrand} est : ${lePlusGrand}`);
        return;
    }

    // pour calculer le ppcm entre 2 nombres, on calcule d'abord leur PGCD et ensuite on divise leur multiplication par ce pgcd
    lePGCD = PGCD(lePlusGrand,lePlusPetit);
    alert(`Le ppcm entre ${lePlusPetit} et ${lePlusGrand} est : ${(lePlusPetit * lePlusGrand) / lePGCD}`);
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

function PGCD(lePlusGrand,lePlusPetit) {
        // Si lePlusGrand se divise par lePlusPetit, ça sera lePlusPetit le PGCD
        if (lePlusGrand % lePlusPetit == 0) {
            return lePlusPetit;
        }

        // on cherche le plus grand diviseur du plus petit nombre
        let midle = Math.trunc(lePlusPetit / 2) + 1;
        for (let i = midle; i > 1; i--) {
            if (lePlusPetit % i == 0) {
                lePlusGrandDiviseur = i;
                    // ce diviseur divise aussi lePlusGrand, ce sera le PGCD
                    if (lePlusGrand % lePlusGrandDiviseur == 0) {
                        break;
                    }
                    else
                    {lePlusGrandDiviseur = 0;}

            }
        }
        if (lePlusGrandDiviseur == 0) {
            return 1;
        }
        else
        {
            return lePlusGrandDiviseur;        
        }
    }
