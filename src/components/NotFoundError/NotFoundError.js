import { Link } from "react-router-dom"

function NotFoundError() {
    return (
        <section className="not-found-error">
            <h1 className="not-found-error__title">
                404
            </h1>
            <h2 className="not-found-error__text">
                Страница не найдена
            </h2>
            <Link className="not-found-error__link" to={-1}>
                Назад
            </Link>
        </section>
    )
}

export default NotFoundError