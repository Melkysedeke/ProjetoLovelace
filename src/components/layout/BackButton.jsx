import React from 'react';
import { useNavigate } from 'react-router-dom';
import returno from '../../assets/return.svg';
import styles from './BackButton.module.css'

export default function BackButton(){
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <button className={styles.btn} onClick={handleBackClick}>
            <img src={returno} alt="return" />
        </button>
    )
}