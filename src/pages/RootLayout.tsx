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
    </div>
    </>
  )
}

export default RootLayout