import {configureStore} from "@reduxjs/toolkit";
import burgerIngredientsReducer from "./reducers/burger-ingredients.slice"
import burgerConstructorReducer from "./reducers/burger-constructor.slice"
export const store = configureStore({
    reducer: {
        burgerIngredients: burgerIngredientsReducer,
        burgerConstructor: burgerConstructorReducer
    },
    devTools: true
});