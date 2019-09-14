/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let entryPointCarousel = document.querySelector(".carousel-container");





function createCarousel () {

  let carousel = document.createElement('div');
  let leftButton = document.createElement('div');
  let rightButton = document.createElement('div');
  let imageOne = document.createElement('img');
  let imageTwo = document.createElement('img');
  let imageThree = document.createElement('img');
  let imageFour = document.createElement('img');

  
  imageOne.src = "../assets/carousel/mountains.jpeg";
  imageTwo.src = "../assets/carousel/computer.jpeg";
  imageThree.src = "../assets/carousel/trees.jpeg";
  imageFour.src = "../assets/carousel/turntable.jpeg";

  

 



  carousel.appendChild(leftButton);
  carousel.appendChild(rightButton);
  carousel.appendChild(imageOne);
  carousel.appendChild(imageTwo);
  carousel.appendChild(imageThree);
  carousel.appendChild(imageFour);

  

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  return carousel


}

entryPointCarousel.appendChild(createCarousel());
