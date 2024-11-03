// SplideJS
import Splide from '@splidejs/splide';

var elms = document.getElementsByClassName('services-image-carousel');

for (var i = 0; i < elms.length; i++) {
  new Splide(elms[i], {
    arrows: false,
  }).mount();
}
