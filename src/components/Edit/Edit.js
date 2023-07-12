import { Link } from "react-router-dom"

function Edit() {
    return (
        <main className="profile">
            <h2 className="profile__greet">
                Привет, Андрей!
            </h2>
            <div className="profile__name">
                <p className="profile__placeholder">Имя</p>
                <input type="text" className="edit__input profile__text" defaultValue="Андрей"/>
            </div>
            <div className="profile__email">
                <p className="profile__placeholder">E-mail</p>
                <input type="text" className="edit__input profile__text" defaultValue="pochta@yandex.ru"/>
            </div>
            <span className="edit_error">При обновлении профиля произошла ошибка.</span>
            <Link to="/profile" className="edit__btn" >
                Сохранить
            </Link>
        </main>
    )
}

export default Edit