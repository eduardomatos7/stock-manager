import { useContext } from "react"
import "../pages/Home/index.css"
import Title from "./Title"
import { StockContext } from "../contexts/StockContext"
function Dashboard() {
    const { items, itemsOut, itemsIndDate } = useContext(StockContext)
    const totalInventory = items.reduce((acc, item) => acc + Number(item.quantidade), 0)
    const uniqueItems = items.length
    const recentItems = itemsIndDate.length
    const lowStockItems = itemsOut.length
  return (
    <>
    <Title title="Dashboard"/>
                <div className='cards'>
                    <div className='card'>
                        <p>Diversidade de itens</p>
                        <p className='cardValueItem'>{uniqueItems}</p>
                    </div>
                    <div className='card'>
                        <p>Inventário total</p>
                        <p className='cardValueItem'>{totalInventory}</p>
                    </div>
                    <div className='card'>
                        <p>Itens recentes</p>
                        <p className='cardValueItem'>{recentItems}</p>
                    </div>
                    <div className='card'>
                        <p>Itens acabando</p>
                        <p className='cardValueItem'>{lowStockItems}</p>
                    </div>
                </div>
</>
  )
}

export default Dashboard