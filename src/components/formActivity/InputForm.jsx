/* eslint-disable react/prop-types */

function InputForm({ type, name, placeholder, value, handleOnChange, required}) {
    return (
        <>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
                required={required}
            />
        </>
    );
}

export default InputForm;
