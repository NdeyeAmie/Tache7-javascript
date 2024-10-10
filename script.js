// function calculerMultiplication() {
//     // Récupère les valeurs des deux nombres
//     let nombre1 = document.getElementById("nombre1").value;
//     let nombre2 = document.getElementById("nombre2").value;

//     // Convertit les valeurs en nombres
//     nombre1 = Number(nombre1);
//     nombre2 = Number(nombre2);

//     if (isNaN(nombre1) || isNaN(nombre2)) {
//         document.getElementById("resultat").textContent = "Veuillez entrer des nombres valides.";
//     } else {
//         // Calcule le résultat de la multiplication
//         let resultat = nombre1 * nombre2;

//         // Affiche le résultat
//         document.getElementById("resultat").textContent = `${nombre1} multiplié par ${nombre2} vaut ${resultat}.`;
//     }
// }

function calculerMultiplication() {
    // Récupère les valeurs des deux nombres
    let nombre1 = document.getElementById("nombre1").value;
    let nombre2 = document.getElementById("nombre2").value;

    // Vérifie si les champs ne sont pas vides
    if (nombre1 === "" || nombre2 === "") {
        document.getElementById("resultat").textContent = "Veuillez entrer des nombres valides.";
    } else {
        // Convertit les valeurs en nombres
        nombre1 = Number(nombre1);
        nombre2 = Number(nombre2);

        // Calcule le résultat de la multiplication
        let resultat = nombre1 * nombre2;

        // Affiche le résultat
        document.getElementById("resultat").textContent = nombre1 + " multiplié par " + nombre2 + " vaut " + resultat + ".";
        // document.getElementById("resultat").textContent = `${nombre1} multiplié par ${nombre2} vaut ${resultat}.`;
    }
}
