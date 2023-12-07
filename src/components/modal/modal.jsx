import React, {useEffect} from "react";

import Styles from "./modal.module.css"

import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";

function Modal(props) {
    useEffect(() => {
        document.addEventListener("keydown", handleCloseModalOnEsc);

        return () => {
            document.removeEventListener("keydown", handleCloseModalOnEsc);
        }
    }, []);

    const handleCloseModalOnEsc = evt => {
        if (evt.key === "Escape") {
            props.close();
        }
    }

    return (
        <ModalOverlay>
            <div className={`${Styles.content} pl-10 pr-10`} onClick={props.close}>
                <button type="button" className={`${Styles.closeBtn}`} onClick={props.close}><CloseIcon type="primary"/>
                </button>
                {props.children}
            </div>
        </ModalOverlay>)
}

Modal.propTypes = {
    close: PropTypes.func,
    children: PropTypes.elementType
}

export default Modal;