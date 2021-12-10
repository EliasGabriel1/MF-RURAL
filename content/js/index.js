// function da config slick slide

$(document).on("ready", function () {
  $(".lazy").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".responsive").slick({
    infinite: true,
    slidesToShow: 3.9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
  });
});


// function para abrir e fechar o menu

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
