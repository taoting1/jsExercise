function clickFn (e) {
  var slectionSch = document.querySelector('#school-select');
  var slectionCmp = document.querySelector('#company-select');
  if (e.target.id == 'school') {
    slectionSch.className = 'show';
    slectionCmp.className = 'hidden';
  } else if (e.target.id == 'company') {
    slectionSch.className = 'hidden';
    slectionCmp.className = 'show';
  }
}

var school = document.querySelector('#school');
var company = document.querySelector('#company');
school.onclick = clickFn;
company.onclick = clickFn;