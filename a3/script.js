/* Insert your javascript here */
function openBooking() {
  document.getElementById("blur-backgroud").style.display = "block";
  document.getElementById("movie-detail").style.display = "block";
}
window.onload = function () {
  var hideMovie = document.getElementById("movie-detail");
  document.onclick = function (e) {
    if (e.target.id == "blur-backgroud") {
      hideMovie.style.display = "none";
      document.getElementById("blur-backgroud").style.display = "none";
    }
  };
};

//Active navigation on scroll
window.addEventListener("scroll", (event) => {
  var navigationLinks = document.querySelectorAll("nav ul li a");
  var fromTop = window.scrollY;

  navigationLinks.forEach((link) => {
    var section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      console.log(section.offsetTop);
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
