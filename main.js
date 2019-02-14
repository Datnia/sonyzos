AOS.init();

var rellax = new Rellax(".rellax");

$(document).ready(function() {
  var is_IE = /*@cc_on!@*/ false || !!document.documentMode;
  var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (is_IE || is_safari) {
    $(".bg").click(function() {
      $("#container, nav ul li ").addClass("fadeOut");
    });
    $(".background").css("animation", "fadein 1s");
  } else {
    $(".bg").click(function() {
      $(this)[0].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
    $(".bg").click(function() {
      var x = this;
      if (
        $(window).width() > 1224 &&
        $(window).width() / $(window).height() > 1.85
      ) {
        setTimeout(function() {
          $(x).addClass("fullscreen");
        }, 600);
      } else {
        setTimeout(function() {
          $("html").fadeOut(200);
        }, 400);
      }
    });
  }
});

function openNav() {
  if ($(window).width() <= 825) {
    document.getElementById("nav").style.height = "100%";
    $(".bio, .intro , .button, .nav-content a, footer, .close-btn")
      .delay(300)
      .fadeIn(700);
  } else {
    document.getElementById("nav").style.height = "75%";
    $(".bio, .intro , .button, .nav-content a, footer, .close-btn").fadeIn(
      1000
    );
  }
}

$(window).on("scroll", function() {
  closeNav();
});

function closeNav() {
  document.getElementById("nav").style.height = "0%";
  $(".bio, .intro, .button, .nav-content a, footer, .close-btn").fadeOut(70);
}

$(".box, .container").on("click", function() {
  if (parseInt($("#nav").css("height")) > 0) {
    closeNav();
  }
});

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $(".scroll, .scroll-line").addClass("hidden");
  } else {
    $(".scroll, .scroll-line").removeClass("hidden");
  }
});

$(document).ready(function() {
  $(".bg").hover(function() {
    $("#projects").addClass("show");
  });
});

$("#container").on("click", function() {
  if (parseInt($("#nav").css("height")) > 0) {
    closeNav();
  }
});

$(".footerimage a").on("click", function(e) {
  e.preventDefault();
  var goTo = this.getAttribute("href");
  $("html").fadeOut(500);

  setTimeout(function() {
    window.location = goTo;
  }, 500);
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
