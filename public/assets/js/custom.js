/* ==============
 ========= js documentation ==========================

 * template name: Charitia
 * version: 1.0
 * description: Nonprofit NGO Fundraising HTML5 Template
 * author: webnextpro
 * author-url: https://themeforest.net/user/webnextpro

    ==================================================

     01. preloader
     -------------------------------------------------
     02. background image
     -------------------------------------------------
     03. custom cursor
     -------------------------------------------------
     04. scroll to top with progress
     -------------------------------------------------
     05. add active class to the current navbar item
     -------------------------------------------------
     06. open search box
     -------------------------------------------------
     07. mobile menu
     -------------------------------------------------
     08. fixed header on scroll
     -------------------------------------------------
     09. offcanvas cart
     -------------------------------------------------
     10. banner one slider
     -------------------------------------------------
     11. banner two slider
     -------------------------------------------------
     12. banner three slider
     -------------------------------------------------
     13. banner four slider
     -------------------------------------------------
     14. difference slider
     -------------------------------------------------
     15. cause slider
     -------------------------------------------------
     16. cause two slider
     -------------------------------------------------
     17. difference tab
     -------------------------------------------------
     18. partner slider
     -------------------------------------------------
     19. nice select
     -------------------------------------------------
     20. team slider
     -------------------------------------------------
     21. coming soon
     -------------------------------------------------
     22. link active on hover
     -------------------------------------------------
     23. donate amount
     -------------------------------------------------
     24. product details slider
     -------------------------------------------------
     25. testimonial slider
     -------------------------------------------------
     26. testimonial slider four
     -------------------------------------------------
     27. testimonial two slider
     -------------------------------------------------
     28. testimonial three slider
     -------------------------------------------------
     29. product details tab
     -------------------------------------------------
     30. footer copyright year
     -------------------------------------------------
     31. odometer counter
     -------------------------------------------------
     32. vanilla tilt animation
     -------------------------------------------------
     33. video popup
     -------------------------------------------------
     34. aos initialization
     -------------------------------------------------
     35. register gsap
     -------------------------------------------------
     36. gsap null config
     -------------------------------------------------
     37. target section with gsap
     -------------------------------------------------
     38. parallax image with gsap
     -------------------------------------------------
     39. title animation
     -------------------------------------------------
     40. banner three image animation
     -------------------------------------------------
     41. progress bar
     -------------------------------------------------
     42. circular progress bar
     -------------------------------------------------
     43. banner animation

    ==================================================
============== */

(function ($) {
  "use strict";

  /**
   * ======================================
   * 01. preloader
   * ======================================
   */
  $(window).on("load", function () {
    if ($(".preloader").length) {
      $(".preloader").delay(300).fadeOut();
    }
  });

  jQuery(function () {
    let device_width = window.innerWidth;
    let initialScroll = $(window).scrollTop();

    /**
     * ======================================
     * 02. background image
     * ======================================
     */
    $("[data-background]").each(function () {
      var backgroundImages = $(this).attr("data-background").split(",");
      var cssValue = backgroundImages
        .map(function (image) {
          return 'url("' + image.trim() + '")';
        })
        .join(",");

      $(this).css("background-image", cssValue);
    });

    /**
     * ======================================
     * 03. custom cursor
     * ======================================
     */
    if ($(".mouseCursor").length > 0) {
      function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
          if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
              t = document.querySelector(".cursor-outer");
            let n,
              i = 0,
              o = !1;
            (window.onmousemove = function (s) {
              o ||
                (t.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (e.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (n = s.clientY),
                (i = s.clientX);
            }),
              $("body").on(
                "mouseenter",
                "button, a, .cursor-pointer",
                function () {
                  e.classList.add("cursor-hover"),
                    t.classList.add("cursor-hover");
                }
              ),
              $("body").on(
                "mouseleave",
                "button, a, .cursor-pointer",
                function () {
                  ($(this).is("a", "button") &&
                    $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                    t.classList.remove("cursor-hover"));
                }
              ),
              (e.style.visibility = "visible"),
              (t.style.visibility = "visible");
          }
        }
      }
      itCursor();
    }

    /**
     * ======================================
     * 04. scroll to top with progress
     * ======================================
     */
    if ($(".progress-wrap").length) {
      const progressPath = document.querySelector(".progress-wrap path");
      const pathLength = progressPath.getTotalLength();

      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";

      const updateProgress = () => {
        const scroll = $(window).scrollTop();
        const height = $(document).height() - $(window).height();
        progressPath.style.strokeDashoffset =
          pathLength - (scroll * pathLength) / height;
      };

      updateProgress();
      $(window).on("scroll", updateProgress);

      $(window).on("scroll", () => {
        $(".progress-wrap").toggleClass(
          "active-progress",
          $(this).scrollTop() > 50
        );
      });

      $(".progress-wrap").on("click", (event) => {
        event.preventDefault();
        $("html, body")
          .stop()
          .css("scroll-behavior", "auto")
          .animate(
            { scrollTop: 0 },
            {
              duration: 1500,
              easing: "swing",
              complete: () => $("html, body").css("scroll-behavior", "smooth"),
            }
          );
      });

      if ($(window).scrollTop() >= 50) {
        $(".progress-wrap").addClass("active-progress");
      }
    }

    /**
     * ======================================
     * 05. add active class to the current navbar item
     * ======================================
     */
    function dynamicCurrentMenuClass(selector) {
      const fileName = window.location.href.split("/").pop();

      selector.find("li").removeClass("active");
      selector
        .find(".navbar__dropdown-label")
        .removeClass("navbar__item-active");

      selector.find("li").each(function () {
        const anchor = $(this).find("a");
        if (
          anchor.attr("href") === fileName ||
          (fileName === "" && anchor.attr("href") === "index.html")
        ) {
          $(this).addClass("active");
        }
      });

      const activeDropdownItem = selector
        .find(".navbar__sub-menu .active")
        .parents("li");
      if (activeDropdownItem.length) activeDropdownItem.addClass("active");
    }

    if ($("header").length) {
      dynamicCurrentMenuClass($("header"));
    }

    /**
     * ======================================
     * 06. open search box
     * ======================================
     */
    if ($(".search-popup").length > 0) {
      $(".open-search").on("click", function () {
        $("body").addClass("search-active");
      });

      $(".close-search").on("click", function () {
        $("body").removeClass("search-active");
      });
    }

    /**
     * ======================================
     * 07. mobile menu
     * ======================================
     */
    if ($(".mobile-menu").length > 0) {
      var mobileMenuContent = $(".navbar__menu").html();
      $(".mobile-menu__list").append(mobileMenuContent);

      $(".mobile-menu .navbar__dropdown-label").on("click", function () {
        $(this).parent().siblings().find(".navbar__sub-menu").slideUp(500);
        $(this)
          .parent()
          .siblings()
          .find(".navbar__dropdown-label")
          .removeClass("navbar__item-active");
        $(this).siblings(".navbar__sub-menu").slideToggle(500);
        $(this).toggleClass("navbar__item-active");
      });
    }

    $(".open-offcanvas-nav").on("click", function () {
      $(this).addClass("open-offcanvas-nav-active");
      $(".mobile-menu__backdrop").addClass("mobile-menu__backdrop-active");
      $(".nav-fade").each(function (i) {
        $(this).css("animation-delay", 0.25 * 1 * i + "s");
      });

      $(".mobile-menu").addClass("show-menu");
      $(".mobile-menu__wrapper").removeClass("nav-fade-active");
    });

    $(".close-mobile-menu, .mobile-menu__backdrop").on("click", function () {
      $(".open-offcanvas-nav").removeClass("open-offcanvas-nav-active");
      $(".mobile-menu").removeClass("show-menu");
      $(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
      $(".mobile-menu__wrapper").addClass("nav-fade-active");
      $(".mobile-menu .navbar__dropdown-label").removeClass(
        "navbar__item-active"
      );
      $(".mobile-menu .navbar__sub-menu").slideUp(0);
    });

    $(".navbar__item.navbar__item--has-children > a").on("click", function (e) {
      e.preventDefault();
    });

    $(window).on("resize", function () {
      // sidebar info
      $(".off-canvas").removeClass("off-canvas-active");
      $(".off-canvas-backdrop").removeClass("off-canvas-backdrop-active");

      // mobile menu
      $(".mobile-menu").removeClass("show-menu");
      $(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
      $(".mobile-menu__wrapper").addClass("nav-fade-active");
      $(".mobile-menu .navbar__dropdown-label").removeClass(
        "navbar__item-active"
      );
      $(".mobile-menu .navbar__sub-menu").slideUp(0);
      $(".open-offcanvas-nav").removeClass("open-offcanvas-nav-active");
    });

    /**
     * ======================================
     * 08. fixed header on scroll
     * ======================================
     */
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 45) {
        $(".header").removeClass("sticky-header");
      } else {
        $(".header").addClass("sticky-header");
      }
    });

    if (initialScroll >= 45) {
      $(".header").addClass("sticky-header");
    }

    /**
     * ======================================
     * 09. offcanvas cart
     * ======================================
     */

    $(".cart").on("click", function () {
      $(".sidebar-cart").addClass("sidebar-cart-active");
      $(".cart-backdrop").addClass("cart-backdrop-active");
      $("body").toggleClass("body-active");
    });

    $(".close-cart").on("click", function () {
      $(".sidebar-cart").removeClass("sidebar-cart-active");
      $(".cart-backdrop").removeClass("cart-backdrop-active");
      $("body").removeClass("body-active");
    });

    $(".cart-backdrop").on("click", function () {
      $(".sidebar-cart").removeClass("sidebar-cart-active");
      $(".cart-backdrop").removeClass("cart-backdrop-active");
      $("body").removeClass("body-active");
    });

    $(".sidebar-cart").on("click", function (event) {
      event.stopPropagation();
    });

    function calculateTotalPrice() {
      var totalPrice = 0;
      $(".cart-item-single").each(function () {
        var quantity = parseInt($(this).find(".item-quantity").text(), 10);
        var price = parseFloat($(this).find(".item-price").text());
        totalPrice += quantity * price;
      });
      $(".total-price").text(totalPrice.toFixed(2));
    }

    $(".cart-item-single").each(function () {
      var quantity = parseInt($(this).find(".item-quantity").text(), 10);

      $(this)
        .on("click", ".quantity-increase", function () {
          if (quantity < 20) {
            quantity++;
            $(this).siblings(".item-quantity").text(quantity);
            calculateTotalPrice();
          }
        })
        .on("click", ".quantity-decrease", function () {
          if (quantity >= 1) {
            quantity--;
            $(this).siblings(".item-quantity").text(quantity);
            calculateTotalPrice();
          }
        })
        .on("click", ".delete-item", function () {
          $(this).closest(".cart-item-single").hide();
        });
    });

    /**
     * ======================================
     * 10. banner one slider
     * ======================================
     */
    var bannerOne = new Swiper(".banner-two__slider", {
      loop: true,
      speed: 2000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-banner",
        prevEl: ".prev-banner",
      },
    });

    /**
     * ======================================
     * 11. banner two slider
     * ======================================
     */
    var bannerTwo = new Swiper(".banner__slider", {
      loop: true,
      speed: 2000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });

    /**
     * ======================================
     * 12. banner three slider
     * ======================================
     */
    var bannerThree = new Swiper(".banner-three__slider", {
      loop: true,
      speed: 2000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });

    /**
     * ======================================
     * 13. banner four slider
     * ======================================
     */
    var bannerFour = new Swiper(".banner-four__slider", {
      loop: true,
      speed: 2000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-banner",
        prevEl: ".prev-banner",
      },
    });

    /**
     * ======================================
     * 14. difference slider
     * ======================================
     */
    var differenceSlider = new Swiper(".difference__slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-difference",
        prevEl: ".prev-difference",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    /**
     * ======================================
     * 15. cause slider
     * ======================================
     */
    var causeSlider = new Swiper(".cause__slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,

      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-cause",
        prevEl: ".prev-cause",
      },
      pagination: {
        el: ".cause-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });

    /**
     * ======================================
     * 16. cause two slider
     * ======================================
     */
    var causeTwoSliderThumb = new Swiper(".cause-two__content-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      centeredSlides: true,
      watchSlidesProgress: true,
      effect: "fade",

      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-cause-two",
        prevEl: ".prev-cause-two",
      },
    });

    var causeTwoSlider = new Swiper(".cause-two__slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loopAddBlankSlides: true,
      loopAdditionalSlides: 1,
      slideToClickedSlide: true,
      roundLengths: true,
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      thumbs: {
        swiper: causeTwoSliderThumb,
      },
      navigation: {
        nextEl: ".next-cause-two",
        prevEl: ".prev-cause-two",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });

    /**
     * ======================================
     * 17. difference tab
     * ======================================
     */

    $(".difference-two__content-single").hide();
    $(".difference-two__content-single:first").show();

    $(".difference-two__tab-btn").on("click", function () {
      $(".difference-two__tab-btn").removeClass("active");
      $(this).addClass("active");
      $(".difference-two__content-single").hide();
      var target = $(this).data("target");
      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 18. partner slider
     * ======================================
     */
    var partners = new Swiper(".partner__slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      freeMode: true,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        420: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 5,
        },
      },
    });

    /**
     * ======================================
     * 19. nice select
     * ======================================
     */
    $("select").niceSelect();

    /**
     * ======================================
     * 20. team slider
     * ======================================
     */
    var teamTwoSlider = new Swiper(".team-two-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-team",
        prevEl: ".prev-team",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    /**
     * ======================================
     * 21. coming soon
     * ======================================
     */
    if ($(".clock").length > 0) {
      const hourMarkersContainer = document.querySelector(".hour-markers");
      for (let i = 0; i < 12; i++) {
        const marker = document.createElement("div");
        marker.classList.add("hour-marker");
        const rotation = i * 30;
        marker.style.transform = `rotate(${rotation}deg) translateY(-216.25px)`;

        const hourText = document.createElement("span");
        hourText.textContent = i === 0 ? "12" : i;
        hourText.style.transform = `rotate(-${rotation}deg)`;
        marker.appendChild(hourText);

        hourMarkersContainer.appendChild(marker);
      }

      const hourHand = document.querySelector(".hour-hand");
      const minuteHand = document.querySelector(".minute-hand");
      const secondHand = document.querySelector(".second-hand");

      function setClock() {
        const now = new Date();
        const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
        const minutes = now.getMinutes() + seconds / 60;
        const hours = (now.getHours() % 12) + minutes / 60;

        const secondsDeg = (seconds / 60) * 360;
        const minutesDeg = (minutes / 60) * 360;
        const hoursDeg = (hours / 12) * 360;

        hourHand.style.transform = `rotate(${hoursDeg}deg)`;
        minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
        secondHand.style.transform = `rotate(${secondsDeg}deg)`;
      }

      setInterval(setClock, 50);
      setClock();

      const countdownElement = document.querySelector(".time-countdown");
      const dayElement = countdownElement.querySelector(".day");
      const hourElement = countdownElement.querySelector(".hour");
      const minuteElement = countdownElement.querySelector(".minute");
      const secondElement = countdownElement.querySelector(".second");

      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 100);

      function updateCountdown() {
        const now = new Date();
        const timeRemaining = endDate - now;

        if (timeRemaining <= 0) {
          endDate.setDate(endDate.getDate() + 100);
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        dayElement.textContent = days;
        hourElement.textContent = hours < 10 ? `0${hours}` : hours;
        minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
      }

      setInterval(updateCountdown, 1000);
      updateCountdown();
    }

    /**
     * ======================================
     * 22. link active on hover
     * ======================================
     */
    $(".comment-single").each(function () {
      $(this)
        .find(".reply-button button")
        .on("click", function () {
          var $currentComment = $(this).closest(".comment-single");
          $(".comment-single .reply-comment")
            .not($currentComment.find(".reply-comment"))
            .slideUp();
          $currentComment.find(".reply-comment").slideToggle();
          $(".comment-single .reply-button button")
            .not(this)
            .removeClass("active");
          $(this).toggleClass("active");
        });
    });

    /**
     * ======================================
     * 23. donate amount
     * ======================================
     */
    if ($("#donationAmount").length > 0) {
      const activeAmount = $(".donation-amount.active").text();
      $("#donationAmount").val(activeAmount);

      $(".donation-amount").on("click", function () {
        $(".donation-amount").removeClass("active");
        $(this).addClass("active");

        if ($(this).hasClass("custom-amount")) {
          $("#donationAmount").val("").focus(); // Clear and focus input for custom amount
        } else {
          const amount = $(this).text();
          $("#donationAmount").val(amount);
        }
      });
    }

    /**
     * ======================================
     * 24. product details slider
     * ======================================
     */
    var productGallery = new Swiper(".product-details-slider-gallery", {
      loop: true,
      speed: 1000,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 24,
      watchSlidesProgress: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });

    var productSlider = new Swiper(".product-details-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      centeredSlides: true,
      slideToClickedSlide: true,
      roundLengths: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      thumbs: {
        swiper: productGallery,
      },
    });

    /**
     * ======================================
     * 25. testimonial slider
     * ======================================
     */
    var testimonial = new Swiper(".testimonial__slider", {
      loop: true,
      speed: 2000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-testimonial",
        prevEl: ".prev-testimonial",
      },
    });

    /**
     * ======================================
     * 26. testimonial slider four
     * ======================================
     */
    var testimonialSlider = new Swiper(".testimonial-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-testimonial",
        prevEl: ".prev-testimonial",
      },
    });

    /**
     * ======================================
     * 27. testimonial two slider
     * ======================================
     */
    var testimonialTwo = new Swiper(".testimonial-two-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-testimonial",
        prevEl: ".prev-testimonial",
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
        },
      },
    });

    /**
     * ======================================
     * 28. testimonial three slider
     * ======================================
     */
    var testimonialThree = new Swiper(".testimonial-three__slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,

      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-testimonial-three",
        prevEl: ".prev-testimonial-three",
      },

      breakpoints: {
        1400: {
          slidesPerView: 2,
        },
      },
    });

    /**
     * ======================================
     * 29. product details tab
     * ======================================
     */

    $(".product-tab-content-single").hide();
    $(".product-tab-content-single:first").show();

    $(".product-tab__btn").on("click", function () {
      $(".product-tab__btn").removeClass("active");
      $(this).addClass("active");
      $(".product-tab-content-single").hide();
      var target = $(this).data("target");
      $(target).fadeIn(500);
      return false;
    });

    document.querySelectorAll(".range__slider").forEach(function (el) {
      el.oninput = function () {
        var valPercent =
          (el.valueAsNumber - parseInt(el.min, 10)) /
          (parseInt(el.max, 10) - parseInt(el.min, 10));

        var style =
          "background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(" +
          valPercent +
          ", #ffc107), color-stop(" +
          valPercent +
          ", #505D6A30));";
        el.style = style;
      };
      el.oninput();
    });

    /**
     * ======================================
     * 30. footer copyright year
     * ======================================
     */
    if ($("#copyrightYear").length > 0) {
      $("#copyrightYear").text(new Date().getFullYear());
    }

    /**
     * ======================================
     * 31. odometer counter
     * ======================================
     */
    $(".odometer").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });

    /**
     * ======================================
     * 32. vanilla tilt animations
     * ======================================
     */

    let Vantilt = document.querySelectorAll(".van-tilt");

    if (Vantilt) {
      VanillaTilt.init(document.querySelectorAll(".van-tilt"), {
        max: 5,
        speed: 3000,
      });
    }

    /**
     * ======================================
     * 33. video popup
     * ======================================
     */
    if (document.querySelector(".open-video-popup") !== null) {
      $(".open-video-popup").magnificPopup({
        disableOn: 768,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }

    /**
     * ======================================
     * 34. aos initialization
     * ======================================
     */
    AOS.init({
      once: true,
    });

    /**
     * ======================================
     * 35. register gsap
     * ======================================
     */
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    /**
     * ======================================
     * 36. gsap null config
     * ======================================
     */
    gsap.config({
      nullTargetWarn: false,
    });

    /**
     * ======================================
     * 37. target section with gsap
     * ======================================
     */
    $('a[href^="#"]:not([href="#"])').on("click", function (event) {
      event.preventDefault();

      var target = $(this).attr("href");

      gsap.to(window, {
        scrollTo: {
          y: target,
          offsetY: 100,
        },
        duration: 1,
        ease: "power3.inOut",
      });
    });

    /**
     * ======================================
     * 38. parallax image with gsap
     * ======================================
     */
    var imageParallax = document.querySelectorAll(".parallax-image");
    if (imageParallax.length > 0) {
      $(".parallax-image").each(function () {
        $(this).wrap(
          '<div class="parallax-image-wrap"><div class="parallax-image-inner"></div></div>'
        );
        $(".parallax-image-wrap").css({
          overflow: "hidden",
        });

        var $animImageParallax = $(this);
        var $aipWrap = $animImageParallax.parents(".parallax-image-wrap");
        var $aipInner = $aipWrap.find(".parallax-image-inner");

        let tl_ImageParallax = gsap.timeline({
          scrollTrigger: {
            trigger: $aipWrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onEnter: () => animImgParallaxRefresh(),
          },
        });
        tl_ImageParallax.to($animImageParallax, {
          yPercent: 80,
          ease: "none",
        });

        function animImgParallaxRefresh() {
          tl_ImageParallax.scrollTrigger.refresh();
        }

        let tl_aipZoomIn = gsap.timeline({
          scrollTrigger: {
            trigger: $aipWrap,
            start: "top 99%",
          },
        });
        tl_aipZoomIn.from($aipInner, {
          duration: 1.5,
          autoAlpha: 0,
          scale: 1.3,
          ease: Power2.easeOut,
          clearProps: "all",
        });
      });
    }

    /**
     * ======================================
     * 39. title animation
     * ======================================
     */
    if ($(".title-animation").length > 0) {
      let char_come = gsap.utils.toArray(".title-animation");
      char_come.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
          type: "chars, words",
          lineThreshold: 0.5,
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char_come,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });
        tl2.from(split_char.chars, {
          duration: 0.8,
          x: 40,
          autoAlpha: 0,
          stagger: 0.05,
          ease: "back.out",
        });
      });
    }

    /**
     * ======================================
     * 40. banner three image animation
     * ======================================
     */
    if ($(".move-image").length > 0) {
      let mouse = { x: 0, y: 0, moved: false };

      $(document).mousemove(function (e) {
        mouse.moved = true;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      gsap.ticker.add(() => {
        if (mouse.moved) {
          parallaxImages(".move-image", -30);
          mouse.moved = false;
        }
      });

      function parallaxImages(selector, movement) {
        $(selector).each(function () {
          const rect = this.getBoundingClientRect();
          const offsetX =
            ((mouse.x - (rect.left + rect.width / 2)) / rect.width) * movement;
          const offsetY =
            ((mouse.y - (rect.top + rect.height / 2)) / rect.height) * movement;

          gsap.to(this, {
            x: offsetX,
            y: offsetY,
            duration: 0.5,
          });
        });
      }
    }
    /**
     * ======================================
     * 41. progress bar
     * ======================================
     */
    if ($(".progress-bar-single").length > 0) {
      $("[data-percent]").each(function () {
        $(this)
          .find(".progress-bar-percent")
          .css("width", $(this).attr("data-percent"));
        $(this).find(".percent-value").text($(this).attr("data-percent"));
      });

      const ax_progress_bar = document.querySelectorAll(".progress-bar-single");
      ax_progress_bar.forEach((element) => {
        const w = element.querySelector(".progress-bar-percent");
        const p = element.querySelector(".percent-value");

        const target = p.textContent;

        const ax_bartl = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        ax_bartl.fromTo(
          w,
          {
            width: 0,
          },
          {
            width: target,
          }
        );
        ax_bartl.from(
          p,
          {
            textContent: 0 + "%",
            snap: {
              textContent: 5,
            },
          },
          "<"
        );
      });
    }

    /**
     * ======================================
     * 42. circular progress bar
     * ======================================
     */
    if ($(".difference-progress-single").length > 0) {
      const progressBars = document.querySelectorAll(".progress-bar-single");

      progressBars.forEach((element) => {
        const percentAttr = element.getAttribute("data-percent");

        if (percentAttr) {
          const progress = percentAttr.replace("%", "");
          const percentDisplay = element.querySelector(".percent-value");
          const circle = element.querySelector(".circle-progress");

          if (percentDisplay && circle) {
            const radius = 15.9155;
            const circumference = 2 * Math.PI * radius;

            gsap.fromTo(
              circle,
              {
                strokeDashoffset: circumference,
              },
              {
                strokeDashoffset:
                  circumference - (progress / 100) * circumference,
                duration: 2,
                scrollTrigger: {
                  trigger: element,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none none",
                },
              }
            );

            gsap.fromTo(
              percentDisplay,
              {
                textContent: 0,
              },
              {
                textContent: progress,
                duration: 2,
                snap: { textContent: 1 },
                ease: "power1.inOut",
                onUpdate: function () {
                  percentDisplay.textContent =
                    Math.round(percentDisplay.textContent) + "%";
                },
              }
            );
          }
        }
      });
    }

    /**
     * ======================================
     * 43. banner animation
     * ======================================
     */
    if ($(".banner").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=40%",
            scrub: 0.5,
            pin: false,
          },
        });
        tl.to(".circle-shape", {
          duration: 3,
          scale: 1.7,
        });
      }
    }
  });
})(jQuery);
