import linkIcon from "../../images/link-icon.svg"

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">
                Портфолио
            </h2>
            <ul className="portfolio__link-list">
                <li className="portfolio__link-item">
                    <a href="https://andrey-kargin.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="portfolio__link">
                        <p className="portfolio__link-text">Статичный сайт</p>
                        <img src={linkIcon} className="portfolio__link-icon" alt="Иконка ссылки" />
                    </a>
                </li>
                <li className="portfolio__link-item">
                    <a href="https://andrey-kargin.github.io/russian-travel/" target="_blank" rel="noreferrer" className="portfolio__link">
                        <p className="portfolio__link-text">Адаптивный сайт</p>
                        <img src={linkIcon} className="portfolio__link-icon" alt="Иконка ссылки" />
                    </a>
                </li>
                <li className="portfolio__link-item">
                    <a href="https://mesto.andreykargin.nomoredomains.rocks/" target="_blank" rel="noreferrer" className="portfolio__link">
                        <p className="portfolio__link-text">Одностраничное приложение</p>
                        <img src={linkIcon} className="portfolio__link-icon" alt="Иконка ссылки" />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio