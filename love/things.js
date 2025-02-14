// List of things you love about them
const things = [
  "N1 - Your smile",
  "N2 - The way you laugh",
  "N3 - Your kindness",
  // Add all 200 things here...
];

let currentIndex = 0;
const thingText = document.getElementById('thing-text');
const nextButton = document.getElementById('next-button');
const animationContainer = document.getElementById('animation-container');

// Function to create a colorful animation
function createAnimation() {
  // Clear any existing animations
  animationContainer.innerHTML = '';

  // Create 10 colorful shapes
  for (let i = 0; i < 10; i++) {
    const shape = document.createElement('div');
    shape.classList.add('colorful-shape');

    // Randomize position and size
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.width = `${Math.random() * 30 + 10}px`;
    shape.style.height = shape.style.width;

    // Add to the animation container
    animationContainer.appendChild(shape);

    // Remove the shape after the animation ends
    shape.addEventListener('animationend', () => {
      shape.remove();
    });
  }
}

// Function to display the next thing
function displayNextThing() {
  currentIndex = (currentIndex + 1) % things.length; // Loop back to the start
  thingText.textContent = things[currentIndex];

  // Trigger the animation
  createAnimation();
}

// Add event listener to the button
nextButton.addEventListener('click', displayNextThing);