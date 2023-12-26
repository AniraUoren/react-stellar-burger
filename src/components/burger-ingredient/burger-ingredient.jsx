import React from "react";

import Styles from "./burger-ingredient.module.css";
import {ingredientPropType} from "../../utils/prop-types";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {showIngredient} from "../../services/reducers/burger-ingredients.slice";
import {useDispatch} from "react-redux";

function BurgerIngredient(props) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(showIngredient(props.ingredient));
    }

    return (
            <li className={`${Styles.block}`} onClick={handleClick}>
                <img src={props.ingredient.image} alt={props.ingredient.name} className={`${Styles.image} mb-2`}/>
                <div className={`${Styles.price} mb-2`}>
                    <p className="text text_type_digits-default">{props.ingredient.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`${Styles.name} text text_type_main-default`}>{props.ingredient.name}</p>
                {props.counter && <Counter count={props.counter} size="default" extraClass="m-1 mt-2"/>}
            </li>
    );
}

BurgerIngredient.propTypes = {
    ingredient: ingredientPropType,
    counter: PropTypes.number
}

export default BurgerIngredient;