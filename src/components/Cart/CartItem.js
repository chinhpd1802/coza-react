import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { updateCartQuantity, removeFromCart } from '../../store/actions/cartActions';
class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        quantity: this.props.item.quantity,
        btnVisible: false
    };
}

handleChange = (e) => {

    if(e.target.value <= 0) {
        alert("Quantity must be greater than or equal to 1");

        return;
    }

    if(e.target.value > this.props.item.product.amount) {
        alert("You have exceeded the available items of this product!");

        return;
    }

    if(this.state.quantity != e.target.value) {
        this.setState({
            quantity: e.target.value,
            btnVisible: true
        });
    }
}

handleSubmit = (e) => {
    e.preventDefault();

    this.props.updateCartQuantity(this.props.item.product._id, this.state.quantity);

    this.setState({
        btnVisible: false
    });
}

handleRemove = (e) => {
    this.props.removeFromCart(this.props.item.product._id);
}

  render() {
    const { item } = this.props;
    // console.log(item);
    return (
      <tr className="table_row">
        <td className="column-1">
          <div className="how-itemcart1" onClick={this.handleRemove} >
            <img src="images/item-cart-05.jpg" alt="IMG" />
          </div>
        </td>
        <td className="column-2">{item.product.name}</td>
        <td className="column-3">{item.product.price}</td>
        {/* <form onSubmit={this.handleSubmit}> */}
        <td className="column-4">
          <div className="wrap-num-product flex-w m-l-auto m-r-0">
            <div
              className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
              // onClick={this.handleChange}
            >
              <i className="fs-16 zmdi zmdi-minus" />
            </div>
            <input
              className="mtext-104 cl3 txt-center num-product"
              type="number"
              name="num-product2"
              // defaultValue={1}
              onChange={this.handleChange} value={this.state.quantity}
             
            />
            <div
              className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
              // onClick={this.handleChange}
            >
              <i className="fs-16 zmdi zmdi-plus" />
            </div>
          </div>
        </td>
        {/* </form> */}
        <td className="column-5">{ item.product.price * this.state.quantity } </td>
      </tr>
    );
  }
}


const mapDispatchToProps = (dispatch) => {

  return {
      updateCartQuantity: (productId, quantity) => dispatch(updateCartQuantity(productId, quantity)),
      removeFromCart: (productId) => dispatch(removeFromCart(productId))
  }
};

export default connect(null, mapDispatchToProps)(CartItem);
