import styles from './Home.module.css'
import LinkButton from "../layout/LinkButton";

function Home(){
    return(
        <div className={styles.container_home}>
            <h1>Bem-vindo ao Lovelace</h1>
            <LinkButton to='/ProjetoLovelace/createactivity' text='Criar atividade'/>
            <LinkButton to='/ProjetoLovelace/accesscode' text='Acessar atividade'/>
        </div>
    )
}

export default Home