async function loadPartial(selector, file) {

    try {
        // == Effectue une requête HTTP pour récupérer le fichier HTML partiel == //
        const response = await fetch(file);

        // == Vérifie si la réponse est OK (statut 200–299), sinon déclenche une erreur == //
        if (!response.ok) throw new Error(`Erreur de chargement : ${file}`);

        // == Récupère le contenu HTML du fichier sous forme de texte == //
        const html = await response.text();

        // == Injecte le HTML dans l’élément ciblé par le sélecteur (ex: "header", "footer") == //
        document.querySelector(selector).innerHTML = html;
        
    } catch (err) {
        // == Affiche une erreur dans la console si le chargement échoue == /
        console.error("Erreur d’importation du composant :", err);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    // == Charge dynamiquement le header et le footer depuis le fichier HTML == //
    await loadPartial("header", "/assets/html/layouts/header.html");
    await loadPartial("footer", "/assets/html/layouts/footer.html");

    // == Une fois les deux partiels chargés, on injecte le JS spécifique à leur comportement == //
    const script = document.createElement("script");

    // == Spécifie le chemin du script à charger (animations, interactions, etc.) == //
    script.src = "/assets/js/layouts/header.js";

    // == Utilise `defer` pour que le script soit exécuté après le parsing du HTML == //
    script.defer = true;

    // == Ajoute le script à la fin du `<body>` pour qu’il soit pris en compte == //
    document.body.appendChild(script);
});
