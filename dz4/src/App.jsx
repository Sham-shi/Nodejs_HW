import './App.css'

import SectionTitle from './components/sectionTitle.jsx'
import Header from './components/header.jsx'
import Book from './components/book/book.jsx'
import Group from './components/musicGroup/group.jsx'
import Recipe from './components/recipe/recipe.jsx'

function App() {

return (
<>
    <div className='container'>
        <Header/>

        <section id="book">
            <SectionTitle title={"Задание №1 - Книга"}/>
            <Book/>
        </section>

        <section id='group'>
            <SectionTitle title={"Задание №2 - Музыкальная группа"}/>
            <Group/>
        </section>

        <section id='recipe'>
            <SectionTitle title={"Задание №3 - Рецепт"}/>
            <Recipe/>
        </section>
    </div>

</>
)
}

export default App
