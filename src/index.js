import rules from './scripts/rules.json';
import convert from './scripts/convertDistance';
import showResult from './scripts/showResult';

const resultEl = document.getElementById('result');
const formEl = document.getElementById('conversion-form');

const renderMarkup = () => {
  const selects = document.querySelectorAll('select');
  for (let unit in rules) {
    const option = document.createElement('option');
    option.value = unit;
    option.textContent = unit;
    selects.forEach(select => select.add(option.cloneNode(true)));
  }
};

renderMarkup();

const onSubmit = async e => {
  e.preventDefault();

  let rule;

  const distance = document.getElementById('distance').value;
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  if (fromUnit === toUnit) {
    alert('Select the unit of measure to convert');
  } else {
    rule = await convert({
      distance: { unit: fromUnit, value: distance },
      convertTo: toUnit,
    });
  }

  if (rule === null) {
    alert('Invalid unit of measure');
  } else {
    const { unit, value } = rule;
    showResult(resultEl, distance, value, fromUnit, unit);
    formEl.reset();
  }
};

formEl.addEventListener('submit', onSubmit);
