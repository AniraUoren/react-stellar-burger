import Styles from "../burger-constructor/burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useRef} from "react";
import {cartData} from "../../utils/data";
import {useDrag, useDrop} from "react-dnd";
import {ingredientPropType} from "../../utils/prop-types";
import PropTypes from "prop-types";

function CartElement({element, isTop, handleDelete, index, moveCard}, key) {
    const cardRef = useRef(null);

    const [{handlerId}, drop] = useDrop({
        accept: "card",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor){
            if (!cardRef.current){
                return
            }

            const draggableItem = item.index;
            const hoveredItem = index;

            if (draggableItem === hoveredItem){
                return;
            }

            const hoverBoundingRect = cardRef.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (draggableItem < hoveredItem && hoverClientY < hoverMiddleY) {
                return;
            }

            if (draggableItem > hoveredItem && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(draggableItem, hoveredItem);
            item.index = hoveredItem;

        }
    })

    const [{ isDragging }, drag] = useDrag({
        type: "card",
        item: () => {
            return { index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    drag(drop(cardRef));

    if (isTop === true){
        return (
                <ConstructorElement
                    type={"top"}
                    isLocked={true}
                    text={`${element.name} (верх)`}
                    price={element.price}
                    thumbnail={element.image}
                    index={index}
                    extraClass="ml-8"
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
            index={index}
        />)
    } else {
        return (
            <div key={key} className={Styles.element} id={element._id} ref={cardRef}>
                <DragIcon type="primary"/>
                <ConstructorElement
                    text={element.name}
                    price={element.price}
                    thumbnail={element.image}
                    extraClass="ml-1 mr-2"
                    handleClose={() => {
                        handleDelete(element)
                    }}
                    index={index}
                />
            </div>
        )
    }
}

CartElement.prototype = {
    element: ingredientPropType,
    isTop: PropTypes.bool,
    handleDelete: PropTypes.func,
    index: PropTypes.number,
    moveCard: PropTypes.func,
    key: PropTypes.string,
}

export default CartElement;