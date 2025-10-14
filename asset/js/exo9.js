let notes = [];
let noteSur20Saisie = prompt("Quel est ta note sur 20 ? \n\nFais Annuler lorsqu'il n'y a plus de notes à saisir.");
let noteSur20 = parseInt(noteSur20Saisie);

let noteMin = 9;
let noteMax = 13;

while (noteSur20Saisie != null) {
    if(noteSur20 >= 0 && noteSur20 <= 20) {
        notes.push(noteSur20);
    } else {
        alert("Cette note (" + noteSur20Saisie + ") n'est pas correcte. \n\nElle doit être comprise en tre 0 et 20");
    }
    noteSur20Saisie = prompt("Quel est ta note sur 20 ?");
    noteSur20 = parseInt(noteSur20Saisie);
}

console.log(notes);

alert("La note max est : " + fnoteMax(notes) + "\n" + "La moyenne est : " + fnoteMoyenne(notes) + "\n" + "Le nombre de notes entre " + noteMin + " et " + noteMax + " est : " + fdansInterval(notes,noteMin,noteMax));

function fnoteMax(lesNotes) {
    let laNoteMax = -1;
    lesNotes.forEach(function (note) {
        if (note > laNoteMax) {
            laNoteMax = note
        }
    });
    if (laNoteMax == -1) {
        return " n'a pas pu être calculée !";
    } else {
        return laNoteMax;
    }
}

function fnoteMoyenne(lesNotes) {
    let totalNotes = 0;
    if (lesNotes.length > 0) {
        for(let uneNote of lesNotes){
            totalNotes += uneNote;
        }
        return totalNotes / lesNotes.length;
    } else {
        return " n'a pas pu être calculée !";
    }
}

function fdansInterval(lesNotes,min,max) {
    let nbNotes = 0;
    lesNotes.forEach(function (note) {
        if (note >= min && note <= max) {
            nbNotes++
        }
    });
    return nbNotes;
}