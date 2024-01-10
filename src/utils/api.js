export const getIngredientsAPI = () => fetch(`https://norma.nomoreparties.space/api/ingredients`)
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    })
    .catch(err => console.error(`Произошла ошибка: ${err}`))

export const getOrderIdAPI = (data) => fetch(`https://norma.nomoreparties.space/api/orders`, {
    method: "POST",
    headers: {
        'Content-type': "application/json",
    },
    body: JSON.stringify(data)
})
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    })
    .catch(err => console.error(`Произошла ошибка: ${err}`))

//TODO Проверку вынести в отдельную утилиту