let notes = [];
let noteSur100Saisie = prompt("Quel est ta note sur 100 ? Fais Annuler lorsqu'il n'y a plus de notes à saisir.");
let noteSur100 = parseInt(noteSur100Saisie);
while (noteSur100Saisie != null) {
    if(noteSur100 >= 0 && noteSur100 <= 100) {
        notes.push(noteSur100);
    } else {
        alert("Cette note (" + noteSur100Saisie + ") n'est pas correcte. Elle doit être comprise en tre 0 et 100");
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
    alert("Aucune note n'a été saisie. Comment veux tu que je fasse une moyenne !!! :)") ;
}

