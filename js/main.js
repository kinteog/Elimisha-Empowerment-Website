(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

    // Impact (Service) progress
    $('.service-item').waypoint(function () {
        $(this).find('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    // Extended Team Carousel with external navigation
    var teamCarousel = $(".team-carousel");
    teamCarousel.owlCarousel({
    autoplay: true,
    smartSpeed: 1200,
    loop: true,
    margin: 25,
    dots: false,
    nav: false, // disable default Owl nav
    rtl: false, // set to true for right-to-left scroll
    responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1200: { items: 4 }
    }
    });

    // Custom arrows
    $(".carousel-nav.prev").click(function () {
    teamCarousel.trigger("prev.owl.carousel");
    });
    $(".carousel-nav.next").click(function () {
    teamCarousel.trigger("next.owl.carousel");
    });



    /* =================== EMAIL JS INTEGRATION =================== */
        const contactForm = document.getElementById('contact-form'),
            contactMessage = document.getElementById('contact-message');

        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();

                emailjs.sendForm('service_8fuhc5c', 'template_9xomqmg', '#contact-form', '9X_XiWTEBq5ApTthR')
                .then(() => {
                    contactMessage.textContent = '✅ Message sent successfully!';
                    contactMessage.classList.add('text-success');
                    contactMessage.classList.remove('text-danger');
                    setTimeout(() => { contactMessage.textContent = ''; }, 5000);
                    contactForm.reset();
                }, (error) => {
                    contactMessage.textContent = '❌ Message not sent. Please try again later.';
                    contactMessage.classList.add('text-danger');
                    contactMessage.classList.remove('text-success');
                    console.error('EmailJS Error:', error);
                });
            });
        }

    /*=============== EMAIL JS: Newsletter ===============*/
        const newsletterForm = document.getElementById('newsletter-form'),
            newsletterMessage = document.getElementById('newsletter-message');

        newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        emailjs.sendForm('service_8fuhc5c', 'template_n0b8e7h', '#newsletter-form', '9X_XiWTEBq5ApTthR')
        .then(() => {
            newsletterMessage.textContent = 'Thank you for subscribing! ✅';
            newsletterMessage.style.color = 'limegreen';

            setTimeout(() => { newsletterMessage.textContent = ''; }, 5000);
            newsletterForm.reset();
        }, () => {
            newsletterMessage.textContent = 'Subscription failed ❌ Please try again.';
            newsletterMessage.style.color = 'red';
        });
        });

    
})(jQuery);

