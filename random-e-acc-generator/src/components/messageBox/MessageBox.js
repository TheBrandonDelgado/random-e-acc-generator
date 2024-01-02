import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './messageBox.css';
import { selectPhrase, getPhrase } from './messageBoxSlice';

function MessageBox() {
    const phrase = useSelector(selectPhrase);
    const dispatch = useDispatch();

    return (
        <div className="message-box">
            <p>{phrase}</p>
            <button onClick={() => dispatch(getPhrase())}>Generate</button>
        </div>
    )
}

export default MessageBox;