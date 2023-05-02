// 연도 자동화
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
// ScrollMagic 사용
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .   Scene({
      triggerElement: spyEl,
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
// 팝업
window.onload = function () {
  openPopup();
};

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
//뉴스 위치 이동 // 몰라서 검색함 //
const toNewsEl = document.querySelector('.item__name3');
toNewsEl.addEventListener('click', function (event) {
  event.preventDefault();
  $('html,body').animate({ scrollTop: $(this.hash).offset().top - 150}, 500);
});
// 유튜브 위치 이동
const toYTEl = document.querySelector('.item__name4');
toYTEl.addEventListener('click', function (event) {
  event.preventDefault();
  $('html,body').animate({ scrollTop: $(this.hash).offset().top - 150}, 500);
});

//FADE IN WITH SILDE IN  // 몰라서 검색함 // 
$(document).ready(function() {
  $(window).scroll(function() {
    var delay = 500;
    var i = 1;
    $('.cl-menu').each(function() {
      var $element = $(this);
      var bottom_of_element = $element.offset().top + $element.outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        setTimeout(function() {
          $element.animate({'opacity': '1', 'margin-left': '0px'}, 1000);
        }, delay * i);
        i++;
      }
    });
  });
});

//모바일
const mobileMenu = document.querySelector('.mm-menu');
const screenBlock = document.querySelector('.screen-block');
function viewMenu() {
  if (mobileMenu.style.display == 'block') {
    mobileMenu.style.display = 'none'
  } else {
    mobileMenu.style.display = 'block'
  };  
};

const wallBtn1 = document.querySelector('.wallbtn1')
const wallBtn2 = document.querySelector('.wallbtn2')
const wallBtn3 = document.querySelector('.wallbtn3')
const wallBtn4 = document.querySelector('.wallbtn4')
const wall1 = document.querySelector('.wall1')
const wall2 = document.querySelector('.wall2')
const wall3 = document.querySelector('.wall3')
const wall4 = document.querySelector('.wall4')
wallBtn1.addEventListener('click', function() {
    wall1.classList.toggle('hidden');
  });
