import React, {useEffect, useState} from "react";
import "../styles/shoppingList.css"
import CardsLayout from "./CardsLayout";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from "axios";

class ShoppingList extends React.Component {


    constructor(props) {
        super();
        this.state = {
            items: [],
            DataIsLoaded: false
        };
    }


    importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    componentDidMount() {
        fetch("https://api.jsonbin.io/b/624444c0d96a510f028cca2e")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataIsLoaded: true
                })
            })
    }

    render() {
        const {DataIsLoaded, items} = this.state;
        if (!DataIsLoaded) return <div>
            <h1>please wait some times</h1>
        </div>
        return (
            <div className={"container-fluid"}>

                <div className={"row"}>
                    {items.map((item) => (
                        <div className={"col"}>
                            <CardsLayout name={item.name} price={item.price} image={item.image}/>

                        </div>

                    ))
                    }

                </div>

            </div>
        )
    }
}

export default ShoppingList;