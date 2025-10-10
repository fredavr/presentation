/*
console.log("Hello");
let age = 25; //number
let nom = "Fred"; //chaine
let majeur  = true; //boolean
const pi = 3.14;
*/
/*
const a = 5;
let b = 8;
let c = 1
alert(a += b)

alert(a == b) //comparaison sur égalité stricte
alert(a === b) //comparaison sur égalité stricte ET le type de la variable
alert(a != b) // diffférent de
alert(a !== b) // diffférent de en tenant compte du type de la variable
*/

/*
let anneeNaissance = 1967;
let anneeEnCours = 2025;
alert(anneeEnCours - anneeNaissance);
*/

/*
let num1 = 5;
let num2 = 6;

console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
/*


/*
let compteur = 0;
compteur += 1;
console.log(compteur);
*/

/*
let age = 12;
let annee = 6;
age += annee;

if (age >= 18) {
    console.log("majeur");
 } else {
    console.log("mineur");
 }
*/

/*
let monTableau = [];
//let monTableau1 = [ele1, ele2, ele3];
let fruits = ["Pommes", "Poires", "Pêches"];
let info = ["John Doe", 25, true];

console.log(fruits[1]);
console.log(fruits.length);

let couleurs = ["rouge", "jaune", "vert"];
couleurs[1] = "bleu";
console.log(couleurs);

let notes = [0,2, 15, 18, 25];
notes.push(40); // ajoute à la fin du tableau
console.log(notes);
notes.pop(); // supprime le dernier élément du tableau
console.log(notes);
notes.unshift(5); // ajoute au début
console.log(notes);
notes.shift(); // supprime le premier élément du tableau
console.log(notes);

let animaux = ["chien", "chat", "poisson"];
for(let animal of animaux){
    console.log("j'ai un " + animal);
}

let prix = [10, 20, 30];
prix.forEach(function(p){
    console.log("le prix est de " + p + "€");
});

let nombres = [1, 2, 3];
let carres = nombres.map(function(n){
    return n * n;
});
console.log(carres);

let bonnesNotes = notes.filtre(function(note){
    return note >= 10;
});
console.log(bonnesNotes);
*/

let age_visiteur = parseInt(prompt("Quel est l'âge du visiteur ?"));
console.log(age_visiteur);

if (age_visiteur > 12) {
    console.log("Le prix sera : 12€");
 } else {
    if (age_visiteur <= 12 && age_visiteur >= 5) {
        console.log("Le prix sera : 6€");
    }
    else{
        console.log("C'est gratuit !");
    }
 }



