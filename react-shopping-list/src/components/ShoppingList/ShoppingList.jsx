import { ShoppingListItem } from "../ShoppingListItem/ShoppingListItem";

export function ShoppingList() {
    return (
        <ul>
            <ShoppingListItem item={{name: "Tomato", quantity: 3}} />
            <ShoppingListItem item={{name: "Cucumber"}} />
            <ShoppingListItem item={{name: "Sprite"}} />
        </ul>
    )
}