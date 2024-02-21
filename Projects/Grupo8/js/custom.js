// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


$('.custom_slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slick_slider_nav',
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false
        }
    }]
})

$('.slick_slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.custom_slick_slider',
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
});

document.addEventListener("DOMContentLoaded", function () {
    function expandTopicos(topicos) {
      const topicImage = document.getElementById("img-geometry");
      const expandButton = topicImage.querySelector(".expand-button");
  
      // Adicione aqui o caminho da imagem expandida para o respectivo tópico
      const expandedImagePath = `images/geometria-plana.webp`;
  
      // Adicione aqui o texto para o respectivo tópico
      const expandedText = getExpandedText(topicos);
  
      // Substitua a imagem e adicione o texto ao expandir
      topicImage.innerHTML = `<img src="images/geometria-plana.webp" alt=""><p>Eu nao sei o que falar</p>`;
    }
  
    function getExpandedText(topicos) {
      // Adicione aqui o texto expandido para cada tópico
      if (topicos === 'mmc') {
        return "Texto expandido para MMC.";
      } else if (topicos === 'numeros') {
        return "Texto expandido para Números.";
      }
      // Adicione mais condições conforme necessário para outros tópicos
    }
  
    // ... (código anterior) ...
  });
  