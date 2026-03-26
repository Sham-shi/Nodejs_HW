import './recipe.css'

export default function IngredientItem({name, amount}) {
    return (
        <div className="recipe-item">
            <p className="recipe-item-name">{name}</p>
            <p className="recipe-item-amount">{amount}</p>
        </div>
    )
}