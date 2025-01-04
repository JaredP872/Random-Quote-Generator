// Declares a constant array containing strings of quotes
const quotes = [
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
  "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
  "The best way to predict the future is to create it. - Peter Drucker",
  "It always seems impossible until it is done. - Nelson Mandela",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
  "You miss 100% of the shots you don’t take. - Wayne Gretzky",
  "Act as if what you do makes a difference. It does. - William James",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Life is what happens when you’re busy making other plans. - John Lennon",
  "Get busy living or get busy dying. - Stephen King",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Turn your wounds into wisdom. - Oprah Winfrey",
];

// Selects the p element with id (quote-text) so that we can update it dynamicaly
const quoteText = document.getElementById("quote-text");
// Selects the button element with the id (quote-btn) so that we can add a click event listener to it
const quoteBtn = document.getElementById("quote-btn");

// Adds a click event listener to the button.
// When clicked the button isnide of the arrow function runs
quoteBtn.addEventListener("click", () => {
  // Math.ramdom genartes a random decimal between 0 and 1.
  // Math.floor rounds down the number to ensure its a valid array index
  // Math.random() * quotes.length: Scales the random number to the range of the array's index
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Selects a random quote from the quotes array
  const randomQuote = quotes[randomIndex];
  // Updates the text of the p element to the randomly selected quote
  quoteText.textContent = randomQuote;

  // document.body.style.backgroundColor = 'hsl(...)' changes background color of the page to a random hue
  // hsl(${Math.random() * 360}, 100%, 90%) Genarates a random hue between 0 and 360
  // The 100% below means full satuartion
  // The 90% below means Lighness of 90% for a pastel-like color
  document.body.style.backgroundColor = `hsl(${
    Math.random() * 360
  }, 100%, 90%)`;

  // Resets the animation
  quoteText.style.animation = "none";
  // Re-applies the animation after a tiny delay to trigger it again.
  setTimeout(() => {
    quoteText.style.animation = "";
  }, 10);
});
