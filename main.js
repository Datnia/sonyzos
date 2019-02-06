AOS.init();

var rellax = new Rellax(".rellax");

function openNav() {
  if ($(window).width() <= 825) {
    document.getElementById("nav").style.height = "100%";
    $(".bio, .intro, .buttonwrapper, .nav-content, footer").fadeIn(1000);
  } else {
    document.getElementById("nav").style.height = "75%";
    $(".bio, .intro, .buttonwrapper, .nav-content, footer").fadeIn(1000);
  }
}

$(window).on("scroll", function() {
  closeNav();
});

function closeNav() {
  document.getElementById("nav").style.height = "0%";
  $(".bio, .intro, .buttonwrapper, .nav-content, footer").fadeOut(70);
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
