import './recipe.css'
import Description from './description'
import Ingredients from './ingredients'
import Cooking from './cooking'

function CookingStep({num, step}) {
    return (
        <div className="recipe-cooking-step">
            <p className="recipe-cooking-step-header">Шаг {num}:</p>
            <p className="recipe-cooking-step-text">{step}</p>
        </div>
    )
}

export default function Recipe() {
    return (
        <>
            <div className="recipe-container">
                <h4 className="recipe-header">Салат "Сельдь под шубой"</h4>

                <Description/>

                <div className='recipe-info'>
                    <Ingredients/>

                    <Cooking/>
                </div>
            </div>
        </>
    )
}