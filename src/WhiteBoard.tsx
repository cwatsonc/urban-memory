import React from 'react';
import css from './WhiteBoard.module.css';
import stateModel from './state-diagram.png'; // Tell webpack this JS file uses this image


export default function WhiteBoard() {
    // Import result is the URL of your image
    return <img className={css.root} src={stateModel} alt="The Voter FSA" />;
}