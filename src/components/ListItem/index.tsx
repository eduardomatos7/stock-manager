import { useContext } from "react"
import "./index.css"
import { StockContext } from "../../contexts/StockContext"
import { Link } from "react-router-dom"

function ListItem() {
const { items, deleteItem, setEditItem, setEditItemId} = useContext(StockContext)

  return (
    <div className="containerListItem">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Em estoque</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          { items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td className="algnAbs">{item.quantidade} unid.</td>
            <td>{item.categoria}</td>
            <td>
              <div className="btnsAlign">
              <button className='btnSee bd'><Link 
              to={`/items/listItems/${item.id}`} style={{textDecoration: 'none', color: "#000"}}>Ver</Link></button>
              <button className='btnUpdate bd'><Link to="/items/newItem" 
              onClick={()=> {
                setEditItem(true); 
                setEditItemId(item.id);
              }}
              style={{textDecoration: 'none', color: '#000'}}
              >Atualizar</Link></button>
              <button className='btnDel bd' onClick={() => deleteItem(item.id)}>Excluir</button>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListItem