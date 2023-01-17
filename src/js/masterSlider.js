let masterWrapper = document.querySelector('.master__container'),
  masterSlider = document.querySelector('.master__slider'),
  masterSlides = document.querySelectorAll('.master__slider-item'),
  masterLeftWindow = document.querySelector('.master__slider-item--left'),
  masterMainWindow = document.querySelector('.master__slider-item--active'),
  masterRightWindow = document.querySelector('.master__slider-item--right'),
  masterLeftSliderBtn = document.querySelector('.master__slider-left'),
  masterRightSliderBtn = document.querySelector('.master__slider-right'),
  masterPointsWrapper = document.querySelectorAll('.master__slider-points'),
  masterPoint = document.querySelectorAll('.master__slider-point'),
  masterSmallPoint = document.querySelector('.master__slider-point__small'),
  masterPhotos = document.querySelectorAll('.master__slider-photo');

async function deleteMasterActiveSlide(arr, smallCircle, slideInfoBlock, leftInfoBlock, rightInfoBlock) {
  await arr.forEach((item, index) => {
    let mainCircle = arr[index];

    slideInfoBlock.replaceChildren();
    leftInfoBlock.replaceChildren();
    rightInfoBlock.replaceChildren();

    if (mainCircle.contains(smallCircle)) {
      mainCircle.removeChild(smallCircle);
    };
  })
};

async function addMasterActiveSlide(e, arr, smallCircle, slideInfoBlock, leftInfoBlock, rightInfoBlock, image) {
  deleteMasterActiveSlide(arr, smallCircle, slideInfoBlock, leftInfoBlock, rightInfoBlock);
  await arr.forEach((item, index) => {
    if (e == arr[index] || arr[index].contains(e)) {
      let mainCircle = arr[index];
    
      mainCircle.appendChild(smallCircle);
      slideInfoBlock.appendChild(image[index]);
      leftInfoBlock.appendChild(index != 0 ? image[index - 1] : image[arr.length - 1]);
      rightInfoBlock.appendChild(index != arr.length - 1 ? image[index + 1] : image[1]);
    }
  });
};

function sliderMasterBtnAction(e, arr, smallCircle, slideInfoBlock, leftInfoBlock, rightInfoBlock, image) {
  for (let index = 0; index < arr.length; index++) {

    if (e == masterLeftSliderBtn || e.closest('.master__slider-left__img')) {
      if (arr[index].contains(smallCircle)) {
        deleteMasterActiveSlide(arr, smallCircle, slideInfoBlock, leftInfoBlock, rightInfoBlock);
        if (index != 0) {
          index = index - 1;
        } else {
          index = arr.length - 1;
        }
        arr[index].appendChild(smallCircle);
        slideInfoBlock.appendChild(image[index]);
        leftInfoBlock.appendChild(index != 0 ? image[index - 1] : image[arr.length - 1]);
        rightInfoBlock.appendChild(index != arr.length - 1 ? image[index + 1] : image[1]);
        break;
      }
    }

    if (e == masterRightSliderBtn || e.closest('.master__slider-right__img')) {
      if (arr[index].contains(smallCircle)) {
        deleteMasterActiveSlide(arr, smallCircle, slideInfoBlock, leftInfoBlock, rightInfoBlock);
        if (index != arr.length - 1) {
          index = index + 1;
        } else {
          index = 0;
        }
        arr[index].appendChild(smallCircle);
        slideInfoBlock.appendChild(image[index]);
        leftInfoBlock.appendChild(index != 0 ? image[index - 1] : image[arr.length - 1]);
        rightInfoBlock.appendChild(index != arr.length - 1 ? image[index + 1] : image[1]);
        break;
      }
    }
  };
};

masterWrapper.addEventListener('click', e => {
  if (e.target.classList != 'master__slider-points' && e.target.closest('.master__slider-point')) {
    addMasterActiveSlide(e.target, masterPoint, masterSmallPoint, masterMainWindow, masterLeftWindow, masterRightWindow, masterPhotos);
  }
});

masterSlider.addEventListener('click', e => {
  sliderMasterBtnAction(e.target, masterPoint, masterSmallPoint, masterMainWindow, masterLeftWindow, masterRightWindow, masterPhotos);
});