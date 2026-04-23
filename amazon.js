
  document.getElementById("back").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });



  $(document).ready(function () {
    const images = [
      "img/kitch.PNG",
      "img/fashion.PNG",
      "img/toys.PNG",
      "img/game.PNG"
    ];
    let currentIndex = 0;

    function updateImage() {
      $("#mainImage").attr("src", images[currentIndex]);
    }

    $(".default-ltr-cache-afh1q5").click(function () {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });

    $(".left").click(function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });

    // Optional: Initialize with the first image
    updateImage();
  });

// scroll1

  $(document).ready(function () {
  const scrollAmount = 260; 
  $(".default-cache-afh1q5").click(function () {
    $(".scroll-container").animate({
      scrollLeft: "+=" + scrollAmount
    }, 400);
  });
  $(".lef").click(function () {
    $(".scroll-container").animate({
      scrollLeft: "-=" + scrollAmount
    }, 400);
  });
});


// 2nd scroll
$(document).ready(function () {
  const scrollAmount = 260; // amount to scroll on each click

  $(".default-afh1q5").click(function () {
    $(".scrollcontainer").animate({
      scrollLeft: "+=" + scrollAmount
    }, 400);
  });
  $(".le").click(function () {
    $(".scrollcontainer").animate({
      scrollLeft: "-=" + scrollAmount
    }, 400);
  });
});

// 3rd scroll
$(document).ready(function(){
const scrollAmount=260;
$(".defaultafh1q5").click(function(){
$(".scrollbar").animate({
  scrollLeft : "+=" + scrollAmount
},400);
});
 $(".let").click(function () {
    $(".scrollbar").animate({
      scrollLeft: "-=" + scrollAmount
    }, 400);
  });
            
});
// 4th scroll
$(document).ready(function () {
  const scrollAmount = 260; // amount to scroll on each click

  $(".defar").click(function () {
    $(".scroll").animate({
      scrollLeft: "+=" + scrollAmount
    }, 400);
  });
  $(".it").click(function () {
    $(".scroll").animate({
      scrollLeft: "-=" + scrollAmount
    }, 400);
  });
});

//5th scroll
$(document).ready(function(){
const scrollAmount=260;
$(".dfar").click(function(){
$(".scrollthat").animate({
  scrollLeft : "+=" + scrollAmount
},400);
});
 $(".onemore").click(function () {
    $(".scrollthat").animate({
      scrollLeft: "-=" + scrollAmount
    }, 400);
  });
            
});
// 6th scroll
$(document).ready(function(){
const scrollAmount=260;
$(".defr").click(function(){
$(".scrollimg").animate({
  scrollLeft : "+=" + scrollAmount
},400);
});
 $(".home").click(function () {
    $(".scrollimg").animate({
      scrollLeft: "-=" + scrollAmount
    }, 400);
  });        
});
// 7th scroll
$(document).ready(function(){
const scrollAmount=260;
$(".def").click(function(){
$(".scrolliamges").animate({
  scrollLeft : "+=" + scrollAmount
},400);
});
 $(".hom").click(function () {
    $(".scrolliamges").animate({
      scrollLeft: "-=" + scrollAmount
    }, 400);
  });
            
});
// 8th scroll
$(document).ready(function(){
const scrollAmount=260;
$(".dfr").click(function(){
$(".scrollimgg").animate({
  scrollLeft : "+=" + scrollAmount
},400);
});
 $(".hme").click(function () {
    $(".scrollimgg").animate({
      scrollLeft: "-=" + scrollAmount
    }, 400);
  });
            
});


