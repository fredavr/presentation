function test() {
    let lePrompt = prompt("Vous allez saisir 1 nombre afin que l'on affiche sa suite de Syracuse : ");
    let leNombre = parseInt(lePrompt);

    if (!verifSaisie(lePrompt,leNombre)) {return;};

    // La suite de Syracuse démarre du nombre lui-meme puis s'il est paire on le divise par 2, s'il est impair on le multiplie par 3 + 1
    // Et ça finit par arriver à 1
    let syracuse = [];

    console.log(`la suite de Syracuse de ${leNombre}`);
    syracuse.push(leNombre);

    let calcul = 0;
    for (let i = 1; calcul != 1; i++) {
        if (syracuse[i - 1] % 2 == 0) {
            // C'est pair, on divise par 2
            calcul = syracuse[i - 1] / 2;
            console.log(calcul);
            syracuse.push(calcul);
        }
        else {
            //C'est impair, on multiplie par 3 et on ajoute 1
            calcul = (syracuse[i - 1] * 3) + 1;
            syracuse.push(calcul);
        }
    }
    alert(`la suite de Syracude de ${leNombre} est ${syracuse.toString()}`);
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

