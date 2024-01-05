import Styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
    return (
        <div className={Styles.app}>
            <DndProvider backend={HTML5Backend}>
                <AppHeader/>
                <main className={Styles.main}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </main>
            </DndProvider>
        </div>
    );
}

export default App;
