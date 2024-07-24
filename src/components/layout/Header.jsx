import React, { useEffect } from 'react';
import LinkButton from './LinkButton';
import styles from './Header.module.css';

function toogleMenu() {
    const hamburguer = document.querySelector(`.${styles.hamburguer}`);
    const nav = document.querySelector(`.${styles.menu}`);

    if (hamburguer && nav) {
        hamburguer.addEventListener('click', () => {
            nav.classList.toggle(styles.active);
        });
    }
}

function Header() {
    useEffect(() => {
        toogleMenu();
    }, []); // O array vazio como dependência garante que o efeito só execute uma vez, após o primeiro render

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Lovelace</h1>
            <nav className={styles.nav}>
                <button className={styles.hamburguer}></button>
                <ul className={styles.menu}>
                    <li className={styles.item}><LinkButton text="Praticar" to="" /></li>
                    <li className={styles.item}><LinkButton text="Login/Cadastro" to="/login" /></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
