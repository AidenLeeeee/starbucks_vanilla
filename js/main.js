const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '검색어를 입력해주세요.');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // Hide Badge Element
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // gsap.to(요소, 지속시간, 옵션);
  } else {
    // Show Badge Element
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // gsap.to(요소, 지속시간, 옵션);
  }
}, 300));
// _.throttle(익명함수, 시간)