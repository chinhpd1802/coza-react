import React from "react";
import Product from "./Product";
import { connect } from 'react-redux';
import {addToCart} from "../../store/actions/cartActions";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }
  addToCart = (product) => {
    this.props.addToCart(product);
}
  render() {
    const { product } = this.props;
    return (
      <div
        className="modal fade" 
        id={`productModal${this.props.index}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby={`productModalLabel${this.props.index}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`productModalLabel${this.props.index}`}>
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <Product
            product={product}
            addToCart={this.addToCart}
            inCart={
              this.props.cart.length > 0 &&
              this.props.cart.filter((e) => e.product._id === product._id)
                .length > 0
            }
          />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);