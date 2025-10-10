let age_visiteur = parseInt(prompt("Quel est l'âge du visiteur ?"));
console.log(typeof(age_visiteur));
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

