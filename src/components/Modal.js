import React from 'react';

const Modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(0vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Thank you for your message!</h3>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
