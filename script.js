var slideIndex = 2;
displaySlides(slideIndex);

// Précédent - Suivant
function changeSlide(n) {
  displaySlides((slideIndex += n));
}

// Indication image actuelle
function targetSlide(n) {
  displaySlides((slideIndex = n));
}

// Afficher slides
function displaySlides(n) {
  var slides = document.getElementsByClassName("slide-image");
  var dots = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  for (let dot of dots) {
    dot.className = dot.className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Evènement bouton "précédent"
document.getElementById("prev").addEventListener("click", function() {
  changeSlide(-1);
});
// Evènement bouton "suivant"
document.getElementById("next").addEventListener("click", function() {
  changeSlide(1);
});
// Evènement 1er dot
document.getElementById("dot-1").addEventListener("click", function() {
  targetSlide(1);
});
// Evènement 2ème dot
document.getElementById("dot-2").addEventListener("click", function() {
  targetSlide(2);
});
// Evènement 3ème dot
document.getElementById("dot-3").addEventListener("click", function() {
  targetSlide(3);
});
