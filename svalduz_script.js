var hash = window.location.hash.substr(1);
var result = hash.split('&');
var clas;
var id;
var slideIndex = 1;
var stato = 0;
var xcheck;
var slides;
var temp_text;





function start() {

  if (result != 0) {
    clas = result[0];
    if (clas == 'studio') {
      stud();
    } else {
      getLink(result[0], result[1]);
    }
  }
}




start();
















//////////////////////////////////////////////////////////////////////////////////////////

// RIMANDI



$(document).on('click', '#cantieriAperti', function(event) {
  event.preventDefault();
  $("#mNow").click();
});




$(".menu-archivio > div").click(function() {
  clas = this.id.replace(/m/g, 'a');
  getLink(clas);
  // hash = window.location.hash.substr(1);
  // result = hash.split('&');
})


$("#archivio-toggle").click(function() {
  if ($(window).width() >= 550) {

  $("#mNow").click();

  }else if ($(window).width() < 549) {
      archiv();

}
});




$("#studio-toggle").click(function() {
  stud();
})


//////////////////////////////////////////////////////////////////////////////////////////













// BLUE LAMPEGGIANTE

// setInterval(highlightBlock, 3000); // Every two seconds
//
// function highlightBlock() {
//   $('.cantieriAperti').toggleClass("blue")
// }






//MOSTRA SCHEDA


$(".scheda_click").click(function() {

  if ($(this).parent().parent().hasClass("lui")) {


    $(".testo_scheda").css("padding-bottom", "20px");
    $(".schede").css("border-bottom", "none");

  }
  else {

    $(".testo_scheda").css("padding-bottom", "");
    $(".schede").css("border-bottom", "");
  }



  if (!$(this).parent().children(".scheda_hide").hasClass("hide")) {
    $(this).parent().children(".scheda_hide").addClass("hide")

    remove_hash_from_url()
    window.location = "#" + clas;
    $(".scheda_click").removeClass("blue")

  }
  else if ($(this).parent().children(".scheda_hide").hasClass("hide")) {
    $(".scheda_hide").addClass("hide")
    $(this).parent().children(".scheda_hide").removeClass("hide")
    window.location = "#" + clas + "&" + $(this).parent().attr('id');
    hash = window.location.hash.substr(1);
    result = hash.split('&')
    getLink(result[0], result[1])
  }



});







// FUNZIONI





//RESIZE


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

  if ($(window).width() >= 550) {
    $(".menu-archivio > div").removeClass("hide")
    $(".arrow").addClass("hide")
    $(".inCorso").addClass("hide")
    $(".hide_big").addClass("hide")
    $("html").scrollTop("0")
    $("html").css("overflow", "hidden")
  }
  else if ($(window).width() < 549) {
    // $(".menu-archivio > div").addClass("hide")
    var id2 = result[0].replace(/a/g, '');
    $("#m" + id2).removeClass("hide")
    $(".hide_big").removeClass("hide")
    $(".inCorso").removeClass("hide")
    getLink(result[0]);


  }



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






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ARCHIVIO E STUDIO

function archiv() {
  $("#studio-menu").css("display", "none")
  $(".pos").css("line-height", "16pt")
  $(".pos").addClass("padding_top")
  $("#archivio-cont").css("display", "inline-block")
  $(".archivio-hide").css("display", "inline-block")
  $(".menu-archivio").css("display", "inline-block")


  if ($(window).width() > 550) {
    $("#aNow").css("display", "block")
    $("#mNow").addClass("blue")
  } else {
    // $("#aNow").css("display", "")
    // $("#mNow").addClass("")
    // $("#mNow").click();
    }


    // window.location = "#aNow";
    // hash = window.location.hash.substr(1);
    // result = hash.split('&');
    // $("#mNow").click();

};



function stud() {
  $("#archivio-menu").css("display", "none")
  $(".pos").css("line-height", "16pt")
  $(".pos").addClass("padding_top")
  $("#studio-cont").css("display", "inline-block")
  $(".studio-hide").css("display", "inline-block")
    window.location = "#studio";

}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////












function getLink(anno, num, id) {

  id = anno.replace(/a/g, '');


  archiv();




  $(".schede").css("display", "none")
  $("#" + anno).css("display", "block")

  $(".menu-archivio > div").removeClass("blue")
  $("#m" + id).addClass("blue")

  $(".scheda_hide").addClass("hide")

  $(".scheda_click").removeClass("blue")



  if ($(window).width() >= 550) {


    $(".menu-archivio > div").removeClass("hide")
    $(".arrow").addClass("hide")
      $(".beneath").css("display", "block")

      $(".schede").css("height", "calc(" + $("#archivio-cont").height() + "px - " + $(".archivio-text").outerHeight() + "px - " + $(".normal").outerHeight() + "px)")
    if (id == "Now") {
      $(".indice.normal").addClass("hide")
      $(".indice.cantieriAperti").removeClass("hide")
    } else {
      $(".indice.normal").removeClass("hide")
      $(".indice.cantieriAperti").addClass("hide")
    }


  } else if ($(window).width() < 549) {


    $(".indice").addClass("hide")
    $(".menu-archivio > div").addClass("hide")
    $("#m" + id).removeClass("hide")
    $(".arrow").removeClass("hide")
    $(".beneath").css("display", "none")
    $(".hide_small").addClass("hide")


    if (id == "Now") {

          $(".hide_small").removeClass("hide")


    }
  }


  $(".arrow").click(function() {
    remove_hash_from_url()
    $(".menu-archivio > div").removeClass("hide")
    $(".menu-archivio > div").removeClass("blue")
    $(".arrow").addClass("hide")
    $(".schede").css("display", "none")
    $(".hide_small").addClass("hide")

  });


  window.location = "#" + anno;

  if (num != null && $("#" + num).parent().hasClass("lui")) {

    $(".scheda_click").addClass("hide");
    $(".testo_scheda").css("padding-bottom", "0");
    $(".schede").css("border-bottom", "none");

  }
  else {
    $(".scheda_click").removeClass("hide");
    $(".testo_scheda").css("padding-bottom", "");
    $(".schede").css("border-bottom", "");


  }

  if (num != null) {
    $(".scheda_hide").addClass("hide")
    $("#" + num).children(".scheda_hide").removeClass("hide")


    window.location = "#" + anno + "&" + num;
      $("#" + num + " > .scheda_click").addClass("blue")
  }

  hash = window.location.hash.substr(1);
  result = hash.split('&')
  return anno;


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





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////













    window.dispatchEvent(new Event('resize'));















// $(".immagine").addClass("hide")
// $("#" + result[1]).children(".immagine").removeClass("hide")
// window.location ="#" + anno + "&" + result[1];
// hash = window.location.hash.substr(1);
// result = hash.split('&')




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






//////////////////////////////


//INDIETRO

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
      $(".hide_small").addClass("hide")

})









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// SLIDESHOW





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
        }
        else if (currentMousePos.x < $(".immagine:hover").width() / 2) {
          $('.immagine').css('cursor', 'url("Assets/PREV.png"), auto');
          xcheck = 0;
        }
      }
    });
  });
  // ELSEWHERE, your code that needs to know the mouse position without an event

});




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







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FULLSCREEN

$(".full").click(function() {
  enterFullscreen();
})

$(".fullscreen").click(function() {
  exitFullscreen();
})

$(".red").click(function() {
  exitFullscreen();
})

function enterFullscreen() {
  if ($(".fullscreen").hasClass("hide")) {
    $(".fullscreen").removeClass("hide")
    temp_text = $(".normal > .indice_center").html();
    $(".normal > .indice_center").html($(this).parentsUntil("scheda").find(".nome").html() + " ↓")
    $(".red").removeClass("hide")

  }

  if (!$(".immagine").hasClass("immagine_big")) {
    $(".immagine").addClass("immagine_big")


    $(window).resize(function() {

      $(".immagine_big").css("top", "calc(" + $(".archivio-text").outerHeight() + "px + " + $(".indice").outerHeight() + "px)")
      if ($(".immagine_big").width()  >= $(window).width() ) {
          $(".immagine_big").css("width", $(window).width() - 60)
          $(".immagine_big").css("height", "auto")
      }else{
        $(".immagine_big").css("height", "calc(100vh - " + $(".archivio-text").outerHeight() + "px - " + $(".indice").outerHeight() + "px)")
        $(".immagine_big").css("width", "auto")
      }
    })

    window.dispatchEvent(new Event('resize'));


  }
}


function exitFullscreen() {
  if (!$(".fullscreen").hasClass("hide")) {
    $(".fullscreen").addClass("hide")
    $(".immagine").removeClass("immagine_big")
    $(".normal > .indice_center").html(temp_text)
    $(".red").addClass("hide")
    $(".immagine").css("height", "")
    $(".immagine").css("width", "")
    $(".immagine").css("top", "")
  }
}






//////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////


//STUDIO

$(".legal-toggle").click(function() {
  $(".studio-info").css("display", "none")
  $(".legal-info").css("display", "inline-block")
})

$(".legal-info").click(function() {
  $(".studio-info").css("display", "inline-block")
  $(".legal-info").css("display", "none")
})






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// MINIATURA SCHEDA


$(document).ready(function() {
  $(document).mousemove(function() {
    if ($(".scheda_click:hover").length != 0) {
      $('.scheda_click.cursor').css('cursor', 'url("Assets/Sfondo.png"), auto');
    }
  });
});














//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
