import Styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/reducers/burger-ingredients.slice";

function App() {
    const [ingredients, setIngredients] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, []);

    useEffect(() => {
        const getData = async () => {
            fetch(`https://norma.nomoreparties.space/api/ingredients`)
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    return Promise.reject(`Ошибка ${res.status}`);
                })
                .then(data => {
                    console.log(data)
                })
                .catch(err => {
                    console.error(`Произошла ошибка: ${err}`)
                })
        }
    //         setIsLoading(true);
    //
    //         fetch(`https://norma.nomoreparties.space/api/ingredients`)
    //             .then(res => {
    //                 if (res.ok) {
    //                     return res.json();
    //                 }
    //                 return Promise.reject(`Ошибка ${res.status}`);
    //             })
    //             .then(data => {
    //                 setIngredients(data.data);
    //             })
    //             .catch(err => {
    //                 console.error(`Произошла ошибка: ${err}`)
    //             })
    //             .finally(() => {
    //                 setIsLoading(false);
    //             })
    //         //TODO функцию в утиль, конфиг запросов собрать
    //     }
    //
        getData();
    }, []);

    return (
        <div className={Styles.app}>
            <AppHeader/>
            {ingredients.length > 0 && !isLoading &&
                <main className={Styles.main}>
                    <BurgerIngredients data={ingredients}/>
                    <BurgerConstructor/>
                </main>}
        </div>
    );
}

export default App;
