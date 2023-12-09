import React from "react";
import ReactDOM from "react-dom";
import Styles from "./modal-overlay.module.css";

function ModalOverlay(props) {
    return (
        <div className={`${Styles.overlay}`}>
            {props.children}
        </div>
    )
}

export default ModalOverlay;