document.addEventListener("DOMContentLoaded", function () {
    // toggle icon navbar
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    //scroll section
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        sections.forEach(section => {
            let sectionTop = section.offsetTop - 100;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to the corresponding link
                let activeLink = document.querySelector(`header nav a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });

    // Other code for sticky header
    window.addEventListener('scroll', () => {
        let header = document.querySelector('header');
        header.classList.toggle("sticky", window.scrollY > 100);
    });

    //remove toggle icon and navbar when click navbar links (scroll)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
});
