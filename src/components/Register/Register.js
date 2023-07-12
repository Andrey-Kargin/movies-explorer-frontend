import Form from "../Form/Form"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [focused, setFocused] = useState(false)
   
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const nameError = "Имя должно быть длиной не менее 2 символов"
    const emailError = "Введите корректный email"
    const passwordError = "Что-то пошло не так..."

    const handleChange = (e) => {
        setName( {...name, [e.target.name]: e.target.value})
        setEmail( {...email, [e.target.email]: e.target.value})
        setPassword( {...password, [e.target.password]: e.target.value})
    }
    
    const handleFocus = (e) => {
        setFocused(true)
    }

    function handleSubmit(e) {
        e.preventDefault()

        navigate("/movies");
    }

    return (
        <main className="register">
            <Form
                isLogin={false}
                onSubmit={handleSubmit}>
                <label className="form__label">Имя</label>
                <input 
                    className="form__input"
                    placeholder="Ваше имя"
                    required
                    minLength={2}
                    maxLength={40}
                    onChange={handleChange}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                />
                <span className="form__input-error">{nameError}</span>
                <label className="form__label">E-mail</label>
                <input 
                    className="form__input"
                    type="email"
                    placeholder="Ваш e-mail"
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
                    placeholder="Ваш пароль"
                    required
                    minLength="6"
                    maxLength="40"
                    onChange={handleChange}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                />    
                <span className="form__input-error">{passwordError}</span>   
            </Form>
        </main>
    )
}

export default Register