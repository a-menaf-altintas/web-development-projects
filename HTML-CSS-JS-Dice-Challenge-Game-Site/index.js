var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

img1Path = "images/dice" + randomNumber1 + ".png"
img2Path = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", img1Path)
document.querySelectorAll("img")[1].setAttribute("src", img2Path)


if (randomNumber1 > randomNumber2) {
    winner = "Player 1 wins! 🚩"
    document.querySelector("h1").innerHTML = winner
} else if (randomNumber1 < randomNumber2) {
    winner = "Player 2 wins! 🚩"
    document.querySelector("h1").innerHTML = winner
} else {
    winner = "Draw!"
    document.querySelector("h1").innerHTML = winner
}