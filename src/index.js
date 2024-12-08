var cardValues1 = [1, 2, 3];
var cardValues2 = [1, 2, 3];
var attempts = 3;
var currentValueLeft;
var currentValueRight;
function displayCards() {
    var cardContainer = document.querySelector("#card-container");
    var leftHolder = document.createElement("div");
    leftHolder.id = "placeholderLeft";
    leftHolder.style.opacity = "0";
    cardContainer.appendChild(leftHolder);
    var card1 = document.createElement("button");
    card1.id = "card1";
    var img1 = document.createElement("img");
    img1.src = "img/card-flip-card-image.png";
    img1.className = "face-down-cards";
    img1.alt = "Card Image";
    card1.appendChild(img1);
    cardContainer.appendChild(card1);
    var card2 = document.createElement("button");
    card2.id = "card2";
    var img2 = document.createElement("img");
    img2.src = "img/card-flip-card-image.png";
    img2.className = "face-down-cards";
    img2.alt = "Card Image";
    card2.appendChild(img2);
    cardContainer.appendChild(card2);
    var rightHolder = document.createElement("div");
    rightHolder.id = "placeholderRight";
    rightHolder.style.opacity = "0";
    cardContainer.appendChild(rightHolder);
}
function cycleCards() {
    var leftCard = document.querySelector("#card1");
    var rightCard = document.querySelector("#card2");
    var attemptHTML = document.querySelector("#attempts");
    leftCard.addEventListener("click", function () {
        var randomNum = Math.floor(Math.random() * cardValues1.length);
        var randomNum2 = Math.floor(Math.random() * cardValues2.length);
        attempts -= 1;
        console.log("left card: " + cardValues1[randomNum]);
        console.log("right card: " + cardValues2[randomNum2]);
        console.log("Attempts: " + attempts);
        console.log("------------------------");
        attemptHTML.innerHTML = "".concat(attempts);
        currentValueLeft = cardValues1[randomNum];
        currentValueRight = cardValues2[randomNum2];
        flipCards(currentValueLeft, currentValueRight);
    });
    rightCard.addEventListener("click", function () {
        var randomNum = Math.floor(Math.random() * cardValues1.length);
        var randomNum2 = Math.floor(Math.random() * cardValues2.length);
        attempts -= 1;
        console.log("left card: " + cardValues1[randomNum]);
        console.log("right card: " + cardValues2[randomNum2]);
        console.log("Attempts: " + attempts);
        console.log("------------------------");
        attemptHTML.innerHTML = "".concat(attempts);
        currentValueLeft = cardValues1[randomNum];
        currentValueRight = cardValues2[randomNum2];
        flipCards(currentValueLeft, currentValueRight);
    });
}
function flipCards(cardValue1, cardValue2) {
    console.log(cardValue1, cardValue2);
    var leftHolder = document.querySelector("#placeholderLeft");
    var rightHolder = document.querySelector("#placeholderRight");
    var winLose = document.querySelector("#win-lose-container");
    leftHolder.style.opacity = "100";
    leftHolder.innerHTML = cardValue1.toString();
    rightHolder.style.opacity = "100";
    rightHolder.innerHTML = cardValue2.toString();
    if (cardValue1 === cardValue2) {
        winLose.innerHTML = "YOU WIN!";
    }
    else if (attempts === 0 && cardValue1 !== cardValue2) {
        winLose.innerHTML = "YOU LOSE!";
    }
    console.log(attempts);
}
function reset() {
    var button = document.querySelector("#game-button");
    button.addEventListener("click", function () {
        location.reload();
    });
}
displayCards();
cycleCards();
reset();
