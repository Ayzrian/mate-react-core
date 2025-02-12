
export function ShoppingListItem({ item: { name, quantity = 1, mustHave }}) {
    return (
        <li>
            {name} - {quantity}{mustHave && <strong>M*</strong>}
        </li>
    );
}