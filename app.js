let navMob = document.querySelector(".nav-mobile-menu ");
let menu = document.querySelector(".menu")

 
 navMob.addEventListener("click", function() {
    navMob.classList.toggle("active-menu");
    if (navMob.classList.contains("active-menu")) {
        menu.classList.add("active-menu")
    }else {
        menu.classList.remove("active-menu")
    }
  })

        