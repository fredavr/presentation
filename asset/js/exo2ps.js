function test() {
    let lePrompt = ""
    let leNombre = 0;
    let somme = 0;
    blabla = "";
    let i = 1
    
    while (i <= 2 && lePrompt != null) {
        lePrompt = prompt("Quel nombre faut-il ajouter ?");
        leNombre = parseFloat(lePrompt);
        console.log(leNombre + "/" + i);
        if (isNaN(leNombre)) {
            continue
        } else {
            somme += leNombre;
            if (blabla == "") {
                blabla = leNombre;
            } 
            else {
                blabla += " et " + leNombre
            }
            i++
        }
    };
    if (i <=2 ) {
        alert("Les 2 nombres n'ont pas été saisis correctement !");
    } else {
        alert(`La somme de ${blabla} est ${somme}`);
    };
}