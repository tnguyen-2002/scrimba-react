export default function Form() {
    return (
        <form className="ingredient-form">
            <input
                type="text"
                aria-label="ingredient"
                placeholder="e.g. oregano"
            />
            <button>+ Add ingredient</button>
                
        </form>
    )
}