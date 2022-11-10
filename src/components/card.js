import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  //creating elements
const card = document.createElement('div');
const headline = document.createElement('div');
const author = document.createElement('div');
const imageContainer = document.createElement('div');
const image = document.createElement('img');
const span = document.createElement('span');
//adding class list
card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imageContainer.classList.add('img-container');
//attributes
image.src = article.authorPhoto;
headline.textContent = article.headline;
span.textContent = article.authorName;
//append to dom
card.appendChild(headline);
card.appendChild(author);
author.appendChild(imageContainer);
imageContainer.appendChild(image);
author.appendChild(span);
//add event listener
card.addEventListener('click', () => {
console.log(headline);
})
return card;
}
// var object = {authorName:'Aaron', headline: 'this is headline', authorPhoto: ''}
// console.log(Card(object))
 console.log(Card({authorName:'Aaron', headline: 'this is headline', authorPhoto: ''}))

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5001/api/articles`)
  .then(res => {
     const articles = Object.values(res.data.articles).flat()
     const container = document.querySelector(selector)
     articles.forEach(article => container.appendChild(Card(article)))
  }) 
  .catch(err => {
    debugger
  })
}

export { Card, cardAppender }
