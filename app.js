const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navtext');

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        //Burger Animation
        burger.classList.toggle("toggle");
      });
}

navSlide();