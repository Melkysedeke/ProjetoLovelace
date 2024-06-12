import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AccessPage() {
    const [accessCode, setAccessCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirecione para a página de realização da atividade usando o código de acesso
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
        <div>
            <h1>Acessar Atividade</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Código de Acesso"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                />
                <button type="submit">Acessar</button>
            </form>
        </div>
    );
}

export default AccessPage;
