function test() {
    let lePrompt = prompt("De quel nombre souhaitez-vous calculer son inverse ?");
    let leNombre = parseInt(lePrompt);
    let laFactorielle = leNombre;
    console.log("L'inverse de " + leNombre);
    if (lePrompt == null) {return;}

    if (isNaN(leNombre)) {
        alert("La saisie est incorrecte : " + lePrompt + "\nVeuillez recommencer le test.");
        return;
    }

    if (leNombre == 0) {
        alert("L'inverse de 0 n'exiszte pas !");
    }
    else
    {
        alert(`Linverse de ${leNombre} est : ${1 / leNombre}`);        
    }
    
}

