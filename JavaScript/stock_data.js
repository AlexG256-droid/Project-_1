// Switches images every time the user clicks on one (stock price predictor)
const imageChange = document.querySelector("img");

imageChange.addEventListener("click", () => {
  const mySrc = imageChange.getAttribute("src");
  if (mySrc === "../Images/Stock_Data.png") {
    imageChange.setAttribute("src", "../Images/Stock_Data_2.png");
  } else {
    imageChange.setAttribute("src", "../Images/Stock_Data.png");
  }
});