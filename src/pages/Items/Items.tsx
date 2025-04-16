import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import Title from "../../components/Title"
import { useState, useEffect, useContext } from "react"
import "./items.css"
import { StockContext } from "../../contexts/StockContext";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
function Items() {
  const { itemId } = useParams()
  const location = useLocation();
  const [activeListItem, setActiveListItem] = useState(false);
  const [activeNewItem, setActiveNewItem] = useState(false);
  const { setEditItemId } = useContext(StockContext)

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
            onClick={() => (setActiveNewItem(true), setActiveListItem(false), setEditItemId(null))}
            >Novo item</Link>
          </li>
        </ul>
      </nav>
      <hr/>
      
      {(activeListItem === false && activeNewItem === false) ? (
        location.pathname.endsWith(`listItems/${itemId}`) ? (
          itemId ? (
            <ShowDetails />
          ) : (
            <div className="container">
              <h3 style={{color: "#fff"}}>Item não encontrado</h3>
            </div>
          )
        ) : (
          <div className="noSelect">
            <h3>Para adicionar um novo item ou ver todos os itens, clique no menu correspondente acima.</h3>
            <p>Aqui você poderá visualizar todos os itens já adicionados, além de editar, excluir e adicionar novos itens.</p>
          </div>
        )
      ) : (
        <Outlet />
      )}
    </>
  )
}

export default Items