// --- Menu mobile ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn'); // Bouton qui ouvre/ferme le menu mobile
const nav = document.getElementById('main-nav'); // Élément de navigation principal à afficher/cacher
const body = document.body; // Utilisé pour bloquer le scroll quand le menu est ouvert

// Vérifie que les éléments existent avant d’ajouter des comportements
if (mobileMenuBtn && nav) {
    const menuIcon = mobileMenuBtn.querySelector('.material-icons'); // Icône à basculer (menu ↔ close)

    // Ajoute un écouteur sur le bouton du menu mobile
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open'); // Ouvre ou ferme le menu en ajoutant/enlevant la classe

        mobileMenuBtn.classList.toggle('is-active', isOpen); // Active le style du bouton si le menu est ouvert
        menuIcon.textContent = isOpen ? 'close' : 'menu'; // Change l’icône selon l’état du menu

        // Bloque le scroll et les interactions sur le body quand le menu est ouvert
        body.classList.toggle('menu-open', isOpen);
    });
}


// --- Dropdowns sur mobile ---
const dropdownToggles = document.querySelectorAll('.header-nav .dropdown-toggle'); // Sélectionne tous les boutons de dropdown

// Pour chaque bouton de dropdown
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {

        // Active uniquement sur les écrans ≤ 768px
        if (window.innerWidth <= 1024) {
            e.preventDefault(); // Empêche le lien de naviguer

            const parentDropdown = toggle.parentElement; // Élément parent contenant le toggle et le menu
            const submenu = toggle.nextElementSibling; // Le menu déroulant (dropdown-menu)
            const icon = toggle.querySelector('.dropdown-icon'); // Icône à faire pivoter

            // Ferme tous les autres dropdowns ouverts
            document.querySelectorAll('.header-nav .dropdown').forEach(otherDropdown => {
                if (otherDropdown !== parentDropdown && otherDropdown.classList.contains('is-open')) {
                    otherDropdown.classList.remove('is-open'); // Ferme le dropdown
                    otherDropdown.querySelector('.dropdown-menu').style.maxHeight = null; // Réinitialise la hauteur
                    otherDropdown.querySelector('.dropdown-icon').classList.remove('is-rotated'); // Réinitialise l’icône
                }
            });

            // Ouvre ou ferme le dropdown actuel
            parentDropdown.classList.toggle('is-open');
            icon.classList.toggle('is-rotated'); // Fait pivoter l’icône

            // Anime l’ouverture avec une hauteur dynamique
            submenu.style.maxHeight = parentDropdown.classList.contains('is-open')
                ? submenu.scrollHeight + "px"
                : null;
            
            const focused = document.activeElement;
            if (toggle.contains(focused))
            {
                focused.blur();
            }

        }
    });
});
