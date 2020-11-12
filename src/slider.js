const slider = (() => {
  const displaySlider = () => {
    const slider = document.createElement('ul');
    slider.classList = 'col-7 col-md-9 float-right bg-secondary vh-100 p-0 m-0';
    const bullets = document.createElement('li');
    bullets.classList = 'bullets position-absolute d-flex justify-content-center w-100';
    const leftArrow = document.createElement('li');
    leftArrow.textContent = '<';
    leftArrow.classList = 'bg-secondary text-white font-weight-bold float-left';
    const rightArrow = document.createElement('li');
    rightArrow.textContent = '>';
    leftArrow.classList = 'bg-secondary text-white font-weight-bold float-right';

    for (let i = 1; i < 6; i += 1) {
      const slide = document.createElement('li');
      slide.setAttribute('id', `slide${i}`);
      slide.classList = `slide slide${i} ${i === 1 ? 'd-block' : 'd-none'} w-100 vh-100 rounded`;
      slider.appendChild(slide);
      const bullet = document.createElement('div');
      bullet.className = 'bullet bg-light rounded-circle m-1';
      bullets.appendChild(bullet);
    }

    slider.appendChild(bullets);
    return slider;
  };

  return {
    displaySlider,
  };
})();

export { slider };