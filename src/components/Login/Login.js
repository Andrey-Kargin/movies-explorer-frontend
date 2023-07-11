import Form from "../Form/Form"

function Login(handleLogin) {
    return (
        <section className="login">
            <Form
            isLogin={true}
            >
                <label className="form__label">Email</label>
                <input 
                    className="form__input"
                    type="email"
                    placeholder="Ваш Email"
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

export default Login