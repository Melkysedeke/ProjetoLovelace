/* eslint-disable react/prop-types */
import TextArea from '../formActivity/TextArea';
import trash from '../../assets/trash.svg'
import styles from './QuestionBox.module.css'

function QuestionBox({ id, text, handleQuestionChange, handleRemove, px }) {
    const handleTextChange = (e) => {
        handleQuestionChange(id, 'text', e.target.value);
    };

    const remove=(e)=>{
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.question_box}>
            <TextArea
                name="question"
                placeholder="Pergunta"
                value={text}
                handleOnChange={handleTextChange}
                required={true}
            />
            <p>Resposta</p>
            <button className={styles.trash} onClick={remove}>
                <img src={trash} alt="deletar" />
            </button>
        </div>
    );
}

export default QuestionBox;
