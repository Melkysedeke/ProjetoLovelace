/* eslint-disable react/prop-types */
import InputForm from '../formActivity/InputForm';
import TextArea from '../formActivity/TextArea';
import {BsFillTrashFill} from 'react-icons/bs'
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
        <div className={styles.qBox}>
            <InputForm
                type="text"
                name="proposal"
                placeholder="Proposta/Pergunta"
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
            <button className={styles.qButton} onClick={remove}>
                    <BsFillTrashFill>Excluir</BsFillTrashFill>
            </button>
        </div>
    );
}

export default QuestionBox;
