let screen = document.getElementById("screen");
function display(num) {
  screen.value += num;
}
function calculator() {
  try {
    screen.value = eval(screen.value);
  } catch {
    alert("Insert proper value");
  }
}
function cls() {
  screen.value = "";
}
function del() {
  screen.value = screen.value.slice(0, -1);
}
