import React, {useEffect} from "react";

import Styles from "./modal.module.css"

import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from "react-dom";

const renderNode = document.getElementById("modals");

function Modal(props) {
    useEffect(() => {
        const handleCloseModalOnEsc = evt => {
            if (evt.key === "Escape") {
                props.close();
            }
        }

        document.addEventListener("keydown", handleCloseModalOnEsc);

        return () => {
            document.removeEventListener("keydown", handleCloseModalOnEsc);
        }
    }, []);

    return ReactDOM.createPortal(
        <ModalOverlay closePopup={props.close}>
            <div className={`${Styles.content} pl-10 pr-10`} onClick={evt => {evt.stopPropagation();}}>
                <button type="button" className={`${Styles.closeBtn}`} onClick={props.close}><CloseIcon type="primary"/>
                </button>
                {props.children}
            </div>
        </ModalOverlay>,
        renderNode);
}

Modal.propTypes = {
    close: PropTypes.func,
    children: PropTypes.object
}

export default Modal;