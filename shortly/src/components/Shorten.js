import React from 'react';
import './Shorten.css';

export default function Shorten() {
    return (
        <div>
            <div className="url">
                <div className="long_url">
                    <form action="">
                        <input type="text" name="long_url" id="long_url" placeholder='Add The Long' />
                        <button type="button">Shorten It</button>
                    </form>
                </div>
                <div className="short_url">
                    <form action="">
                        <input type="text" name="long_url" id="long_url"  />
                        <button type="button">Copy</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
