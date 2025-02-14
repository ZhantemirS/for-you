document.getElementById('surprise-button').addEventListener('click', function() {
    const message = document.getElementById('surprise-message');
    message.classList.remove('hidden');
  });

// Function to save the meetUpDate to localStorage
function saveMeetUpDate(date) {
  localStorage.setItem("meetUpDate", date.toISOString()); // Save as ISO string
}

// Function to load the meetUpDate from localStorage
function loadMeetUpDate() {
  const savedDate = localStorage.getItem("meetUpDate");
  return savedDate ? new Date(savedDate) : null; // Parse the ISO string back to a Date object
}

// Set the date to 1.5 years from today (or load it from localStorage)
let meetUpDate = loadMeetUpDate(); // Try to load the saved date
if (!meetUpDate) {
  const now = new Date();
  meetUpDate = new Date(now);
  meetUpDate.setMonth(now.getMonth() + 18); // Add 18 months (1.5 years)
  saveMeetUpDate(meetUpDate); // Save the new date to localStorage
}

// Countdown function
function updateCountdown() {
  const now = new Date();
  const timeDifference = meetUpDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

  // If the countdown is over, display a message
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "<p>Надеюсь, мы уже вместе.</p>";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);



// Initial call to display the countdown immediately
updateCountdown();

// hug kiss section
const hugButton = document.getElementById('hug-button');
const kissButton = document.getElementById('kiss-button');
const animationContainer = document.getElementById('animation-container');
const hugSound = document.getElementById('hug-sound');
const kissSound = document.getElementById('kiss-sound');

// Arrays of photo file paths
const hugPhotos = [
  'hug1.jpg',
  'images/hug2.jpg',
  'images/hug3.jpg',
  'images/hug4.jpg',
];

const kissPhotos = [
  'heart2.png',
  'images/heart2.jpg',
  'images/heart3.jpg',
  'images/heart5.jpg',
];

// Function to get a random photo from an array
function getRandomPhoto(photos) {
  return photos[Math.floor(Math.random() * photos.length)];
}

// Function to create a kiss animation
function sendKiss() {
  const kissImage = document.createElement('img');
  kissImage.src = getRandomPhoto(kissPhotos);
  kissImage.classList.add('kiss-image');
  kissImage.style.left = `${Math.random() * 80 + 10}%`; // Random horizontal position
  animationContainer.appendChild(kissImage);

  // Play the kiss sound effect
  kissSound.play();

  // Remove the image after the animation ends
  setTimeout(() => {
    kissImage.remove();
  }, 1500);
}

// Function to create a hug animation
function sendHug() {
  const hugImage = document.createElement('img');
  hugImage.src = getRandomPhoto(hugPhotos);
  hugImage.classList.add('hug-image');
  hugImage.style.left = `${Math.random() * 80 + 10}%`; // Random horizontal position
  animationContainer.appendChild(hugImage);

  // Play the kiss sound effect
  hugSound.play();

  // Remove the image after the animation ends
  setTimeout(() => {
    hugImage.remove();
  }, 1500);
}

// Add event listeners to the buttons
hugButton.addEventListener('click', sendHug);
kissButton.addEventListener('click', sendKiss);







// Array of compliments
const compliments = [
  "Ты сногсшибательно красивая, Сонь",
  "Ты самая добрая!!",
  "самая милая",
  "я люблю твое мировозрение",
  "ты талантливая!!",
  "твой смех - мой любимый звук",
  "ты мне самая дорогая",
  "ты сильная",
  "ты самая лучшая",
  "мой день становится намного лучше, когда ты рядом",
  "Ты уникальна",
  "Неповторима",
  "Твоя красота порой вводит меня в ступор",
  "Я люблю тебя.",
  "Я не хочу тебя потерять..",
  // Add as many compliments as you want!,
];

// Array of fonts
const fonts = [
  "'Dancing Script', cursive",
  "'Pacifico', cursive",
  "'Indie Flower', cursive",
  "'Shadows Into Light', cursive",
  "'Amatic SC', cursive",
  "'Courgette', cursive",
  "'Great Vibes', cursive",
  "'Sacramento', cursive",
  "'Lobster', cursive",
  "'Parisienne', cursive",
];

// Array of colors
const colors = [
  "#ff4d4d", "#ff80bf", "#ff9999", "#ff6666", "#ff3333",
  "#ff1a1a", "#e60000", "#cc0000", "#b30000", "#990000",
];

// Get the compliments container
const complimentsContainer = document.getElementById('compliments-container');

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display compliments
function displayCompliments() {
  compliments.forEach((compliment) => {
    const complimentElement = document.createElement('div');
    complimentElement.classList.add('compliment');
    complimentElement.textContent = compliment;

    // Apply random font and color
    complimentElement.style.fontFamily = fonts[getRandomNumber(0, fonts.length - 1)];
    complimentElement.style.color = colors[getRandomNumber(0, colors.length - 1)];

    // Apply random rotation
    const randomRotation = getRandomNumber(-15, 15);
    complimentElement.style.transform = `rotate(${randomRotation}deg)`;

    // Add to the container
    complimentsContainer.appendChild(complimentElement);
  });
}

// Call the function to display compliments
displayCompliments();




// Array of promises
const promises = [
  "Даже если весь мир встанет против тебя, я буду на твоей стороне.",
  "Я обещаю, что не брошу тебя в трудные времена.",
  "Я обещаю, что буду делать всё в своих силах, чтобы ты улыбалась",
  "Я обещаю любить тебя такой, какой ты есть",
  "Я обещаю помогать тебе с твоими трудностями",
  "Я обещаю, что буду всегда тебя поддерживать.",
  "Я обещаю, что никогда тебя не предам.",
  "Я обещаю помогать нам расти, быть лучше.",
  // Add as many promises as you want!
];

// Get the promises container
const promisesContainer = document.getElementById('promises-container');

// Function to display promises
function displayPromises() {
  promises.forEach((promise) => {
    const promiseElement = document.createElement('div');
    promiseElement.classList.add('promise');
    promiseElement.textContent = promise;
    promisesContainer.appendChild(promiseElement);
  });
}

// Call the function to display promises
displayPromises();







// Array of reasons
const reasons = [
  "Ты храбрая",
  "Ты талантливая",
  "Самая красивая, самая умная",
  "Ты не сдаёшься",
  "Ты заботишься о своих близких",
  "Ты мудрая",
  "лучше всех плаваешь!!",
  "и рисуешь лучше всех.",
  "Твоих достижений не пересчитать на пальцах",
  "Я горжусь твоими соревнованиями, твоей учёбой",
  "Ты самая добрая, самая человечная.",
  "Всех причин больше, чем атомов во вселенной.",
  // Add as many reasons as you want!
];

// Get the proud container
const proudContainer = document.getElementById('proud-container');

// Function to display reasons
function displayReasons() {
  reasons.forEach((reason) => {
    const reasonElement = document.createElement('div');
    reasonElement.classList.add('proud-reason');
    reasonElement.textContent = reason;
    proudContainer.appendChild(reasonElement);
  });
}

// Call the function to display reasons
displayReasons();



// List of things you love about them
const things = [
  " 1 Твоя улыбка.",
  " 2 То, как ты смеёшься",
  " 3 Твоя доброта.",
  "твои красивые глазки", 
  " Твоя забота         ",
"  Твоя нежность        ",
"   твоё чувство юмора!!       ",
"   твой ум       ",
"  твоё терпение        ",
" твоя ласка         ",
" то, как ты ухаживаешь за своими питомцами         ",
" то, как ты общаешься со мной         ",
"        твоя интуиция  ",
"  твоя креативность        ",
"  твои работы        ",
" то, как ты отлично плаваешь         ",
" твои навыки в играх        ",
" твоя радость         ",
" твоя душа         ",
" твоя уникальность.         ",
" уют, который я чувствую рядом с тобой         ",
" твои таланты         ",
" твоя щедрость          ",
" твоё трудолюбие         ",
" то, как ты записываешь кружки в телеграми         ",
" твоя речь         ",
" твой нежный голос         ",
" твоё радостное настроение         ",
" твоя забота о семье         ",
" твой стиль         ",
" твои и волосы        ",
" и чёлка        ",
" твоё чистолюбие        ",
" то, как ты выражаешь свои эмоции         ",
" то, как ты поднимаешь мне настроение         ",
" то, как ты сияешь         ",
" твоя чистосердечность         ",
" то, как ты уделываешь всех в соревнованиях         ",
" твоя забота о мелочах         ",
" теплый взгляд         ",
" то, что другой тебя в этом мире не существует         ",
" ты одна такая, на 8 миллиард людей.        ",
" твоё трудолюбие        ",
" умиротворение         ",
"  то, как мы вместе играем с тобой в игры        ",
"  то, что тебе можно доверять        ",
" то, как ты мне дорога         ",
" твоё красивое, милое, доброе лицо         ",
" твой оптимизм         ",
" то, как ты проводишь своё время         ",
" то, как ты уважаешь своих родителей         ",
" твои советы         ",
" твоя честность         ",
" твоя харизма         ",
" твой характер         ",
" если ты всё ещё тут..скорее всего я написал это поздно ночью и у меня раскалывается голова..но         ",
" мне не нужны причины тебя любить        ",
" я люблю тебя просто так, без причин         ",
" и ты должна любить себя так же.         ",
" порой, мне страшно         ",
" страшно потерять тебя         ",
" я не могу без тебя, никак        ",
" без тебя меня бы тут не было  ",
" каждый день, каждое утро, каждая ночь  ",
" начинается и заканчивается тобой. ",
" иногда, эта зависимость меня пугает.. ",
" но это нормально, да?",
" ведь я ценю тебя",
" ведь ты одна такая, из 8 миллиард людей.",
" мой шанс встретить тебя - 0.0000000000125%",
" и всё же, мы тут. ",
" и ты цени себя, Сонь. другой тебя на этой планете нету, и во всей вселенной - нету. ",
" пожалуйста, цени себя так же, как я ценю тебя..         ",
" улыбнись!         ",
" и ещё..        ",
" я хочу извиниться, за все мои проступки, которые я мог причинить тебе         ",
" возможно, не осознавая этого, я поступал так..         ",
" прости меня, пожалуйста.         ",
" я никогда не хотел тебе зла, и я знаю, что ты тоже не хочешь мне никакого зла.        ",
" я доверяю тебе больше, чем кому либо.         ",
" в самые трудные времена, ты была рядом         ",
" даже тогда, когда от меня отвернулись моя семья, друзья         ",
" ты была рядом.        ",
" и я хочу быть таким же.        ",
" я не могу представить свою жизнь без тебя         ",
" всё..наверное..         ",

" как тебе сайт? сейчас я всё еще пишу его, а будущий я закончит его         ",
" если честно, я хочу быть лучше         ",
" я должен быть лучше         ",
" ...         ",
" ради себя         ",
" и ради тебя.         ",
"        ",
"          ",
"          ",
"          ",
"          ",
"          ",
"          ",
"          ",
"          ",
"          ",
"          ",
"          ",
"          ",
" если ты всё еще тут         ",
" поздравляю! тут секрет          ",
" но это уже и не секрет        ",
" я люблю тебя, Сонь         ",
"  я люблю тебя, Сонь        ",
"          ",
"  я люблю тебя, Сонь        ",
"  я люблю тебя, Сонь        ",
"  я люблю тебя, Сонь        ",
"  я люблю тебя, Сонь        ",
"  я люблю тебя, Сонь        ",
"  я люблю тебя, Сонь        ",
"   я люблю тебя, Сонь       ",
"   я люблю тебя, Сонь       ",
"   я люблю тебя, Сонь       ",
"   я люблю тебя, Сонь       ",
"я люблю тебя, Сонь",
"   я люблю тебя, Сонь       ",
"   я люблю тебя, Сонь       ",
"   м       ",
"   я люблю тебя, Сонь       ",
"  я люблю тебя, Сонь        ",
"          ",
"   я люблю тебя, Сонь       ",
"          ",
"   я люблю тебя, Сонь       ",
"          ",
"   я люблю тебя, Сонь       ",
"          ",
"   я люблю тебя, Сонь       ",
"          ",
"   я люблю тебя, Сонь       ",
"          ",
"   я люблю тебя, Сонь       ",
"          ",
"   я люблю тебя, Сонь       ",
"          ",
"   я люблю тебя, Сонь       ",
"          ",
"   я люблю тебя, Сонь       ",
"          ",
"   я люблю тебя, Сонь       ",
"          ",
"   я люблю тебя, Сонь       ",
"  я люблю тебя, Сонь        ",
"  я люблю тебя, Сонь        ",
" я люблю тебя, Сонь         ",
" я люблю тебя, Сонь         ",
" я люблю тебя, Сонь         ",
" я люблю тебя, Сонь         ",
" я люблю тебя, Сонь         ",
"          ",
"    я люблю тебя, Сонь      ",
"          ",
"    я люблю тебя, Сонь      ",
"          ",
"    я люблю тебя, Сонь      ",
"          ",
"       я люблю тебя, Сонь   ",
"          ",
"         я люблю тебя, Сонь ",
"   я люблю тебя, Сонь       ",
"   я люблю тебя, Сонь       ",
"   я люблю тебя, Сонь       ",
"          ",
];

let currentIndex = 0;
const thingText = document.getElementById('thing-text');
const nextButton = document.getElementById('next-button');
const thingsListSection = document.getElementById('things-list'); // Get the section

// Function to create a colorful animation
function createAnimation() {
  // Create 10 colorful shapes
  for (let i = 0; i < 10; i++) {
    const shape = document.createElement('div');
    shape.classList.add('colorful-shape');

    // Randomize position and size
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.width = `${Math.random() * 30 + 10}px`;
    shape.style.height = shape.style.width;

    // Add to the section
    thingsListSection.appendChild(shape);

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





// Select popup elements
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const closePopupBtn = document.getElementById('close-popup');

// Function to show the popup at a random position on the screen
function showPopup(text) {
  popupContent.textContent = text; // Set the popup text

  // Get viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Get popup dimensions (to ensure it stays within the viewport)
  const popupWidth = popup.offsetWidth;
  const popupHeight = popup.offsetHeight;

  // Calculate random position within the viewport
  const randomLeft = Math.random() * (viewportWidth - popupWidth);
  const randomTop = Math.random() * (viewportHeight - popupHeight);

  // Apply the random position
  popup.style.left = `${randomLeft}px`;
  popup.style.top = `${randomTop}px`;

  popup.style.display = 'block'; // Show the popup
}

// Function to hide the popup
function hidePopup() {
  popup.style.display = 'none'; // Hide the popup
}

// Close the popup when the close button is clicked
closePopupBtn.addEventListener('click', hidePopup);

// Add popup functionality to buttons
document.querySelectorAll('.popup-trigger').forEach(button => {
  button.addEventListener('click', () => {
    const text = button.getAttribute('data-text'); // Get the text from the button's data-text attribute
    showPopup(text); // Show the popup with the text
  });
});

// Select elements
const backgroundMusic = document.getElementById("background-music");
const playButton = document.getElementById("play-button");
const muteButton = document.getElementById("mute-button");
const unmuteButton = document.getElementById("unmute-button");

// Initialize variables
let isMuted = true; // Start with the music muted

// Function to toggle mute/unmute
function toggleMute() {
  if (isMuted) {
    backgroundMusic.muted = false; // Unmute the music
    isMuted = false;
  } else {
    backgroundMusic.muted = true; // Mute the music
    isMuted = true;
  }
}

// Add event listeners to the buttons
playButton.addEventListener("click", () => {
  backgroundMusic.play(); // Start playing the music
});

muteButton.addEventListener("click", () => {
  backgroundMusic.muted = true; // Mute the music
  isMuted = true;
});

unmuteButton.addEventListener("click", () => {
  backgroundMusic.muted = false; // Unmute the music
  isMuted = false;
});