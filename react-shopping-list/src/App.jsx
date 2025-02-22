import { useState } from "react"
import { Header } from "./components/Header/Header"
import { ShoppingList } from "./components/ShoppingList/ShoppingList"
import { ShoppingListForm } from "./components/ShoppingListForm/ShoppingListForm"


const items = [
  {id: 1, name: "Tomato", quantity: 3},
  {id: 2, name: "Cucumber", mustHave: true},
  {id: 3, name: "Sprite"},
  {id: 4, name: "Mellon"}
]


function App() {
  const [list, setList] = useState(items);

  const handleSubmit = (item) => {
    setList([...list, { ...item, id: Math.floor(Math.random() * 100000) + 1 }])
  }

  return (
    <>
      <Header>
        <em>Shoppping List App</em>
      </Header>

      <ShoppingListForm onSubmit={handleSubmit} />

      <ShoppingList list={list}/>
    </>
  )
}

export default App
