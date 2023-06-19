import React, { useState, useEffect } from 'react';
import './Shorten.css';
import '../services/shortUrl.js';
import { shortUrl } from '../services/shortUrl.js';

export default function Shorten() {

    const [long_url, setlong_url] = useState('');
    const [short_url, setshort_url] = useState('Your Shortened URL')
    const [btnclick, setbtnclick] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          if (btnclick) {
         
                shortUrl(long_url)
                .then(url =>{
                    console.log(url);
                    setshort_url(url);
                    setbtnclick(false);
                })  
          }
        };
      
        fetchData();
      }, [long_url, btnclick]);

    const changeValue = (event) => {
        setlong_url(event.target.value)
    }

    const short = () => {
        if (long_url != "") {
            setbtnclick(true);
        }
        else {
            console.log("Somethings never change")
        }
    };

    const copy = async () =>{
        await navigator.clipboard.writeText(short_url)
    }

    return (
        <div>
            <div className="url">
                <div className="long_url">
                    <form action="">
                        <input type="text" value={long_url} onChange={changeValue} placeholder='Add The Long URL' />
                        <button type="button" onClick={short}>Shorten It</button>
                    </form>
                </div>
                <div className="short_url">
                    <form action="">
                        <input type="text" name="short_url" value={short_url} readOnly />
                        <button type="button" onClick={copy}>Copy</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
