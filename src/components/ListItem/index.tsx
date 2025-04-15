import "./index.css"

function ListItem() {
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
          <tr>
            <td>a1o3l2ws-ak34sidi-sk213mnxh</td>
            <td>Maraca</td>
            <td className="algnAbs">128 unid.</td>
            <td>Livros</td>
            <td>
              <div className="btnsAlign">
              <button className='btnSee bd'>Ver</button>
              <button className='btnUpdate bd'>Atualizar</button>
              <button className='btnDel bd'>Excluir</button>
              </div>
            </td>
          </tr>
          <tr>
          <td>aolws-aksidi-skmnxh</td>
            <td>7 Wonders</td>
            <td className="algnAbs">8 unid.</td>
            <td>Jogos</td>
            <td>
              <div className="btnsAlign">
              <button className='btnSee bd'>Ver</button>
              <button className='btnUpdate bd'>Atualizar</button>
              <button className='btnDel bd'>Excluir</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListItem