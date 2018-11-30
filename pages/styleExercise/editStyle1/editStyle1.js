
function showColor (e) {
  var p = document.querySelector('.color-picker');
  var t = e.target;
  var colorValue = t.style.backgroundColor;
  p.innerHTML = colorValue;
  p.style.color = colorValue;
}

var ulNode = document.querySelector('#colorList');
ulNode.onclick = function (e) {
  var t = '';
  if (t) {
    alert('空船');
  } else {
    alert('2');
  }
  var target = e.target || e.srcElement;   
  if (target.nodeName.toLowerCase() === 'li') {
    showColor(e);
  }
  e.stopPropagation();
};

// 未使用事件委托
// var liList = document.querySelectorAll('ul>li');
// for (var i = 0, len = liList.length; i < len; i++) {
//   // 使用DOM0 级事件处理程序的方式
//   // liList[i].onclick = showColor;
//   // 使用DOM2 级事件处理程序的方式
//   liList[i].addEventListener('click', showColor);
// }