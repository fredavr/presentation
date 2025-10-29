function test() {
    let lePrompt = prompt("Quel nombre à tester  ?");
    let leNombre = parseInt(lePrompt);
    let lePlusGrand = 0;
    let lePlusPetit = 0;
    let lePlusGrandDiviseur = 0;
    let lePGCD = 0;
    console.log("recherche du PGCD de 10 et de : " +leNombre);
    if (lePrompt == null) {return;}

    if (isNaN(leNombre)) {
        alert("La saisie est incorrecte : " + lePrompt + "\nVeuillez recommencer le test.");
        return;
    }

    if (leNombre == 0) {
        alert("0 ne peut pas être testé.");
        return;
    }
    if (leNombre == 1) {
        alert("Le ppcm de 10 et de 1 est : 10");
        return;
    }

    if (leNombre == 10) {
        alert("Le ppcm de 10 et de 10 est : 10");
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

    // pour calculer le ppcm entre 2 nombres, on calcule d'abord leur PGCD et ensuite on divise leur multiplication par ce pgcd
    lePGCD = PGCD(lePlusGrand,lePlusPetit);
    alert(`Le ppcm entre ${lePlusPetit} et ${lePlusGrand} est : ${(lePlusPetit * lePlusGrand) / lePGCD}`);
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


