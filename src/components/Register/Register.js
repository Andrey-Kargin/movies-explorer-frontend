import Form from "../Form/Form"

function Register() {
    return (
        <section className="register">
            <Form
                isLogin={false}>
                <label className="form__label">Имя</label>
                <input 
                    className="form__input"
                    placeholder="Ваше имя"
                />
                <label className="form__label">E-mail</label>
                <input 
                    className="form__input"
                    type="email"
                    placeholder="Ваш e-mail"
                />
                <label className="form__label">Пароль</label>
                <input 
                    className="form__input"
                    type="password"
                    placeholder="Ваш пароль"
                />       
            </Form>
        </section>
    )
}

export default Register