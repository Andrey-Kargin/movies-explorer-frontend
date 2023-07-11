import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form__wrapper">
                <input className="search-form__input" type="text" placeholder="Фильм" />
                <button type="submit" className="search-form__btn"></button>
            </form>
            <FilterCheckbox/>
        </section>
    )
}

export default SearchForm