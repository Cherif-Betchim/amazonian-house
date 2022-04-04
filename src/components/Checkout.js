import React,{useState} from "react";
import Modal from "react-bootstrap/Modal";
import {useCart} from "react-use-cart";
import {MDBIcon} from "mdbreact";

const Checkout = () => {


    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();    const [isShowing, setIshowing]=useState()

    const showModal = () => {
        setIshowing(true);
        console.warn(cartTotal)

    };

    const hideModal = () => {
        setIshowing(false);
    };

    return <div>
        <button onClick={showModal} className={"btn btn-primary"}>Head to checkout <MDBIcon fas icon="money-bill"/></button>

        <Modal show={isShowing} onHide={hideModal}>
            <Modal.Header>
                <Modal.Title>Hi</Modal.Title>
            </Modal.Header>
            <Modal.Body>{cartTotal}</Modal.Body>
            <Modal.Footer>
                <button onClick={hideModal}>Cancel</button>
                <button>Save</button>
            </Modal.Footer>
        </Modal>
    </div>
}


export default Checkout