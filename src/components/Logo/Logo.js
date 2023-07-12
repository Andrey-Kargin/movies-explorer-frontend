import { Link } from "react-router-dom";

import logo from "../../images/logo.svg"

function Logo() {
    return (
        <Link className="header__logo" to="/">
            <img src={logo} alt="Логотип" />
        </Link>
    )
}

export default Logo