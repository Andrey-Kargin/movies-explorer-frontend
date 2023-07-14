import { useState } from "react";
import Form from "../Form/Form"
import useForm from '../../hooks/useForm';


function Login({onLogin}) {

    const { enteredValues, handleChange} = useForm();

    const [focused, setFocused] = useState(false)
       
    const emailError = "Введите корректный email"
    const passwordError = "Что-то пошло не так..."



    function handleSubmit(e) {
        e.preventDefault()
        onLogin({
            email: enteredValues.email,
            password: enteredValues.password,
          });
    }
    
    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <main className="login">
            <Form
            isLogin={true}
            onSubmit={handleSubmit}
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
                    value={enteredValues.email || ''}
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
                    value={enteredValues.password || ''}
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