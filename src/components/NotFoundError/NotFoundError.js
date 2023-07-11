import { Link } from "react-router-dom"

function NotFoundError() {
    return (
        <section className="not-found-error">
            <h2 className="not-found-error__title">
                404
            </h2>
            <h3 className="not-found-error__text">
                Страница не найдена
            </h3>
            <Link className="not-found-error__link" to={-1}>
                Назад
            </Link>
        </section>
    )
}

export default NotFoundError