export function isResOk (res){
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const getIngredientsFromState = (state) => {
    return state.burgerIngredients.burgerIngredients;
}

export const getIngredientsLoadingStatusFromState = (state) => {
    return state.burgerIngredients.burgerIngredientsLoaded
}

export const getViewedIngredientFromState = (state) => {
    return state.burgerIngredients.viewedIngredient;
}

export const getModalStatusFromState = (state) => {
    return state.burgerIngredients.showModal;
}

export const getConstructorFromState = (state) => {
    return state.burgerConstructor.constructor;
}

export const getBunFromState = (state) => {
    return state.burgerConstructor.bun;
}

export const getOrderIdFromState = (state) => {
    return state.burgerConstructor.orderId;
}

export const getPriceFromState = (state) => {
    return state.burgerConstructor.orderPrice;
}