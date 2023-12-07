import React from "react";
import ReactDOM from "react-dom";
import Styles from "./modal-overlay.module.css";

const renderNode = document.getElementById("modals");

function ModuleOverlay(props) {
    return ReactDOM.createPortal(
        <div className={`${Styles.overlay}`}>
            {props.children}
        </div>,
        renderNode
    )
}

export default ModuleOverlay;