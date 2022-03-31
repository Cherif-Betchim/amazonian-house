import React from "react";
import '../styles/cardsLayout.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import ShoppingList from "./ShoppingList";
import {MDBIcon} from "mdbreact";
import {useCart} from "react-use-cart"

const CardsLayout =(props)=> {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    const{addItem}=useCart();


    const images = importAll(require.context('../assets/plants', false, /\.(png|jpe?g|svg)$/));



    return <div className={"card-layout"}>
        <div className={"plant-img-div"}>
            {/*<img className={"plant-img"} src={images['olivier.jpg']} alt={"just a plant picture"}/>*/}
            <img className={"plant-img"} src={images[props.image]} alt={"just a plant picture"}/>
        </div>
        <div className={'price'}>
            {props.price} <span>$</span>
        </div>
        <h2 className={"card-title"}>{props.name}</h2>
        <button type="button" onClick={()=>addItem(props.item)} className="shitty btn btn-success btn-rounded" data-mdb-ripple-color="#ffffff"> Add to
            cart <MDBIcon fas icon="cart-arrow-down"/></button>
    </div>

}


export default CardsLayout;