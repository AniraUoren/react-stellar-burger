import React from "react";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import Styles from "./burger-constructor.module.css";

function BurgerConstructor() {
    const [cart, setCart] = React.useState([
        {
            "_id": "60666c42cc7b410027a1a9b1",
            "name": "Краторная булка N-200i",
            "type": "bun",
            "price": 1255,
            "image": "https://code.s3.yandex.net/react/code/bun-02.png"
        },
        {
            "_id": "60666c42cc7b410027a1a9b9",
            "name": "Соус традиционный галактический",
            "type": "sauce",
            "price": 15,
            "image": "https://code.s3.yandex.net/react/code/sauce-03.png"
        },
        {
            "_id": "60666c42cc7b410027a1a9b4",
            "name": "Мясо бессмертных моллюсков Protostomia",
            "type": "main",
            "price": 1337,
            "image": "https://code.s3.yandex.net/react/code/meat-02.png"
        },
        {
            "_id": "60666c42cc7b410027a1a9bc",
            "name": "Плоды Фалленианского дерева",
            "type": "main",
            "price": 874,
            "image": "https://code.s3.yandex.net/react/code/sp_1.png"
        },
        {
            "_id": "60666c42cc7b410027a1a9bc",
            "name": "Плоды Фалленианского дерева",
            "type": "main",
            "price": 874,
            "image": "https://code.s3.yandex.net/react/code/sp_1.png"
        },
        {
            "_id": "60666c42cc7b410027a1a9bc",
            "name": "Плоды Фалленианского дерева",
            "type": "main",
            "price": 874,
            "image": "https://code.s3.yandex.net/react/code/sp_1.png"
        },
        {
            "_id": "60666c42cc7b410027a1a9bb",
            "name": "Хрустящие минеральные кольца",
            "type": "main",
            "price": 300,
            "image": "https://code.s3.yandex.net/react/code/mineral_rings.png"
        }
    ]);
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
                <div style={{maxHeight: "568px",display: 'flex', flexDirection: 'column', gap: '16px', overflowY: "scroll"}}
                     className="custom-scroll">
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