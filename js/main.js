(function ($) {
  ("use strict");

  // DARK THEME
    const darkTheme = "dark-theme";
    const iconMoon = "fad fa-eclipse-alt";
    const iconSun = "fad fa-sun";

    // تحميل الثيم المحفوظ
    if (localStorage.getItem("theme") === "dark") {
      $("body").addClass(darkTheme);
      $("#theme-button i").removeClass(iconMoon).addClass(iconSun);
    }

    if($("body").hasClass(darkTheme)) {
      $("#theme-button i").addClass(iconSun);
    } else {
      $("#theme-button i").addClass(iconMoon);
    }
    // عند الضغط على الزر
    $("#theme-button").click(function (e) {
      e.preventDefault();

      $("body").toggleClass(darkTheme);
      $("#theme-button svg").toggleClass(`${iconMoon} ${iconSun}`);

      // حفظ الثيم الحالي
      localStorage.setItem(
        "theme",
        $("body").hasClass(darkTheme) ? "dark" : "light"
      );
    });

  // Preloader

  $(window).on("load", function (event) {
    $("#preloader").delay(500).fadeOut(500);
  });

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
      $(".whatsapp").css("bottom", "120px");
    } else {
      $(".back-to-top").fadeOut("slow");
      $(".whatsapp").css("bottom", "50px");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  //===== Isotope Project 1

  // $(".container").imagesLoaded(function () {
  //   var $grid = $(".grid").isotope({
      // options
    //   transitionDuration: "1s",
    //   itemSelector: ".grid-item",
    //   percentPosition: true,
    //   masonry: {},
    // });

    // filter items on button click
    // $(".project-menu ul").on("click", "li", function () {
    //   var filterValue = $(this).attr("data-filter");
    //   $grid.isotope({ filter: filterValue });
    // });

    //for menu active class
  //   $(".project-menu ul li").on("click", function (event) {
  //     $(this).siblings(".active").removeClass("active");
  //     $(this).addClass("active");
  //     event.preventDefault();
  //   });
  // });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonials New
  $(".testimonial-custom").owlCarousel({
    autoplay: true,
    loop: true,
    dots: true,
    // animateOut: "slideOutDown",
    // animateIn: "flipInX",
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
  });

  // Vendor carousel
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 4,
      },
      768: {
        items: 6,
      },
      992: {
        items: 8,
      },
    },
  });

  $(".navbar-toggler").click( () => { 
    $(".navbar-toggler span").toggleClass("fa-times");
  });

  $(".team-social.two a:last-child").click(function (e) {
    e.preventDefault();
  });

})(jQuery);