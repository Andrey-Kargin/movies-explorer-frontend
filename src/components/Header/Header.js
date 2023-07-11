import { Route, Routes, NavLink, useLocation } from "react-router-dom";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header() {
    const {pathname} = useLocation();

    return (
        <>
            {pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" || pathname === "/profile" ?
            <header className="header">
                <div className={`header__wrapper header__wrapper_${
                    pathname === "/" ? 'about-project' : "main"
                    }`}
                    >
                    <Logo />
                    <Routes>
                        <Route path="/" element={[
                            <ul className="header__menu-list">
                                <li>
                                    <NavLink to="/signup" className="header__link header__link_register">
                                        Регистрация
                                    </NavLink>                        
                                </li>
                                <li>
                                    <NavLink to="/signin" className="header__link header__link_login">
                                        Войти
                                    </NavLink>                        
                                </li>
                            </ul>
                        ]} />
                        <Route path="/movies" element={<Navigation />} />
                        <Route path="/saved-movies" element={<Navigation />} />
                        <Route path="/profile" element={<Navigation />} />
                    </Routes>
                </div>
            </header>
             : ''}
        </>
    )
}

export default Header