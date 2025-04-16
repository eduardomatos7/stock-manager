import { useContext } from "react"
import { StockContext } from "../../contexts/StockContext"
import { Link, useParams } from "react-router-dom"
import styles from "./Details.module.css"
function ShowDetails() {
    const { itemId } = useParams()
    const { items, setEditItem, setEditItemId, deleteItem } = useContext(StockContext)
    const item = items.find(item => item.id === itemId)
    if (!item) {
        return <h3 style={{ color: "#fff", fontWeight: 300, marginTop: "1rem" }}>Item não encontrado</h3>
    }

    return (
        <div className={styles.contentDetails}>
            <div className={styles.headerDetails}>
                <h3 className={styles.titleItem}>{item.nome}</h3>
                <button className={styles.btnUpdateDetails}>
                    <Link to="/items/newItem"
                        onClick={() => {
                            setEditItem(true);
                            setEditItemId(item.id);
                        }} style={{textDecoration: 'none', color: "#000", padding: "0.3rem 1rem"}}>Atualizar</Link>
                </button>
                <button className={styles.handleDeleteBtn}>
                    <Link to="/items/listItems"  onClick={()=> {deleteItem(item.id)}} 
                    style={{textDecoration: 'none', color: "#000", padding: "0.3rem 1rem"}}>Excluir</Link>
                </button>
            </div>
            <div className={styles.details}>
                <p><strong>Categoria:</strong> {item.categoria}</p>
                <p><strong>Quantidade:</strong> {item.quantidade} unid.</p>
                <p><strong>Preço:</strong> R$ {typeof item.preco === "number" ? item.preco.toFixed(2).replace(".", ",") : parseFloat(item.preco).toFixed(2).replace(".", ",")}</p>
            </div>
            <div className={styles.description}>
                <p><strong>Descrição:</strong> { item.descricao ? item.descricao : "Nenhuma descrição fornecida"}</p>
            </div>
            <div className={styles.date}>
                <p>Cadastrado em: {item.dataCadastro}</p>
                <p>Atualizado em: {item.dataAtualizacao}</p>
            </div>

        </div>
    )
}

export default ShowDetails