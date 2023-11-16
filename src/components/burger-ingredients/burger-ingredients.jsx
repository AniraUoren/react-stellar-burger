import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import Styles from "./burger-ingredients.module.css"

import {data} from "../../utils/data";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";


function BurgerIngredients() {
    const [current, setCurrent] = React.useState('bun')

    return (
        <div className="mr-10">
            <p className="text text_type_main-large mt-10 mb-5">
                Соберите бургер
            </p>
            <div className="mb-10">
                <div style={{display: 'flex'}} className="mb-10">
                    <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                        Булки
                    </Tab>
                    <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                        Соусы
                    </Tab>
                    <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                        Начинки
                    </Tab>
                </div>
                <div className="custom-scroll" style={{overflowY: "scroll", maxHeight: "756px", maxWidth: "600px"}}>
                    <h2 className="text text_type_main-medium">Булки</h2>
                    <ul className={`${Styles.list} mb-10`}>
                            {
                                data.map(elem => {
                                    if (elem.type === "bun") {
                                        return (
                                            <BurgerIngredient ingredient={elem} key={elem._id}/>
                                        )
                                    }
                                })
                            }
                    </ul>

                    <h2 className="text text_type_main-medium">Соусы</h2>

                    <ul className={`${Styles.list} mb-10`}>
                            {
                                data.map(elem => {
                                    if (elem.type === "sauce") {
                                        return (
                                            <BurgerIngredient ingredient={elem} key={elem._id}/>
                                        )
                                    }
                                })
                            }
                    </ul>

                    <h2 className="text text_type_main-medium">Начинки</h2>

                    <ul className={`${Styles.list} mb-10`}>
                            {
                                data.map(elem => {
                                    if (elem.type === "main") {
                                        return (
                                            <BurgerIngredient ingredient={elem} key={elem._id}/>
                                        )
                                    }
                                })
                            }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BurgerIngredients;