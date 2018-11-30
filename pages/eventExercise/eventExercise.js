window.onload = function () {
  var btn = document.getElementById('submit-btn');
  var name = document.querySelector('#name');
  btn.onclick = function (e) {
    console.log(name.value);
  };
  name.onkeydown = function (e) {
    if (e.keyCode == 13) {
      console.log(e.target.value);
    }
    if (e.keyCode == 27) {
      e.target.value = '';
    }
  };
};
