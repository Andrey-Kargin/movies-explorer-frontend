import { Link } from "react-router-dom";

import logo from "../../images/logo.svg"

function Logo() {
    return (
        <Link to="/">
            <img src={logo} className="header__logo" alt="Логотип" />
        </Link>
    )
}

export default Logo