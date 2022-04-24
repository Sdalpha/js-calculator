let displayArea = document.getElementById("display");

let button = Array.from(document.getElementsByClassName("btn"));
console.log(button);

button.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "CLR":
        displayArea.innerText = "";
        break;
      case "DEL":
        displayArea.innerText = displayArea.innerText.slice(0, -1);
        break;
      case "=":
        try {
          displayArea.innerText = eval(displayArea.innerText);
        } catch {
          displayArea.innerText = " ";
          alert("Error!");
        }
        break;
      default:
        displayArea.innerText += e.target.innerText;
    }
  });
});
