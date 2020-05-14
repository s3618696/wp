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

//Validate Input
function validateName() {
  var name = document.getElementById("client-name").value;
  var nameRGEX = /^[a-zA-Z]+(([',.-\S][a-zA-Z ])?[a-zA-Z]*)*$/;
  var nameResult = nameRGEX.test(name);
  if (nameResult == false) {
    document.getElementById("invalid-name").style.display = "block";
    return false;
  } else {
    document.getElementById("invalid-name").style.display = "none";
    return true;
  }
}

function validateMobile() {
  var mobile = document.getElementById("client-mobile").value;
  var mobileRGEX = /0?(61)0?(\d{1,2})(\d{4})(\d{4})/; //Au phone
  var mobileResult = mobileRGEX.test(mobile.replace(/[^\d]/g, ""));
  if (mobileResult == false) {
    document.getElementById("invalid-mobile").style.display = "block";
    return false;
  } else {
    document.getElementById("invalid-mobile").style.display = "none";
    return true;
  }
}

function validateCredit() {
  var credit = document.getElementById("client-credit").value;
  var creditRGEX = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/; //Au phone
  var creditResult = creditRGEX.test(credit.replace(/[^\d]/g, ""));
  if (creditResult == false) {
    document.getElementById("invalid-credit").style.display = "block";
    return false;
  } else {
    document.getElementById("invalid-credit").style.display = "none";
    return true;
  }
}

//get current mm/yyyy
var today = new Date();
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
console.log(mm + "-" + yyyy);
var input_date = document.getElementById("expiry-date");
input_date.setAttribute("min", yyyy + "-" + mm);

var selectedMovieTime;
//Create Seat Selection
var selector = document.getElementsByClassName("seat-option");
for (var i = 0; i < selector.length; i++) {
  for (var j = 1; j < 11; j++) {
    var option = document.createElement("option");
    option.setAttribute("value", j);
    option.innerHTML = j;
    selector[i].appendChild(option);
  }
}

//Showing Bill/Total
function getTotal() {
  var total = 0;
  var listValue = [];
  var sta = document.getElementById("adult-standard");
  var staSelectValue = sta.options[sta.selectedIndex].value;
  var stp = document.getElementById("concession-standard");
  var stpSelectValue = stp.options[stp.selectedIndex].value;
  var stc = document.getElementById("children-standard");
  var stcSelectValue = stc.options[stc.selectedIndex].value;
  var fca = document.getElementById("adult-fclass");
  var fcaSelectValue = fca.options[fca.selectedIndex].value;
  var fcp = document.getElementById("concession-fclass");
  var fcpSelectValue = fcp.options[fcp.selectedIndex].value;
  var fcc = document.getElementById("children-fclass");
  var fccSelectValue = fcc.options[fcc.selectedIndex].value;
  listValue.push(
    staSelectValue,
    stpSelectValue,
    stcSelectValue,
    fcaSelectValue,
    fcpSelectValue,
    fccSelectValue
  );
  for (var i = 0; i < listValue.length; i++) {
    if (listValue[i] === "") {
      listValue[i] = 0;
    }
  }
  total =
    listValue[0] * 30 +
    listValue[1] * 20 +
    listValue[2] * 10 +
    listValue[3] * 40 +
    listValue[4] * 30 +
    listValue[5] * 20;
  var res = selectedMovieTime.split(" : ");
  if (res[1] === "12pm" && res[0] !== "Sat-Sun") {
    total = total / 2;
  } else {
    total;
  }
  document.getElementById("total-tickets").innerHTML = "$ " + total.toFixed(2);
}
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

var movie_id;
// Open movies' posters
function openBooking(e) {
  id = e.target.id;
  document.getElementById("booking-form").style.display = "none";
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
    button.setAttribute("id", i);
    button.innerHTML = movies[id].movie_time[i];
    booking.appendChild(button);
  }
  document.getElementById("blur-backgroud").style.display = "block";
  document.getElementById("movie-detail").style.display = "block";

  var buttons = document.getElementById("making-booking").children;
  console.dir(buttons);
  for (var i = 1; i < buttons.length; i++) {
    movie_id = id;
    buttons[i].addEventListener("click", updateBooking);
  }

  getTotal();
}

//Update Booking Form
function updateBooking(e) {
  var id = e.target.id;
  document.getElementById("movie-booking-name").innerHTML =
    movies[movie_id].movie_name + " - " + movies[movie_id].movie_time[id];
  document.getElementById("booking-form").style.display = "block";
  selectedMovieTime = movies[movie_id].movie_time[id];
  var res = selectedMovieTime.split(" : ");
  if (res[1] === "12pm" && res[0] !== "Sat-Sun") {
    document.getElementById("discount").style.display = "block";
  } else {
    document.getElementById("discount").style.display = "none";
  }
  getTotal();
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
