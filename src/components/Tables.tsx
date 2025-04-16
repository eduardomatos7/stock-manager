import { useContext } from "react"
import { StockContext } from "../contexts/StockContext"

function Tables() {
    const { items } = useContext(StockContext)
    return (
        <div className="sectionsToDetails">
            <div className="itemsRecent">
                <table className='tableRecent'>
                    <thead>
                        <tr >
                            <th>Itens recentes</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => {
                            return <tr className="bgTr" key={item.id}>
                                <td>{item.nome}</td>
                                <td><button className='btnSee'>Ver</button></td>
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
                        {items.map((item ) => {
                            return <tr className="bgTr">
                            <td>{item.nome}</td>
                            <td className="algnAbs">{item.quantidade}</td>
                            <td><button className='btnSee'>Ver</button></td>
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