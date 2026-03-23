import './style.css'

import { menuItems, addToBasket, clearBasket } from './data.js'
import { createMenuItem, renderBasket } from './render.js'

document.querySelector('#app').innerHTML = `
<div class="container">
    <header class="header">
        <h1>Меню на сегодня</h1>
        <p class="date">${new Date().toLocaleString()}</p>
    </header>

    <section>
        <div class="menu-container">
            <h2 class="menu-header">Наши блюда</h2>
            <div class="menu-items">
                ${menuItems.map(item => createMenuItem(item)).join('')}
            </div>
        </div>
    </section>

    <section class="basket-section">
        <div class="basket-container">
            <h2 class="basket-header">Ваш заказ</h2>
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Блюдо</th>
                            <th>Стоимость</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2">Итого: 0</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <button class="clear-basket">Очистить</button>
        </div>
    </section>

    <footer class="footer">
        <h3>Приятного аппетита !</h3>
    </footer>
</div>
`

document.querySelectorAll(".add-to-basket").forEach((button, index) => {
    button.addEventListener('click', () => {
        addToBasket(menuItems[index])

        renderBasket()
    })
})

document.querySelector(".clear-basket").addEventListener('click', () => {
    clearBasket()
    renderBasket()
})