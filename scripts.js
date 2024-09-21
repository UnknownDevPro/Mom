document.addEventListener('DOMContentLoaded', () => {
  // Check if the elements exist before adding event listeners

  // For the main page elements
  const ctaButton = document.querySelector('.cta-button');
  const moreButton = document.querySelector('.more-button');

  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      const message = document.getElementById('message');
      if (message) {
        message.style.display = 'block';
        window.scrollTo({
          top: message.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }

  if (moreButton) {
    moreButton.addEventListener('click', () => {
      alert('You are my favorite mother! I love you so much. Hope you like this website. :)');
    });
  }

  // For the words page elements
  const generateButton = document.querySelector('.generate-button');
  const wordDisplay = document.getElementById('word-display');

  if (generateButton && wordDisplay) {
    const phrases = [
      "I love you more than anything!",
      "HAPPY BIRTHDAY",
      "Your strength and kindness mean the world to me.",
      "You're the best mom anyone could ask for.",
      "Thank you for everything you do for me.",
      "Hope your having a great day!",
      "WHAT YOU GOT THIS MESSAGE IT IS A SECRET MESSAGE NO ONE SHOULD KNOW ABOUT",
      "🥳",
      "Did you know that your the best MOM?",
      "This is made by MAU"

    ];

    function generateRandomPhrase() {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      const randomPhrase = phrases[randomIndex];
      wordDisplay.textContent = randomPhrase;
    }

    generateButton.addEventListener('click', generateRandomPhrase);
  }

  // Example of handling button click on words.html (if applicable)
  document.querySelectorAll('.word-button').forEach(button => {
    button.addEventListener('click', () => {
      alert(`You selected: ${button.textContent}`);
      // You can replace the alert with other actions if needed.
    });
  });
});
