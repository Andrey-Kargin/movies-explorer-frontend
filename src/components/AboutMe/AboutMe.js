import aboutMe from "../../images/about-me-img.png"

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">
                Студент
            </h2>
            <div className="about-me__info">
                <div className="about-me__info-box">
                    <div className="about-me__info-text">
                    <h3 className="about-me__name">
                        Андрей
                    </h3>
                    <p className="about-me__subtitle">
                        Фронтенд-разработчик, 23 года
                        </p>
                    <p className="about-me__desc">
                        Я родился в Казахстане, маленьком городке под названием Костанай. Около 2 лет живу в Санкт-Петербурге и большую часть этого времени проработал финансовым аналитиком. Закончил математический факультет в Queen Mary University of London с отличием. На данный момент ушел с головой в кодинг и выполняю фриланс-заказы по фронтенду для компаний разных направлений.
                    </p>
                    </div>
                    <a href="https://github.com/Andrey-Kargin" target="_blank" rel="noreferrer" className="about-me__link-gh">
                        Github
                    </a>
                </div>
                <img src={aboutMe} className="about-me__img" alt="Фото Андрея" />
            </div>
        </section>
    )
}

export default AboutMe