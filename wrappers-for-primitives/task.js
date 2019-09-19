'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  
    // код для задачи №1 писать здесь
    //return totalAmount;
  let fullPercent = parseFloat(percent);
  let fullContribution = parseFloat(contribution);
  let fullAmount = parseFloat(amount);
  let fullDate = new Date(date);
  let today = new Date();
  
  if (isNaN(fullPercent) || fullPercent < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}".`;
  } else if (isNaN(fullContribution) || fullContribution < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}".`;
  } else if (isNaN(fullAmount) || fullAmount < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}".`;
  } else if (fullAmount < fullContribution) {
    return `Кажется, что ипотека Вам не нужна. Стоимость объекта составляет ${amount} рублей, но у Вас уже есть ${contribution} рублей.`;
  } else if (isNaN(fullDate) || fullDate < today) {
    return `Параметр "Срок ипотеки" содержит неправильное значение "${date}".`;
  }
  //
  let timeInMonths = (fullDate.getFullYear() - today.getFullYear()) * 12 + Math.abs(fullDate.getMonth() - today.getMonth());
  
  let monthlyPercent = percent / (12*100);
  
  let requiredCredit = amount - contribution;
  
  let monthlyPayment;

  if (monthlyPercent === 0) {
    monthlyPayment = requiredCredit / timeInMonths;
  } else {
    monthlyPayment = requiredCredit * (monthlyPercent + monthlyPercent / (((1+monthlyPercent)**timeInMonths - 1)));
  }

  let totalAmount = monthlyPayment * timeInMonths;
  
  console.log(totalAmount.toFixed(2));
  
  return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
  console.log(typeof(name));
  
  if (name === "" || name === 'null' || name === 'undefined' || name === 'NaN') {
    name = 'Аноним';
  }

  console.log(`Привет, мир! Меня зовут ${name}.`);
  return `Привет, мир! Меня зовут ${name}.`;
}
