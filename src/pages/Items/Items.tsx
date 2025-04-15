import { Link, NavLink, Outlet } from "react-router-dom"
import Title from "../../components/Title"

function Items() {
  return (
    <>
      <Title title="Stock Items" />
      <nav>
        <ul className="navListNew">
          <li>
            <Link to="">Todos os itens</Link>
          </li>
          <li>
          <NavLink to="newItem" className={({ isActive }) => isActive ? "active" : ""}>Novo item</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  )
}

export default Items