document.addEventListener('DOMContentLoaded', function() {
        // Gestion du menu mobile
        const menuToggle = document.querySelector('.menu-toggle');
        const navMobile = document.querySelector('.nav-mobile');
        const closeMenu = document.querySelector('.close-menu');

        // Fonction pour afficher/cacher le toggle selon la taille de l'écran
        function handleResize() {
            if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            } else {
            menuToggle.style.display = 'none';
            navMobile.style.display = 'none';
            closeMenu.style.display = 'none';
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Appel initial

        menuToggle.addEventListener('click', () => {
            navMobile.style.display = 'flex';
            menuToggle.style.display = 'none';
            closeMenu.style.display = 'block'; // Affiche la croix
        });

        closeMenu.addEventListener('click', () => {
            navMobile.style.display = 'none';
            menuToggle.style.display = 'block';
            closeMenu.style.display = 'none'; // Cache la croix
        });

        // Fermer le menu quand on clique sur un lien
        const navLinks = document.querySelectorAll('.nav-mobile a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
            navMobile.style.display = 'none';
            menuToggle.style.display = 'block';
            closeMenu.style.display = 'none'; // Cache la croix
            });
        });
          // Animation au scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section-animate');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Pour animer les éléments déjà visibles au chargement
});
