/* Insert your javascript here */
//Movies JSON Data
var movies = {
  0: {
    id: "0",
    movie_name: "Avengers: Endgame [PG]",
    plot_description:
      "The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005. After the success of the film Iron Man in May 2008, Marvel announced that The Avengers would be released in July 2011 and would bring together Tony Stark (Downey), Steve Rogers (Evans), Bruce Banner (Ruffalo), and Thor (Hemsworth) from Marvel's previous films.",
    trailer_link: "https://www.youtube.com/embed/TcMBFSGVi1c",
    movie_time: ["Wed-Fri : 9pm", "Sat-Sun : 6pm"],
    movie_poster: "./images/movies/avenger.jpg",
  },
  1: {
    id: "1",
    movie_name: "Top End Wedding [MA]",
    plot_description:
      "Lauren is an ambitious lawyer living in Adelaide. After a promotion her boyfriend, Ned, proposes to her. Ned, who has recently quit his job but still hasn't told Lauren, asks Lauren for a quick wedding.",
    trailer_link: "https://www.youtube.com/embed/uoDBvGF9pPU",
    movie_time: ["Mon-Tue : 6pm", "Sat-Sun : 3pm"],
    movie_poster: "./images/movies/topandwedding.png",
  },
  2: {
    id: "2",
    movie_name: "Dumbo [R]",
    plot_description:
      "In 1919, equestrian performer and World War I amputee Holt Farrier returns after the war to the Medici Brothers' Circus, run by Max Medici.",
    trailer_link: "https://www.youtube.com/embed/7NiYVoqBt-8",
    movie_time: ["Wed-Fri : 6pm", "Sat-Sun : 12pm", "Tue-Wed : 12pm"],
    movie_poster: "./images/movies/dumbo.jpg",
  },
  3: {
    id: "3",
    movie_name: "The Happy Prince [PG]",
    plot_description:
      "The Happy Prince is a 2018 biographical drama film about Oscar Wilde, written by, directed by, and starring Rupert Everett in his directorial debut.[2] The film stars Everett, Colin Firth, Colin Morgan, Emily Watson, Edwin Thomas and Tom Wilkinson. It premiered at the 2018 Sundance Film Festival,[3] and was shown at the 2018 BFI Flare: London LGBT Film Festival.",
    trailer_link: "https://www.youtube.com/embed/tXANCJQkUIE",
    movie_time: ["Wed-Fri : 12pm", "Sat-Sun : 9pm"],
    movie_poster: "./images/movies/thehappyprince.jpg",
  },
  4: {
    id: "4",
    movie_name: "Paraside [PG]",
    plot_description:
      "The Kim family—father Ki-taek, mother Chung-sook, daughter Ki-jung and son Ki-woo—live in a small semi-basement apartment (banjiha),[10] have low-paying temporary jobs as pizza box folders, and struggle to make ends meet.[11] University student Min-hyuk, a friend of Ki-woo's, gives the family a scholar's rock meant to promise wealth.",
    trailer_link: "https://www.youtube.com/embed/5xH0HfJHsaY",
    movie_time: ["Wed-Fri : 6pm", "Sat-Sun : 12pm"],
    movie_poster: "./images/movies/paraside.jpg",
  },
  5: {
    id: "5",
    movie_name: "Crash Landing On You [PG]",
    plot_description:
      "Crash Landing on You tells the story of two star crossed lovers, Yoon Se-ri (Son Ye-jin), a South Korean Chaebol heiress, and Ri Jeong-hyeok (Hyun Bin), a member of the North Korean elite and a Captain in the North Korean Special Police Force. One day while Yoon Se-ri goes for a short paragliding ride in Seoul, South Korea, a sudden tornado knocks her out and blows her off course.",
    trailer_link: "https://www.youtube.com/embed/eXMjTXL2Vks",
    movie_time: ["Mon-Tue : 10pm", "Sat-Sun : 9pm"],
    movie_poster: "./images/movies/crashlandingonyou.png",
  },
};
//Mapping JSON to html - Showing movies posters
var keys = Object.keys(movies);
var docFrag = document.createDocumentFragment();
for (var i = 0; i < keys.length; i++) {
  var tempNode = document
    .querySelector("div[data-type='template']")
    .cloneNode(true);
  tempNode.querySelector("div.box-container").id = i;
  tempNode.querySelector("img").src = movies[keys[i]].movie_poster;
  tempNode.querySelector("span.title").innerHTML = movies[keys[i]].movie_name;
  tempNode.querySelector("span.time").innerHTML =
    movies[keys[i]].movie_time[0] + "<br/>" + movies[keys[i]].movie_time[1];
  tempNode.style.display = "flex";
  docFrag.appendChild(tempNode);
}
document.getElementById("posters").appendChild(docFrag);
delete dogFrag;

var list = document.getElementById("posters").children;
console.log(list);
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", openBooking);
}

// Open movies' posters
function openBooking(e) {
  id = e.target.id;
  var booking = document.getElementById("making-booking");
  var child = booking.lastElementChild;
  while (child) {
    booking.removeChild(child);
    child = booking.lastElementChild;
  }
  document.getElementById("movie-name").innerHTML = movies[id].movie_name;
  document.getElementById("movie-plot").innerHTML = movies[id].plot_description;
  document.getElementById("trailer").src = movies[id].trailer_link;
  h8 = document.createElement("h8");
  h8.innerHTML = "Make a booking";
  booking.appendChild(h8);
  for (var i = 0; i < movies[id].movie_time.length; i++) {
    var button = document.createElement("button");
    button.setAttribute("class", "button");
    button.innerHTML = movies[id].movie_time[i];
    booking.appendChild(button);
  }
  document.getElementById("blur-backgroud").style.display = "block";
  document.getElementById("movie-detail").style.display = "block";
}

//Click outside to dismiss the pop-up
window.onload = function () {
  var hideMovie = document.getElementById("movie-detail");
  document.onclick = function (e) {
    if (e.target.id == "blur-backgroud") {
      hideMovie.style.display = "none";
      document.getElementById("blur-backgroud").style.display = "none";
    }
  };
};

//Active navigation on click
$(document).ready(function () {
  $("ul li a").click(function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
  });
});

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
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
