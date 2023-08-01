import Form from "../Form/Form"
import { useState } from "react";
import useForm from "../../hooks/useForm";
import { EMAIL_REGEX, USER_NAME_REGEX } from "../../utils/constants";

function Register({onRegister}) {

    const { enteredValues, handleChange} = useForm();

    const [focused, setFocused] = useState(false)
   

    const nameError = "Имя должно быть длиной не менее 2 символов"
    const emailError = "Введите корректный email"
    const passwordError = "Что-то пошло не так..."

    const handleFocus = (e) => {
        setFocused(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onRegister({
            name: enteredValues.name,
            email: enteredValues.email,
            password: enteredValues.password,
          });
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
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    maxLength={40}
                    pattern={USER_NAME_REGEX}
                    value={enteredValues.name || ''}
                    onChange={handleChange}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                />
                <span className="form__input-error">{nameError}</span>
                <label className="form__label">E-mail</label>
                <input 
                    className="form__input"
                    type="email"
                    name="email"
                    placeholder="Ваш e-mail"
                    pattern={EMAIL_REGEX}
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
                    required
                    minLength="6"
                    maxLength="40"
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

export default Register