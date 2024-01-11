import React, {useCallback, useEffect, useMemo, useRef} from "react";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import Styles from "./burger-constructor.module.css";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import {useModal} from "../../hooks/useModal";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {adding, deleting, getOrder, updating} from "../../services/reducers/burger-constructor.slice";
import CartElement from "../cart-element/cart-element";

function BurgerConstructor() {
    const cart = useSelector(state => state.burgerConstructor.constructor);
    const orderId = useSelector(state => state.burgerConstructor.orderId);
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

        cart.map(item => {
            cartItemsArray.push(item._id);
        })

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
        const ingredients = [...cart];
        ingredients.splice(draggableItem, 0, ingredients.splice(hoveredItem, 1)[0]);
        dispatch(updating(ingredients));
    }, []);

    const price = useMemo(() => {
        return function () {
            let sum = 0;
            cart.map(elem => {
                if (elem.type === "bun") {
                    sum += elem.price * 2;
                } else {
                    sum += elem.price
                }
            })

            return sum;
        }()
    }, [cart])

    useEffect(() => {
        if (orderId) {
            openModal();
        }
    }, [orderId])

    return (
        <div className={`${Styles.block} pt-25`} ref={dropRef} onDragOver={(evt) => evt.preventDefault()}>
            <div className={`${isDragging ? Styles.container_dragging : Styles.container} mb-10`}>
                <div>
                    {cart.map((elem, index) => {
                        if (elem.type === "bun") {
                            return <CartElement element={elem}
                                                isTop={true}
                                                key={`${elem._id}${index}`}
                                                handleDelete={handleDelete}/>
                        }
                    })}
                </div>
                <div className={`${Styles.center} custom-scroll`}>
                    {cart.map((elem, index) => {
                        if (elem.type !== "bun") {
                            return <CartElement element={elem}
                                                isTop={null}
                                                key={`${elem._id}${index}`}
                                                handleDelete={handleDelete}/>
                        }
                    })}
                </div>
                <div>
                    {cart.map((elem, index) => {
                        if (elem.type === "bun") {
                            return <CartElement element={elem}
                                                isTop={false}
                                                key={`${elem._id}${index}`}
                                                handleDelete={handleDelete}/>
                        }
                    })}
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