document.addEventListener('DOMContentLoaded', init);

function init() {
  const boxElement = document.querySelector('.box');
  setBoxShadow(boxElement, '#000000');
}

function setBoxShadow(element, colorInHex, opacity = 1) {
  const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

  element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}

function getChannelColor(colorInHex, channelName) {
  let start;
  switch (channelName) {
    case 'red':
      start = 1;
      break;
    case 'green':
      start = 3;
      break;
    case 'blue':
      start = 5;
      break;
  }

  const channelColorHex = colorInHex.substr(start, 2);
  const channelColorDec = parseInt(channelColorHex, 16);

  return channelColorDec;
}

const inputColorEl = document.querySelector('input[type="color"]');
const inputRangeEl = document.querySelector('input[type="range"]');

inputColorEl.addEventListener('change', function (e) {
  const changeColor = e.target.value;
  const rangeValue = inputRangeEl.value / 100;
  const boxElement = document.querySelector('.box');
  setBoxShadow(boxElement, changeColor, rangeValue);
});

inputRangeEl.addEventListener('input', function (e) {
  const changeRange = e.target.value;
  const boxElement = document.querySelector('.box');
  setBoxShadow(boxElement, inputColorEl.value, changeRange / 100);
});
