import Styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import React, {useState} from "react";
import IngredientDetails from "../ingredient-details/ingredient-details";

function App() {

    return (
        <div className={Styles.app}>
            <AppHeader/>
            <main className={Styles.main}>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </main>
        </div>
    );
}

export default App;
