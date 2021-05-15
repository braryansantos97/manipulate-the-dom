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
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const mainTitle = function () {
    document.querySelector('#main-title').innerText = 'Welcome I\'m Dom Toretto!';
  }
  mainTitle()

  // Part 2
  const changeBackgroundColor = function () {
    document.querySelector('body').style.backgroundColor = 'green';
  }
  changeBackgroundColor()
  // Part 3
  const removeFavThing = function () {
    const list = document.getElementById('favorite-things');
    list.removeChild(list.lastElementChild);
  }
  removeFavThing()

  // Part 4
  const special = function () {
    const specialTitle = document.querySelectorAll('special-title');
    for (let title of specialTitle) {
      title.style.fontSize = '2rem';
    }
  }
  special()

  // Part 5
  const past = function() {
      const race = document.querySelector('#past-races');
      race.removeChild(race.children[3]);
    }
    past()

  // Part 6
  const newRace = function() {
    const newCity = document.querySelector('#past-races');
    const addedRace = document.createElement('li');
    addedRace.innerHTML = 'New York';
    newCity.append(addedRace);
  }
  newRace()
  // Part 7
  const blog = function() {
    const mainClass = document.getElementsByClassName('main');
    const newBlog = document.createElement('div');
    const newH1 = document.createElement('h1');
    newH1.innerHTML = 'New York';
    const newP = document.createElement('p');
    newP.innerHTML = 'I raced in NY';
    newBlog.classList.add('blog-post');
    newBlog.classList.add('purple');
    newBlog.append(newH1);
    newBlog.append(newP);
    mainClass[0].appendChild(newBlog);
  }
  blog()


  // Part 8
  const quote = function() {
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    const quoteTitle = document.getElementById('quote-title');
    quoteTitle.addEventListener('click', (event) => {
      randomQuote();
    })
  }
  quote()
  // Part 9
  const newEvents = function() {
    const allBlogs =  document.querySelectorAll('.blog-post');
    for (let i of allBlogs) {
      i.addEventListener('mouseout', (event) => {
        i.classList.toggle('purple')
      })
      i.addEventListener('mouseenter', (event) => {
        i.classList.toggle('red')
      })
    }
  }
  newEvents()
});
