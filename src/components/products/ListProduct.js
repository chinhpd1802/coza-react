import React, { Fragment } from "react";
import ProductItem from "./ProductItem";
import Async from "react-async";

export default class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
    };
  }
  // setStateAsync(products) {
  //   return new Promise((resolve) => {
  //     this.setState(products, resolve)
  //   });
  // }
  // fetchProducts(){
  //   setTimeout(() => {
  //   fetch(this.props.api)
  //   .then((res) => res.json())
  //   .then((products) => this.setState({ products:products }));
  // }, 0)
  // }
  componentDidMount() {
    fetch(this.props.api)
      .then((res) => res.json())
      .then((products) =>
        this.setState({ products: products, loading: false })
      );
  }
  renderList = (products) => {
    return (
      <div className="container">
        <div className="row isotope-grid">
          {products.map((product, index) => (
            <ProductItem
              key={product._id}
              name={product.name}
              price={product.price}
              category={product.category}
              id={product._id}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  };
  render() {
    const { loading, products } = this.state;
    return (
      <Fragment>{loading ? "loading" : this.renderList(products)}</Fragment>
    );
  }
}
