$('.owl-carousel').owlCarousel({
  loop:true, //efeito de retornar ao inicio da lista
  margin:10, // margem entre as capas de filme
  nav:false, //setinhas de navegação
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3 // 600px ou menos, 3 filmes por vez
      },
      1000:{
          items:5 //quando tiver +1000px, ter 5 elementos na tela
      }
  }
})