let appl = document.querySelector(".application");
let cars_but = document.querySelector(".cars_buttons-link");
let bodyAfter = document.querySelector("body");
let applBox = document.querySelector(".application_box");
let closebut = document.querySelector(".application_close");
let a = 0;

function playMenu() {
 appl.classList.remove("active");
 cars_but.classList.remove("active");
 bodyAfter.classList.remove("active");
 bodyAfter.style.zIndex="-1000";
 bodyAfter.style.overflow="inherit";
 a--;
}
cars_but.onclick = () => {
 if (a == 0) {
  appl.classList.add("active");
  cars_but.classList.add("active");
  bodyAfter.classList.add("active");
  bodyAfter.style.overflow="hidden";  
  bodyAfter.style.zIndex="-900";
  applBox.style.zIndex="1000";
  a++;
 } closebut.onclick = () =>  {
  playMenu();
 }
}

/**** slide */
<!-- Initialize Swiper -->

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/***anual */

var btns = document.getElementsByClassName('anual_question');
var par = document.getElementsByClassName('anual_answer');
var box = document.getElementsByClassName('anual_box');
let b = [0, 1, 2, 3, 4, 5]
btns[0].onclick = function() {
  par[0].classList.add("sees");
  par[1].classList.remove("sees");
  par[2].classList.remove("sees");
  par[3].classList.remove("sees");
  par[4].classList.remove("sees");
  par[5].classList.remove("sees");
  box[0].classList.add("larg");
  box[1].classList.remove("larg");
  box[2].classList.remove("larg");
  box[3].classList.remove("larg");
  box[4].classList.remove("larg");
  box[5].classList.remove("larg");
}
btns[1].onclick = function() {
 par[0].classList.remove("sees");
 par[1].classList.add("sees");
 par[2].classList.remove("sees");
 par[3].classList.remove("sees");
 par[4].classList.remove("sees");
 par[5].classList.remove("sees");
 box[0].classList.remove("larg");
 box[1].classList.add("larg");
 box[2].classList.remove("larg");
 box[3].classList.remove("larg");
 box[4].classList.remove("larg");
 box[5].classList.remove("larg");
}
btns[2].onclick = function() {
 par[0].classList.remove("sees");
 par[1].classList.remove("sees");
 par[2].classList.add("sees");
 par[3].classList.remove("sees");
 par[4].classList.remove("sees");
 par[5].classList.remove("sees");
 box[0].classList.remove("larg");
 box[1].classList.remove("larg");
 box[2].classList.add("larg");
 box[3].classList.remove("larg");
 box[4].classList.remove("larg");
 box[5].classList.remove("larg");
}
btns[3].onclick = function() {
 par[0].classList.remove("sees");
 par[1].classList.remove("sees");
 par[2].classList.remove("sees");
 par[3].classList.add("sees");
 par[4].classList.remove("sees");
 par[5].classList.remove("sees");
 box[0].classList.remove("larg");
 box[1].classList.remove("larg");
 box[2].classList.remove("larg");
 box[3].classList.add("larg");
 box[4].classList.remove("larg");
 box[5].classList.remove("larg");
}
btns[4].onclick = function() {
 par[0].classList.remove("sees");
 par[1].classList.remove("sees");
 par[2].classList.remove("sees");
 par[3].classList.remove("sees");
 par[4].classList.add("sees");
 par[5].classList.remove("sees");
 box[0].classList.remove("larg");
 box[1].classList.remove("larg");
 box[2].classList.remove("larg");
 box[3].classList.remove("larg");
 box[4].classList.add("larg");
 box[5].classList.remove("larg");
}
btns[5].onclick = function() {
 par[0].classList.remove("sees");
 par[1].classList.remove("sees");
 par[2].classList.remove("sees");
 par[3].classList.remove("sees");
 par[4].classList.remove("sees");
 par[5].classList.add("sees");
 box[0].classList.remove("larg");
 box[1].classList.remove("larg");
 box[2].classList.remove("larg");
 box[3].classList.remove("larg");
 box[4].classList.remove("larg");
 box[5].classList.add("larg");
}

// burger animation
const burgerImg = document.querySelector(".burger_img");
const burgerImgClose = document.querySelector(".burger_img__close");
const manuList = document.querySelector(".menu__list");

burgerImg.onclick = () => {
    console.log("yes")
    manuList.classList.add("active");
    manuList.classList.remove("close");
    manuList.style.display = "flex"; 
    burgerImg.style.display = "none";
    burgerImgClose.style.display = "flex";
}

burgerImgClose.onclick = () => {
    manuList.classList.add("close");
    manuList.classList.remove("active");
    manuList.style.display = "none";   
    burgerImgClose.style.display = "none";
    burgerImg.style.display = "flex";
  }
