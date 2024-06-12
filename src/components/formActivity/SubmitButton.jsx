/* eslint-disable react/prop-types */
import styles from '../layout/LinkButton.module.css'

function SubmitButton({ text }) {
    return (
        <button type="submit" className={styles.btn}>
            {text}
        </button>
    );
}

export default SubmitButton;
