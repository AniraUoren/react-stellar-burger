import React, {useState} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import Styles from "./burger-ingredients.module.css"

import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('bun')
    const [...ingredients] = props.data;
    const [clickedElement, setClickedElement] = useState(null);

    const handleIngredientClick = (ingredient) => {
        setClickedElement(ingredient);
    }

    const handleCloseModal = () => {
        setClickedElement(null);
    }

    const modal = (
        <Modal close={handleCloseModal}>
            <IngredientDetails ingredient={clickedElement}/>
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
                                ingredients.map(elem => {
                                    if (elem.type === "bun") {
                                        return (
                                            <BurgerIngredient ingredient={elem} key={elem._id} counter={2} setSelectedElement={handleIngredientClick}/>
                                        )
                                    }
                                })
                            }
                    </ul>

                    <h2 className="text text_type_main-medium">Соусы</h2>

                    <ul className={`${Styles.list} mb-10`}>
                            {
                                ingredients.map(elem => {
                                    if (elem.type === "sauce") {
                                        return (
                                            <BurgerIngredient ingredient={elem} key={elem._id} setSelectedElement={handleIngredientClick}/>
                                        )
                                    }
                                })
                            }
                    </ul>

                    <h2 className="text text_type_main-medium">Начинки</h2>

                    <ul className={`${Styles.list} mb-10`}>
                            {
                                ingredients.map(elem => {
                                    if (elem.type === "main") {
                                        return (
                                            <BurgerIngredient ingredient={elem} key={elem._id} setSelectedElement={handleIngredientClick}/>
                                        )
                                    }
                                })
                            }
                    </ul>
                </div>
            </div>
            {clickedElement && modal}
        </div>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.array
}

export default BurgerIngredients;