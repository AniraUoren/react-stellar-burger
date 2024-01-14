import {isResOk} from "./utils";
import {api_url} from "./consts";

export const getIngredientsAPI = () => fetch(`${api_url}/ingredients`)
    .then(isResOk)
    .catch(err => console.error(`Произошла ошибка: ${err}`))

export const getOrderIdAPI = (data) => fetch(`${api_url}/orders`, {
    method: "POST",
    headers: {
        'Content-type': "application/json",
    },
    body: JSON.stringify(data)
})
    .then(isResOk)
    .catch(err => console.error(`Произошла ошибка: ${err}`))