import React, {useEffect, useRef, useState} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import Styles from "./burger-ingredients.module.css"

import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients, hideIngredient, showIngredient} from "../../services/reducers/burger-ingredients.slice";

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('bun')
    const ingredients = useSelector(state => state.burgerIngredients.burgerIngredients)
    const isIngredientsLoaded = useSelector(state => state.burgerIngredients.burgerIngredientsLoaded);
    const showModal = useSelector(state => state.burgerIngredients.showModal)
    const dispatch = useDispatch();
    const containerRef = useRef(null);
    const bunHeaderRef = useRef(null);
    const souseHeaderRef = useRef(null);
    const mainHeaderRef = useRef(null);


    useEffect(() => {
        dispatch(getIngredients());

        // const handleScroll = () => {
        // const { top } = containerRef.current.getBoundingClientRect();
        // const sectionTitles = ["bun", "sauce", "main"];
        // let closestSection = "";
        //
        // // console.log("run")
        // // console.log(top)
        //
        // const headers = () => {
        //     let temp = [];
        //
        //     sectionTitles.forEach(item => {
        //         temp.push(containerRef.querySelector(`#${item}`));
        //     })
        //
        //     return temp;
        // }
        //
        // console.log(headers())

        // Определение ближайшего заголовка
        // if (top <= 0) {
        //     closestSection = sectionTitles.reduce((prev, curr) => {
        //         const prevDiff = Math.abs(
        //             containerRef.current.querySelector(`#${prev}`).getBoundingClientRect().top);
        //         const currDiff = Math.abs(
        //             containerRef.current.querySelector(`#${curr}`).getBoundingClientRect().top);
        //         return prevDiff < currDiff ? prev : curr;
        //     });
        // }
        // console.log(closestSection)
        // // Установка активного переключателя
        // if (closestSection !== current) {
        //     setCurrent(closestSection);
        // }
        // };

        // window.addEventListener("scroll", handleScroll);
        // return () => {
        //     window.removeEventListener("scroll", handleScroll);
        // };
    }, [current]);

    const handleIngredientClick = (ingredient) => {
        dispatch(showIngredient(ingredient));
    }

    const handleCloseModal = () => {
        dispatch(hideIngredient());
    }

    const handleNavigationMenu = (e) => {
        const topContainer = containerRef.current.getBoundingClientRect().top;
        const topBun = bunHeaderRef.current.getBoundingClientRect().top;
        const topSouse = souseHeaderRef.current.getBoundingClientRect().top;
        const topMain = mainHeaderRef.current.getBoundingClientRect().top;

        if (Math.abs(topContainer - topBun) < Math.abs(topContainer - topSouse) &&
            Math.abs(topContainer - topBun) < Math.abs(topContainer - topMain)) {
            setCurrent("bun");
        } else if (Math.abs(topContainer - topSouse) < Math.abs(topContainer - topBun) &&
                   Math.abs(topContainer - topBun) < Math.abs(topContainer - topMain)) {
            setCurrent("sauce");
        } else {
            setCurrent("main");
        }
    }

    const modal = (
        <Modal close={handleCloseModal}>
            <IngredientDetails/>
        </Modal>
    );

    return (
        <div className={`${Styles.block}`}>
            <p className="text text_type_main-large mt-10 mb-5">
                Соберите бургер
            </p>
            <div className="mb-10">
                <div className={`${Styles.tab} mb-10`}>
                    <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                        Булки
                    </Tab>
                    <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                        Соусы
                    </Tab>
                    <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                        Начинки
                    </Tab>
                </div>
                <div className={`${Styles.ingredients} custom-scroll`} ref={containerRef}
                     onScroll={handleNavigationMenu}>
                    <h2 className="text text_type_main-medium" ref={bunHeaderRef}>Булки</h2>
                    <ul className={`${Styles.list} mb-10`}>
                        {
                            isIngredientsLoaded ? ingredients.map(elem => {
                                if (elem.type === "bun") {
                                    return (
                                        <BurgerIngredient ingredient={elem} key={elem._id}
                                                          setSelectedElement={handleIngredientClick}/>
                                    )
                                }
                            }) : <p>NO DATA</p>
                        }
                    </ul>

                    <h2 className="text text_type_main-medium" ref={souseHeaderRef}>Соусы</h2>

                    <ul className={`${Styles.list} mb-10`}>
                        {
                            isIngredientsLoaded ? ingredients.map(elem => {
                                if (elem.type === "sauce") {
                                    return (
                                        <BurgerIngredient ingredient={elem} key={elem._id}
                                                          setSelectedElement={handleIngredientClick}/>
                                    )
                                }
                            }) : <p>NO DATA</p>
                        }
                    </ul>

                    <h2 className="text text_type_main-medium" ref={mainHeaderRef}>Начинки</h2>

                    <ul className={`${Styles.list} mb-10`}>
                        {
                            isIngredientsLoaded ? ingredients.map(elem => {
                                if (elem.type === "main") {
                                    return (
                                        <BurgerIngredient ingredient={elem} key={elem._id}
                                                          setSelectedElement={handleIngredientClick}/>
                                    )
                                }
                            }) : <p>NO DATA</p>
                        }
                    </ul>
                </div>
            </div>
            {showModal && modal}
        </div>
    )
}

export default BurgerIngredients;