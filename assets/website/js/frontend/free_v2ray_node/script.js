$(document).ready(function () {
  // grab the initial top offset of the navigation
  var stickyNavTop = $(".navbar").offset().top;

  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav = function () {
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function () {
    stickyNav();
  });
});

$(".scroll").on("click", function (event) {
  event.preventDefault();
  $("html,body").animate({
    scrollTop: $(this.hash).offset().top - 130,
  });
});

$("#navbarSupportedContent .nav-item .nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$(document).ready(function () {
  $(".dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
      $(this).find(".dropdown-menu").removeClass("show");
    }
  );
});

window.addEventListener("load", function () {
  const loader = document.querySelector("#loader");
  const preloader = document.querySelector("#preloader");
  loader.style.display = "none";
  preloader.style.display = "none";
});

$(".owl-two").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  dots: false,
  loop: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});

$(".owl-three").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  dots: false,
  loop: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 5,
      nav: false,
    },
  },
});

$(".owlFour").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  dots: false,
  loop: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  nav: false,
  autoplay: true,
  dots: false,
  autoplayTimeout: 3000,
  autoplaySpeed: 3000,
  loop: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 5,
      nav: false,
    },
  },
});

//===  Video Popup
function videoPopup() {
  $(".video-popup").magnificPopup({
    type: "iframe",
  });
}

//===  counterUP

let counterr = document.querySelectorAll(".counterr");
let arr = Array.from(counterr);

arr.map((item) => {
  let count = item.innerHTML;
  item.innerHTML = 0;
  let counterValue = 1;

  function counterUP() {
    item.innerHTML = counterValue++;

    if (counterValue > count) {
      clearInterval(counting);
    }
  }

  let counting = setInterval(() => {
    counterUP();
  }, item.dataset.speed / count);
});

// Active Progress bars
