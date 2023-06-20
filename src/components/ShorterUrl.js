import React, { useState, useEffect } from 'react';
import '../styles/shorterUrl.css';
import '../services/shortUrl.js';
import { short_Url } from '../services/shortUrl.js';

export const ShorterUrl = () => {

    const [longUrl, setlongUrl] = useState('');
    const [shortUrl, setshortUrl] = useState('Your Shortened URL')
    const [btnclick, setbtnclick] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (btnclick) {

                short_Url(longUrl)
                    .then(url => {
                        // console.log(url);
                        setshortUrl(url);
                        setbtnclick(false);
                    })
            }
        };

        fetchData();
    }, [longUrl, btnclick]);

    const changeValue = (event) => {
        setlongUrl(event.target.value)
    }

    const short = () => {
        if (longUrl != "") {
            setbtnclick(true);
        }
        else {
            console.log("Somethings never change")
        }
    };

    const copy = async () => {
        await navigator.clipboard.writeText(shortUrl)
    }

    return (
        <div>
            <div className="url">
                <div className="longUrl">
                    <div className="designCircle">
                    </div>
                        <form action="">
                            <input type="text" value={longUrl} onChange={changeValue} placeholder='Add The Long URL' />
                            <button type="button" onClick={short}>Shorten It</button>
                        </form>
                </div>
                <div className="shortUrl">
                    <form action="">
                        <input type="text" name="shortUrl" value={shortUrl} readOnly />
                        <button type="button" onClick={copy}>Copy</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
