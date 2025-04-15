import { Link, Outlet, useLocation } from "react-router-dom"
import Title from "../../components/Title"
import { useState, useEffect } from "react"
import "./items.css"

function Items() {
  const location = useLocation();
  const [activeListItem, setActiveListItem] = useState(false);
  const [activeNewItem, setActiveNewItem] = useState(false);

  useEffect(() => {
    if (location.pathname.endsWith("listItems")) {
      setActiveListItem(true);
      setActiveNewItem(false);
    } else if (location.pathname.endsWith("newItem")) {
      setActiveListItem(false);
      setActiveNewItem(true);
    } else { 
      setActiveListItem(false);
      setActiveNewItem(false);
    }
  }, [location.pathname]);
 

  return (
    <>
      <Title title="Stock Items" />
      <nav>
        <ul className="navListNew">
          <li>
            <Link onClick={() => (setActiveListItem(true), setActiveNewItem(false))} to="listItems" 
            className={activeListItem ? "active" : ""}
            >Todos os itens</Link>
          </li>
          <li>
            <Link to="newItem" className={activeNewItem ? "active" : ""}
            onClick={() => (setActiveNewItem(true), setActiveListItem(false))}
            >Novo item</Link>
          </li>
        </ul>
      </nav>
      <hr/>
      
      {(activeListItem === false && activeNewItem === false) ? 
      <div className="noSelect">
        <h3>Para adicionar um novo item ou ver todos os itens, clique no menu correspondente acima.</h3>
        <p>qui você poderá visualizar todos os itens já adicionados, além de editar, excluir e adicionar novos itens.</p>
      </div>
      : <Outlet/>}
    </>
  )
}

export default Items