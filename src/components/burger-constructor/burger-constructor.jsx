import React from "react";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import Styles from "./burger-constructor.module.css";
import {cartData} from "../../utils/data";

function BurgerConstructor() {
    const [cart, setCart] = React.useState(cartData);
    const [price, setPrice] = React.useState(610);
    return (
        <div className={`${Styles.block} pt-25`}>
            <div className={`${Styles.container} mb-10`}>
                <div>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={"https://code.s3.yandex.net/react/code/meat-01.png"}
                        extraClass="ml-8"
                    />
                </div>
                <div className={`${Styles.center} custom-scroll`}>
                    {cart.map((elem, index) => {
                        if (elem.type !== "bun") {
                            return (
                                <div key={`${elem._id}${index}`}>
                                    <DragIcon type="primary"/>
                                    <ConstructorElement
                                        text={elem.name}
                                        price={elem.price}
                                        thumbnail={elem.image}
                                        extraClass="ml-1 mr-2"
                                    />
                                </div>
                            )
                        }
                    })}
                </div>
                <div>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={"https://code.s3.yandex.net/react/code/meat-01.png"}
                        extraClass="ml-8 mr-2"
                    />
                </div>
            </div>
            <div className={`${Styles.total} mt-40`}>
                <div className={`${Styles.price}`}>
                    <p className="text text_type_digits-medium mr-2">{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType="button" type="primary" size="large" extraClass="ml-10 mr-4">
                    Оформить заказ
                </Button>
            </div>
        </div>
    )

}

export default BurgerConstructor;