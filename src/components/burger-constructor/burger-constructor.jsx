import React, {useCallback, useEffect} from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import Styles from "./burger-constructor.module.css";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import {useModal} from "../../hooks/useModal";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {adding, deleting, getOrder, updating} from "../../services/reducers/burger-constructor.slice";
import CartElement from "../cart-element/cart-element";
import { v4 as uuidv4 } from 'uuid';
function BurgerConstructor() {
    const components = useSelector(state => state.burgerConstructor.constructor);
    const bun = useSelector(state => state.burgerConstructor.bun);
    const orderId = useSelector(state => state.burgerConstructor.orderId);
    const price = useSelector(state => state.burgerConstructor.orderPrice);
    const {isModalOpen, openModal, closeModal} = useModal();
    const dispatch = useDispatch();

    const modal = (
        <Modal close={closeModal}>
            <OrderDetails orderId={orderId}/>
        </Modal>
    )

    const handleDelete = (ingredient) => {
        dispatch(deleting(ingredient))
    }

    const handleConfirmOrder = () => {
        let cartItemsArray = [];

        components.map(item => {
            cartItemsArray.push(item._id);
        })

        cartItemsArray.push(bun._id);

        dispatch(getOrder({"ingredients": [...cartItemsArray]}));
    }

    const [{isDragging}, dropRef] = useDrop({
        accept: "ingredient",
        drop(item) {
            dispatch(adding(item))
        },
        collect: monitor => ({
            isDragging: monitor.isOver()
        })
    })

    const handlerMovingItems = useCallback((draggableItem, hoveredItem) => {
        dispatch(updating({dragged: draggableItem, hovered: hoveredItem}));
    }, []);

    useEffect(() => {
        if (orderId) {
            openModal();
        }
    }, [orderId])

    return (
        <div className={`${Styles.block} pt-25`} ref={dropRef} onDragOver={(evt) => evt.preventDefault()}>
            <div className={`${isDragging ? Styles.container_dragging : Styles.container} mb-10`}>
                <div>
                    {bun && <CartElement element={bun}
                                                isTop={true}
                                                key={uuidv4()}
                                                handleDelete={handleDelete}
                                                moveCard={handlerMovingItems}/>}
                </div>
                <div className={`${Styles.center} custom-scroll`}>
                    {components.map((elem, index) => {
                            return <CartElement element={elem}
                                                isTop={null}
                                                key={uuidv4()}
                                                handleDelete={handleDelete}
                                                index={index}
                                                moveCard={handlerMovingItems}/>
                    })}
                </div>
                <div>
                        {bun && <CartElement element={bun}
                                                isTop={false}
                                                key={uuidv4()}
                                                handleDelete={handleDelete}
                                                moveCard={handlerMovingItems}/>
                        }
                </div>
            </div>
            <div className={`${Styles.total} mt-40`}>
                <div className={`${Styles.price}`}>
                    <p className="text text_type_digits-medium mr-2">{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType="button" type="primary" size="large" extraClass="ml-10 mr-4"
                        onClick={handleConfirmOrder}>
                    Оформить заказ
                </Button>
                {isModalOpen && orderId && modal}
            </div>
        </div>
    )

}

export default BurgerConstructor;