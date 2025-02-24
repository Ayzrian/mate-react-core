

export function ShoppingListPanel({ mustHaveFilter, onMustHaveFilterChange,  }) {
    const handleCheckBoxChange = (event) => {
        onMustHaveFilterChange(event.target.checked);
    }

    return (<div>
        <label>Only Must Have:</label>
        <input type="checkbox" value={mustHaveFilter} onChange={handleCheckBoxChange} />
    </div>)
}
