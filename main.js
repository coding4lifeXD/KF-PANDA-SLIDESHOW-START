// Kung Fu Panda Slideshow / Gallery
let imgPaths = ["tigress.png", "viper.png", "monkey.png", "mantis.png", "crane.png"]
let imgIndex = 0
let imgContainerEl = document.getElementById("img-container")
for (let i = 0; i < imgPaths.length; i++) {
    imgContainerEl.innerHTML+=`<img src="images/${imgPaths[i]}">`
}
console.log("innerSTUFF: " + imgContainerEl.innerHTML)

document.getElementById("next").addEventListener("click", nextSlide)
document.getElementById("random").addEventListener("click", randomSlide)
document.getElementById("prev").addEventListener("click", prevSlide)


function nextSlide() {
    //  Increment index, loop if necesary

    imgIndex++
    if (imgIndex == imgPaths.length) {
        imgIndex = 0
    }

    // Display the new image
    document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex]
}

function prevSlide() {
    imgIndex--
    if (imgIndex === -1) {
        imgIndex = imgPaths.length - 1
    }
    console.log("IMG INDEX: " + imgIndex)
    document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex]
}

function randomSlide() {
    // Get a random index: integer b/t 0 and up to the length of the array (exclusive)
    let randomIndex = Math.randomInt(0, imgPaths.length)

    // Display the new image
    document.getElementById("characterImg").src = "images/" + imgPaths[randomIndex]
}