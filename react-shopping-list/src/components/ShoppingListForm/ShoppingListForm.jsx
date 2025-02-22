import { useState } from "react"


export function ShoppingListForm({ onSubmit }) {
    const [name, setName] = useState("")

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleCreateClick = () => {
        onSubmit({ name })
        setName("")
    }

    return (<div>
        <input value={name} onChange={handleChange} type="text" placeholder="Input an item name"/>
        <button onClick={handleCreateClick}>
            Create
        </button>
    </div>)
}