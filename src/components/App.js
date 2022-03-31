import logo from '../assets/logo.svg';
import Banner from "./Banner";
import ShoppingList from "./ShoppingList";
import Cart from "./Cart";
import CardsLayout from "./CardsLayout";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
// import 'node_modules/bootstrap/dist/js/bootstrap.js'
import '../styles/App.css';
import {CartProvider} from "react-use-cart"


function App() {
    return (
        <div className="App ">
            <Banner/>
            <CartProvider>
                <div className={"container-fluid"}>
                    <div className={"row"}>
                        <div className={"cart col-md-4"}>
                            <Cart/>
                        </div>
                        <div className={"cards col-md-8 "}>
                            <ShoppingList/>
                        </div>
                    </div>
                </div>

            </CartProvider>

            {/*</header>*/}
        </div>
    );
}

export default App;
