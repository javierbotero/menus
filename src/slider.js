import { domQueries } from './domQueries';

const slider = (() => {
  const pictures = [
    'https://news.itu.int/wp-content/uploads/2018/07/citymobility-min-e1530886118305.jpg',
    'https://travelright.com/wp-content/uploads/2020/01/Kuala-Lumpur-Skyline-scaled-e1580202172195.jpeg',
    'https://howsouthafrica.com/wp-content/uploads/2016/02/cites.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bogot%C3%A1_panorama_viewed_from_Torre_Colpatria.jpg/800px-Bogot%C3%A1_panorama_viewed_from_Torre_Colpatria.jpg',
    'https://lp-cms-production.imgix.net/features/2013/01/Cartagena_Colombia_cs-b9a2c77a9fe3.jpg',
  ];
  const currentSlideNumber = () => {
    const li = domQueries.ul()[0].children[0].children;
    for (let i = 0; i < li.length; i += 1) {
      if (li[i].classList.contains('slide') && li[i].classList.contains('d-block')) {
        console.log(li[i]);
        return parseInt(li[i].id[li[i].id.length - 1], 10);
      }
    }
    return 0;
  };
  const moveSlide = (oldIndex, newIndex) => {
    domQueries.liSlide(oldIndex).classList.remove('d-block');
    domQueries.liSlide(oldIndex).classList.add('d-none');
    domQueries.liBullet(oldIndex).classList.remove('bg-dark', 'border-light');
    domQueries.liBullet(oldIndex).classList.add('bg-light', 'border-dark');
    domQueries.liSlide(newIndex).classList.remove('d-none');
    domQueries.liSlide(newIndex).classList.add('d-block');
    domQueries.liBullet(newIndex).classList.remove('bg-light', 'border-dark');
    domQueries.liBullet(newIndex).classList.add('bg-dark', 'border-light');
  };

  const moveLeft = () => {
    const newIndex = currentSlideNumber() - 1 < 0 ? pictures.length - 1 : currentSlideNumber() - 1;
    moveSlide(currentSlideNumber(), newIndex);
  };
  const moveRight = () => {
    const newIndex = currentSlideNumber() + 1 >= pictures.length ? 0 : currentSlideNumber() + 1;
    moveSlide(currentSlideNumber(), newIndex);
  };
  const moveSlideFromBullet = (e) => {
    const newIndex = parseInt(e.target.id[e.target.id.length - 1], 10);
    moveSlide(currentSlideNumber(), newIndex);
  };
  const displaySlider = () => {
    const slider = document.createElement('ul');
    slider.classList = 'col-7 col-md-9 float-right bg-secondary vh-100 p-0 m-0';
    const slidersContainer = document.createElement('div');
    slidersContainer.classList = 'sliders-container';
    const bullets = document.createElement('li');
    bullets.classList = 'bullets position-absolute d-flex justify-content-center';
    const leftArrow = document.createElement('li');
    leftArrow.textContent = '<';
    leftArrow.classList = 'arrows rounded-circle d-flex align-items-center justify-content-center arrow-left bg-dark border border-light text-white font-weight-bold position-absolute float-left';
    const rightArrow = document.createElement('li');
    rightArrow.textContent = '>';
    rightArrow.classList = 'arrows rounded-circle d-flex align-items-center justify-content-center arrow-right bg-dark border border-light text-white font-weight-bold position-absolute float-right';

    pictures.forEach((url, i) => {
      const slide = document.createElement('li');
      slide.style.backgroundImage = `url(${url})`;
      slide.setAttribute('id', `slide${i}`);
      slide.classList = `slide slide${i} ${i === 0 ? 'd-block' : 'd-none'} w-100 h-100 rounded`;
      slidersContainer.appendChild(slide);
      const bullet = document.createElement('div');
      bullet.addEventListener('click', (e) => { moveSlideFromBullet(e); });
      bullet.setAttribute('id', `bullet${i}`);
      bullet.className = `bullet border ${i === 0 ? 'bg-dark border-light' : 'bg-light border-dark'} rounded-circle m-1`;
      bullets.appendChild(bullet);
    });

    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);

    slidersContainer.appendChild(bullets);
    slidersContainer.appendChild(leftArrow);
    slidersContainer.appendChild(rightArrow);
    slider.appendChild(slidersContainer);
    return slider;
  };

  return {
    displaySlider,
  };
})();

export { slider };