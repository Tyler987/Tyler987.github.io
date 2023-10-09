document.addEventListener("DOMContentLoaded", () => {
//array
    const quotes = [
        "1. The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        "2. Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
        "3. The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
        "4. If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
        "5. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon"
    ];

    const quoteElement = document.querySelector("#quote");
    let currentQuoteIndex = 0;

    function displayNextQuote() {
        quoteElement.textContent = quotes[currentQuoteIndex];
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }
//display quote when page loads
    displayNextQuote();
//change quote every 2 seconds
    setInterval(displayNextQuote, 2000); 
//adds event when button is clicked
    document.getElementById('rainbowButton').addEventListener('click', createRainbow);

    function createRainbow() {
        const rainbowDivs = document.querySelectorAll('.rainbow-box div');
//adds the colors
        rainbowDivs.forEach((div, index) => {
            setTimeout(() => {
                div.style.opacity = 1;
            }, 1000 + index * 500);
        });

//makes gold apepar
        setTimeout(() => {
            potOfGold.style.display = "block";
          }, 4000); 
    }
});

