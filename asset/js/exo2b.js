function test() {
    let lettresClaires =   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let lettresClairesM =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let lettresCryptes =   ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "B", "c", "D", "e", "E", "d", "C", "b", "A", "&", "#", "{", "(", "[", "@"];
    let lettresCryptesM =  ["f", "G", "h", "I", "j", "J", "i", "H", "g", "F", "?", ",", ".", ";", "/", ":", "!", "§", "%", "Z", "y", "X", "w", "W", "x", "Y"];

    let idxTrouve = null;
    let chaineVerif = prompt("Veuillez saisir la chaine de caractères à crypter");
    let chaineCrypte = "";

    for (let idx = 0; idx < chaineVerif.length; idx++) {
        /* cherche dans la table des minuscules */
        idxTrouve = lettresClaires.indexOf(chaineVerif[idx]);
        if (idxTrouve != -1) {
            chaineCrypte += lettresCryptes[idxTrouve];
        } else {
            /* cherche dans la table des Majuscules */
            idxTrouve = lettresClairesM.indexOf(chaineVerif[idx]);
            if (idxTrouve != -1) {
                chaineCrypte += lettresCryptesM[idxTrouve];
            } else {
                chaineCrypte += "_"+chaineVerif[idx];
            }
        } 
    }
    console.log("chaine saisie  : " + chaineVerif);
    console.log("chaine cryptée : " + chaineCrypte);

    /* décrypte */
    let chaineDecrypte = "";

    for (let idx = 0; idx < chaineCrypte.length; idx++) {
        /* cherche dans la table des minuscules crypte*/
        idxTrouve = lettresCryptes.indexOf(chaineCrypte[idx]);
        if (idxTrouve != -1) {
            chaineDecrypte += lettresClaires[idxTrouve];
        } else {
            /* cherche dans la table des Majuscules crypte */
            idxTrouve = lettresCryptesM.indexOf(chaineCrypte[idx]);
            if (idxTrouve != -1) {
                chaineDecrypte += lettresClairesM[idxTrouve];
            } else {
                /* c'est le caractères _ pour indiquer que l'on ne l'avait pas trouvé */
                idx++
                chaineDecrypte += chaineCrypte[idx];
            }
        } 
    }
    console.log("chaine décryptée : " + chaineDecrypte);
}

