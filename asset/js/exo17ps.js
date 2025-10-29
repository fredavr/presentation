function test() {
    let lePrompt = prompt("Vous allez saisir 1 nombre afin que l'on affiche la suite de Lucas jsuqu'à celui-ci  : ");
    let leNombre = parseInt(lePrompt);

    if (!verifSaisie(lePrompt,leNombre)) {return;};

    // La suite de Lucas commence par 1 et 3 et correspond a la somme des 2 nombres précédents
    let lucas = [1,3];

    console.log(`la suite de Lucas jusqu'à  ${leNombre}`);

    let calcul = 0;
    for (let i = 2; calcul <= leNombre; i++) {
        calcul = lucas[i - 2] + lucas[i - 1]
        if (calcul <= leNombre) {
            lucas.push(calcul);
        }
    }
    alert(`la suite de Lucas jusqu'à  ${leNombre} est ${lucas.toString()}`);
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

