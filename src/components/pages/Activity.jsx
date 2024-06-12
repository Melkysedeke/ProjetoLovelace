// components/ActivityDetail.jsx
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Activity.module.css'

function ActivityDetail() {
    const { id } = useParams();
    const [activity, setActivity] = useState();

    useEffect(() => {
        fetch(`http://localhost:4000/activities/${id}`)
            .then((response) => response.json())
            .then((data) => setActivity(data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!activity) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container_form}> 
            <h1>{activity.name}</h1>
            <h2>{activity.description}</h2>
            <ul className={styles.questions_list}>
                {activity.questions.map((question) => (
                    <li key={question.id}>
                        <strong>{question.proposal}</strong>
                        <p>{question.text}</p>
                    </li>
                ))}
            </ul>
            <h3>Código de Acesso</h3>
            <h4>{activity.accessCode}</h4>
        </div>
    );
}

export default ActivityDetail;
