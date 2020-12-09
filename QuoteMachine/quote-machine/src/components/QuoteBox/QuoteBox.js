import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './QuoteBox.css';
import MagicRainbowButton from "../MagicRainbowButton/index";

const QuoteBox = () => {
  const [allQuotes, setAllQuotes] = useState({})
  const [quote, setQuote] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false)
  
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const randomNum = (length) =>  Math.round(Math.random() * length);

  const handleClick = () =>{
    const color = randomColor()
    document.documentElement.style.setProperty('background', color)
    document.documentElement.style.setProperty('--theme-color', color)
    
    setQuote(allQuotes.quotes[randomNum(allQuotes.quotes.length)])

  }

useEffect(() => {
    async function getData () {
      setisError(false);
      setIsLoading(true);
      let result;
      try {
        result = await axios('https://type.fit/api/quotes')
        setAllQuotes({quotes: result.data})
        
      } catch(error) {
        setisError(true);
      }

      setIsLoading(false); 
      return result.data
    };

    let qts = getData()

    async function setQts (data) {
      data = await data
      setQuote(data[randomNum(data.length)])
    }

    setQts(qts)
    
}, []) 

  return (
    <div className="QuoteBox">
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div> Loading </div>
      ) : (
        <div>
          <div className="quote">
            <blockquote>{quote.text}</blockquote>
            <address>- {quote.author}</address>
          </div>
          <div className="buttons">
            <a
              href={`https://twitter.com/intent/tweet?hashtags=quotes&text='${quote.text} ${quote.author}'`}
              target="_blank"
            >
              <div id="twit-btn">
                <img src="./tweeter.png" alt="twitter" />
              </div>
            </a>
            <MagicRainbowButton
              id="quote-btn"
              onClick={handleClick}
              children={<p>New Quote</p>}
            />
          </div>
        </div>
      )}
    </div>
  );
}


export default QuoteBox;
