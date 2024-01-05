import React, {useEffect, useState} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import Styles from "./burger-ingredients.module.css"

import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients, hideIngredient, showIngredient} from "../../services/reducers/burger-ingredients.slice";

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('bun')
    const ingredients = useSelector(state => state.burgerIngredients.burgerIngredients)
    const isIngredientsLoaded = useSelector(state => state.burgerIngredients.burgerIngredientsLoaded);
    const showModal = useSelector(state => state.burgerIngredients.showModal)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getIngredients());
    }, []);

    const handleIngredientClick = (ingredient) => {
        dispatch(showIngredient(ingredient));
    }

    const handleCloseModal = () => {
        dispatch(hideIngredient());
    }

    const modal = (
        <Modal close={handleCloseModal}>
            <IngredientDetails/>
        </Modal>
    );

    return (
        <div className={`${Styles.block}`}>
            <p className="text text_type_main-large mt-10 mb-5">
                Соберите бургер
            </p>
            <div className="mb-10">
                <div className={`${Styles.tab} mb-10`}>
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
                <div className={`${Styles.ingredients} custom-scroll`}>
                    <h2 className="text text_type_main-medium">Булки</h2>
                    <ul className={`${Styles.list} mb-10`}>
                            {
                                isIngredientsLoaded ? ingredients.map(elem => {
                                    if (elem.type === "bun") {
                                        return (
                                            <BurgerIngredient ingredient={elem} key={elem._id} setSelectedElement={handleIngredientClick}/>
                                        )
                                    }
                                }) : <p>NO DATA</p>
                            }
                    </ul>

                    <h2 className="text text_type_main-medium">Соусы</h2>

                    <ul className={`${Styles.list} mb-10`}>
                        {
                            isIngredientsLoaded ? ingredients.map(elem => {
                                if (elem.type === "sauce") {
                                    return (
                                        <BurgerIngredient ingredient={elem} key={elem._id}
                                                          setSelectedElement={handleIngredientClick}/>
                                    )
                                }
                            }) : <p>NO DATA</p>
                        }
                    </ul>

                    <h2 className="text text_type_main-medium">Начинки</h2>

                    <ul className={`${Styles.list} mb-10`}>
                        {
                            isIngredientsLoaded ? ingredients.map(elem => {
                                if (elem.type === "main") {
                                    return (
                                        <BurgerIngredient ingredient={elem} key={elem._id}
                                                          setSelectedElement={handleIngredientClick}/>
                                    )
                                }
                            }) : <p>NO DATA</p>
                        }
                    </ul>
                </div>
            </div>
            {showModal && modal}
        </div>
    )
}

export default BurgerIngredients;