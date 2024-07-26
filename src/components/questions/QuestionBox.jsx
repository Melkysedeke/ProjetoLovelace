/* eslint-disable react/prop-types */
import InputForm from '../formActivity/InputForm';
import TextArea from '../formActivity/TextArea';
import trash from '../../assets/trash.svg'
import styles from './QuestionBox.module.css'

function QuestionBox({ id, proposal, text, handleQuestionChange, handleRemove }) {
    const handleProposalChange = (e) => {
        handleQuestionChange(id, 'proposal', e.target.value);
    };

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
                placeholder="Proposta"
                value={proposal}
                handleOnChange={handleProposalChange}
                required={true}
            />
            <TextArea
                name="text"
                placeholder="Texto para interpretação"
                value={text}
                handleOnChange={handleTextChange}
                required={true}
            />
            <button className={styles.trash} onClick={remove}>
                <img src={trash} alt="deletar" />
            </button>
        </div>
    );
}

export default QuestionBox;
