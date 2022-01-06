// var words = document.getElementsByClassName('word');
// var wordArray = [];
// var currentWord = 0;
//
// words[currentWord].style.opacity = 1;
// for (var i = 0; i < words.length; i++) {
//   splitLetters(words[i]);
// }
//
// function changeWord() {
//   var cw = wordArray[currentWord];
//   var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
//   for (var i = 0; i < cw.length; i++) {
//     animateLetterOut(cw, i);
//   }
//
//   for (var i = 0; i < nw.length; i++) {
//     nw[i].className = 'letter behind';
//     nw[0].parentElement.style.opacity = 1;
//     animateLetterIn(nw, i);
//   }
//
//   currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
// }
//
// function animateLetterOut(cw, i) {
//   setTimeout(function() {
// 		cw[i].className = 'letter out';
//   }, i*80);
// }
//
// function animateLetterIn(nw, i) {
//   setTimeout(function() {
// 		nw[i].className = 'letter in';
//   }, 340+(i*80));
// }
//
// function splitLetters(word) {
//   var content = word.innerHTML;
//   word.innerHTML = '';
//   var letters = [];
//   for (var i = 0; i < content.length; i++) {
//     var letter = document.createElement('span');
//     letter.className = 'letter';
//     letter.innerHTML = content.charAt(i);
//     word.appendChild(letter);
//     letters.push(letter);
//   }
//
//   wordArray.push(letters);
// }
//
// changeWord();
// setInterval(changeWord, 4000);

function sticky() {
  var mq = window.matchMedia( "(max-width: 767px)" );
  var element = document.getElementsByClassName("navbar");
  console.log(element[0]);
  if (mq.matches) {
    console.log("match!");
    element[0].classList.add("sticky-top");
  }
  else {
    console.log("no match..!")
    element[0].classList.remove("sticky-top");
  }
}

function btn() {
  var mq = window.matchMedia( "(max-width: 425px)" );
  var elements = document.getElementsByClassName("btn");
  console.log(elements);
  for (var i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    if (mq.matches) {
      console.log("match!");
      elements[i].classList.remove("btn-lg");
      elements[i].classList.add("btn-md");
    }
    else {
      console.log("no match..!")
      elements[i].classList.remove("btn-md");
      elements[i].classList.add("btn-lg");
    }
  }
}

$(window).on('load', function(){
  sticky();
  btn();
  // setTimeout(function(){ $('.text').fadeOut() }, 15000);
  // setTimeout(function(){ $('#initial-hide').fadeIn() }, 3000);
  $('#initial-hide').css({opacity: 0.0, visibility: "visible"});
  setTimeout(function(){
    $('#initial-hide').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
  }, 2000);

  // setTimeout(function(){ $('body').css('background-color', '#17182f') }, 15000);
  // setTimeout(function(){ $('body').animate({
  //   backgroundColor: "#17182f",
  // },1000); }, 15000);
});

$(function () {
  if ($('.custom-toggler').attr('aria-expanded') === "true") {
    console.log('yeah!!');
    print('yeah!');
  }
})

$(document).ready(function(){
  // document.getElementsByTagName("html")[0].style.visibility = "visible";
  // setTimeout(function(){ $('.wrapper').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, {duration: 400}) }, 600);
  var mq = window.matchMedia( "(max-width: 425px)" );
  if (mq.matches) {
    console.log("match!");
    setTimeout(function(){ $('.wrapper').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, {duration: 400}) }, 600);
  }
  else {
    console.log("no match..!")
    setTimeout(function(){ $('.wrapper').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, {duration: 400}) }, 100);
  }
  var toggle = false;
  $('.custom-toggler').click(function(){ // Bind a click event to my <a> tag
    // var linkValue = $(this).attr('data-link'); // Retreive the value of data-link aka where we want to go
    // Do something, your logic


    // window.location.href = linkValue; // Load the new page
    if (toggle === false) {
      console.log('hooray!');
      $(".Container").css({
        // "backgroundColor": "black",
        // "color": "white"
        "margin-top": "-290px",
        "padding-top": "290px",
      });
      toggle = true;
    } else {
      console.log('better hooray!');
      $(".Container").css({
        // "backgroundColor": "black",
        // "color": "white"
        "margin-top": "-86px",
        "padding-top": "86px",
      });
      toggle = false;
    }
  });
  $(window).resize(function() {

    sticky();
    btn();

    if ($(".custom-toggler").is(":hidden")) {
      if ($("#sidebar").is(":hidden")) {
        console.log('best hooray!')
        $(".Container").css({
          "margin-top": "-86px",
          "padding-top": "86px",
        });
      } else if ($("#sidebar").is(":visible")) {
        $(".Container").css({
          "margin-top": "0px",
          "padding-top": "0px",
        });
      };
    } else if (toggle === true) {
      $(".Container").css({
        // "backgroundColor": "black",
        // "color": "white"
        "margin-top": "-290px",
        "padding-top": "290px",
      });
    } else {
      $(".Container").css({
        // "backgroundColor": "black",
        // "color": "white"
        "margin-top": "-86px",
        "padding-top": "86px",
      });
    };
  });
});


//
// $( function() {
//   var state = true;
//   $( "#button" ).on( "click", function() {
//     if ( state ) {
//       $( "#effect" ).animate({
//         backgroundColor: "#aa0000",
//         color: "#fff",
//         width: 500
//       }, 1000 );
//     } else {
//       $( "#effect" ).animate({
//         backgroundColor: "#fff",
//         color: "#000",
//         width: 240
//       }, 1000 );
//     }
//     state = !state;
//   });
// } );
