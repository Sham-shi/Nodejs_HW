import borschUrl from './assets/borsch.jpg'
import carbonaraUrl from './assets/carbonara.jpg'
import cesarUrl from './assets/cesar.jpg'
import margheritaUrl from './assets/margherita.jpg'
import cheesecakeUrl from './assets/cheesecake.png'

export const menuItems = [
    {name: 'Борщ', price: 350, description: 'Классический украинский', url: borschUrl},
    {name: 'Паста Карбонара', price: 450, description: 'С беконом и сливками', url: carbonaraUrl},
    {name: 'Салат Цезарь', price: 380, description: 'С курицей и пармизаном', url: cesarUrl},
    {name: 'Пицца Маргарита', price: 520, description: 'Томаты, моцарелла, базилик', url: margheritaUrl},
    {name: 'Чизкейк', price: 280, description: 'Классический десерт', url: cheesecakeUrl}
]

export let basketItems = []
export let basketFullPrice = 0

export function addToBasket(item) {
    basketItems.push(item)
    basketFullPrice += item.price
}

export function clearBasket() {
    basketItems.length = 0
    basketFullPrice = 0
}