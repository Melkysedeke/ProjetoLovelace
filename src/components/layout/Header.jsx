import LinkButton from './LinkButton'

function Header(){
    return(
        <header>
            <LinkButton text="Praticar" to=""/>
            <LinkButton text="Login/Cadastro" to="/login"/>
        </header>
    )
}

export default Header