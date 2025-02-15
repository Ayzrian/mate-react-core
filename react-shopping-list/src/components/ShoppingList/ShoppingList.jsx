import { ShoppingListItem } from "../ShoppingListItem/ShoppingListItem";
import "./ShoppingList.scss"

export function ShoppingList() {
    return (
        <ul className="ShoppingList">
            <ShoppingListItem item={{name: "Tomato", quantity: 3}} />
            <ShoppingListItem item={{name: "Cucumber", mustHave: true}} />
            <ShoppingListItem item={{name: "Sprite"}} />
        </ul>
    )
}