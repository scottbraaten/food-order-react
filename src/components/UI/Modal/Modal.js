import ReactDOM from 'react-dom';
import { useContext } from 'react';

import classes from './Modal.module.css';

import Card from "../Card/Card"
import CartContext from '../../../context/cart-context';
import Cart from '../../Cart/Cart/Cart';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <Cart close={props.onConfirm} />
        </Card>
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
            <ModalOverlay onConfirm={props.onConfirm} />,
            document.getElementById('overlay-root')
        )}
        </>
    )
}

export default Modal;