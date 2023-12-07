import React from "react";

import Styles from "./ingredient-details.module.css";
import {ingredientPropType} from "../../utils/prop-types";
function IngredientDetails(props) {
    const {image, name, calories, proteins, fat, carbohydrates} = props.ingredient;
    return(
        <div className={`${Styles.container}`}>
            <p className={`${Styles.header} text text_type_main-large mt-10`}>Детали ингредиента</p>
            <img src={image} alt={name} className={`${Styles.image} mb-4`}/>
            <p className={`${Styles.name} text text_type_main-medium mb-8`}>{name}</p>
            <div className={`${Styles.foodValue} mb-15`}>
                <div className={`${Styles.foodValueColumn}`}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</p>
                    <p className="text text text_type_digits-default text_color_inactive">{calories}</p>
                </div>
                <div className={`${Styles.foodValueColumn}`}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Белки, г</p>
                    <p className="text text text_type_digits-default text_color_inactive">{proteins}</p>
                </div>
                <div className={`${Styles.foodValueColumn}`}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Жиры, г</p>
                    <p className="text text text_type_digits-default text_color_inactive">{fat}</p>
                </div>
                <div className={`${Styles.foodValueColumn}`}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</p>
                    <p className="text text text_type_digits-default text_color_inactive">{carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    ingredientPropType
}

export default IngredientDetails;