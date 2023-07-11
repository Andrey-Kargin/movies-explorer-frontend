import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

function Form({ isLogin, children }) {
    return (
        <form className="form">
            <div className="form__header">
                <Logo />
                {isLogin
                    ? <h1 className="form__header_title">Рады видеть!</h1>
                    : <h1 className="form__header_title">Добро пожаловать!</h1>
                }
            </div>
            <div className={ isLogin ? "form__container form__container-login" : "form__container form__container-register"}>
                {children}
            </div>
            <div className="form__btn-container">
                <Link className="form-btn__redirect" to={isLogin ? '/movies' : '/signin'}>
                    <button className="form-btn">
                        {isLogin ? 'Войти' : 'Зарегестрироваться'}
                    </button>
                </Link>
                <p className="form__redirect">
                    { isLogin ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?'}
                </p>
                <Link to={isLogin ? '/signup' : '/signin'} className="form__redirect-link">
                    {isLogin ? 'Регистрация' : 'Войти'}
                </Link>
            </div>
        </form>
    )
}

export default Form