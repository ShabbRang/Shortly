import React, { useState } from 'react';
import './Shorten.css';

export default function Shorten() {

    const [long_url, setlong_url] = useState('');

    const changeValue = (event) => {
        setlong_url(event.target.value)
    }

    const short = () => {
       if(long_url != ""){
        
       }
       else{
        console.log("Somethings never change")
       }
    };

    return (
        <div>
            <div className="url">
                <div className="long_url">
                    <form action="">
                        <input type="text" value={long_url} onChange={changeValue} placeholder='Add The Long' />
                        <button type="button" onClick={short}>Shorten It</button>
                    </form>
                </div>
                <div className="short_url">
                    <form action="">
                        <input type="text" name="short_url" id="short_url"  />
                        <button type="button" >Copy</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
