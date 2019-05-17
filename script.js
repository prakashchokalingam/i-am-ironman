let totalImages = 9; // available images

let carouselItemTemplate = (item) => {
  let wrapper = document.createElement('div');
  wrapper.classList.add('carousel-item');
  wrapper.classList.add('shadow-lg');

  let image = document.createElement('img');
  image.src = `./collections/${item}.jpg`;
  image.classList.add('img-fluid');
  image.alt = "An image of iron man";
  wrapper.appendChild(image);
  return wrapper
};

let i = 1;
let fragment = document.createDocumentFragment()
while (i <= totalImages) {
  fragment.append(carouselItemTemplate(i));
  i++;
}
fragment.children[0].classList.add('active')
document.getElementById('carousel').appendChild(fragment);

// initialize carousel
$('.carousel').carousel();

// slide events
document.querySelectorAll('.controllers').forEach((item) => {
  item.addEventListener('click', (e) => {
    let direction = e.currentTarget.dataset['slide'];
    $('.carousel').carousel(direction);
  });
});

// fullscreen
document.getElementById('fullscreen').addEventListener('click', () => {
  let elem = document.getElementById('carousel');
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
});
