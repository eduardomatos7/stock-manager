import { Link } from "react-router-dom"
import "../pages/Home/index.css"
import { useContext } from "react"
import { StockContext } from "../contexts/StockContext"
function Header() {
    const { setEditItemId } = useContext(StockContext)
    return (
        <header className="header">
            <h3>REACT STOCK</h3>
            <nav>
                <ul>
                    <li>
                        <Link to="/" onClick={() => {setEditItemId(null)}}>Início</Link>
                        <Link to="/Items" onClick={() => {setEditItemId(null)}}>Itens</Link>
                    </li>

                </ul>
            </nav>
        </header>

    )
}
export default Header