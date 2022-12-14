var hash = window.location.href;
var result = hash.split('?')[1];

var open = false;

var slideIndex = 1;
var slides;
  var height;

  var xcheck;


//   $(document).ready(function() {
//     $("body").children().each(function() {
//         $(this).html($(this).html().replace(/&#8232;/g," "));
//     });
// });



  let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});



var thumbnail;

// $(document).ready(function() {
//   $(document).mousemove(function() {
//     if ($(".scheda").length != 0) {
//       console
//     }
//   });
// });


//
// $(document).ready(function() {
//
//           $(".scheda_click").hover(function(event) {
//             $(".thumbnail").addClass("visible");
//             $(".thumbnail").css("top", event.pageY);
//             $(".thumbnail").css("left", event.pageX);
//
//
//
//
//
//       })
// });
//
//
// $(document).ready(function() {
//   $(".scheda_click").mouseleave(function() {
//     console.log("false")
//     $('.thumbnail').removeClass("visible");
//   })
//   });

// $(document).ready(function() {
// $('.scheda_click').on({
//
//     mouseenter: function() {
//         console.log("true")
//
//       thumbnail.addClass("visible");
//       $(document).mousemove(function(event) {
//           thumbnail.css("top", event.pageY);
//           thumbnail.css("left", event.pageX);
//       })
//     },
//     mouseleave: function() {
//           console.log("false")
//         $('.thumbnail').removeClass("visible");
//     }
// });
// });






$(window).on('popstate', function(event) {
 if (state.scheda == '0') {
   remove_hash_from_url();
   stato_verifier();
   gen_0();
 } else {
   stato_verifier();
   // scheda_func();
   remove_scheda_from_url()
   open = false;
 }
 // console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
 //
 // history.back();
});


const state = {
  'gen': '',
  'scheda': '0'
};
var title;
var url;

var gen;
var scheda;


start();

function landingPage() {

setTimeout(function(){
  setInterval(function() {
    $(".studio_landing").addClass("studio_dis")
    $(".svalduz_landing").addClass("svladuz_dis")
  }, 500)
  setInterval(function() {
    $(".landingPage").addClass("landing_dis")
  }, 1900)

}, 300)

setInterval(function() {
$(".menu_voce").addClass("menu_dis")
},2300)

}

function noLanding(){
  $(".landingPage").addClass("hide");
}

function start() {
  if (!result) {

    state.gen = "0";
    stato_verifier();

    landingPage()



  }
  else if (result) {

      noLanding()
      state.gen = result.split('&')[0].split('=')[1]

      if (result.split('&')[1]) {
        state.scheda = result.split('&')[1].split('=')[1]
      }


      stato_verifier();

  }

}





$("#archivio-toggle").click(function() {
  if ($(window).width() >= 550) {
    archiv();
    state.gen = "Now";
    stato_verifier();

  }
  else if ($(window).width() < 549) {
    archiv();

  }
});


$(".menu-archivio > div").click(function() {
    scroll_elements()

  stato_verifier();
  // scheda_func();
  remove_scheda_from_url()


  open = false;

  archiv();
  gen = this.id.replace(/m/g, '');
  state.gen = gen;
  stato_verifier();
  gen_func();

});


$(".indietro").click(function() {
  gen_0();
});

$("#studio-toggle").click(function() {
  stud();
});


$(".arrow").click(function() {
  gen_0();
  archiv();

});


$(".scheda_click").click(function() {



  if (open==true && $(this).parent().attr("id") != scheda) {
    stato_verifier();
  }


  state.scheda = $(this).parent().attr("id");
  stato_verifier();




});








function stato_verifier() {



  if (state.gen == "0") {
    gen_0()

  }
  else if (state.gen != "0") {
      $(".menu_voce").addClass("menu_dis");
    if (state.gen == "studio") {
      stud();
    } else {
      gen = state.gen;




      url = new URL(window.location);
      url.searchParams.set('gen', state.gen);
      window.history.pushState({page: 1}, 'gen', url);
      gen_func();


      if (state.scheda == "0") {


        remove_scheda_from_url()



      }else {

        scheda = state.scheda;



        scheda_func(scheda);

        url = new URL(window.location);
        url.searchParams.set('scheda', state.scheda);
        window.history.pushState({page: 2}, 'page2', url);


      }

    }



  }



}

function scroll_elements(){
  var studioscroll = document.getElementById("studio-cont");
  studioscroll.scrollTop = 0;
  var schedescroll_1 = document.getElementById("aNow");
  schedescroll_1.scrollTop = 0;
  var schedescroll_2 = document.getElementById("a60-89");
  schedescroll_2.scrollTop = 0;
  // var schedescroll_3 = document.getElementById("a89-19");
  // schedescroll_3.scrollTop = 0;
  // var schedescroll_4 = document.getElementById("a20");
  // schedescroll_4.scrollTop = 0;
}


function gen_0() {


  scroll_elements()
  $("#archivio-menu").css("display", "inline-block")
  $("#studio-menu").css("display", "inline-block")
  $(".pos").css("line-height", "100vh")
  $(".pos").css("line-height", "calc(var(--vh, 1vh) * 100)")
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
  $(".menu-archivio > div > .sortbtn").addClass("hide")

}





function remove_hash_from_url() {
  gen = "0";
  url = window.location.href
  url = url.split('?')[0]
  window.history.pushState({}, '0', url);

}

function remove_scheda_from_url() {

  state.scheda = "0";
  scheda = "0";
  url = window.location.href
  url = url.split('&')[0]
  window.history.pushState({}, 'mezzo', url);
}


var resizeId;

$(window).resize(function() {
  // clearTimeout(resizeId);
  // resizeId = setTimeout(gen_func, 500);

  if (gen != '0') {
    gen_func()
    if (open == true) {
      $("#" + scheda).children(".scheda_hide").css("height","")
      console.log("ei")
    }else {

    }
  }

})





var scrollScheda;
var scrollSchedaOffset;


function scheda_open(scheda, callback_scheda){
  $("#" + scheda).children(".scheda_hide").removeClass("hide");
  height = $("#" + scheda).find(".scheda_hide").outerHeight();
  $("#" + scheda).children(".scheda_hide").css("height","0px");
  $(".scheda_hide").addClass("hide");
  $("#" + scheda).children(".scheda_hide").removeClass("hide");
  $("#" + scheda).children(".scheda_hide").css("height",height);
  $("#" + scheda + " > .scheda_click").addClass("blue");

  setTimeout(function(){
      callback_scheda(gen);
  },100)

}

function scheda_scroll(gen){
  if ($(window).width() < 550) {
      scrollSchedaOffset = $(".archivio-text").outerHeight() + $(".menu-archivio").outerHeight();
  } else if ($(window).width() > 550) {
    scrollSchedaOffset = $(".archivio-text").outerHeight() + $(".indice").outerHeight();
  }


  scrollScheda = document.getElementById(scheda).offsetTop - scrollSchedaOffset;
  document.getElementById("a" + gen).scrollTop = scrollScheda;

}








function scheda_func(scheda){
console.log("scheda_func")




  if (open == true) {



    $(".scheda_hide").addClass("hide")
    $("#" + scheda + " > .scheda_click").removeClass("blue")

    open = false;

    slideIndex = 1;
    $('.immagine').click();




    remove_scheda_from_url();

  } else if (open == false) {




    setTimeout(function(){

//         $("#" + scheda).css({
//     position: "absolute",
//     visibility: "hidden",
//     display: "block"
//     })
// height = $("#" + scheda).children(".scheda_hide").height();
//
//       $("#" + scheda).css({
//         position: "",
//         visibility: "",
//         display: ""
//     })


  // setTimeout(function(){
  //
  //       $("#" + scheda).children(".scheda_hide").removeClass("hide")
  //       height = $("#" + scheda).find(".scheda_hide").outerHeight();
  //       $("#" + scheda).children(".scheda_hide").css("height","0px")
  //       $(".scheda_hide").addClass("hide")
  //       $("#" + scheda).children(".scheda_hide").removeClass("hide")
  //       $("#" + scheda).children(".scheda_hide").css("height",height)
  //
  //       $("#" + scheda + " > .scheda_click").addClass("blue")
  //     },50)
  //
  //       setTimeout(function(){
  //
  //         if ($(window).width() < 550) {
  //             scrollSchedaOffset = $(".archivio-text").outerHeight() + $(".menu-archivio").outerHeight();
  //         } else if ($(window).width() > 550) {
  //           scrollSchedaOffset = $(".archivio-text").outerHeight() + $(".indice").outerHeight();
  //         }
  //
  //         // scrollSchedaOffset = $(".archivio-text").outerHeight() + $(".menu-archivio").outerHeight();
  //
  //         scrollScheda = document.getElementById(scheda).offsetTop - scrollSchedaOffset;
  //         document.getElementById("a" + gen).scrollTop = scrollScheda;
  //
  //
  //       },400)

  scheda_open(scheda, scheda_scroll);

      open = true;

    },400)

      // showSlides(1, $(".immagini"))










  }


}



function gen_func() {
  console.log("gen_func")

if (gen!="studio") {
  archiv();
}



  $(".schede").css("display", "none");


  $("#a" + gen).css("display", "block");
  $(".menu-archivio > div").removeClass("blue");
  $("#m" + gen).addClass("blue");


  if ($(window).width() >= 550) {
    $(".menu-archivio > div").removeClass("hide")
    $(".arrow").addClass("hide")
    $(".inCorso").addClass("hide")
    $(".hide_big").addClass("hide")
    $(".indice_right").addClass("hide")
    $(".indice > .center > .sortbtn").removeClass("hide")
    $(".arrow").addClass("hide")


    if (gen == "Now") {
      $(".indice.normal").addClass("hide")
      $(".indice.cantieriAperti").removeClass("hide")
      $(".indice .indice_right.blu_flash").removeClass("hide")
    } else {
      $(".indice.normal").removeClass("hide")
      $(".indice.cantieriAperti").addClass("hide")
      $(".indice .indice_right.blu_flash").addClass("hide")
    }
      txt();
      $(".schede").css("height", "calc(" + $("#archivio-cont").outerHeight() + "px - " + $(".archivio-text").outerHeight() + "px - " + $(".indice").outerHeight() + "px)")




  }
  else if ($(window).width() < 550) {

    $(".indice").addClass("hide")
    $(".menu-archivio > div").addClass("hide")
    $("#m" + gen).removeClass("hide")
    $(".arrow").removeClass("hide")
    $(".hide_small").addClass("hide")


    $(".hide_big").removeClass("hide")
    $(".inCorso").removeClass("hide")


    if (gen == "Now") {
      $(".hide_small").removeClass("hide")
    }

    $("#m" + gen + " > .sortbtn").removeClass("hide")
    setTimeout(function(){
      $(".schede").css("height", "calc(" + $("#archivio-cont").outerHeight() + "px - " + $(".archivio-text").outerHeight() + "px - " + $(".menu-archivio").outerHeight() + "px)")

    },1000)

  }




}



function archiv() {
    console.log("archiv")

  $("#archivio-cont").css("display", "inline-block")
  $(".menu-archivio").css("display", "inline-block")
  $(".archivio-hide").css("display", "inline-block")

  $(".pos").css("line-height", "16pt")
  $(".pos").addClass("padding_top")
  $("#studio-menu").css("display", "none")
  $("#studio-cont").css("display", "none")
  $(".studio-hide").css("display", "none")

 txt();


};


function stud() {
  console.log("stud")
  $("#archivio-menu").css("display", "none")
  $(".pos").css("line-height", "16pt")
  $(".pos").addClass("padding_top")
  $("#studio-cont").css("display", "inline-block")
  $(".studio-hide").css("display", "inline-block")


  url = new URL(window.location);
  url.searchParams.set('gen', 'studio');
  window.history.pushState({}, 'studio', url);

}



































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
          $('.immagine').css('cursor', 'url("Assets/NEXT-5.svg"), auto');
          xcheck = 1;
        }
        else if (currentMousePos.x < $(".immagine:hover").width() / 2) {
          $('.immagine').css('cursor', 'url("Assets/PREV-5.svg"), auto');
          xcheck = 0;
        }
      }
    });
  });
  // ELSEWHERE, your code that needs to know the mouse position without an event

});




$('.immagine').click(function() {
  console.log(".immagine.click")
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
      // console.log(slideIndex)
    }
    else if (xcheck == 0) {
      slideIndex -= 1
      showSlides(slideIndex, slides)
      // console.log(slideIndex)
    }




    // ELSEWHERE, your code that needs to know the mouse position without an event

  });
})




function showSlides(n, slides) {
      console.log("showSlides")
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
  $(".foto_n").html(slideIndex + "/" + slides.length)
}





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
    $(".sortbtn").addClass("hide_S")


  }


  if (!$(".immagine").hasClass("immagine_big")) {
    // fullScreenResize();

    $(".immagine_big").css("width", "auto")
    $(".immagine").addClass("immagine_big")
    // $(".immagine_big").css("top", "calc(" + $(".archivio-text").outerHeight() + "px + " + $(".indice").outerHeight() + "px)")
    $(".immagine_big").css("top", "15px")
    chiudiPosition();

    // $(".immagine_big").css("height", $(".schede").outerHeight() - 10)

    var resizeId;

    $(window).resize(function() {
      clearTimeout(resizeId);
      resizeId = setTimeout(fullScreenResize, 500);

    })









  }

}

function chiudiPosition() {
  if ($(window).width() <= 700) {
    $(".exitFullscreen").css("top", $(".immagine_big").height() + 15 + 15 + "px")

  } else {
    $(".exitFullscreen").css("top", " 15px")

  }

}



function fullScreenResize() {
  // $(".immagine_big").css("top", "calc(" + $(".archivio-text").outerHeight() + "px + " + $(".indice").outerHeight() + "px)")
  chiudiPosition();
    if ($(window).width() <= $(".immagine_big").width() + 60) {
        // $(".immagine_big").css("width", $(window).width() - 60)
        $(".immagine_big").css("height", "auto")
    }else{
      // $(".immagine_big").css("height", $(".schede").outerHeight() - 10)
        $(".immagine_big").css("width", "auto")
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
    $(".sortbtn").removeClass("hide_S")
  }
}






//////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////


//STUDIO

$(".legal-toggle").click(function() {
  $(".studio-info").css("display", "none")
  $(".legal-info").css("display", "inline-block")
  $(".indietro").addClass("hide")
  $(".indietro_2").removeClass("hide")
})

$(".sostenibilita-toggle").click(function() {
  $(".studio-info").css("display", "none")
  $(".sostenibilita-info").css("display", "inline-block")
  $(".indietro").addClass("hide")
  $(".indietro_2").removeClass("hide")
})

$(".legal-info").click(function() {
  $(".studio-info").css("display", "inline-block")
  $(".legal-info").css("display", "none")
  $(".indietro").removeClass("hide")
  $(".indietro_2").addClass("hide")
})

$(".sostenibilita-info").click(function() {
  $(".studio-info").css("display", "inline-block")
  $(".sostenibilità-info").css("display", "none")
  $(".indietro").removeClass("hide")
  $(".indietro_2").addClass("hide")
})


  $(".indietro_2").click(function(){
    $(document).ready(function(){
    $(".legal-info").trigger("click");
    $(".sosteniblità-info").trigger("click");
});
  })





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIATURA SCHEDA

















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// sort_by_num();

$(".alpha").click(function(){
  sort_by_name();
    $(".alpha").removeClass("opacity")
  $(".num").addClass("opacity")
    // $(".scheda_click").trigger('click');
    $(".scheda_click").click(function() {

      if (open==true && $(this).parent().attr("id") != scheda) {
        stato_verifier();
      }

      state.scheda = $(this).parent().attr("id");
      stato_verifier();




    });



})

$(".num").click(function(){
  sort_by_num()
    $(".num").removeClass("opacity")
  $(".alpha").addClass("opacity")
  // $(".scheda_click").trigger('click');
  $(".scheda_click").click(function() {

    if (open==true && $(this).parent().attr("id") != scheda) {
      stato_verifier();
    }

    state.scheda = $(this).parent().attr("id");
    stato_verifier();




  });


})


function sort_by_name(){
  var sortbyname = $("#a" + gen + "> .sortme").sort(function(a, b) {
  return $(a).find(".nome").text() > $(b).find(".nome").text() ? 1: -1;
});
  $("#a" + gen).html(sortbyname)
}

function sort_by_num(){
  var sortbynum = $("#a" + gen + "> .sortme").sort(function(a, b) {
  return $(a).find(".numero").text() > $(b).find(".numero").text() ? 1: -1;
  });
  $("#a" + gen).html(sortbynum)
}



function txt(){
  if (gen=="0" && $(window).width() < 550) {
    $(".archivio-text > span").addClass("hide")
    $(".txt_gen").removeClass("hide")
  } else if (gen=="Now") {
    $(".archivio-text > span").addClass("hide")
    $(".txt_incorso").removeClass("hide")
  } else if (gen=='60-89') {
    $(".archivio-text > span").addClass("hide")
    $(".txt_1").removeClass("hide")
  } else if (gen=='89-19') {
    $(".archivio-text > span").addClass("hide")
    $(".txt_2").removeClass("hide")
  } else if (gen=='20') {
    $(".archivio-text > span").addClass("hide")
    $(".txt_3").removeClass("hide")
  }
}



// window.dispatchEvent(new Event('resize'));


//
// window.dispatchEvent(new Event('resize'));


// state = { 'page_id': 1, 'user_id': 5 }
// title = ''
// url = 'index.html'v
//
// history.pushState(state, title, url)
//
// const url = new URL(window.location);
// url.searchParams.set('foo', 'bar');
// window.history.pushState({}, '', url);
