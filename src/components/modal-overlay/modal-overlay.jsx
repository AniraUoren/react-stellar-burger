import React from "react";
import Styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay(props) {
    return (
        <div className={`${Styles.overlay}`} onClick={props.closePopup}>
            {props.children}
        </div>
    )
}

ModalOverlay.propTypes ={
    closePopup: PropTypes.func.isRequired
}

export default ModalOverlay;