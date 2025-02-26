import { useMemo, useState } from "react"
import { Header } from "./components/Header/Header"
import { ShoppingList } from "./components/ShoppingList/ShoppingList"
import { ShoppingListForm } from "./components/ShoppingListForm/ShoppingListForm"
import { ShoppingListPanel } from "./components/ShoppingListPanel/ShoppingListPanel"


const items = [
  {id: 1, name: "Tomato", quantity: 3},
  {id: 2, name: "Cucumber", quantity: 1, mustHave: true},
  {id: 3, name: "Sprite", quantity: 5, mustHave: true},
  {id: 4, name: "Mellon", quantity: 1}
]


function App() {
  const [list, setList] = useState(items);
  const [mustHaveFilter, setMustHaveFilter] = useState(false);
  const [sortBy, setSortBy] = useState('');

  const handleSubmit = (item) => {
    setList((list) => [...list, { ...item, id: Math.floor(Math.random() * 100000) + 1, quantity: 1 }]);
  }

  const handleItemDelete = (itemId) => {
    const index = list.findIndex((item) => item.id === itemId);

    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  const resultingList = useMemo(() => {
    const results = mustHaveFilter ? list.filter((item) => item.mustHave) : list;

    if (!sortBy) {
      return results;
    }

    switch(sortBy) {
      case 'mustHave':
        return [...results].sort((a, b) => {
          if (a.mustHave && b.mustHave) {
            return 0
          }

          if (a.mustHave && !b.mustHave) {
            return -1;
          }

          return 1;
        });
      case 'quantity':
        return [...results].sort((a, b) => b.quantity - a.quantity);
      default:
        throw new Error('Unknown field name!');
    }
  }, [list, mustHaveFilter, sortBy]) 

  return (
    <>
      <Header>
        <em>Shoppping List App</em>
      </Header>

      <ShoppingListForm onSubmit={handleSubmit} />

      <br/>
      <ShoppingListPanel
        mustHaveFilter={mustHaveFilter}
        onMustHaveFilterChange={setMustHaveFilter}
        onSortByChange={setSortBy}
      />
      <br/>

      <ShoppingList list={resultingList} onItemDelete={handleItemDelete}/>
    </>
  )
}

export default App
