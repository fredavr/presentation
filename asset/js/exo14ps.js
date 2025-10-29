function test() {
    let lePrompt = prompt("Vous allez saisir 1 nombre afin que l'on affiche la suite de Fibanacci jsuqu'à celui-ci  : ");
    let leNombre = parseInt(lePrompt);

    if (!verifSaisie(lePrompt,leNombre)) {return;};

    // La suite de Fibonacci commence par 0 et 1 et correspond a la somme des 2 nombres précédents
    let fibonacci = [0,1];

    console.log(`la suite de Fibnacci jusqu'à  ${leNombre}`);

    let calcul = 0;
    for (let i = 2; calcul <= leNombre; i++) {
        console.log("iii : " + i);
        calcul = fibonacci[i - 2] + fibonacci[i - 1]
        if (calcul <= leNombre) {
            fibonacci.push(calcul);
        }
    }
    alert(`la suite de Fibnacci jusqu'à  ${leNombre} est ${fibonacci.toString()}`);
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

