import React, {useEffect} from "react";

import Styles from "./modal.module.css"

import ReactDOM from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const renderNode = document.getElementById("modals");

function Modal(props) {
    useEffect(() => {
        document.addEventListener("keydown", handleCloseModalOnEsc);

        return () => {
            document.removeEventListener("keydown", handleCloseModalOnEsc);
        }
    }, []);

    const handleCloseModalOnEsc = evt => {
        if (evt.key === "Escape"){
            props.close();
        }
    }

    return ReactDOM.createPortal(
                <div>
                    <div className={`${Styles.overlay}`} onClick={props.close}></div>
                    <div className={`${Styles.content} pl-10 pr-10`}>
                        <button type="button" className={`${Styles.closeBtn}`} onClick={props.close}><CloseIcon type="primary"/></button>
                        {props.children}
                    </div>
                </div>
        , renderNode);
}

Modal.propTypes = {
    close: PropTypes.func,
    children: PropTypes.elementType
}

export default Modal;