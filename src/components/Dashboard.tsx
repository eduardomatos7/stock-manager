import "../pages/Home/index.css"
import Title from "./Title"
function Dashboard() {
  return (
    <>
    <Title title="Dashboard"/>
                <div className='cards'>
                    <div className='card'>
                        <p>Diversidade de itens</p>
                        <p className='cardValueItem'>10</p>
                    </div>
                    <div className='card'>
                        <p>Diversidade de itens</p>
                        <p className='cardValueItem'>10</p>
                    </div>
                    <div className='card'>
                        <p>Diversidade de itens</p>
                        <p className='cardValueItem'>10</p>
                    </div>
                    <div className='card'>
                        <p>Diversidade de itens</p>
                        <p className='cardValueItem'>10</p>
                    </div>
                </div>
</>
  )
}

export default Dashboard