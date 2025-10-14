function test() {
    
    let distances = [];
    let uneDistance = prompt("Remplis le tableau des distances (nombre compris entre 0 et 100). "+"\n\n"+"Fais Annuler lorsqu'il n'y a plus de distances à saisir.");
    let uneDistanceInt = parseInt(uneDistance);

    let difference = 0;
    let plusPetiteDifference = 100;
    let distancePrecedente = 0;
    let compteur = 0;
    let ind = -1;

    while (uneDistance != null) {
        if (uneDistanceInt >= 0 && uneDistanceInt <= 100) {
            distances.push(uneDistanceInt);
            difference = Math.abs(distancePrecedente - uneDistanceInt);
            if (difference < plusPetiteDifference) {
                plusPetiteDifference = difference;
                ind = compteur;
            }
            compteur ++;
            distancePrecedente = uneDistanceInt;
        } else {
            alert("Cette distance (" + uneDistance + ") n'est pas correcte. "+"\n\n"+"Elle doit être comprise en tre 0 et 100");
        }
    
        uneDistance = prompt("Remplis le tableau des distances (nombre compris entre 0 et 100). "+"\n\n"+"Fais Annuler lorsqu'il n'y a plus de distances à saisir.");
        uneDistanceInt = parseInt(uneDistance);

    }

    console.log("Les distances  " + distances);
    console.log("L'indice est : " + ind + " la distance la plus petite est : " + plusPetiteDifference);

    if (ind > -1 && distances.length >= 2) {
        alert("La plus petite distance est de  " + plusPetiteDifference + "\n"+"C'est entre les 2 nombres suivants : " + distances[ind - 1] + " et " + distances[ind]);
    } else {
        alert("Impossible à dire.");
    }

}
