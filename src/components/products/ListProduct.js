import React, { Fragment } from "react";
import ProductItem from "./ProductItem";
import { connect } from 'react-redux';
import {addToCart} from "../../store/actions/cartActions";

class ListProduct extends React.Component {
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
        <div className="row isotope-grid">
          {products.map((product, index) => (
            <ProductItem
              key={product._id}
              name={product.name}
              price={product.price}
              category={product.category}
              id={product._id}
              index={index}
              product={product} 
            />
          ))}
        </div>
    );
  };
  render() {
    const { loading, products } = this.state;
    return (
      <Fragment>{loading ? <div className="container"><img src={require('../../assets/images/icons/loading.gif')}></img></div> : this.renderList(products)}</Fragment>
    );
  }
}
const mapStateToProps = (state) => {

  return {
      products: state.product.products,
      cart: state.cart.cart
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      addToCart: (product) => {
          dispatch(addToCart(product));
      }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ListProduct)