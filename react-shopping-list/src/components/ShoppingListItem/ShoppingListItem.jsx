
export function ShoppingListItem({ item: { name, quantity = 1 }}) {
    return (
        <li>
            {name} - {quantity}
        </li>
    );
}