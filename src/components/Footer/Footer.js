import { useLocation } from "react-router-dom";

function Footer() {
    const { pathname } = useLocation();

    return (
        <>
            {pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" ?
            <footer className="footer">
                <p className="footer__text">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </p>
                <div className="footer__wrapper">
                    <p className="footer__copyright">
                        &copy; 2023
                    </p>
                    <ul className="footer__link-list">
                        <li>
                            <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Andrey-Kargin" target="_blank" rel="noreferrer" className="footer__link">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
            : ''}
        </>

    )
}

export default Footer