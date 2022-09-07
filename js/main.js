const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

toTopEl.classList.add('hide');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // Hide Badge Element
    toTopEl.classList.remove('hide');
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // Show To-Top Button
    gsap.to(toTopEl, .2, {
      x: 0
    });
    // gsap.to(요소, 지속시간, 옵션);
  } else {
    // Show Badge Element
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // Hide To-Top Button
    gsap.to(toTopEl, .2, {
      x: 100
    });
    // gsap.to(요소, 지속시간, 옵션);
  }
}, 300));
// _.throttle(익명함수, 시간)



toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});



const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
})



new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',  // 방향
  autoplay: true,         // 자동 전환 여부
  loop: true,             // 무한 반복 재생 여부
});
// new Swiper(선택자, 옵션) ---> 클래스 객체 생성



new Swiper('.promotion .swiper-container', {
  direction: 'horizontal',  // 방향 (기본값)
  slidesPerView: 3,         // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10,         // 각 슬라이드 사이 여백 (px)
  centeredSlides: true,     // 1번 슬라이드가 가운데 위치
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',  // 페이지 번호 적용할 요소 선택자
    clickable: true                       // 사용자의 페이지 번호 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',    // 이전 슬라이드 버튼 요소 선택자
    nextEl: '.promotion .swiper-next'     // 다음 슬라이드 버튼 요소 선택자
  }
});



new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.notice-line .toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // Hide!
    promotionEl.classList.add('hide');
  } else {
    // Show!
    promotionEl.classList.remove('hide');
  }
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}



function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,        // y축 아래로 sizepx 이동
    repeat: -1,   // 무한 반복
    yoyo: true,    // 이전에 수행한 애니메이션 거꾸로 수행
    ease: Power1.easeInOut,   // ease-in-out
    delay: random(0, delay)   // 애니메이션의 지연 시간
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 17);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,    // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8,          // Viewport(0~1) 기준으로 trigger 수행할 위치 지정
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});