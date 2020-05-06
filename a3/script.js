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
