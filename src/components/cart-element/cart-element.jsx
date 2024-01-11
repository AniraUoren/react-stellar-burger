import Styles from "../burger-constructor/burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useRef} from "react";

function CartElement({element, isTop, handleDelete}, key) {
    const cardRef = useRef(null);

    if (isTop === true){
        return (
                <ConstructorElement
                    type={"top"}
                    isLocked={true}
                    text={`${element.name} (верх)`}
                    price={element.price}
                    thumbnail={element.image}
                    extraClass="ml-8"
                    handleClose={() => {
                        handleDelete(element)
                    }}
                />
        )
    }else if (isTop === false){
        return (<ConstructorElement
            type={"bottom"}
            isLocked={true}
            text={`${element.name} (низ)`}
            price={element.price}
            thumbnail={element.image}
            extraClass="ml-8"
            key={key}
        />)
    } else {
        return (
            <div key={key} className={Styles.element} id={element._id}>
                <DragIcon type="primary"/>
                <ConstructorElement
                    text={element.name}
                    price={element.price}
                    thumbnail={element.image}
                    extraClass="ml-1 mr-2"
                    handleClose={() => {
                        handleDelete(element)
                    }}
                />
            </div>
        )
    }
}

export default CartElement;