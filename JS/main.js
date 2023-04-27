// 연도 자동화
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
// ScrollMagic 사용
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
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
//뉴스 위치 이동
const toNewsEl = document.querySelector('.item__name3');
toNewsEl.addEventListener('click', function (event) {
  gsap.to(window, { duration: 0.6, scrollTo: { y: 400 } });
});