$(document).ready(function() {
  // $('.display-list').hover(function(){
  //   $('.hidden-list').fadeToggle();
  // })
  // $(".skitter-large").skitter();
  $('.timer').countTo();
  $('.your-class').slick({
    slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });
  $('.slider').slick({
    slidesToShow: 1,
   slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });
  var owl = $('.owl2');
owl.owlCarousel({
    items:4,
    lazyLoad:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.owl').owlCarousel({
  loop:true,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  },
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true
});
$('.owl3').owlCarousel({
  rtl:true,
  loop:true,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  },
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true
});
$('.play').on('click',function(){
  owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
  owl.trigger('stop.owl.autoplay')
})
$('.loop').owlCarousel({
  center: true,
  autoplay:false,
  items:2,
   loop:true,
  margin:10,
  responsive:{
      600:{
          items:4
      }
  }
});

new WOW().init();

$('.display-para').click(function(){
  $('.hidden-para').fadeToggle();
});

$('.display-para2').click(function(){
  $('.hidden-para2').fadeToggle();
});

$('.display-para4').click(function(){
  $('.hidden-para4').fadeToggle();
});

$('.display-para3').click(function(){
  $('.hidden-para3').fadeToggle();
});

$('.display-para5').click(function(){
  $('.hidden-para5').fadeToggle();
});

$('.display-para6').click(function(){
  $('.hidden-para6').fadeToggle();
});

});



var div1=document.getElementById('lighter');
var wclose=document.getElementById('wclose');
wclose.addEventListener('click',function(){
  div1.classList.add("show");
})
div1.addEventListener("click",function(e){
  if(e.target==div1){
     div1.classList.add("show");
  }
})

var myNav = document.getElementById("nav3"),
    myDiv = document.getElementById("nav2");
    // mya=document.getElementsByClassName('a');

window.onscroll = function say() {
    "use strict";
    if (window.scrollY <= myDiv.offsetHeight) {
        myNav.classList.remove("pos");
        // for(var i=0;i<this.mya.length;i++)
        // mya[i].style.color="rgb(126, 10, 161)";
    }else if (window.scrollY > myDiv.offsetHeight) {
        myNav.classList.add("pos");
        // for(var i=0;i<this.mya.length;i++)
        // mya[i].style.color="white";
    }  
};
var allimage=document.getElementsByClassName('owl-img');
var all=document.getElementsByClassName('front2');
var light=document.getElementById('light');
var lightItem=document.getElementById('light-item');
var prev=document.getElementById('prev');
var next=document.getElementById('next');
var wclose2=document.getElementById('wclose');
var myarr=[];
var myindex=0;
// for(var j=0;j<allimage.length;j++){
for(var i=0;i<allimage.length;i++){
   myarr.push(allimage[i]);  
   allimage[i].addEventListener('click',function(e){
    console.log(e);
light.classList.remove("show2");
var imgsrc=e.target.src;
lightItem.style.backgroundImage="url("+imgsrc+")";
myindex=myarr.indexOf(e.target);
})
}
next.addEventListener('click',function(){
   moveRight();
})
function moveRight(){
   myindex++;
   if(myindex==myarr.length-1){myindex=0}
   lightItem.style.backgroundImage="url("+myarr[myindex].src+")";
}
prev.addEventListener('click',function(){
   moveLeft()
})
   function moveLeft(){
      myindex--;
      if(myindex<0){myindex=myarr.length-1}
      lightItem.style.backgroundImage="url("+myarr[myindex].src+")";
   }
   wclose2.addEventListener('click',function(){
      light.classList.add("show2");
   })
   //لما اضغط على زرار معين فى الكي بورد يعمل حااجة
   document.addEventListener("keydown",function(e){
      if(e.keyCode==27){ //لما يدوس على الزرار اللى اسمة escواللى رقمة 27 يخفى الكلاس
         light.classList.add("show2"); 
      }else if(e.keyCode==39){
         moveRight();
      }else if(e.keyCode==37){
         moveLeft();
      }
   })
   light.addEventListener("click",function(e){
      if(e.target==light){
         light.classList.add("show2");
      }
   })



 