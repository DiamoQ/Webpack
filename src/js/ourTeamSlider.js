let teamSlider = document.querySelector('.team__slider'),
  leftTeamSlideBtn = document.querySelector('.team__slider-left'),
  rightTeamSlideBtn = document.querySelector('.team__slider-right'),
  teamSliderInfoBlocks = document.querySelectorAll('.team__slider-block'),
  teamWrapper = document.querySelector('.team__slider-points'),
  teamSliderPoints = document.querySelectorAll('.team__slider-point'),
  teamSmallCircle = document.querySelector('.team__slider-point__small');


async function deleteTeamActiveSlide(arr, smallCircle, slideInfoBlock) {
  await arr.forEach((item, index) => {
    let mainCircle = arr[index];

    if (mainCircle.contains(smallCircle)) {
      mainCircle.removeChild(smallCircle);
    };

    if (slideInfoBlock[index].closest('.team__slider-block--active')) {
      slideInfoBlock[index].classList.remove('team__slider-block--active');
    };
  })
}

async function addTeamActiveSlide(e, arr, smallCircle, slideInfoBlock) {
  deleteTeamActiveSlide(arr, smallCircle, slideInfoBlock);
  await arr.forEach((item, index) => {
    if (e == arr[index] || arr[index].contains(e)) {
      let mainCircle = arr[index];
      mainCircle.appendChild(smallCircle);
      slideInfoBlock[index].classList.add('team__slider-block--active');
    }
  });
};

function sliderTeamBtnAction(e, arr, smallCircle, slideInfoBlock) {
  for (let index = 0; index < arr.length; index++) {

    if (e == leftTeamSlideBtn || e.closest('.team__slider-left__img')) {
      if (arr[index].contains(smallCircle)) {
        deleteTeamActiveSlide(arr, smallCircle, slideInfoBlock);
        if (index != 0) {
          index = index - 1;
        } else {
          index = arr.length - 1;
        }
        arr[index].appendChild(smallCircle);
        slideInfoBlock[index].classList.add('team__slider-block--active');
        break;
      }
    }

    if (e == rightTeamSlideBtn || e.closest('.team__slider-right__img')) {
      if (arr[index].contains(smallCircle)) {
        deleteTeamActiveSlide(arr, smallCircle, slideInfoBlock);
        if (index != arr.length - 1) {
          index = index + 1;
        } else {
          index = 0;
        }
        arr[index].appendChild(smallCircle);
        slideInfoBlock[index].classList.add('team__slider-block--active');
        break;
      }
    }
  };
};


teamWrapper.addEventListener('click', e => {
  if (e.target.classList != 'team__slider-points' && e.target.closest('.team__slider-point')) {
    addTeamActiveSlide(e.target, teamSliderPoints, teamSmallCircle, teamSliderInfoBlocks);
  }
});

teamSlider.addEventListener('click', e => {
  sliderTeamBtnAction(e.target, teamSliderPoints, teamSmallCircle, teamSliderInfoBlocks);
});