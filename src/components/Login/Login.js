import Form from "../Form/Form"
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    function handleLoginSubmit() {
        navigate("/movies");
    }

    return (
        <main className="login">
            <Form
            isLogin={true}
            onSubmit={handleLoginSubmit}
            >
                <label className="form__label">Email</label>
                <input 
                    className="form__input"
                    type="email"
                    name="email"
                    placeholder="Ваш Email"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span className="form__input-error email_error"></span>
                <label className="form__label">Пароль</label>
                <input 
                    className="form__input"
                    type="password"
                    name="password"
                    placeholder="Ваш пароль"
                    minLength="6"
                    maxLength="40"
                    required
                />
                <span className="form__input-error password_error"></span>
            </Form>
        </main>
    )
}

export default Login