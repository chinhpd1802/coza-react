import React from "react";
import "./App.css";
import "./assets/images/icons/favicon.png";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./fonts/iconic/css/material-design-iconic-font.min.css";
import "./assets/fonts/linearicons-v1.0.0/icon-font.min.css";
import "./assets/vendor/animate/animate.css";
import "./assets/vendor/css-hamburgers/hamburgers.min.css";
import "./assets/vendor/animsition/css/animsition.min.css";
import "./assets/vendor/select2/select2.min.css";
import "./assets/vendor/daterangepicker/daterangepicker.css";
import "./assets/vendor/slick/slick.css";
import "./assets/vendor/MagnificPopup/magnific-popup.cs";
import "./assets/vendor/perfect-scrollbar/perfect-scrollbar.css";
import "./assets/css/util.css";
import "./assets/css/main.css";
// import axios from "axios";
class App extends React.Component {
  state = {products: []}

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }
  render() {
    return <div>
      {this.state.products.map(product=>(
        <p key={product._id}>{product.name}</p>
      ))}
    </div>;
  }
}

export default App;
