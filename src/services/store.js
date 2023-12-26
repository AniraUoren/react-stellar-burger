import {configureStore} from "@reduxjs/toolkit";
import burgerIngredientsReducer from "./reducers/burger-ingredients.slice"

export const store = configureStore({
    reducer: {
        burgerIngredients: burgerIngredientsReducer
    },
    devTools: true
});