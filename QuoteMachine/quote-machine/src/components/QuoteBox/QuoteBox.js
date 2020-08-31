import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './QuoteBox.css';



const QuoteBox = () => {
  const [allQuotes, setAllQuotes] = useState({})
  const [quote, setQuote] = useState({text: 'Tih udert frestip aclimbin gou', author:'Laxsetuv'})
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false)


  
  const randomColor = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  const randomNum = () =>  Math.round(Math.random() * allQuotes.quotes.length);

  const handleClick = async () =>{
    const color = randomColor()
    document.documentElement.style.setProperty('background', color)
    document.documentElement.style.setProperty('--theme-color', color)
    console.log('random: ', randomNum())
    setQuote(allQuotes.quotes[randomNum()])
    console.log(quote)
    console.log()
  }

useEffect(() => {
    async function getData () {
      setisError(false);
      setIsLoading(true);
      try {
        const result = await axios('https://type.fit/api/quotes')

        setAllQuotes({quotes: result.data})
      } catch(error) {
        setisError(true);
      }

      setIsLoading(false); 
    };

    getData()
 
  }, []) 


    
  return(
    
  <div className="QuoteBox">
    {isError && <div>Something went wrong ...</div>}
    {console.log('render', allQuotes)}

    {isLoading ? (<div> Loading </div>) :
    (<div>
    <blockquote>{quote.text}</blockquote>
    <address>{quote.author}</address>
    <div className='buttons'>

    <button className="tweet-btn"><img src='./tweeter.png' alt="mypic"/></button> 
    <button className="quote-btn" onClick={handleClick}>New quote</button>
    </div>
    </div>
    )}
  </div>
    
  )
}


QuoteBox.propTypes = {};

QuoteBox.defaultProps = {};

export default QuoteBox;
