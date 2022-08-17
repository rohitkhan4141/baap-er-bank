function dataFromInputfield(selector) {
  const element = document.getElementById(selector);
  const extractedValue = parseFloat(element.value);
  element.value = "";
  return extractedValue;
}

function dataFromElement(selector) {
  const element = document.getElementById(selector);
  return parseFloat(element.innerText);
}

function setDataIntoElement(selector, data) {
  const element = document.getElementById(selector);
  element.innerText = data;
}
