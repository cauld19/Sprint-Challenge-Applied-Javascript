// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        console.log(response.data.articles);
        response.data.articles.bootstrap.forEach(item => {
            entryPointCards.appendChild(createCard(item));
        })
        response.data.articles.javascript.forEach(item => {
            entryPointCards.appendChild(createCard(item));
        })
        response.data.articles.technology.forEach(item => {
            entryPointCards.appendChild(createCard(item));
        })
        response.data.articles.jquery.forEach(item => {
            entryPointCards.appendChild(createCard(item));
        })
        response.data.articles.node.forEach(item => {
            entryPointCards.appendChild(createCard(item));
        })
    })
    .catch( err => {
      console.log(err);
    })

let entryPointCards = document.querySelector(".cards-container");


function createCard(dataInfo) {
    let card = document.createElement('div');
    let headLine = document.createElement('div');
    let author = document.createElement('author');
    let imageHolder = document.createElement('div');
    let image = document.createElement('img');
    let authorName = document.createElement('span');

    //structure
    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imageHolder);
    author.appendChild(authorName);
    imageHolder.appendChild(image);

    //set content
    image.src = dataInfo.authorPhoto;
    authorName.textContent = dataInfo.authorName;
    headLine.textContent = dataInfo.headline;

    //set style

    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imageHolder.classList.add('img-container');

    return card;
}


