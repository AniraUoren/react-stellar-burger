import React, {useMemo} from "react";

import Styles from "./burger-ingredient.module.css";
import {ingredientPropType} from "../../utils/prop-types";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {showIngredient} from "../../services/reducers/burger-ingredients.slice";
import {useDispatch, useSelector} from "react-redux";
import {useDrag} from "react-dnd";

function BurgerIngredient({ingredient}) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(showIngredient(ingredient));
    }

    const ingredientsInConstructor = useSelector(state => state.burgerConstructor.constructor);

    const getCount = () => {
        let counter = 0;

        ingredientsInConstructor.forEach(el => {
            if (el._id === ingredient._id){
                counter++;
            }
        })
         return counter;
    }

    const counter = getCount();

    const [{isDragStart},dragRef] = useDrag({
        type: "ingredient",
        item: ingredient,
        collect: (monitor) => ({
            isDragStart: monitor.isDragging()
        })
    })

    return (
            <li className={`${Styles.block}`} onClick={handleClick} ref={dragRef} style={isDragStart ? {opacity: 0.5} : {opacity: 1}}>
                <img src={ingredient.image} alt={ingredient.name} className={`${Styles.image} mb-2`}/>
                <div className={`${Styles.price} mb-2`}>
                    <p className="text text_type_digits-default">{ingredient.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`${Styles.name} text text_type_main-default`}>{ingredient.name}</p>
                {counter >= 1 ?  <Counter count={counter} size="default" extraClass="m-1 mt-2"/> : null}
            </li>
    );
}

BurgerIngredient.propTypes = {
    ingredient: ingredientPropType,
    counter: PropTypes.number
}

export default BurgerIngredient;