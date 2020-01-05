//slow scroll
$(function() {
  $("a[href*=#]").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});
//slow scroll

//starting Navigation
(function($) {
  "use strict";

  var app = (function() {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector("body");
      menu = document.querySelector(".menu-icon");
      menuItems = document.querySelectorAll(".nav__list-item");
      applyListeners();
      applyActive();
    };
    var applyActive = function applyActive() {
      menuItems.forEach(element => {
        element.addEventListener("click", function() {
          menuItems.forEach(element => {
            return element.classList.remove("active-nav");
          });
          toggleClass(element, "active-nav");
          toggleClass(body, "nav-active");
        });
      });
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener("click", function() {
        return toggleClass(body, "nav-active");
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass))
        element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };
    init();
  })();
})(jQuery);
//ending Navigation

//starting typing animation
var string = [
  "A Web Developer and Information Systems Analyst, I believe in technology and try to change manual work methods to electronic ones to make the work easier, more efficient and creative for the companies employees.",
  `Hello I'm`,
  "Taghreed Najib"
];
var array = string[1].split("");
var array2 = string[2].split("");
var array3 = string[0].split("");
var timer;

function frameLooper() {
  if (array.length > 0) {
    document.getElementById("hello").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout("frameLooper()", 100); /* change 70 for speed */
}
function frameLooper2() {
  if (array2.length > 0) {
    document.getElementById("name").innerHTML += array2.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout("frameLooper2()", 100); /* change 70 for speed */
}
function frameLooper3() {
  if (array3.length > 0) {
    document.getElementById("text").innerHTML += array3.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout("frameLooper3()", 80); /* change 70 for speed */
}
setTimeout("frameLooper()", 1000);
setTimeout("frameLooper2()", 2000);
setTimeout("frameLooper3()", 4000);
//ending typing animation

//starting skills section
var waypoint = new Waypoint({
  element: document.getElementById("skills"),
  handler: function(down) {
    //   alert('You have scrolled to a thing')
    var all = document.getElementsByClassName("value");
    // console.log(all.length)
    for (let i = 0; i < all.length; i++) {
      let n = all[i].id;
      //   console.log(n);
      let width = 0;
      let interv = setInterval(frame, 40);
      function frame() {
        if (width >= n) {
          clearInterval(interv);
        } else {
          width++;
          // console.log(width);
          document.getElementById(`${n}`).style.width = width + "%";
          all[i].innerHTML = width + "%";
        }
      }
    }
    this.destroy();
  },
  offset: "bottom-in-view"
});

//ending skills section

//starting model
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//ending model
