var hash = window.location.hash.substr(1);
var result = hash.split('&');

var slideIndex = 1;



$("#archivio-toggle").click(function() {
  archiv();
});

function archiv() {
  $("#studio-menu").css("display", "none")
  $(".pos").css("line-height", "16pt")
  $(".pos").addClass("padding_top")
  $("#archivio-cont").css("display", "inline-block")
  $(".archivio-hide").css("display", "inline-block")
  $(".menu-archivio").css("display", "inline-block")
  if ($(window).width() > 550){
  $("#aNow").css("display", "block")
  $("#mNow").addClass("blue")
}else {
  $("#aNow").css("display", "")
  $("#mNow").addClass("")
}

};


$("#studio-toggle").click(function() {
  $("#archivio-menu").css("display", "none")
  $(".pos").css("line-height", "16pt")
  $(".pos").addClass("padding_top")
  $("#studio-cont").css("display", "inline-block")
  $(".studio-hide").css("display", "inline-block")

})

$(".indietro").click(function() {
  $("#archivio-menu").css("display", "inline-block")
  $("#studio-menu").css("display", "inline-block")
  $(".pos").css("line-height", "100vh")
  $(".pos").removeClass("padding_top")
  $("#studio-cont").css("display", "none")
  $(".studio-hide").css("display", "none")
  $("#archivio-cont").css("display", "none")
  $(".archivio-hide").css("display", "none")
  $(".menu-archivio").css("display", "none")
  remove_hash_from_url()
  $(".schede").css("display", "none")
  $(".scheda_hide").addClass("hide")
  $(".menu-archivio > div").removeClass("blue")
  $(".menu-archivio > div").removeClass("hide")
  $(".arrow").addClass("hide")

})

$(".legal-toggle").click(function() {
  $(".studio-info").css("display", "none")
  $(".legal-info").css("display", "inline-block")
})

$(".legal-info").click(function() {
  $(".studio-info").css("display", "inline-block")
  $(".legal-info").css("display", "none")
})

var stato = 0;



$(".scheda_click").click(function() {

  if ($(this).parent().parent().hasClass("lui")) {

    $(".scheda_click").addClass("hide");
    $(".testo_scheda").css("padding-bottom", "20px");
    $(".schede").css("border-bottom", "none");
  } else {
    $(".scheda_click").removeClass("hide");
    $(".testo_scheda").css("padding-bottom", "");
    $(".schede").css("border-bottom", "");
  }



  if (!$(this).parent().children(".scheda_hide").hasClass("hide")) {
    $(this).parent().children(".scheda_hide").addClass("hide")
    remove_hash_from_url()
    window.location = "#" + clas;
  }
  else if ($(this).parent().children(".scheda_hide").hasClass("hide")) {
    $(".scheda_hide").addClass("hide")
    $(this).parent().children(".scheda_hide").removeClass("hide")
    window.location = "#" + clas + "&" + $(this).parent().attr('id');
    hash = window.location.hash.substr(1);
    result = hash.split('&')
  }



});

var clas;
var id;

$(".menu-archivio > div").click(function() {
  clas = this.id.replace(/m/g, 'a');
  getLink(clas);
})

if (result != 0) {
  clas = result[0];
  getLink(result[0], result[1]);
}


$(document).on('click', '#cantieriAperti', function(event) {
    event.preventDefault();
    $("#mNow").click();
});















var xcheck;

jQuery(function($) {
  var currentMousePos = {
    x: -1,
    y: -1
  };
  $(document).mousemove(function(event) {
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
  });




  $(document).ready(function() {
    $(document).mousemove(function() {
      if ($(".immagini:hover").length != 0) {
        if (currentMousePos.x > $(".immagine:hover").width() / 2) {
          $('.immagine').css('cursor', 'url("Assets/NEXT.png"), auto');
          xcheck = 1;
        } else if (currentMousePos.x < $(".immagine:hover").width() / 2) {
          $('.immagine').css('cursor', 'url("Assets/PREV.png"), auto');
          xcheck = 0;
        }
      }
    });
  });
  // ELSEWHERE, your code that needs to know the mouse position without an event

});


var slides;

$('.immagine').click(function() {
  slides = $(this).parent().children(".immagine");
  jQuery(function($) {
    var currentMousePos = {
      x: -1,
      y: -1
    };
    $(document).mousemove(function(event) {
      currentMousePos.x = event.pageX;
      currentMousePos.y = event.pageY;
    });




    if (xcheck == 1) {
      slideIndex += 1
      showSlides(slideIndex, slides)
      console.log(slideIndex)
    }
    else if (xcheck == 0) {
      slideIndex -= 1
      showSlides(slideIndex, slides)
      console.log(slideIndex)
    }




    // ELSEWHERE, your code that needs to know the mouse position without an event

  });
})




function showSlides(n, slides) {
  var i;

  // var dots = $(".dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++)
  // {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}

$(window).resize(function() {
  // if ($(window).width() > 375) {
  //   $(".indice").css("display", "inline-block")
  //   $(".menu-archivio > div").removeClass("hide")
  //   $(".arrow").addClass("hide")
  // }else if ($(window).width() <= 375) {
  //   $(".indice").css("display", "none")
  //   $(".menu-archivio > div").addClass("hide")
  //   $("#m" + id).removeClass("hide")
  //   $(".arrow").removeClass("hide")
  // }

  if ($(window).width() > 550) {
    $(".indice").css("display", "inline-block")
    $(".menu-archivio > div").removeClass("hide")
    $(".arrow").addClass("hide")
  }
  else if ($(window).width() <= 551) {
    $(".indice").css("display", "none")
    // $(".menu-archivio > div").addClass("hide")
    var id2 = result[0].replace(/a/g, '');
    $("#m" + id2).removeClass("hide")
    $(".arrow").removeClass("hide")
  }

})

function getLink(anno, num, id) {



  archiv();
  $(".schede").css("display", "none")
  $("#" + anno).css("display", "block")
  $(".scheda_hide").addClass("hide")
  id = anno.replace(/a/g, '');
  $(".menu-archivio > div").removeClass("blue")
  $("#m" + id).addClass("blue")

  if ($(window).width() > 550) {
    $(".indice").css("display", "inline-block")
    $(".menu-archivio > div").removeClass("hide")
    $(".arrow").addClass("hide")
  }
  else if ($(window).width() <= 551) {
    $(".indice").css("display", "none")
    $(".menu-archivio > div").addClass("hide")
    $("#m" + id).removeClass("hide")
    $(".arrow").removeClass("hide")
  }


  $(".arrow").click(function() {
    remove_hash_from_url()
    $(".menu-archivio > div").removeClass("hide")
    $(".arrow").addClass("hide")
    $(".schede").css("display", "none")
  });






  window.location = "#" + anno;

  if (num != null && $("#" + num).parent().hasClass("lui")) {

    $(".scheda_click").addClass("hide");
    $(".testo_scheda").css("padding-bottom", "0");
    $(".schede").css("border-bottom", "none");
  } else {
    $(".scheda_click").removeClass("hide");
    $(".testo_scheda").css("padding-bottom", "");
    $(".schede").css("border-bottom", "");
  }

  if (num != null) {
    $(".scheda_hide").addClass("hide")
    $("#" + num).children(".scheda_hide").removeClass("hide")
    console.log("#" + num)

    window.location = "#" + anno + "&" + num;
  }





  hash = window.location.hash.substr(1);
  result = hash.split('&')
  return anno;


  // $(".immagine").addClass("hide")
  // $("#" + result[1]).children(".immagine").removeClass("hide")
  // window.location ="#" + anno + "&" + result[1];
  // hash = window.location.hash.substr(1);
  // result = hash.split('&')


};





function remove_hash_from_url() {
  var uri = window.location.toString();

  if (uri.indexOf("#") > 0) {
    var clean_uri = uri.substring(0,
      uri.indexOf("#"));

    window.history.replaceState({},
      document.title, clean_uri);
    hash = window.location.hash.substr(1);
    result = hash.split('&')

  }
}

var altezza = $(".archivio-text").outerHeight()+$(".indice").outerHeight();


$(".full").click(function() {
  if ($(".fullscreen").hasClass("hide")) {
    $(".fullscreen").removeClass("hide")
    $(".indice_center").html($(this).parentsUntil("scheda").find(".nome").html()+" ↓")
    $(".indice_right").removeClass("hide")
    $(".cantieriAperti").addClass("hide")

  }

  if (!$(".immagine").hasClass("immagine_big")) {
    $(".immagine").addClass("immagine_big")
    $(".immagine_big").css("height",  "calc(100vh - " +altezza+"px - 30px)")
  }
})

$(".fullscreen").click(function(){
    exitFullscreen();
})

$(".red").click(function(){
  exitFullscreen();
})

function exitFullscreen() {
  if (!$(".fullscreen").hasClass("hide")) {
    $(".fullscreen").addClass("hide")
    $(".immagine").removeClass("immagine_big")
    $(".indice_center").html("Indice ↓")
    $(".indice_right").addClass("hide")
    $(".cantieriAperti").removeClass("hide")
    $(".immagine").css("height",  "")
  }
}



setInterval(highlightBlock, 3000); // Every two seconds

function highlightBlock() {
//       $('.cantieriAperti').css('color', '#0000FF'); // Change colour
//       setTimeout(function() {
//              $('.cantieriAperti').css('color', 'white'); // Change back
//       }, 1500);

$('.cantieriAperti').toggleClass("blue")
}





$(document).ready(function() {
  $(document).mousemove(function() {
    if ($(".scheda_click:hover").length != 0) {
        $('.scheda_click').css('cursor', 'url("Assets/Sfondo.png"), auto');
    }
  });
});





//   $(".immagine").click(function(){
//     // $(".lab_image").css("transform", "translate(0vw, 0)")
//     $("").removeClass("hide")
//     $(".1").addClass("inverted")
//   });
//
//



// // Get the last <li> element ("Milk") of <ul> with id="myList2"
// var itm = $(".scheda_hide").children();
//
// // Copy the <li> element and its child nodes
// var cln = document.getElementByClass("scheda_hide").children(".immagini").cloneNode(true);
//
// // Append the cloned <li> element to <ul> with id="myList1"
// $(".fullscreen").appendChild(cln);



// if (!$(".fullscreen").hasClass(".hide")) {
//   $(".immagine").addClass(".hide")
// } else if ($(".immagine").hasClass(".fullscreen")) {
//
// }



// $(".a60-89").click(function(){
//   $(".a60-89").addClass("blue")
//   $(".a89-19").removeClass("blue")
//   $(".a20").removeClass("blue")
//   $("#a60-89").css("display", "block")
//   $("#a89-19").css("display", "none")
//   $("#a20").css("display", "none")
//   $(".indice").css("display", "inline-block")
//   window.location = "#a69-89"
// })
//
// $(".a89-19").click(function(){
//   $(".a60-89").removeClass("blue")
//   $(".a89-19").addClass("blue")
//   $(".a20").removeClass("blue")
//   $("#a60-89").css("display", "none")
//   $("#a89-19").css("display", "block")
//   $("#a20").css("display", "none")
// })
//
// $(".a20").click(function(){
//   $(".a60-89").removeClass("blue")
//   $(".a89-19").removeClass("blue")
//   $(".a20").addClass("blue")
//   $("#a60-89").css("display", "none")
//   $("#a89-19").css("display", "none")
//   $("#a20").css("display", "block")
// })
