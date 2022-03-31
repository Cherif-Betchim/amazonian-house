import React, {useEffect, useState} from "react";
import "../styles/shoppingList.css"
import CardsLayout from "./CardsLayout";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import {useCart} from "react-use-cart"
import {MDBIcon} from "mdbreact";

const ShoppingList = (props) => {

    useEffect(() => {
        getPlants();
    })


    const [plants, setPlants] = useState({});
    const [loading, setLoading] = useState(false)
    const getPlants = async () => {
        try {
            const res = await axios.get("https://api.npoint.io/f6f9bbb445c2c064e7de")
            setPlants(res.data)
            setLoading(true)
        } catch (err) {
            alert(err.message)
        }

    }
    if (!loading) {
        return (<div>Loading...</div>)
    }

    return <div className={"container-fluid"}>
        <div className={"row"}>
            {plants.map((plant, index) => {
                return <div className={"col"}>
                    <CardsLayout name={plant.name}
                                 price={plant.price}
                                 image={plant.image}
                                 key={plant.id}
                                 item={plant}
                    />
                </div>
            })}
        </div>

    </div>
}


export default ShoppingList;