interface Card {
    id: string;
    value: number;
    isFlipped: boolean;
}
  
interface Game {
    attempts: number;
    currentValueLeft: number | null;
    currentValueRight: number | null;
    maxAttempts: number;
}
  
const cardValues1: number[] = [1, 2, 3];
const cardValues2: number[] = [1, 2, 3];
  
const gameState: Game = {
    attempts: 3,
    currentValueLeft: null,
    currentValueRight: null,
    maxAttempts: 3,
};
  
function displayCards(): any {
    const cardContainer = document.querySelector("#card-container") as HTMLDivElement;
  
    const leftHolder = document.createElement("div");
    leftHolder.id = "placeholderLeft";
    leftHolder.style.opacity = "0";
    cardContainer.appendChild(leftHolder);
  
    const card1 = createCard("card1");
    cardContainer.appendChild(card1);
  
    const card2 = createCard("card2");
    cardContainer.appendChild(card2);
  
    const rightHolder = document.createElement("div");
    rightHolder.id = "placeholderRight";
    rightHolder.style.opacity = "0";
    cardContainer.appendChild(rightHolder);
  }
  
function createCard(id: string): HTMLButtonElement {
    const card = document.createElement("button");
    card.id = id;
  
    const img = document.createElement("img");
    img.src = "img/card-flip-card-image.png";
    img.className = "face-down-cards";
    img.alt = "Card Image";
  
    card.appendChild(img);
    return card;
}
  
function cycleCards(): any {
    const leftCard = document.querySelector("#card1") as HTMLButtonElement;
    const rightCard = document.querySelector("#card2") as HTMLButtonElement;
    const attemptHTML = document.querySelector("#attempts") as HTMLSpanElement;
  
    leftCard.addEventListener("click", () => handleCardClick(attemptHTML));
    rightCard.addEventListener("click", () => handleCardClick(attemptHTML));
}
  
function handleCardClick(attemptHTML: HTMLElement): any {
    const randomNum1 = getRandomIndex(cardValues1);
    const randomNum2 = getRandomIndex(cardValues2);
  
    gameState.attempts -= 1;
    gameState.currentValueLeft = cardValues1[randomNum1];
    gameState.currentValueRight = cardValues2[randomNum2];
  
    console.log("Left card:", gameState.currentValueLeft);
    console.log("Right card:", gameState.currentValueRight);
    console.log("Attempts left:", gameState.attempts);
    console.log("------------------------");
  
    attemptHTML.innerHTML = `${gameState.attempts}`;
    flipCards(gameState.currentValueLeft, gameState.currentValueRight);
}
  
function getRandomIndex(array: number[]): number {
    return Math.floor(Math.random() * array.length);
}
  
  function flipCards(cardValue1: number, cardValue2: number): any {
    const leftHolder = document.querySelector("#placeholderLeft") as HTMLDivElement;
    const rightHolder = document.querySelector("#placeholderRight") as HTMLDivElement;
    const winLose = document.querySelector("#win-lose-container") as HTMLDivElement;
  
    leftHolder.style.opacity = "100";
    leftHolder.textContent = cardValue1.toString();
  
    rightHolder.style.opacity = "100";
    rightHolder.textContent = cardValue2.toString();
  
    if (cardValue1 === cardValue2) {
      winLose.textContent = "YOU WIN!";
    } else if (gameState.attempts === 0) {
      winLose.textContent = "YOU LOSE!";
    }
  }
  
function resetGame(): any {
    const button = document.querySelector("#game-button") as HTMLButtonElement;
    button.addEventListener("click", () => location.reload());
}
  

displayCards();
cycleCards();
resetGame();
  