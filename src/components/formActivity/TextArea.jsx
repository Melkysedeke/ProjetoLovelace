/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';

function TextArea({ name, placeholder, value, handleOnChange, required }) {
    const textareaRef = useRef(null);

    function autoResize() {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto'; // Redefine a altura para calcular a nova altura correta
        const maxHeight = 5 * 20; // Assume 20px de altura por linha, ajustável conforme o necessário
        if (textarea.scrollHeight > maxHeight) {
            textarea.style.height = maxHeight + 'px';
            textarea.style.overflowY = 'auto'; // Mostra a barra de rolagem vertical se a altura máxima for atingida
        } else {
            textarea.style.height = textarea.scrollHeight + 'px';
            textarea.style.overflowY = 'hidden'; // Esconde a barra de rolagem vertical
        }
    }

    useEffect(() => {
        autoResize(); // Ajusta a altura inicial baseada no valor inicial
    }, [value]);

    return (
        <>
            <textarea
                ref={textareaRef}
                id="mensagem"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    handleOnChange(e);
                    autoResize();
                }}
                required={required}
                rows="1"
            />
        </>
    );
}

export default TextArea;
