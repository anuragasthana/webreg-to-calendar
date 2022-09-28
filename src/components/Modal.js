import ActionButton from "./ActionButton";
import FocusTrap from 'focus-trap-react';
import { useState } from "react";
import colors from "../colors.json";
import Dropdown from "./Dropdown";

const OUTSIDE_CLICK = false;

const Modal = ({ show, onClose }) => {

    const [selectedColor, selectColor] = useState(-1);

    let getColor = (list, id) => {
        return list.filter(item => item.id === id)[0];
    }

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
                        <Dropdown headerTitle='Color Select' list={colors} selected={selectedColor}
                        selectItem={selectColor} getItem={getColor}/>
                    </div>
                    <div className="modal-body">

                    </div>
                    <div className="modal-footer">
                        <ActionButton name="save-exit" text="Save and Exit" onClick={(e) => e.preventDefault()} />
                        <ActionButton name="cancel" text="Cancel" onClick={onClose} />
                    </div>
                    </form>
                </div>
            </div>
        </FocusTrap>
    )
}

export default Modal