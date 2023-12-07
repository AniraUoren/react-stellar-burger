import React from "react";

import Styles from "./burger-ingredient.module.css";
import {ingredientPropType} from "../../utils/prop-types";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";

function BurgerIngredient(props) {
    const [isShowModal, setIsShowModal] = React.useState(false);
    const handlerOpenModal = () => {
        setIsShowModal(true);
    }

    const handlerCloseModal = () => {
        setIsShowModal(false);
    }

    const modal = (
        <Modal close={handlerCloseModal}>
            <IngredientDetails ingredient={props.ingredient}/>
        </Modal>
    );
    return (
        <>
            <li className={`${Styles.block}`} onClick={handlerOpenModal}>
                <img src={props.ingredient.image} alt={props.ingredient.name} className={`${Styles.image} mb-2`}/>
                <div className={`${Styles.price} mb-2`}>
                    <p className="text text_type_digits-default">{props.ingredient.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`${Styles.name} text text_type_main-default`}>{props.ingredient.name}</p>
                {props.counter && <Counter count={props.counter} size="default" extraClass="m-1 mt-2"/>}
            </li>
            {isShowModal && modal}
        </>
    );
}

BurgerIngredient.propTypes = {
    ingredientPropType,
    counter: PropTypes.number
}

export default BurgerIngredient;