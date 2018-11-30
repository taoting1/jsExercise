
var el = document.querySelector('#fade-obj');
var idofInt = '';
window.onload = function () {
  document.querySelector('#fade-btn').removeEventListener('click', function () {
    idofInt = setInterval(fadeWithIn, 1000);
  });
  document.querySelector('#fade-btn').addEventListener('click', function () {
    idofInt = setInterval(fadeWithIn, 1000);
  });
};

/**
 * 淡出动画(使用setTimeout实现)
 */
function fade () {
  var opacity = el.style.opacity;
  if (opacity === '0') {
    return;
  }
  el.style.opacity = opacity === '' ? 1 : (opacity * 10 - 2) / 10;
  console.log(el.style.opacity);
  setTimeout(fade, 1000);
}

/**
 * 淡出动画(使用setInterval实现)
 */
function fadeWithIn () {
  var opacity = el.style.opacity;
  if (opacity === '0') {
    !idofInt || clearInterval(idofInt);
    return;
  }
  el.style.opacity = opacity === '' ? 1 : (opacity * 10 - 2) / 10;
  console.log(el.style.opacity);
  setTimeout(fade, 1000);
}