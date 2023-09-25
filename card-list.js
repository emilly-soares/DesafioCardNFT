function createCardList(cardsData) {
    const cardsContainer = document.querySelector(".cards-container");
 
    cardsData.forEach((data) => {
       const card = document.createElement("div");
       card.className = "custom-card";

       card.innerHTML = `
          <div class="custom-img">
             <img src="${data.image}" class="custom-card-image">
             <div class="custom-green-card"></div>
             <img src="images/icon-view.svg" class="custom-eye">
          </div>
          <h1 class="custom-title">${data.title}</h1>
          <div class="custom-description">${data.description}</div>
          <div class="custom-items">
             <div class="custom-ethereum"><img src="./images/icon-ethereum.svg">${data.ethereum}</div>
             <div class="custom-time"><img src="./images/icon-clock.svg">${data.timeLeft}</div>
          </div>
          <hr class="custom-hr">
          <div class="custom-author">
             <img src="${data.author.avatar}" class="custom-avatar">
             <span class="custom-author-text">Creation of <span class="custom-name">${data.author.name}</span></span>
          </div>
       `;
 
       cardsContainer.appendChild(card);
    });
 }
 export { createCardList };
 