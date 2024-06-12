/* eslint-disable react/prop-types */

function InputForm({ type, name, placeholder, value, handleOnChange, required}) {
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
                required={required}
            />
        </div>
    );
}

export default InputForm;
