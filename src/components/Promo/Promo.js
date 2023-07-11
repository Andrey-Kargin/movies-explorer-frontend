import promo from "../../images/promo.svg"

function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <img src={promo} className="promo__img" alt="Спираль промо"/>
        </section>
    );
}

export default Promo