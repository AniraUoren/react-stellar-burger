import {isResOk} from "./utils";

export const getIngredientsAPI = () => fetch(`https://norma.nomoreparties.space/api/ingredients`)
    .then(isResOk)
    .catch(err => console.error(`Произошла ошибка: ${err}`))

export const getOrderIdAPI = (data) => fetch(`https://norma.nomoreparties.space/api/orders`, {
    method: "POST",
    headers: {
        'Content-type': "application/json",
    },
    body: JSON.stringify(data)
})
    .then(isResOk)
    .catch(err => console.error(`Произошла ошибка: ${err}`))