$(".contatti").click(function() {




  if ($(".contatti").hasClass("button_cont_1")) {
    $(".contatti").removeClass("button_cont_1");
    $(".contatti").addClass("button_cont_2");
    $(".main_content").css("display", "none")
    $(".side").css("display", "inline-block")
  } else if ($(".contatti").hasClass("button_cont_2")) {
    $(".contatti").removeClass("button_cont_2");
    $(".contatti").addClass("button_cont_1");
    $(".main_content").css("display", "inline-block")
    $(".side").css("display", "none")
  }
})

if ($(window).width() >= 1200) {
  $(".main").css("margin-bottom", $(".side").height())
  $(".contact").css("height", $(".show").height() + 60)
}

$(window).resize(function() {
  if ($(window).width() >= 1200) {
    $(".main").css("margin-bottom", $(".side").height())
    $(".contact").css("height", $(".show").height() + 60)
  } else if ($(window).width() < 1200) {
    $(".main").css("margin-bottom", "0")
    $(".contact").css("height", "auto")
  }

  if ($(window).width() > 540) {
    $(".contatti").removeClass("button_cont_2");
    $(".contatti").addClass("button_cont_1");
    $(".main_content").css("display", "inline-block")
    $(".side").css("display", "block")
  }

  if ($(window).width() < 540) {
    $(".side").css("display", "none")
  }
});
