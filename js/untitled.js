$(document).ready(function(){
  $("header").hide();
  $.scrollify({
    section : ".scrolllock",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    setHeights: true,
    overflowScroll: true,
    before: function(i,panels) {
      if (i == 0){
        $("header").hide(500);
      }else {
        $("header").show(500);
      }
    },
    after: function(i,panels) {
      // var id = "#"+panels[i].attr("id");
      // $(id).find(".inner").removeClass("after-anim");
    }
  });
});
