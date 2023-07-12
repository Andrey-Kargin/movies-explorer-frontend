import { NavLink } from "react-router-dom"
import { useState } from "react";

import profileIcon from "../../images/profile-icon.svg"

function Navigation() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
      };

    return (
        <nav className="navigation">
            <div onClick={handleClick} className={isActive ? "navigation__burger navigation__burger_opened" : "navigation__burger"}>
                <span>
                </span>
            </div>
            <ul className={isActive ? 'navigation__list active' : 'navigation__list'}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'navigation__link_active' : "navigation__link")}>
                        Главная
                    </NavLink>                        
                </li>
                <li>
                    <NavLink onClick={handleClick} to="/movies" className={({ isActive }) => (isActive ? 'navigation__link_active' : "navigation__link")}>
                        Фильмы
                    </NavLink>                        
                </li>
                <li>
                    <NavLink onClick={handleClick} to="/saved-movies" className={({ isActive }) => (isActive ? 'navigation__link_active' : "navigation__link")}>
                        Сохранённые фильмы
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={handleClick} to="/profile" className="navigation__link navigation__profile-link">
                        <img src={profileIcon} className="navigation__profile-link-img" alt="Иконка профиля"/>
                        Аккаунт
                    </NavLink>
                </li>
            </ul>
            <div className={isActive ? "navigation__overlay navigation__overlay_active" : 'navigation__overlay'}/>
        </nav>
    )
}

export default Navigation