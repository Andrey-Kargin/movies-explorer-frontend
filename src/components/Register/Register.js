import Form from "../Form/Form"
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    function handleRegisterSubmit() {
        navigate("/signin");
    }

    return (
        <main className="register">
            <Form
                isLogin={false}
                onSubmit={handleRegisterSubmit}>
                <label className="form__label">Имя</label>
                <input 
                    className="form__input"
                    placeholder="Ваше имя"
                    required
                />
                <span className="form__input-error name_error"></span>
                <label className="form__label">E-mail</label>
                <input 
                    className="form__input"
                    type="email"
                    placeholder="Ваш e-mail"
                    required
                />
                <span className="form__input-error email_error"></span>
                <label className="form__label">Пароль</label>
                <input 
                    className="form__input"
                    type="password"
                    placeholder="Ваш пароль"
                    required
                />    
                <span className="form__input-error password_error">Что-то пошло не так...</span>   
            </Form>
        </main>
    )
}

export default Register