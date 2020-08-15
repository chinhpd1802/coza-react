import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  updateCartQuantity,
  removeFromCart,
} from "../../store/actions/cartActions";
class ItemQuick extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.item.quantity,
      btnVisible: false,
    };
  }

  handleChange = (e) => {
    if (e.target.value <= 0) {
      alert("Quantity must be greater than or equal to 1");

      return;
    }

    if (e.target.value > this.props.item.product.amount) {
      alert("You have exceeded the available items of this product!");

      return;
    }

    if (this.state.quantity != e.target.value) {
      this.setState({
        quantity: e.target.value,
        btnVisible: true,
      });
    }
    this.props.updateCartQuantity(this.props.item.product._id, e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.updateCartQuantity(
      this.props.item.product._id,
      this.state.quantity
    );

    this.setState({
      btnVisible: false,
    });
  };

  handleRemove = (e) => {
    this.props.removeFromCart(this.props.item.product._id);
  };

  render() {
    const { item } = this.props;
    // console.log(item);
    return (
        <li className="header-cart-item flex-w flex-t m-b-12">
        <div className="header-cart-item-img"  onClick={this.handleRemove}>
          <img src="images/item-cart-03.jpg" alt="IMG"/>
        </div>
        <div className="header-cart-item-txt p-t-8">
          <a
            href={"/products/"+item.product._id}
            className="header-cart-item-name m-b-18 hov-cl1 trans-04"
          >
            {item.product.name}
          </a>
          <span className="header-cart-item-info">{item.quantity} x ${item.product.price}</span>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartQuantity: (productId, quantity) =>
      dispatch(updateCartQuantity(productId, quantity)),
    removeFromCart: (productId) => dispatch(removeFromCart(productId)),
  };
};

export default connect(null, mapDispatchToProps)(ItemQuick);
