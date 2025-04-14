import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import "../pages/Home/index.css"

function RootLayout() {
  return (
    <>
    <div className="container">
    <Header/>
    <main>
        <Outlet/>
    </main>
    <footer className="footer"><p>Feito com React e React Router!</p></footer>
    </div>
    </>
  )
}

export default RootLayout