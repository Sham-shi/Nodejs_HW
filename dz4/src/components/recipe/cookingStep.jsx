import './recipe.css'

export default function CookingStep({num, step}) {
    return (
        <div className="recipe-cooking-step">
            <p className="recipe-cooking-step-header">Шаг {num}:</p>
            <p className="recipe-cooking-step-text">{step}</p>
        </div>
    )
}