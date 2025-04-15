import { StockContext } from "../../contexts/StockContext"
import "./index.css"
import { useContext, useState } from "react"


function NewItem() {
  const [name, setName] = useState("")
  const [qntd, setQntd] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  const [category, setCategory] = useState<string[]>([])
  const [description, setDescription] = useState("")
  const { addItem } = useContext(StockContext)

  function onSubmit(e: React.FormEvent<HTMLFormElement>, ) {
    e.preventDefault()
    const data = {
      id: crypto.randomUUID(),
      nome: name,
      quantidade: qntd,
      preco: price,
      categoria: category.join(", "),
      descricao: description
    }
    addItem(data)
    setName("")
    setQntd(0)
    setPrice(0)
    setCategory([])
    setDescription("")
  }
  return (
    <>
      <form onSubmit={onSubmit} className="containerForm">
        <div className="content">
        <div className="inputGroup">
        <div className="inputLabel">
        <label id="name">Nome</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="inputLabel">
        <label id="qntd">Quantidade</label>
        <input type="number" name="qntd" value={qntd} onChange={(e) => setQntd(+e.target.value)}/>

        </div>
        <div className="inputLabel">
        <label id="price">Preço</label>
        <input type="number" name="price" value={price} onChange={(e) => setPrice(+e.target.value)}/>

        </div>
        <div className="inputLabel">
        <label id="categoryIpt">Categoria</label>
        <input type="text" name="categoryIpt" list="category" 
        placeholder="Selecione uma categoria..." value={category.join(", ")} 
        onChange={(e) => setCategory(e.target.value.split(",").map(item => item.trim()))}/>
        <datalist id="category">
          <option value="Teste1" />
          <option value="Teste2" />
          <option value="Teste3" />
          <option value="Teste4" />
          <option value="Teste5" />
        </datalist>
        </div>
        </div>
        <div className="textArea">
        <label id="description">Descrição</label>
        <textarea name="description" rows={5} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button className="btnSave">Salvar</button>
        </div>
      </form>
    </>
  )
}

export default NewItem