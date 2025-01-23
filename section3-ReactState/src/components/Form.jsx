import React from 'react'

export default function Form() {
    const [ingredients, setIngredient] = React.useState([])
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))


    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        const capIngredient = `${newIngredient.slice(0,1).toUpperCase()}`+`${newIngredient.slice(1)}`
        
        setIngredient(prevIngredientsArray => [...prevIngredientsArray, capIngredient])

        console.log(ingredients)
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="ingredient-form">
                <input
                    type="text"
                    aria-label="ingredient"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
            <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
        
    )
}