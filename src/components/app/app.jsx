import Styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/reducers/burger-ingredients.slice";

function App() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getIngredients());
    }, []);

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
