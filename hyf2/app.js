const btns = document.querySelectorAll(".nav-btn");
const sliders= document.querySelectorAll(".video-slide");

var sliderNav=function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    });

    sliders.forEach((slide)=>{
        slide.classList.remove("active");
    });
    btns[manual].classList.add("active");
    sliders[manual].classList.add("active");
}

btns.forEach((btn,i)=>{
  btn.addEventListener("click",function(){
    sliderNav(i);
  });
});