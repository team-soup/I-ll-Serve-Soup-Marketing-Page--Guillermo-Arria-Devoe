const toggleMenu = (e) => {
    $(".menu").animate({
      height:'toggle',
      opacity: 1,
    },450);
    e.stopPropagation();
  }
  
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', toggleMenu)
  
  $(document).click(function(){
    $(".menu").animate({height:'hide'},450);
  });