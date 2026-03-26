import './recipe.css'
import shubaImg from '../../assets/recipe/shuba.jpg'

export default function Description() {
    return (
        <div className='recipe-description-container'>
            <img src={shubaImg} width="800" height="500" alt="Селедка под шубой"/>

            <div className='recipe-description'>
                Классическая сельдь под шубой давно стала для многих приметой Нового года. Если она стоит на столе, значит, мы празднуем! Но салат этот настолько вкусен, красив, самобытен, что сделать его можно в любое время, не обязательно ждать для этого чего-то особенного.
            </div>
        </div>
    )
}