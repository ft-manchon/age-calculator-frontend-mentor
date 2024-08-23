function validateDay() {
  var bDay = Number(document.querySelector('#b-day').value);
  var span = document.querySelector('#span-day');
  var label = document.querySelector('#label-day');
  var input = document.querySelector('#b-day');

  if (bDay > 0 && bDay <= 31) {
    span.setAttribute('hidden', 'hidden');
    label.classList.remove('label-error')
    input.classList.remove('input-error');
  } else {
    span.removeAttribute('hidden');
    label.classList.add('label-error');
    input.classList.add('input-error');
    if (bDay > 31) {
      span.innerHTML = "Must be a valid day";
    }
  }
}

function validateMonth() {
  var bMonth = Number(document.querySelector('#b-month').value);
  var span = document.querySelector('#span-month');
  var label = document.querySelector('#label-month');
  var input = document.querySelector('#b-month');

  if (bMonth > 0 && bMonth <= 12) {
    span.setAttribute('hidden', 'hidden');
    label.classList.remove('label-error');
    input.classList.remove('input-error');
  } else {
    span.removeAttribute('hidden');
    label.classList.add('label-error');
    input.classList.add('input-error');
    if (bMonth > 12) {
      span.innerHTML = "Must be a valid month";
    }
  }
}

function validateYear() {
  var actualDate = new Date();
  var actualYear = actualDate.getFullYear();

  var bYear = Number(document.querySelector('#b-year').value);
  var span = document.querySelector('#span-year');
  var label = document.querySelector('#label-year');
  var input = document.querySelector('#b-year');

  if (bYear > 0 && bYear < actualYear) {
    span.setAttribute('hidden', 'hidden');
    label.classList.remove('label-error')
    input.classList.remove('input-error');
  } else {
    span.removeAttribute('hidden');
    label.classList.add('label-error');
    input.classList.add('input-error');
    if (bYear > actualYear) {
      span.innerHTML = "Must be in the past";
    }
  }
}
