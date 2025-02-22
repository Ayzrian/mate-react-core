import { ShoppingListItem } from "../ShoppingListItem/ShoppingListItem";
import "./ShoppingList.scss"

const items = [
    {id: 1, name: "Tomato", quantity: 3},
    {id: 2, name: "Cucumber", mustHave: true},
    {id: 3, name: "Sprite"},
    {id: 4, name: "Mellon"}
]

export function ShoppingList() {
    return (
        <ul className="ShoppingList">
            {
                items.map((item) => <ShoppingListItem key={item.id} item={item}/> )
            }
        </ul>
    )
}