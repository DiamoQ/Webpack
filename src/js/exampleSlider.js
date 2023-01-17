let example = document.querySelector('.example__container'),
  repairTypes = document.querySelectorAll('.example__types-name'),
  exampleBlock = document.querySelector('.example__types'),
  sliderWraps = document.querySelectorAll('.example__slider-wrapper'),
  activeWrap = document.querySelector('.example__slider-wrapper--active'),
  slideInfoBlock = activeWrap.querySelectorAll('.example__info-work'),
  repairViews = activeWrap.querySelectorAll('.example__slider-wrapper--active .example__area-item'),
  smallCircle = activeWrap.querySelector('.choice__circle-small'),
  leftSlideBtn = activeWrap.querySelector('.example__slider-left'),
  rightSlideBtn = activeWrap.querySelector('.example__slider-right');


function deleteActiveClass(arr, activeExampleClass, slidArr, activeSliderClass) {
  arr.forEach((item, index) => {
    if (item.classList.contains(activeExampleClass)) {
      item.classList.remove(activeExampleClass);
      slidArr[index].classList.remove(activeSliderClass);
    }
  });
};

function addActiveClass(arr, e, activeExampleClass, slidArr, activeSliderClass) {
  for (let i = 0; i < arr.length; i++) {
    if (e == arr[i] && !arr[i].closest(activeExampleClass)) {
      deleteActiveClass(arr, activeExampleClass, slidArr, activeSliderClass);
      e.classList.add(activeExampleClass);
      slidArr[i].classList.add(activeSliderClass);
    };
  };
};

exampleBlock.addEventListener('click', e => {
  if (e.target.closest('.example__types-name')) {
    addActiveClass(repairTypes, e.target, 'example__types-name--active', sliderWraps, 'example__slider-wrapper--active');
  }
});

async function deleteActiveSlide(arr, smallCircle, slideInfoBlock) {
  await arr.forEach((item, index) => {
    let mainCircle = arr[index].querySelector('.choice__circle'),
      activeText = arr[index].querySelector('.choice__text');

    if (mainCircle.contains(smallCircle)) {
      mainCircle.removeChild(smallCircle);
      activeText.classList.remove('choice__text--active');
    };
    if (slideInfoBlock[index].closest('.example__info-work--active')) {
      slideInfoBlock[index].classList.remove('example__info-work--active');
    };
  })
}

async function addActiveSlide(e, arr, smallCircle, slideInfoBlock) {
  deleteActiveSlide(arr, smallCircle, slideInfoBlock);
  await arr.forEach((item, index) => {
    if (e == arr[index] || arr[index].contains(e)) {
      let mainCircle = arr[index].querySelector('.choice__circle'),
        activeText = arr[index].querySelector('.choice__text');
      mainCircle.appendChild(smallCircle);
      activeText.classList.add('choice__text--active');
      slideInfoBlock[index].classList.add('example__info-work--active');
    }
  });
};

example.addEventListener('click', e => {
  if (e.target.classList != 'example__area-list' && e.target.closest('.example__area-item')) {
    addActiveSlide(e.target, repairViews, smallCircle, slideInfoBlock);
  }
});

function sliderBtnAction(e, arr, smallCircle, slideInfoBlock, wrap) {
  for (let index = 0; index < arr.length; index++) {
    let mainCircle = wrap.querySelectorAll('.choice__circle'),
      activeText = wrap.querySelectorAll('.choice__text');

    if (e == leftSlideBtn || e.closest('.example__slider-left')) {
      if (mainCircle[index].contains(smallCircle)) {
        deleteActiveSlide(arr, smallCircle, slideInfoBlock, activeText);
        if (index != 0) {
          index = index - 1;
        } else {
          index = mainCircle.length - 1;
        }
        mainCircle[index].appendChild(smallCircle);
        activeText[index].classList.add('choice__text--active');
        slideInfoBlock[index].classList.add('example__info-work--active');
        break;
      }
    }

    if (e == rightSlideBtn || e.closest('.example__slider-right')) {
      if (mainCircle[index].contains(smallCircle)) {
        deleteActiveSlide(arr, smallCircle, slideInfoBlock, activeText);
        if (index != arr.length - 1) {
          index = index + 1;
        } else {
          index = 0;
        }
        mainCircle[index].appendChild(smallCircle);
        activeText[index].classList.add('choice__text--active');
        slideInfoBlock[index].classList.add('example__info-work--active');
        break;
      }
    }
  };
};

example.addEventListener('click', e => {
  for (let index = 0; index < sliderWraps.length; index++) {
    if (sliderWraps[index].closest('.example__slider-wrapper--active')) {
      activeWrap = sliderWraps[index];
      activeWrap.classList.add('example__slider-wrapper--active')
      break;
    }
  }
  slideInfoBlock = activeWrap.querySelectorAll('.example__info-work'),
    repairViews = activeWrap.querySelectorAll('.example__slider-wrapper--active .example__area-item'),
    circleList = activeWrap.querySelector('.example__area-list'),
    smallCircle = activeWrap.querySelector('.choice__circle-small'),
    leftSlideBtn = activeWrap.querySelector('.example__slider-left'),
    rightSlideBtn = activeWrap.querySelector('.example__slider-right');
  sliderBtnAction(e.target, repairViews, smallCircle, slideInfoBlock, activeWrap);
});

example.addEventListener('click', e => {
  if (e.target.closest('.example__info-photos__img')) {
    let wrap = example.querySelector('.example__slider-wrapper--active .example__info-main__wrapper'),
      wrapImg = wrap.querySelector('.example__slider-wrapper--active .example__info-main__img'),
      img = e.target.cloneNode(true);

    img.classList.add('example__info-main__img');

    wrap.removeChild(wrapImg);
    wrap.appendChild(img);
  }
});
