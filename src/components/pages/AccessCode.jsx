import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../formActivity/SubmitButton'
import BackButton from '../layout/BackButton';
import styles from './AccesCode.module.css'

function AccessCode() {
    const [accessCode, setAccessCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4000/activities?accessCode=${accessCode}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    const activity = data[0];
                    navigate(`/access/${activity.id}`);
                } else {
                    alert('Activity not found');
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <BackButton/>
            <div className={styles.access_box}>
                <h1>Acessar Atividade</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Código de Acesso"
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)}
                    />
                    <SubmitButton text="Acessar"/>
                </form>
            </div>
        </>
    );
}

export default AccessCode;
