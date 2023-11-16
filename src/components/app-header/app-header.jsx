import React from "react";
import Styles from "./app-header.module.css"
import {Logo, Button, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components"

function AppHeader() {
    return (
        <header className={Styles.header}>
            <div className={Styles.container}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Button htmlType="button" type="secondary" size="medium" extraClass={`${Styles.button} pl-5 pr-5 mr-2`} style={{color: "#fff"}}>
                        <BurgerIcon type="primary"/> <p className={`${Styles.btnText} text text_type_main-default`}>Конструктор</p>
                    </Button>
                    <Button htmlType="button" type="secondary" size="medium" extraClass={`${Styles.button} pl-5 pr-5`}>
                        <ListIcon type="secondary" /> <p className={`${Styles.btnText} text text_type_main-default text_color_inactive`}>Лента заказов</p>
                    </Button>
                </div>
                <Logo className="mr-30"/>
                <Button htmlType="button" type="secondary" size="medium" extraClass={`${Styles.button} pl-5 pr-5`}>
                    <ProfileIcon type="secondary"/> <p
                    className={`${Styles.btnText} text text_type_main-default text_color_inactive`}>Личный кабинет</p>
                </Button>
            </div>
        </header>
    )
}

export default AppHeader;