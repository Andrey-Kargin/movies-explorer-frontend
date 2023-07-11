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
                <div className="about-project__stage about-project__stage_first">
                    <p className="about-project__stage-title">
                        1 неделя
                    </p>
                    <p className="about-project__stage-subtitle">
                        Back-end
                    </p>
                </div>
                <div className="about-project__stage about-project__stage_second">
                    <p className="about-project__stage-title about-project__stage-title_second">
                        4 недели
                    </p>
                    <p className="about-project__stage-subtitle">
                        Front-end
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject