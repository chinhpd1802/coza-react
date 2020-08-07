import React from "react";
import ProductItem from "./ProductItem";

export default class ListProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products:[]
        }
    }
    componentDidMount() {
        fetch("/api/products/preview-list")
          .then((res) => res.json())
          .then((products) => this.setState({ products:products }));
    }
  render() {
    return (
      <div className="container">
        <div className="row isotope-grid">
        {this.state.products.map((product) => (
          <ProductItem key={product._id} name={product.name} price={product.price} id={product._id} />
        ))}
        </div>
      </div>
    );
  }
}
