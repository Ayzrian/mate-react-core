

export function ShoppingListPanel({ mustHaveFilter, onMustHaveFilterChange, onSortByChange  }) {
    const handleCheckBoxChange = (event) => {
        onMustHaveFilterChange(event.target.checked);
    }

    return (<div>
        <label>Only Must Have:</label>
        <input type="checkbox" value={mustHaveFilter} onChange={handleCheckBoxChange} />

        <div>
            Sort by:
            <button onClick={() => onSortByChange('mustHave')}>Must Have</button>
            <button onClick={() => onSortByChange('quantity')}>Quantity</button>
            <button onClick={() => onSortByChange('')}>Reset</button>
        </div>
    </div>)
}
