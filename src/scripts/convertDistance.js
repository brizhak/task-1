import rules from './rules.json';

let result;

const convert = async ({ distance, convertTo }) => {
  const { unit, value } = distance;
  if (rules[unit][convertTo] === undefined) {
    alert('Select the unit of measure to convert');
    return null;
  } else {
    result = rules[unit][convertTo] * value;
    return { unit: convertTo, value: result };
  }
};

export default convert;
