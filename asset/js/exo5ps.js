function test() {
    let laTableMultiplication = [];
    let lePrompt = prompt("Quel nombre pour la table de multiplication ?");
    let leNombre = parseInt(lePrompt);
    let blabla = "";
    console.log(leNombre);
    if (lePrompt == null) {return;}

    if (isNaN(leNombre)) {
        alert("La saisie est incorrecte : " + lePrompt + "\nVeuillez recommencer le test.");
        return;
    }
    for (let i = 1; i <=10 ; i++) {
        laTableMultiplication.push(i * leNombre + " (*" + i + ") ");
    }
    if (laTableMultiplication.length == 0) {
        alert(`Il n'y a pas de table de pultiplication pour ${leNombre}`);
    } 
    else{
        alert(`Voici la table de multiplication de  ${leNombre} : \n\n ${laTableMultiplication.toString()}`);
    }
}

