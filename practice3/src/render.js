import { basketItems, basketFullPrice } from "./data";

export function createMenuItem(item) {
    return `
        <div class="menu-item">
            <div class="menu-item-header">
                <h3 class="dish-name">${item.name}</h3>
                <p class="dish-description">${item.description}</p>
                <span class="dish-price">${item.price} р</span>
            </div>
            <div class="menu-item-body" style="background: url(${item.url}) center / cover no-repeat">
                <button class="add-to-basket">В корзину</button>
            </div>
        </div>
    `
}

export function createBasketItem(item) {
    return `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
        </tr>
    `
}

export function renderBasket() {
    const tbody = document.querySelector("tbody")
    const tfoot = document.querySelector("tfoot")

    if (!tbody || !tfoot) return

    tbody.innerHTML = basketItems
        .map(item => createBasketItem(item))
        .join('')

    tfoot.innerHTML = `
        <tr>
            <td colspan="2">Итого: ${basketFullPrice}</td>
        </tr>
    `
}