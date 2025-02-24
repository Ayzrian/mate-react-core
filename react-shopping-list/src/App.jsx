import { useMemo, useState } from "react"
import { Header } from "./components/Header/Header"
import { ShoppingList } from "./components/ShoppingList/ShoppingList"
import { ShoppingListForm } from "./components/ShoppingListForm/ShoppingListForm"
import { ShoppingListPanel } from "./components/ShoppingListPanel/ShoppingListPanel"


const items = [
  {id: 1, name: "Tomato", quantity: 3},
  {id: 2, name: "Cucumber", mustHave: true},
  {id: 3, name: "Sprite"},
  {id: 4, name: "Mellon"}
]


function App() {
  const [list, setList] = useState(items);
  const [mustHaveFilter, setMustHaveFilter] = useState(false);

  const handleSubmit = (item) => {
    setList([...list, { ...item, id: Math.floor(Math.random() * 100000) + 1 }]);
  }

  const handleItemDelete = (itemId) => {
    const index = list.findIndex((item) => item.id === itemId);

    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  const resultingList = useMemo(() => {
    if (mustHaveFilter) {
      return list.filter((item) => item.mustHave);
    }

    return list;
  }, [list, mustHaveFilter])

  return (
    <>
      <Header>
        <em>Shoppping List App</em>
      </Header>

      <ShoppingListForm onSubmit={handleSubmit} />

      <br/>
      <ShoppingListPanel mustHaveFilter={mustHaveFilter} onMustHaveFilterChange={setMustHaveFilter} />
      <br/>

      <ShoppingList list={resultingList} onItemDelete={handleItemDelete}/>
    </>
  )
}

export default App
