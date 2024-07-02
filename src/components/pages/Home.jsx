import Header from "../layout/Header";
import LinkButton from "../layout/LinkButton";

function Home(){
    return(
        <div>
            <Header/>
            <h1>Bem-vindo ao Lovelace</h1>
            <LinkButton to='/ProjetoLovelace/createactivity' text='Criar atividade'/>
            <LinkButton to='/ProjetoLovelace/accesscode' text='Acessar atividade'/>
        </div>
    )
}

export default Home