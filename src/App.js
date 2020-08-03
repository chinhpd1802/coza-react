import React from "react";
import Header from "./components/paritals/Header";
import "./App.css";
// import axios from "axios";
class App extends React.Component {
  state = { products: [] };

  componentDidMount() {
    fetch("/api/products")
      .then((res) => res.json())
      .then((products) => this.setState({ products }));
  }
  render() {
    return (
      <div>
        <Header />
        {this.state.products.map((product) => (
          <p key={product._id}>{product.name}</p>
        ))}
      </div>
    );
  }
}

export default App;
