/* eslint-disable react/prop-types */
import InputForm from '../formActivity/InputForm';
import {BsFillTrashFill} from 'react-icons/bs'

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
        <div>
            <InputForm
                type="text"
                name="proposal"
                placeholder="Proposta/Pergunta"
                value={proposal}
                handleOnChange={handleProposalChange}
                required={true}
            />
            <InputForm
                type="text"
                name="text"
                placeholder="Texto para interpretação"
                value={text}
                handleOnChange={handleTextChange}
                required={true}
            />
            <button onClick={remove}>
                    <BsFillTrashFill>Excluir</BsFillTrashFill>
            </button>
        </div>
    );
}

export default QuestionBox;
