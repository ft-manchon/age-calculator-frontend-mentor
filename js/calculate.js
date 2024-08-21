function calculate() {
  var actualDate = new Date();
  var actualYear = actualDate.getFullYear();
  var actualMonth = actualDate.getMonth() + 1;
  // somei 1 ao mês pois ele inicia em 0 (janeiro) - para fins de cálculo, é melhor que inicie em 1
  var actualDay = actualDate.getDate();

  var resultYear = document.querySelector('p#result-year');
  var resultMonth = document.querySelector('p#result-month');
  var resultDay = document.querySelector('p#result-day');
  var bYear = Number(document.querySelector('#b-year').value);
  var bMonth = Number(document.querySelector('#b-month').value);
  var bDay = Number(document.querySelector('#b-day').value);

  var yearAge = actualYear - bYear;

  if (actualMonth >= bMonth) {
    var monthAge = actualMonth - bMonth;
  } else {
    yearAge = yearAge - 1;
    monthAge = 12 + actualMonth - bMonth;
  }

  if (actualDay >= bDay) {
    var dateAge = actualDay - bDay;
  } else {
    monthAge--;

    if (actualMonth == 2) {
      var nDays = ((actualYear % 4 == 0) && (actualYear % 100 != 0) || (actualYear % 400 == 0) ? 29 : 28);
    } else if (actualMonth == 1 || actualMonth == 3 || actualMonth == 5 || actualMonth == 7 || actualMonth == 8 || actualMonth == 10 || actualMonth == 12) {
      nDays = 31;
    } else if (actualMonth == 4 || actualMonth == 6 || actualMonth == 9 || actualMonth == 11) {
      nDays = 30;
    }

    var dateAge = nDays + actualDay - bDay;
    
    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  resultDay.innerHTML = dateAge;
  resultMonth.innerHTML = monthAge;
  resultYear.innerHTML = yearAge;
}