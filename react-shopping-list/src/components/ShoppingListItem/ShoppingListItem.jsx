import "./ShoppingListItem.scss"
import classNames from "classnames";

export function ShoppingListItem({ item: { id, name, quantity = 1, mustHave }, onItemDelete}) {

    const itemClass = classNames('ShoppingListItem', {
        'ShoppingListItem_must-have': mustHave
    })

    const handleDeleteClick = () => {
        onItemDelete(id)
    }

    return (
        <li className={itemClass}>
            <span>{name} - {quantity}</span>
            <button onClick={handleDeleteClick}>X</button>
        </li>
    );
}