import "./ShoppingListItem.scss"
import classNames from "classnames";

export function ShoppingListItem({ item: { name, quantity = 1, mustHave }}) {

    const itemClass = classNames('ShoppingListItem', {
        'ShoppingListItem_must-have': mustHave
    })

    return (
        <li className={itemClass}>
            {name} - {quantity}
        </li>
    );
}