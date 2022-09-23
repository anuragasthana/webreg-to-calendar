import ActionButton from "./ActionButton";
import FocusTrap from 'focus-trap-react';
import { useState } from "react";
import colors from "../colors.json";
import Dropdown from "./Dropdown";

const OUTSIDE_CLICK = true;

const Modal = ({ show, onClose }) => {
    if(!show) {
        return null;
    }
    return (
        <FocusTrap active={show}>
            <div className="modal" onClick={OUTSIDE_CLICK ? onClose : null}>
                <div className="modal-content" onClick={OUTSIDE_CLICK ? e => e.stopPropagation() : null}>
                    <form className="add-subject">
                    <div className="modal-header">
                        <input type="text" placeholder="Subject Name" maxLength={10} autoFocus={true}/>
                        <label>Color Select:</label>
                        <Dropdown headerTitle='Select Color' list={colors} />
                    </div>
                    <div className="modal-body">
                        This is modal content.
                    </div>
                    <div className="modal-footer">
                        <ActionButton name="save-exit" text="Save and Exit" />
                        <ActionButton name="cancel" text="Cancel" onClick={onClose} />
                    </div>
                    </form>
                </div>
            </div>
        </FocusTrap>
    )
}

export default Modal