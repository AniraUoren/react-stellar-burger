import React from "react";

import Styles from "./burger-ingredient.module.css";

import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function BurgerIngredient(props) {
    return (
        <li className={`${Styles.block}`}>
            <img src={props.ingredient.image} alt={props.ingredient.name} className={`${Styles.image} mb-2`}/>
            <div className={`${Styles.price} mb-2`}>
                <p className="text text_type_digits-default">{props.ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${Styles.name} text text_type_main-default`}>{props.ingredient.name}</p>
            {props.counter && <Counter count={props.counter} size="default" extraClass="m-1 mt-2" />}
        </li>
    );
}

BurgerIngredient.propTypes = {
    ingredient: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
    }),
    counter: PropTypes.number
}

export default BurgerIngredient;