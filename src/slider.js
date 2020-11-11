const slider = (() => {
  const displaySlider = () => {
    const slider = document.createElement('ul');

    for (let i = 1; i < 6; i += 1) {
      const slide = document.createElement('li');
      slide.setAttribute('id', `slide${i}`);
      slide.classList = `slide slide${i} ${i === 1 ? 'd-block' : 'd-none'}`;
      slider.appendChild(slide);
    }

    return slider;
  };

  return {
    displaySlider,
  };
})();

export { slider };