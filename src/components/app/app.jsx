import Styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import React from "react";

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
