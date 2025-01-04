// Declares a constant array containing strings of quotes
const quotes = [
  "It always seems impossible until it’s done. - Nelson Mandela",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
  "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Believe you can and you’re halfway there. - Theodore Roosevelt",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "The journey of a thousand miles begins with one step. - Lao Tzu",
  "Failure is simply the opportunity to begin again, this time more intelligently. - Henry Ford",
  "You miss 100% of the shots you don’t take. - Wayne Gretzky",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "Dream big and dare to fail. - Norman Vaughan",
  "The harder the conflict, the greater the triumph. - George Washington",
  "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
  "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
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
