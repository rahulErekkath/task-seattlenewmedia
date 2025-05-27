(function ($) {
  "use strict";

  // Initialize WOW.js
  new WOW().init();

  // Page Loader
  $(window).on("load", function () {
    setTimeout(function () {
      $(".page-loader").fadeOut("slow", function () {
        $(this).remove(); // Completely remove the loader from the DOM
      });

      gsap.registerPlugin(ScrollTrigger);
         
         const scrollRow = document.querySelector(".services-scroll-row");
         
         gsap.to(scrollRow, {
            x: () => -(scrollRow.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
               trigger: ".services-scroll-wrapper",
               start: "center center",
               end: () => `+=${scrollRow.scrollWidth}`,
               scrub: true,
               pin: true,
               anticipatePin: 1,
            },
         });






      // Animate the vertical timeline line
            gsap.to("#timeline-line", {
               height: "100%",
               scrollTrigger: {
                  trigger: ".timeline",
                  start: "top center",
                  end: "bottom center",
                  scrub: true
               }
            });
         
            // Animate each timeline step
            gsap.utils.toArray(".timeline-step").forEach(step => {
               gsap.to(step, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  scrollTrigger: {
                     trigger: step,
                     start: "top 80%",
                     toggleActions: "play none none reverse"
                  }
               });
            });








    }, 100); // Delay before loader fades out










  });







  
  // Sticky Header
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $('.header').addClass("is-sticky");
    } else {
      $('.header').removeClass("is-sticky");
    }
  });

  // Testimonials Carousel
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 600
  });

  // Clients Carousel
  $('.client-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 5,
    autoplay: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 7 }
    }
  });










})(jQuery);
