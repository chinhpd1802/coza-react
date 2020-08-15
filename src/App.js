import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/paritals/Header";
import Footer from "./components/paritals/Footer";
// import ListProduct from "./components/products/ListProduct";
import ProductDetail from "./components/products/ProductDetail";
import HomePage from "./components/home/HomePage";
import ProductPage from "./components/home/ProductPage";
import CartPage from "./components/home/CartPage";
// import QuickCart from "./components/Cart/QuickCart";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <Router>
        <Header />
       
          <Switch>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            {/* support : https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4-v5 */}
            <Route
              path="/products"
              render={({ match: { url } }) => (
                <>
                  {/* <Route path={`${url}/`} component={(props) => <ListProduct {...props} api={`/api/products/preview-list`} />} exact /> */}
                  <Route path={`${url}/`} component={ProductPage} exact />
                  <Route path={`${url}/:id`} component={ProductDetail} />
                </>
              )}
            />
            <Route path="/shoping-cart">
              <CartPage/>
            </Route>
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
