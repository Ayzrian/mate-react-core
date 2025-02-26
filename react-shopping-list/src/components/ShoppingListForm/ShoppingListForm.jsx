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

    const handleX3Click = () => {
        onSubmit({ name })
        onSubmit({ name })
        onSubmit({ name })
        setName("")
    }

    return (<div>
        <input value={name} onChange={handleChange} type="text" placeholder="Input an item name"/>
        <button onClick={handleCreateClick}>
            Create
        </button>
        <button onClick={handleX3Click}>
            X3
        </button>
    </div>)
}