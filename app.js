const newQuoteButton = document.getElementById("new-quote");
newQuoteButton.addEventListener("click", getQuote)

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';


async function getQuote() {
  try {
    const response = await fetch(endpoint);

    if(!response) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    displayQuote(json.message);
  } catch (err) {
    console.log(err)
    alert('Failed to fetch new quote')
  }
 
}

function displayQuote(quote) {
  const quoteText = document.getElementById("quote-text");
  quoteText.textContent = quote;
}