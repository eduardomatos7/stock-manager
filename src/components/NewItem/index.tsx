import { StockContext } from "../../contexts/StockContext"
import "./index.css"
import { useContext, useEffect, useState } from "react"


function NewItem() {
  const { addItem, editItem, setEditItem, items, editItemId, editItemFunc, setEditItemId } = useContext(StockContext)
  const itemToEdit = items.find(item => item.id === editItemId)

  const [name, setName] = useState(itemToEdit?.nome || "")
  const [qntd, setQntd] = useState<number | string>(itemToEdit?.quantidade || "")
  const [price, setPrice] = useState<number | string>(itemToEdit?.preco || "")
  const [category, setCategory] = useState<string[]>(itemToEdit?.categoria?.split(", ").map(item => item.trim()) || [])
  const [description, setDescription] = useState(itemToEdit?.descricao || "")
  useEffect(() => {
    if (editItemId === null) {
      setName("")
      setQntd("")
      setPrice("")
      setCategory([])
      setDescription("")
      setEditItem(false)
    }
  }, [editItemId])

  function onSubmit(e: React.FormEvent<HTMLFormElement>,) {
    e.preventDefault()
    const data = {
      id: crypto.randomUUID(),
      nome: name,
      quantidade: qntd!,
      preco: price!,
      categoria: category.join(", "),
      descricao: description,
      dataCadastro: new Date().toLocaleDateString("pt-BR"),
      dataAtualizacao: new Date().toLocaleDateString("pt-BR"),
    }
    if (editItem) {
      editItemFunc(itemToEdit?.id!, data)
      setEditItemId(null)
      alert("Item atualizado com sucesso!")
    } else {
      addItem(data)
      setEditItemId(null)
      console.log(editItemId)
      alert("Item adicionado com sucesso!")

    }

    setName("")
    setQntd("")
    setPrice("")
    setCategory([])
    setDescription("")
    setEditItem(false)
  }
  return (
    <>
      {editItem && editItemId !== null && <h3 className="updateTitle">Atualizar Item - {itemToEdit?.nome}</h3>}
      <form onSubmit={onSubmit} className="containerForm">
        <div className="content">
          <div className="inputGroup">
            <div className="inputLabel">
              <label id="name">Nome</label>
              <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="inputLabel">
              <label id="qntd">Quantidade</label>
              <input type="number" name="qntd" required value={qntd} onChange={(e) => setQntd(e.target.value)} />

            </div>
            <div className="inputLabel">
              <label id="price">Preço</label>
              <input type="number" name="price" required value={price} onChange={(e) => setPrice(e.target.value)} />

            </div>
            <div className="inputLabel">
              <label id="categoryIpt">Categoria</label>
              <input type="text" name="categoryIpt" list="category"
                placeholder="Selecione uma categoria..." required value={category.join(", ")}
                onChange={(e) => setCategory(e.target.value.split(",").map(item => item.trim()))} />
              <datalist id="category">
                <option value="Livro" />
                <option value="Quadro" />
                <option value="Jogos" />
                <option value="Alimento" />
                <option value="Outros" />
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