import Styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import React, {useEffect} from "react";

function App() {
    const [ingredients, setIngredients] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const res = await fetch(`https://norma.nomoreparties.space/api/ingredients`);
            const data = await res.json();

            setIngredients(data.data);
            setIsLoading(false);
            //TODO функцию в утиль, конфиг запросов собрать
        }

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
