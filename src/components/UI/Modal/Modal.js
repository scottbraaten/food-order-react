import ReactDOM from 'react-dom';

import Card from "../Card/Card"

import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal = props => {
    return (
        <>
        {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm} />,
            document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
            <ModalOverlay onConfirm={props.onConfirm}>{props.children}</ModalOverlay>,
            document.getElementById('overlay-root')
        )}
        </>
    )
}

export default Modal;