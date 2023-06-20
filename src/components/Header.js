import React from 'react';
import '../styles/Header.css'

export const Header = () => {
    return (
        <div className='bg-blue'>
            <div className="head">
               <div className="title">
                <h1>Shortly</h1>
               </div>

               <div className="info">
                <ul>
                   <li>Features</li>
                   <li>Pricing</li>
                   <li>Resources</li>
                </ul>
               </div>

               <div className="auth">
                 <ul>
                    <li>SignUp</li>
                    <li>LogIn</li>
                 </ul>
               </div>
            </div>
        </div>
    );
}
