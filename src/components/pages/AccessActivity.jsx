// components/AccessActivity.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AccessActivity() {
    const { id } = useParams();
    const [activity, setActivity] = useState(null);
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/activities/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setActivity(data);
                // Inicializar as respostas com as perguntas da atividade
                setResponses(data.questions.map(question => ({
                    id: question.id,
                    text: ''
                })));
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleResponseChange = (questionId, value) => {
        const updatedResponses = responses.map(response => {
            if (response.id === questionId) {
                return { ...response, text: value };
            }
            return response;
        });
        setResponses(updatedResponses);
    };

    const submitResponses = (e) => {
        e.preventDefault();
        // Enviar respostas para o servidor ou processar de acordo
        console.log(responses);
    };

    if (!activity) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{activity.name}</h1>
            <p>{activity.description}</p>
            <form onSubmit={submitResponses}>
                {activity.questions.map((question) => (
                    <div key={question.id}>
                        <strong>{question.proposal}</strong>
                        <p>{question.text}</p>
                        <textarea
                            value={responses.find(response => response.id === question.id)?.text || ''}
                            onChange={(e) => handleResponseChange(question.id, e.target.value)}
                        />
                    </div>
                ))}
                <button type="submit">Enviar Respostas</button>
            </form>
        </div>
    );
}

export default AccessActivity;
