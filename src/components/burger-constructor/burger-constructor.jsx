import React from "react";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import Styles from "./burger-constructor.module.css";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import {useModal} from "../../hooks/useModal";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {adding, deleting, getOrder} from "../../services/reducers/burger-constructor.slice";

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

        openModal();
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

    const price = getPrice();

    function getPrice() {
        let sum = 0;
        cart.map(elem => {
            if (elem.type === "bun") {
                sum += elem.price * 2;
            } else {
                sum += elem.price
            }
        })

        return sum;
    }

    return (
        <div className={`${Styles.block} pt-25`} ref={dropRef} onDragOver={(evt) => evt.preventDefault()}>
            <div className={`${Styles.container} mb-10`}>
                <div>
                    {cart.map((elem, index) => {
                        if (elem.type === "bun") {
                            return (
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={`${elem.name} (верх)`}
                                    price={elem.price}
                                    thumbnail={elem.image}
                                    extraClass="ml-8"
                                    key={`${elem._id}${index}`}
                                />
                            )
                        }
                    })}
                </div>
                <div className={`${Styles.center} custom-scroll`}>
                    {cart.map((elem, index) => {
                        if (elem.type !== "bun") {
                            return (
                                <div key={`${elem._id}${index}`} className={Styles.element}>
                                    <DragIcon type="primary"/>
                                    <ConstructorElement
                                        text={elem.name}
                                        price={elem.price}
                                        thumbnail={elem.image}
                                        extraClass="ml-1 mr-2"
                                        handleClose={() => {
                                            handleDelete(elem)
                                        }}
                                    />
                                </div>
                            )
                        }
                    })}
                </div>
                <div>
                    {cart.map((elem, index) => {
                        if (elem.type === "bun") {
                            return (
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${elem.name} (низ)`}
                                    price={elem.price}
                                    thumbnail={elem.image}
                                    extraClass="ml-8"
                                    key={`${elem._id}${index}`}
                                />
                            )
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