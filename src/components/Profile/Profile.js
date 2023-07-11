import { Link } from "react-router-dom"

function Profile({name}) {
    return (
        <section className="profile">
            <h2 className="profile__greet">
                Привет, Андрей!
            </h2>
            <div className="profile__name">
                <p className="profile__placeholder">Имя</p>
                <p className="profile__text">Андрей</p>
            </div>
            <div className="profile__email">
                <p className="profile__placeholder">E-mail</p>
                <p className="profile__text">pochta@yandex.ru</p>
            </div>
            <Link to="/profile" className="profile__link">Редактировать</Link>
            <Link to="/" className="profile__link profile__link_signout">Выйти из аккаунта</Link>
        </section>
    )
}

export default Profile