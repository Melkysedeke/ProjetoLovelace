import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton(){
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <button onClick={handleBackClick}>Voltar</button>
    )
}