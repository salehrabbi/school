$(".annoucement").slick({
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  fade: true,
  cssEase: "linear"
});
$(".slider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true
});

$(".carousel").flickity({
  // options
  cellAlign: "left",
  contain: true
});

// $(".navbar li.dropdown").hover(
//   function() {
//     $(this)
//       .find(".dropdown-menu")
//       .stop(true, true)
//       .delay(100)
//       .fadeIn(300);
//   },
//   function() {
//     $(this)
//       .find(".dropdown-menu")
//       .stop(true, true)
//       .delay(100)
//       .fadeOut(300);
//   }
// );
