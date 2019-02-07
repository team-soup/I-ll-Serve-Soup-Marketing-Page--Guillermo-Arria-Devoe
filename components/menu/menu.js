const toggleMenu = (e) => {
    // Toggle the "menu--open" class on your menu refence.
    $(".menu").animate({width:'toggle'},350); // STRETCH
    e.stopPropagation();
  }
  
  // Start Here: Create a reference to the ".menu" class
  const menu = document.querySelector('.menu');
  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector('.menu-button');
  // Using your menuButton reference, add a click handler that calls toggleMenu
  menuButton.addEventListener('click', toggleMenu)
  
  $(document).click(function(){
    $(".menu").hide();
  });