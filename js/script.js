console.log("hello world");


const menuHamburger = document.querySelector(".header-right > a")


menuHamburger.addEventListener("click", function() {
  
  
  const clickMenu = document.querySelector (".hamburger-menu");
  clickMenu.classList.add("active")

});


const closeHamburger = document.querySelector(".close");


closeHamburger.addEventListener("click", function() {

  const clickMenu = document.querySelector (".hamburger-menu");
  clickMenu.classList.remove("active");
})
