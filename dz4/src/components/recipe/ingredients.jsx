import './recipe.css'
import IngredientItem from './ingredientItem'

export default function Ingredients() {
    return (
        <div className="recipe-items">
            <h4>Состав / Ингредиенты (на 6 порций):</h4>
            <IngredientItem name="Картофель" amount="500 г" />
            <IngredientItem name="Морковь" amount="500 г" />
            <IngredientItem name="Свекла" amount="500 г" />
            <IngredientItem name="Сельд соленая" amount="1-2 шт" />
            <IngredientItem name="Лук репчатый" amount="100 г" />
            <IngredientItem name="Майонез" amount="250 г" />
            <IngredientItem name="Яйцо" amount="4 шт" />
        </div>
    )
}