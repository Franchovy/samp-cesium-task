
import React, { useState, useEffect } from 'react';
import styles from './App.css';

export default function CreateBillboardButton(props) { 
    function handleButtonClick () {
        const enteredName = prompt('Please enter a unique name for your billboard');
        
        const enteredCity = prompt('Please enter a city name');

        props.addBillboard(enteredName, enteredCity);
    }

    return <div className="createBillboard-container">        
        <button className="createBillboard-button" onClick={handleButtonClick}>Enter</button>
    </div>

};



