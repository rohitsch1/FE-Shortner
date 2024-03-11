import React, { useState } from 'react';
import './UrlMaker.css';
import axios from "axios";

const UrlMaker = () => {
  const [inputText, setInputText] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const generateShortUrl = async () => {
    axios.post('url/shorten', {
      // data to be sent in the request body
      longUrl: inputText,
    })
      .then(response => {
        // Handle successful response
        console.log('Response:', response.data.data.shortUrl);
        setShortUrl(response.data.data.shortUrl);
      })
      .catch(error => {
        // Handle error
        console.error('Error posting data:', error);
      });


  };

  return (<>

    <div className="container">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your url here..."
        className="text-input"
      />
      <button onClick={generateShortUrl} className="generate-button">
        Generate Short URL
      </button>
    </div>
    {shortUrl && (
      <div className="short-url">
        Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
      </div>
    )}
  </>
  );
};

export default UrlMaker;



