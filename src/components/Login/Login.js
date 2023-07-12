import { useState } from "react";
import Form from "../Form/Form"
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();

    function handleLoginSubmit(e) {
        e.preventDefault()
        navigate("/movies");
    }

    const [focused, setFocused] = useState(false)
       
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailError = "Введите корректный email"
    const passwordError = "Что-то пошло не так..."

    const handleChange = (e) => {
        setEmail( {...email, [e.target.email]: e.target.value})
        setPassword( {...password, [e.target.password]: e.target.value})
    }
    
    const handleFocus = (e) => {
        setFocused(true)
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
                    onChange={handleChange}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                />
                <span className="form__input-error">{emailError}</span>
                <label className="form__label">Пароль</label>
                <input 
                    className="form__input"
                    type="password"
                    name="password"
                    placeholder="Ваш пароль"
                    minLength="6"
                    maxLength="40"
                    required
                    onChange={handleChange}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                />
                <span className="form__input-error">{passwordError}</span>
            </Form>
        </main>
    )
}

export default Login