import { ShoppingListItem } from "../ShoppingListItem/ShoppingListItem";
import "./ShoppingList.scss"

export function ShoppingList({ list }) {
    return (
        <ul className="ShoppingList">
            {
                list.map((item) => <ShoppingListItem key={item.id} item={item}/> )
            }
        </ul>
    )
}