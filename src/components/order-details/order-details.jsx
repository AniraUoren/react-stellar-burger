import React from "react";

import doneImg from "../../images/done.png";
import Styles from "./order-details.module.css";
import PropTypes from "prop-types";

function OrderDetails (props){
    return(
        <>
            <p className="text text_type_digits-large mb-8 mt-30">{props.orderId ? props.orderId : 123}</p>
            <p className="text text_type_main-medium mb-15">
                идентификатор заказа
            </p>
            <img src={doneImg} alt="Done" className={`${Styles.image} mb-15`}/>
            <p className="text text_type_main-small mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
        </>
    )
}

OrderDetails.propTypes = {
    orderId: PropTypes.number
}

export default OrderDetails;