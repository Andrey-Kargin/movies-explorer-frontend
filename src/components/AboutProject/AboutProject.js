function AboutProject() {
    return (
        <section className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__text">
                <div className="about-project__column-text">
                    <h3 className="about-project__subtitle">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about-project__desc">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__column-text">
                    <h3 className="about-project__subtitle">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about-project__desc">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="about-project__time-bar">
                <ul className="about-project__stage about-project__stage_backend">
                    <li className="about-project__stage-title">
                        1 неделя
                    </li>
                    <li className="about-project__stage-subtitle">
                        Back-end
                    </li>
                </ul>
                <ul className="about-project__stage about-project__stage_frontend">
                    <li className="about-project__stage-title about-project__stage-title_frontend">
                        4 недели
                    </li>
                    <li className="about-project__stage-subtitle">
                        Front-end
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutProject