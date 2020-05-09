/* Insert your javascript here */
//Movies JSON Data
var movies = {
  0: {
    movie_name: "Avengers: Endgame [PG]",
    plot_description:
      "The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005. After the success of the film Iron Man in May 2008, Marvel announced that The Avengers would be released in July 2011 and would bring together Tony Stark (Downey), Steve Rogers (Evans), Bruce Banner (Ruffalo), and Thor (Hemsworth) from Marvel's previous films.",
    trailer_link: "https://www.youtube.com/embed/TcMBFSGVi1c",
    movie_time: ["Wed-Fri : 9pm", "Sat-Sun : 6pm"],
    movie_poster: "./images/movies/avenger.jpg",
  },
  1: {
    movie_name: "Top End Wedding [MA]",
    plot_description:
      "Lauren is an ambitious lawyer living in Adelaide. After a promotion her boyfriend, Ned, proposes to her. Ned, who has recently quit his job but still hasn't told Lauren, asks Lauren for a quick wedding. Her workaholic boss, Ms. Hampton (Kerry Fox) gives Lauren 10 days off for the ceremony and honeymoon and Lauren decides to use the time to marry in her hometown of Darwin. After arriving in Darwin Lauren discovers that her unhappy mother abandoned her father and her mother has gone missing. Lauren decides to cancel the wedding as she cannot marry without her mother, but Ned decides he cannot wait to marry Lauren and takes her on a road trip to find her mother. Meanwhile she calls Ms. Hampton to come to Darwin and help arrange the wedding in her absence.",
    trailer_link: "https://www.youtube.com/embed/uoDBvGF9pPU",
    movie_time: ["Mon-Tue : 6pm", "Sat-Sun : 3pm"],
    movie_poster: "./images/movies/topandwedding.png",
  },
  2: {
    movie_name: "Dumbo [R]",
    plot_description:
      "In 1919, equestrian performer and World War I amputee Holt Farrier returns after the war to the Medici Brothers' Circus, run by Max Medici. The circus has run into financial troubles and Medici had to sell the circus' horses after Holt's wife and co-performer, Annie, died from the Spanish flu outbreak, so Medici reassigns Holt as the caretaker for the circus' pregnant Asian elephant Mrs. Jumbo. Mrs. Jumbo gives birth to a calf with unusually large ears and Medici orders Holt to hide the ears before allowing the public to see the calf. However, the calf accidentally reveals his ears in his debut performance in Joplin, Missouri, and the crowd laugh and mockingly names the calf Dumbo while pelting him with peanuts and other objects. Mrs. Jumbo, horrified and enraged by her son's mistreatment, rampages into the ring, causing extensive damage and accidentally collapsing the big top, which results in the death of abusive handler Rufus. Afterwards, to prevent a public relations problem, Medici resorts to selling Mrs. Jumbo. Holt's son and daughter, Joe and Milly Farrier, comfort Dumbo and discover that he can fly by flapping his ears. The children also discover that feathers are the key to Dumbo's willingness to fly.",
    trailer_link: "https://www.youtube.com/embed/7NiYVoqBt-8",
    movie_time: ["Wed-Fri : 6pm", "Sat-Sun : 12pm"],
    movie_poster: "./images/movies/dumbo.jpg",
  },
  3: {
    movie_name: "The Happy Prince [PG]",
    plot_description:
      "The Happy Prince is a 2018 biographical drama film about Oscar Wilde, written by, directed by, and starring Rupert Everett in his directorial debut.[2] The film stars Everett, Colin Firth, Colin Morgan, Emily Watson, Edwin Thomas and Tom Wilkinson. It premiered at the 2018 Sundance Film Festival,[3] and was shown at the 2018 BFI Flare: London LGBT Film Festival. At the 9th Magritte Awards, it received a nomination in the category of Best Foreign Film. The film's title alludes to the children's story by Oscar Wilde, The Happy Prince and Other Tales, which Wilde would read aloud to his children. The film was released in Italy on 12 April 2018, in the United Kingdom on 15 June 2018 and in the United States on 10 October 2018 to positive review from critics.",
    trailer_link: "https://www.youtube.com/embed/tXANCJQkUIE",
    movie_time: ["Wed-Fri : 12pm", "Sat-Sun : 9pm"],
    movie_poster: "./images/movies/thehappyprince.jpg",
  },
  4: {
    movie_name: "Paraside [PG]",
    plot_description:
      "The Kim family—father Ki-taek, mother Chung-sook, daughter Ki-jung and son Ki-woo—live in a small semi-basement apartment (banjiha),[10] have low-paying temporary jobs as pizza box folders, and struggle to make ends meet.[11] University student Min-hyuk, a friend of Ki-woo's, gives the family a scholar's rock meant to promise wealth. Leaving to study abroad, he suggests that Ki-woo take over his job as an English tutor for the daughter of the wealthy Park family, Da-hye. Ki-woo acts like a university student and is hired by the Parks, who call him Kevin.",
    trailer_link: "https://www.youtube.com/embed/5xH0HfJHsaY",
    movie_time: ["Wed-Fri : 6pm", "Sat-Sun : 12pm"],
    movie_poster: "./images/movies/paraside.jpg",
  },
  5: {
    movie_name: "Crash Landing On You [PG]",
    plot_description:
      "Crash Landing on You tells the story of two star crossed lovers, Yoon Se-ri (Son Ye-jin), a South Korean Chaebol heiress, and Ri Jeong-hyeok (Hyun Bin), a member of the North Korean elite and a Captain in the North Korean Special Police Force. One day while Yoon Se-ri goes for a short paragliding ride in Seoul, South Korea, a sudden tornado knocks her out and blows her off course. She awakens to find her paraglider had crashed into a tree in a forest in the DMZ in North Korea (an area forbidden for South Koreans). She then meets Ri Jeong-hyeok and falls into his arms when descending from the tree. Ri Jeong-hyeok eventually gives Yoon Se-ri shelter, and develops plans to secretly help her return to South Korea. Over time, they fall in love, despite the divide and dispute between their respective countries.",
    trailer_link: "https://www.youtube.com/embed/eXMjTXL2Vks",
    movie_time: ["Mon-Tue : 10pm", "Sat-Sun : 9pm"],
    movie_poster: "./images/movies/crashlandingonyou.png",
  },
};
//Mapping JSON to html - Showing movies details
var keys = Object.keys(movies);
var docFrag = document.createDocumentFragment();
for (var i = 0; i < keys.length; i++) {
  var tempNode = document
    .querySelector("div[data-type='template']")
    .cloneNode(true);
  tempNode.querySelector("img").src = movies[keys[i]].movie_poster;
  tempNode.querySelector("span.title").innerHTML = movies[keys[i]].movie_name;
  tempNode.querySelector("span.time").innerHTML =
    movies[keys[i]].movie_time[0] + "<br/>" + movies[keys[i]].movie_time[1];
  tempNode.style.display = "flex";
  docFrag.appendChild(tempNode);
}
document.getElementById("posters").appendChild(docFrag);
delete dogFrag;

//open Movie Detail
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
      console.log(section.offsetTop);
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
