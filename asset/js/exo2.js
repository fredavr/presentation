function test() {
    let notes = [];
    let noteSur100Saisie = prompt("Quel est ta note sur 100 ? "+"\n\n" + "Fais Annuler lorsqu'il n'y a plus de notes à saisir.");
    let noteSur100 = parseInt(noteSur100Saisie);
    while (noteSur100Saisie != null) {
        if(noteSur100 >= 0 && noteSur100 <= 100) {
            notes.push(noteSur100);
        } else {
            alert("Cette note (" + noteSur100Saisie + ") n'est pas correcte. "+"\n\n"+"Elle doit être comprise en tre 0 et 100");
        }
        console.log("Les notes " + notes);
        noteSur100Saisie = prompt("Quel est ta note sur 100 ?");
        noteSur100 = parseInt(noteSur100Saisie);
    }

    let totalNotes = 0;
    if (notes.length > 0) {
        for(let uneNote of notes){
            totalNotes += uneNote;
        }

        alert("La moyenne est de " + ((totalNotes / notes.length) / 100 * 20) + " sur 20") ;
    } else {
        alert("Aucune note n'a été saisie. "+"\n\n"+"Comment veux tu que je fasse une moyenne !!! :)") ;
    }
}

/* réponse : 
let sum = notes.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
},0)
let average = (sum / notes.length) / 5;
*/
