import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div>
                <h2 className='title'>Shortly</h2>
        
            <div className="lists">
                <div className="col">
                <h3>Features</h3>
                    <ul className='features'>
                    <li>Link Shortning</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
                </div>

                <div className="col">
                    <h3>Resources</h3>
                <ul className='resources'>
                    <li>Blog</li>
                    <li>Developer</li>
                    <li>Support</li>
                </ul>
                </div>

                <div className="col">
                    <h3>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Career</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
