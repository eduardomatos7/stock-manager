import { useContext } from "react"
import "./index.css"
import { StockContext } from "../../contexts/StockContext"

function ListItem() {
const { items, deleteItem } = useContext(StockContext)

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
              <button className='btnSee bd'>Ver</button>
              <button className='btnUpdate bd'>Atualizar</button>
              <button className='btnDel bd' onClick={() => deleteItem(item.id)}>Excluir</button>
              </div>
            </td>
          </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default ListItem