import React from "react";
import "../styles/cart.css"
import {useCart} from "react-use-cart"

const Cart = () => {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    const images = importAll(require.context('../assets/plants', false, /\.(png|jpe?g|svg)$/));

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    // isEmpty();
    if (isEmpty) return <h1>Your Cart is Empty</h1>
    return <div className={"cart"}>
        <section>
            <h5> Cart: ({totalUniqueItems}) total Items: ({totalItems})</h5>
            {console.log(items)}
            <tbody>
            {items.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <img className={"cart-image"} src={images[item.image]}/>
                        </td>
                        <td>
                            <h5>{item.name}</h5>

                        </td>
                        <td>
                            <h5>{item.price}$</h5>

                        </td>

                        <td>
                            <h5>Quantity: {item.quantity}</h5>
                        </td>

                        <td>
                            <button className={"btn btn-primary"}
                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                <i className="fas fa-plus-circle"/></button>
                        </td>

                        <td>
                            <button className={"btn btn-danger"}
                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                <i className="fas fa-minus-circle"/></button>
                        </td>
                    </tr>
                )
            })
            }
            </tbody>

            <h5>Totale Price: {cartTotal} $</h5>
            <button className={"btn btn-danger"} onClick={emptyCart}/>
        </section>


    </div>
}

export default Cart;