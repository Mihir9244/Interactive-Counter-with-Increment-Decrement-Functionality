let counter = 0;

function changeCounter(value) {
  counter += value;
  document.getElementById("counter").innerText = counter;
}
