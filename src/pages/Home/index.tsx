import Dashboard from '../../components/Dashboard'
import Header from '../../components/Header'
import Tables from '../../components/Tables'
export default function Home() {
    return (
        <>
            <div className="container">
                <Header />
                <Dashboard />
                <Tables/>
            <footer className="footer">Feito com React e React Router!</footer>
            </div>
        </>
    )
}