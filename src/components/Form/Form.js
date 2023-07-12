import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

function Form({ isLogin, children, onSubmit}) {

    return (
        <section className="form">
            <div className="form__header">
                <Logo />
                {isLogin
                    ? <h1 className="form__title">Рады видеть!</h1>
                    : <h1 className="form__title">Добро пожаловать!</h1>
                }
            </div>
            <form id="form" className="form__container" onSubmit={onSubmit}>
                {children}
            </form>
            <div className="form__btn-container">
                <button form="form" type="submit" className="form-btn">
                        {isLogin ? 'Войти' : 'Зарегестрироваться'}
                </button>
                <p className="form__redirect">
                    { isLogin ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?'}
                </p>
                <Link type="submit" to={isLogin ? '/signup' : '/signin'} className="form__redirect-link">
                    {isLogin ? 'Регистрация' : 'Войти'}
                </Link>
            </div>
        </section>
    )
}

export default Form