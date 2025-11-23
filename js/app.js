const primaryInput = document.querySelector("#primary-input");
const secondaryInput = document.querySelector("#secondary-input");
const primaryUnit = document.querySelector("#primary-unit");
const secondaryUnit = document.querySelector("#secondary-unit");

primaryInput.value = 30;
secondaryInput.value = 30;

//temperature logic
function update(e) {
  elementId = e.target.id;
  switch (elementId) {
    case "primary-input":
    case "primary-unit":
    case "secondary-unit":
      secondaryInput.value = calculate(
        primaryInput.value,
        primaryUnit.value,
        secondaryUnit.value
      );
      break;
    case "secondary-input":
      primaryInput.value = calculate(
        secondaryInput.value,
        secondaryUnit.value,
        primaryUnit.value
      );
  }
}

//calculation
function calculate(input, firstUnit, secondUnit) {
  input = Number(input);
  let result;
  const combination = `${firstUnit}-${secondUnit}`;
  switch (combination) {
    case firstUnit == secondUnit:
      result = input * 1;
      break;
    case "fahrenheit-celcius":
      // C = (F - 32) * 5/9
      result = ((input - 32) * 5) / 9;
      break;
    case "fahrenheit-kelvin":
      // K = (input - 32) / 1.8 + 273.15
      result = (input - 32) / 1.8 + 273.15;
      break;
    case "celcius-fahrenheit":
      // F = (C * 9/5) + 32
      result = (input * 9) / 5 + 32;
      break;
    case "celcius-kelvin":
      // K = C + 273.15
      result = input + 273.15;
      break;
    case "kelvin-fahrenheit":
      // F = (K - 273.15) * (9/5) + 32
      result = (input - 273.15) * (9 / 5) + 32;
      break;
    case "kelvin-celcius":
      // C = K - 273.15
      result = input - 273.15;
      break;
    default:
      result = input;
  }

  return result.toFixed(2);
}


[primaryInput, primaryUnit, secondaryInput, secondaryUnit].forEach((element) =>
  element.addEventListener("change", update)
);
