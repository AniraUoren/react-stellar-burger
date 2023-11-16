import React from "react";

import Styles from "./burger-ingredient.module.css";

import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredient(props) {
    return (
        <li className={`${Styles.block} pl-4 pr-4`}>
            <img src={props.ingredient.image} alt={props.ingredient.name} className="mb-1"/>
            <div className="mb-1">
                <p className="text text_type_digits-default">{props.ingredient.price} <CurrencyIcon type="primary" /></p>
            </div>
            <p className={`${Styles.name} text text_type_main-default`}>{props.ingredient.name}</p>
            {props.counter && <Counter count={props.counter} size="default" extraClass="m-1" />}
        </li>
    );
}

export default BurgerIngredient;