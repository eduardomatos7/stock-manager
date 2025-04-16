import { useContext } from "react"
import { StockContext } from "../contexts/StockContext"
import { Link } from "react-router-dom"

function Tables() {
    const { itemsIndDate, itemsOut } = useContext(StockContext)
    return (
        <div className="sectionsToDetails">
            <div className="itemsRecent">
                <table className='tableRecent'>
                    <thead>
                        <tr >
                            <th>Itens recentes (adicionados nos últimos 10 dias)</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsIndDate.map((item) => {
                            return <tr className="bgTr" key={item.id}>
                                <td>{item.nome}</td>
                                <td><button className='btnSee'><Link 
                                            to={`/items/listItems/${item.id}`} 
                                            style={{textDecoration: 'none', color: "#000"}}
                                            >Ver</Link></button></td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
            <div className="itemsOut">
                <table>
                    <thead>
                        <tr>
                            <th>Itens acabando</th>
                            <th>Qntd.</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsOut.map((item) => {
                            return <tr className="bgTr" key={item.id}>
                                <td>{item.nome}</td>
                                <td className="algnAbs">{item.quantidade}</td>
                                <td><button className='btnSee'><Link 
                                to={`/items/listItems/${item.id}`} 
                                style={{textDecoration: 'none', color: "#000"}}
                                >Ver</Link></button></td>
                            </tr>
                        })

                        }

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Tables