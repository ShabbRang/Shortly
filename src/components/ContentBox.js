import React from 'react';
import '../styles/contentBox.css';
import { ShorterUrl } from './ShorterUrl';

export const ContentBox=() =>{
  return (
    <>
    <div className='mainContent'>
      <div className="catchPhrase">
        <h1>More Than Just Shorter Links</h1>
        <p>Build your brand's recongnition and get detailed insights on how your links are performing</p>
      </div>
      <div className="picture">

      </div>
    </div>
    <div className="urlShortner">
    <ShorterUrl />
    </div>
    </> 
  );
}



