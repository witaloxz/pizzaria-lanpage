$(document).ready(function () {
    $('.mobile_btn').on('click', function () {
        $('.mobile_menu').toggleClass('open');
        $('.mobile_btn i').toggleClass('fa-bars fa-x');
        $('body').toggleClass('menu-open');
    });
});
const sections = $('section');
const navItems = $('.nav-item');

$(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
    } else {
        header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
    }

    sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset().top - 96;
        const sectionBottom = sectionTop+ section.outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = i;
            return false;
        }
    })

    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
});

ScrollReveal().reveal('.intro', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.pizza_container', {
    origin: 'right',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.pizzaiolo', {
    origin: 'left',
    duration: 1000,
    distance: '20%'
})

ScrollReveal().reveal('.review', {
    origin: 'right',
    duration: 1000,
    distance: '20%'
})