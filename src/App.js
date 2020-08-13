import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/paritals/Header";
import Footer from "./components/paritals/Footer";
import ListProduct from "./components/products/ListProduct";
import ProductDetail from "./components/products/ProductDetail";
import HomePage from "./components/home/HomePage";
import "./App.css";
// import "./assets/images/icons/favicon.png";
// import "./assets/vendor/bootstrap/css/bootstrap.min.css";
// import "./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
// import "./assets/fonts/iconic/css/material-design-iconic-font.min.css";
// import "./assets/fonts/linearicons-v1.0.0/icon-font.min.css";
// import "./assets/vendor/animate/animate.css";
// import "./assets/vendor/css-hamburgers/hamburgers.min.css";
// import "./assets/vendor/animsition/css/animsition.min.css";
// import "./assets/vendor/select2/select2.min.css";
// import "./assets/vendor/daterangepicker/daterangepicker.css";
// import "./assets/vendor/slick/slick.css";
// import "./assets/vendor/perfect-scrollbar/perfect-scrollbar.css";
// import "./assets/css/util.css";
// import "./assets/css/main.css";
// import axios from "axios";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            {/* support : https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4-v5 */}
            <Route
              path="/products"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={(props) => <ListProduct {...props} api={`/api/products/preview-list`} />} exact />
                  <Route path={`${url}/:id`} component={ProductDetail} />
                </>
              )}
            />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
