import "./ShoppingListItem.scss"

export function ShoppingListItem({ item: { name, quantity = 1, mustHave }}) {
    return (
        <li className="ShoppingListItem">
            {name} - {quantity}{mustHave && <strong>M*</strong>}
        </li>
    );
}