// Switches images every time the user clicks on one (topic distribution)
const imageChange2 = document.querySelector("img");

imageChange2.addEventListener("click", () => {
  const mySrc = imageChange2.getAttribute("src");
  if (mySrc === "Images/Topic_Distribution.png") {
    imageChange2.setAttribute("src", "Images/Topic_Distribution_2.png");
  } else {
    imageChange2.setAttribute("src", "Images/Topic_Distribution.png");
  }
});
