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
