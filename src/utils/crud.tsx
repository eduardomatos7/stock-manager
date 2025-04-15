
export async function DeleteItem(id: string, items: any[], setItems: (items: any[]) => void) {
    const itemsRemoved = items.filter(item => item.id !== id)
    await setItems(itemsRemoved)
    localStorage.setItem("items", JSON.stringify(itemsRemoved))
}