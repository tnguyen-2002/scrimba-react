export default function Form() {
    return (
        <main>
            <form className="ingredient-form">
                <input
                    type="text"
                    aria-label="ingredient"
                    placeholder="e.g. oregano"
                />
            <button>Add ingredient</button>
                
        </form>
        </main>
        
    )
}