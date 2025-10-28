function test() {
    let lePrompt = prompt("La factorielle de quel nombre souhaitez-vous calculer ?");
    let leNombre = parseInt(lePrompt);
    let laFactorielle = leNombre;
    console.log("Factorielle de " + leNombre);
    if (lePrompt == null) {return;}

    if (isNaN(leNombre)) {
        alert("La saisie est incorrecte : " + lePrompt + "\nVeuillez recommencer le test.");
        return;
    }

    for (let i = leNombre - 1; i > 0 ; i--) {
        console.log(laFactorielle + " * " + i)
        laFactorielle *= i;
    }
    alert(`La factorielle de ${leNombre} est : \n\n ${laFactorielle}`);
}

