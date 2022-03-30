import logo from '../assets/logo.svg';
import Banner from "./Banner";
import ShoppingList from "./ShoppingList";
import Cart from "./Cart";
import CardsLayout from "./CardsLayout";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
// import 'node_modules/bootstrap/dist/js/bootstrap.js'
import '../styles/App.css';

function App() {
    return (
        <div className="App ">
            <Banner/>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"cart col-md-3"}>
                        <Cart/>
                    </div>
                    <div className={"cards col-md-9 "}>
                        <ShoppingList/>
                    </div>
                </div>
            </div>
            {/*</header>*/}
        </div>
    );
}

export default App;
