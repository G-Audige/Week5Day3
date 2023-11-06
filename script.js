let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];
 
document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  // const randomQuote = function() {
  //   document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  // };
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.querySelector('#main-title').textContent = "Something Shorter"

  // Part 2
  document.querySelector('body').style.backgroundColor = 'Aqua'

  // Part 3
  document.querySelector('#favorite-things').lastElementChild.remove()
  // document.querySelector('li:last-child').remove()

  // Part 4
  document.querySelectorAll('.special-title').forEach( x => {
    x.style.fontSize = '1rem'
  });

  // Part 5
  document.querySelector('#past-races').children[3].remove()

  // Part 6
  const newLi = document.createElement('li')
  newLi.textContent = "New York"
  document.querySelector('#past-races').appendChild(newLi)

  // Part 7
  const newDiv = document.createElement('div')
  newDiv.setAttribute('class', 'blog-post')
  const newh1 = document.createElement('h1')
  newh1.textContent = newLi.textContent
  const newP = document.createElement('p')
  newP.textContent = "I CRASHED MY CAR BUT STILL WON!"
  document.querySelector('.main').appendChild(newDiv)
  newDiv.appendChild(newh1)
  newDiv.appendChild(newP)

  // Part 8
  document.querySelector('#quote-title').addEventListener('click', () => {
    randomQuote()
  })

  // Part 9
  const blog = document.querySelectorAll('.blog-post')
  blog.forEach( x => {
    x.addEventListener('mouseout', () => {
      x.classList.toggle('purple')
    })
    x.addEventListener('mouseenter', () => {
      x.classList.toggle('red')
    })
  })
  
  

  










});
