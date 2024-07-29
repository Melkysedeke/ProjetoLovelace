import Header from "../layout/Header";
import LinkButton from "../layout/LinkButton";
import adaLovelace from "../../assets/Ada-Lovelace.svg"
import styles from "./Home.module.css"

function Home(){
    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.menu}>
                <img src={adaLovelace} alt="Ada Lovelace"/>
                <h1>Bem-vindo ao Lovelace</h1>
                <LinkButton to='/createactivity' text='Criar atividade'/>
                <LinkButton to='/accesscode' text='Acessar atividade'/>
            </div>
        </div>
    )
}

export default Home