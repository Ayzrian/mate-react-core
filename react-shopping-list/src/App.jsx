import { Header } from "./components/Header/Header"
import { ShoppingList } from "./components/ShoppingList/ShoppingList"

function App() {
  return (
    <div>
      <Header>
        <em>Shoppping List App</em>
      </Header>

      <ShoppingList />
    </div>
  )
}

export default App
