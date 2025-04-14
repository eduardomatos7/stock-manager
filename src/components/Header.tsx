import { Link } from "react-router-dom"
import "../pages/Home/index.css"
function Header() {
    return (
        <header className="header">
            <h3>REACT STOCK</h3>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                        <Link to="/Items">Itens</Link>
                    </li>

                </ul>
            </nav>
        </header>

    )
}
export default Header