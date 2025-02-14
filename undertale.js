// Define the slides with timestamps, images, and text
const slides = [
  { time: 0, image: "assets/image1.jpg", text: "Давным давно две расы правили Землей: ЛЮДИ и МОНСТРЫ." },
  { time: 7, image: "assets/image2.jpg", text: "Но однажды между ними вспыхнула война." },
  { time: 13, image: "assets/image3.jpg", text: "После продолжительной битвы людям удалось одержать победу." },
  { time: 24, image: "assets/image4.jpg", text: "И с помощью волшебного заклятия они заключили монстров под землю." },
  { time: 29, image: "assets/image5.jpg", text: "ГОРА ЭБОТТ, 201Х" },
  { time: 34, image: "assets/image6.jpg", text: "Легенды гласят, что те, кто взобрался на гору, никогда не возврашались." },
  { time: 39, image: "assets/image7.jpg", text: "И мы оба знаем, что происходит дальше." },
  { time: 46, image: "assets/image8.jpg", text: "" },
  { time: 52, image: "assets/image9.jpg", text: "" },
  { time: 58, image: "assets/image10.jpg", text: "" },
  { time: 60, image: "assets/image11.jpg", text: "И мы начали общаться" },
  { time: 62, image: "assets/image12.jpg", text: "В том самом ММ" },
  { time: 64, image: "assets/image13.jpg", text: "" },
  { time: 66, image: "assets/image14.jpg", text: "В ВК" },
  { time: 68, image: "assets/image15.jpg", text: "а позже в телеграмме" },
  { time: 70, image: "assets/image3.jpg", text: "и теперь, мы тут." },
  { time: 74, image: "assets/image3.jpg", text: "Я люблю тебя, Сонь" },
  
];

// Select elements
const slideImage = document.getElementById("slide-image");
const slideText = document.getElementById("slide-text");
const backgroundMusic = document.getElementById("background-music");
const startImage = document.getElementById("start-image");
const slideshowContainer = document.getElementById("slideshow-container");

// Initialize variables
let currentSlideIndex = 0;

// Function to simulate the typewriter effect
function typeWriterEffect(textElement, text, delay = 50) {
  let i = 0;
  textElement.textContent = ""; // Clear the text content
  const interval = setInterval(() => {
    if (i < text.length) {
      textElement.textContent += text.charAt(i); // Add one character
      i++;
    } else {
      clearInterval(interval); // Stop the interval when done
    }
  }, delay); // Delay between characters (in milliseconds)
}

// Function to handle fade-out and fade-in
function transitionSlide(newImage, newText) {
  // Fade out the current image
  slideImage.style.opacity = 0;

  // Wait for the fade-out to complete
  setTimeout(() => {
    slideImage.src = newImage; // Update the image source
    slideImage.style.opacity = 1; // Fade in the new image

    // Update the text
    typeWriterEffect(slideText, newText);
  }, 500); // Match this duration with the CSS transition time
}

// Function to update the slide
function updateSlide() {
  const currentTime = Math.floor(backgroundMusic.currentTime); // Get current time in seconds
  console.log("Current Time:", currentTime); // Debugging log
  const nextSlide = slides.find(slide => slide.time === currentTime);

  if (nextSlide && nextSlide.time !== slides[currentSlideIndex].time) {
    transitionSlide(nextSlide.image, nextSlide.text);
    currentSlideIndex = slides.indexOf(nextSlide);
  }
}

// Start the first slide immediately
const firstSlide = slides[0];
slideImage.src = firstSlide.image; // Set the first image
typeWriterEffect(slideText, firstSlide.text); // Apply typewriter effect to the first text

// Handle the start image click
startImage.addEventListener("click", () => {
  // Start the music
  backgroundMusic.play();

  // Fade out the start image
  startImage.style.opacity = 0;

  // After the fade-out, hide the start image and reveal the slideshow
  setTimeout(() => {
    startImage.style.display = "none"; // Hide the start image
    slideshowContainer.classList.remove("hidden"); // Show the slideshow
    slideshowContainer.style.opacity = 1; // Fade in the slideshow
  }, 500); // Match this duration with the CSS transition time
});

// Check for slide updates every 100ms
setInterval(updateSlide, 100);