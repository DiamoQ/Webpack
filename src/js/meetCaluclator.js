let input = document.querySelector('.meet__calculator-range__line'),
  calculatorDays = document.querySelector('#days'),
  calculatorSale = document.querySelector('#sale'),
  blockResult = 12,
  buildResult = 10,
  roomsResult = 10,
  inputResult = +input.value;

function resultSale(blockResult, buildResult, roomsResult, inputResult) {
  let total = +`${blockResult}` + +`${buildResult}` * +`${roomsResult}` * +`${inputResult}`;
  return calculatorSale.textContent = `до ${total} руб`;
}

function resultDays(blockResult, buildResult, roomsResult, inputResult) {
  let total = +`${blockResult}` + +`${buildResult}` - +`${roomsResult}` + +`${inputResult}`;
  return calculatorDays.textContent = `до ${total} дней`;
};

//slider

const slider = document.querySelector('.meet__calculator-range__line'),
  progress = document.querySelector('.meet__calculator-range__progress'),
  value = document.querySelector('.meet__calculator-range__value'),
  list = document.querySelector('.meet__calculator-type__list');

slider.oninput = function () {
  progress.style.width = `${(this.value - 20) / 2}%`;
};

value.textContent = `${slider.value}`;

slider.addEventListener('mousemove', e => {
  value.textContent = `${slider.value}`;
  resultSale(blockResult, buildResult, roomsResult, slider.value);
  resultDays(blockResult, buildResult, roomsResult, slider.value);
});


list.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.className == '.meet__calculator-item') {
    e.target.appendChild(createCircle());
  }
});

function createCircle() {
  let div = document.createElement('div');
  div.classList.add('meet__calculator-circle__small');
  return div;
};

//points 

const calculatorBlock = document.querySelector('.meet__calculator-type__block'),
  calculatorBuild = document.querySelector('.meet__calculator-build'),
  calculatorRooms = document.querySelector('.meet__calculator-rooms'),
  circleBlock = calculatorBlock.querySelectorAll('.meet__calculator-circle__block'),
  circleBuild = calculatorBuild.querySelectorAll('.meet__calculator-circle__build'),
  circleRooms = calculatorBuild.querySelectorAll('.meet__calculator-circle__rooms'),
  circleSmallBlock = calculatorBlock.querySelector('.meet__calculator-circle__small'),
  circleSmallBuild = calculatorBuild.querySelector('.meet__calculator-circle__small'),
  circleSmallRooms = calculatorRooms.querySelector('.meet__calculator-circle__small');

calculatorBlock.addEventListener('click', e => {
  if (e.target.closest('.meet__calculator-item')) {
    let id = idBlock(e);;
    let blockResult = calcValue(id);
    resultSale(blockResult, buildResult, roomsResult, inputResult);
    resultDays(blockResult, buildResult, roomsResult, slider.value);
    removeChoice(circleBlock, circleSmallBlock);
    addSmallCircle(e.target, '.meet__calculator-circle__block', circleSmallBlock);
  }
});

calculatorBuild.addEventListener('click', e => {
  if (e.target.closest('.meet__calculator-item')) {
    let id = idBlock(e);
    let buildResult = calcValue(id);
    resultSale(blockResult, buildResult, roomsResult, inputResult);
    resultDays(blockResult, buildResult, roomsResult, slider.value);
    removeChoice(circleBuild, circleSmallBuild);
    addSmallCircle(e.target, '.meet__calculator-circle__build', circleSmallBuild);
  }
});

calculatorRooms.addEventListener('click', e => {
  if (e.target.closest('.meet__calculator-item')) {
    let id = idBlock(e);
    let roomsResult = calcValue(id);
    resultSale(blockResult, buildResult, roomsResult, inputResult);
    resultDays(blockResult, buildResult, roomsResult, slider.value);
    removeChoice(circleRooms, circleSmallRooms);
    addSmallCircle(e.target, '.meet__calculator-circle__rooms', circleSmallRooms);
  }
});


function addSmallCircle(e, bigCircleClass, circleSmall) {

  let circleActive = e.querySelector(bigCircleClass);

  if (circleActive === null) {
    circleActive = e.parentNode.querySelector(bigCircleClass);
  }

  circleActive.appendChild(circleSmall);

};

function removeChoice(circleWrap, circleSmall) {
  circleWrap.forEach(element => {
    if (element.contains(circleSmall)) {
      element.removeChild(circleSmall);
    }
  });
};


function idBlock(e) {
  let id = e.target.id;
  if (id == '') {
    id = e.target.parentNode.id;
  };
  return id;
};

function calcValue(id) {
  if (id == 1) {
    return blockResult = 10;
  } else if (id == 2) {
    return blockResult = 15;
  } else if (id == 3) {
    return blockResult = 20;
  } else if (id == 4) {
    return blockResult = 25;
  } else if (id == 5) {
    return buildResult = 10;
  } else if (id == 6) {
    return buildResult = 20;
  } else if (id == 7) {
    return roomsResult = 10;
  } else if (id == 8) {
    return roomsResult = 30;
  } else if (id == 9) {
    return roomsResult = 60;
  } else {
    return roomsResult = 90;
  }

}

resultSale(blockResult, buildResult, roomsResult, inputResult);
resultDays(blockResult, buildResult, roomsResult, inputResult);