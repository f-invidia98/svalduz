
var hash = window.location.hash.substr(1);
var result= hash.split('&');



$("#archivio-toggle").click(function(){
  archiv();
});

function archiv() {
  $("#studio-menu").css("display", "none")
  $(".pos").css("line-height", "16pt")
  $(".pos").addClass("padding_top")
  $("#archivio-cont").css("display", "inline-block")
  $(".archivio-hide").css("display", "inline-block")
  $(".menu-archivio").css("display", "inline-block")
};


$("#studio-toggle").click(function(){
  $("#archivio-menu").css("display", "none")
  $(".pos").css("line-height", "16pt")
  $(".pos").addClass("padding_top")
  $("#studio-cont").css("display", "inline-block")
  $(".studio-hide").css("display", "inline-block")

})

$(".indietro").click(function(){
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
  $(".immagine").addClass("hide")
  $(".menu-archivio > div").removeClass("blue")
  $(".menu-archivio > div").removeClass("hide")
  $(".arrow").addClass("hide")

})

$(".legal-toggle").click(function(){
  $(".studio-info").css("display", "none")
  $(".legal-info").css("display", "inline-block")
})

$(".legal-info").click(function(){
  $(".studio-info").css("display", "inline-block")
  $(".legal-info").css("display", "none")
})

var stato = 0;

$(".scheda").click(function(){
  if (!$(this).children(".immagine").hasClass("hide")) {
    $(this).children(".immagine").addClass("hide")
    remove_hash_from_url()
    window.location = "#" + clas;
  } else if ($(this).children(".immagine").hasClass("hide")) {
    $(".immagine").addClass("hide")
    $(this).children(".immagine").removeClass("hide")
      window.location = "#" + clas + "&" + this.id;
      hash = window.location.hash.substr(1);
      result = hash.split('&')
  }
});

var clas;
var id;

$(".menu-archivio > div").click(function(){
  clas = this.id.replace(/m/g, 'a');
  getLink(clas);
})

if (result!=0) {
  clas = result[0];
  getLink(result[0], result[1]);
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
  }else if ($(window).width() <= 551) {
    $(".indice").css("display", "none")
    $(".menu-archivio > div").addClass("hide")
    var id2 = result[0].replace(/a/g, '');
    $("#m" + id2).removeClass("hide")
    $(".arrow").removeClass("hide")
  }

})

function getLink(anno, num, id){



  archiv();
  $(".schede").css("display", "none")
  $("#" + anno).css("display", "block")
  $(".immagine").addClass("hide")
  id = anno.replace(/a/g, '');
  $(".menu-archivio > div").removeClass("blue")
  $("#m" + id).addClass("blue")

  if ($(window).width() > 550) {
    $(".indice").css("display", "inline-block")
    $(".menu-archivio > div").removeClass("hide")
    $(".arrow").addClass("hide")
  }else if ($(window).width() <= 551) {
    $(".indice").css("display", "none")
    $(".menu-archivio > div").addClass("hide")
    $("#m" + id).removeClass("hide")
    $(".arrow").removeClass("hide")
  }


  $(".arrow").click(function(){
    remove_hash_from_url()
    $(".menu-archivio > div").removeClass("hide")
    $(".arrow").addClass("hide")
    $(".schede").css("display", "none")
  });





  window.location = "#" + anno;

  if (num!=null) {
    $(".immagine").addClass("hide")
    $("#" + num).children(".immagine").removeClass("hide")
    window.location ="#" + anno + "&" + num;
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
