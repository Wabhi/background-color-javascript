const hexCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//here I am grabing element like button and color..............
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  let hexColor = "#";
  //here I am using loop for six times that will go to add/concate every number with # and make hex code......
  for (let i = 0; i < 6; i++) {
    hexColor += hexCode[getRandomNumber()];
    //console.log(getRandomNumber());
  }

  //here I am changing element text and background color..............
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

//generating randome number.............................
const getRandomNumber = () => {
  return Math.floor(Math.random() * hexCode.length);
};
//console.log(getRandomNumber());
