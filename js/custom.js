jQuery(document).ready(function ($) {

    jQuery(".toggle_menu, .toggle_close").click(function() {
      jQuery("body").toggleClass("show_menu");
  });

  jQuery(window).scroll(function() {
      if (jQuery(window).scrollTop() >= 30) {
          jQuery('header').addClass('fixed-header');
      } else {
          jQuery('header').removeClass('fixed-header');
      }
  });

  });
  
document.addEventListener('DOMContentLoaded', function() {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // Get elements
    const hamburger = document.querySelector('.hamburger-menu');
    const navigation = document.querySelector('.navigation');
    const body = document.body;

    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navigation.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = navigation.classList.contains('active') ? 'hidden' : '';

        // Add delay to menu items animation
        const menuItems = document.querySelectorAll('.navigation ul li');
        if (navigation.classList.contains('active')) {
            menuItems.forEach((item, index) => {
                item.style.transitionDelay = `${0.1 + index * 0.1}s`;
            });
        } else {
            menuItems.forEach(item => {
                item.style.transitionDelay = '0s';
            });
        }
    }

    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Add click event for the close button
    navigation.addEventListener('click', (e) => {
        // Check if click is on the close button (::before pseudo-element)
        if (e.target === navigation && e.offsetX >= navigation.offsetWidth - 60 && e.offsetY <= 60) {
            toggleMenu();
        }
    });

    // Close menu when clicking on navigation links
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navigation.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu on window resize if open
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991 && navigation.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Add scroll effect to header
    let lastScroll = 0;
    const header = document.querySelector('header');

    // window.addEventListener('scroll', () => {
    //     const currentScroll = window.pageYOffset;

    //     if (currentScroll <= 0) {
    //         header.classList.remove('scroll-up');
    //         return;
    //     }

    //     if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
    //         // Scroll Down
    //         header.classList.remove('scroll-up');
    //         header.classList.add('scroll-down');
    //     } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
    //         // Scroll Up
    //         header.classList.remove('scroll-down');
    //         header.classList.add('scroll-up');
    //     }
    //     lastScroll = currentScroll;
    // });
});
  