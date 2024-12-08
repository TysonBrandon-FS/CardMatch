var cardValues1 = [1, 2, 3];
var cardValues2 = [1, 2, 3];
var gameState = {
    attempts: 3,
    currentValueLeft: null,
    currentValueRight: null,
    maxAttempts: 3,
};
function displayCards() {
    var cardContainer = document.querySelector("#card-container");
    var leftHolder = document.createElement("div");
    leftHolder.id = "placeholderLeft";
    leftHolder.style.opacity = "0";
    cardContainer.appendChild(leftHolder);
    var card1 = createCard("card1");
    cardContainer.appendChild(card1);
    var card2 = createCard("card2");
    cardContainer.appendChild(card2);
    var rightHolder = document.createElement("div");
    rightHolder.id = "placeholderRight";
    rightHolder.style.opacity = "0";
    cardContainer.appendChild(rightHolder);
}
function createCard(id) {
    var card = document.createElement("button");
    card.id = id;
    var img = document.createElement("img");
    img.src = "img/card-flip-card-image.png";
    img.className = "face-down-cards";
    img.alt = "Card Image";
    card.appendChild(img);
    return card;
}
function cycleCards() {
    var leftCard = document.querySelector("#card1");
    var rightCard = document.querySelector("#card2");
    var attemptHTML = document.querySelector("#attempts");
    leftCard.addEventListener("click", function () { return handleCardClick(attemptHTML); });
    rightCard.addEventListener("click", function () { return handleCardClick(attemptHTML); });
}
function handleCardClick(attemptHTML) {
    var randomNum1 = getRandomIndex(cardValues1);
    var randomNum2 = getRandomIndex(cardValues2);
    gameState.attempts -= 1;
    gameState.currentValueLeft = cardValues1[randomNum1];
    gameState.currentValueRight = cardValues2[randomNum2];
    console.log("Left card:", gameState.currentValueLeft);
    console.log("Right card:", gameState.currentValueRight);
    console.log("Attempts left:", gameState.attempts);
    console.log("------------------------");
    attemptHTML.innerHTML = "".concat(gameState.attempts);
    flipCards(gameState.currentValueLeft, gameState.currentValueRight);
}
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}
function flipCards(cardValue1, cardValue2) {
    var leftHolder = document.querySelector("#placeholderLeft");
    var rightHolder = document.querySelector("#placeholderRight");
    var winLose = document.querySelector("#win-lose-container");
    leftHolder.style.opacity = "100";
    leftHolder.textContent = cardValue1.toString();
    rightHolder.style.opacity = "100";
    rightHolder.textContent = cardValue2.toString();
    if (cardValue1 === cardValue2) {
        winLose.textContent = "YOU WIN!";
    }
    else if (gameState.attempts === 0) {
        winLose.textContent = "YOU LOSE!";
    }
}
function resetGame() {
    var button = document.querySelector("#game-button");
    button.addEventListener("click", function () { return location.reload(); });
}
displayCards();
cycleCards();
resetGame();
