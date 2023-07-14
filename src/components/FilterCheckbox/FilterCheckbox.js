function FilterCheckbox({onFilter, isShortMovies}) {
    return (
        <label className="filter-checkbox">
            <input onChange={onFilter} checked={isShortMovies} className="filter-checkbox__input" type="checkbox"/>
            <span className="filter-checkbox__switch">Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox