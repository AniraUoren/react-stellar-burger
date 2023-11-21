import React from "react";
import Styles from "./app-header.module.css"
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components"

function AppHeader() {
    return (
        <header className={Styles.header}>
            <div className={Styles.container}>
                <a href="#" className={`${Styles.button} mt-4 mb-4 pl-5 pr-5 mr-2`}>
                    <BurgerIcon type="primary"/>
                    <p className={`text text_type_main-default ml-2`}>Конструктор</p>
                </a>
                <a href="#" className={`${Styles.button} ${Styles.btnToLogo} mt-4 mb-4 pl-5 pr-5 mr-2`}>
                    <ListIcon type="secondary"/> <p
                    className={`text text_type_main-default text_color_inactive ml-2`}>Лента заказов</p>
                </a>
            <Logo className={Styles.logo}/>
            </div>
            <a href="#" className={`${Styles.button}  mt-4 mb-4 pl-5 pr-5 ml-2`}>
                <ProfileIcon type="secondary"/> <p className={`text text_type_main-default text_color_inactive ml-2`}>Личный кабинет</p>
            </a>
        </header>
    )
}

export default AppHeader;