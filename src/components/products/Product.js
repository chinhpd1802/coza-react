import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// import { formatPrice } from '../../services/util';
export default class Product extends React.Component {
  state = {
    inCart: this.props.inCart,
    quantity: 0
  };
  IncrementItem = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  DecreaseItem = () => {
    if (this.state.quantity < 1) {
      this.setState({
        quantity: 0,
      });
    } else {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  };
 
  handleChange(event) {
    this.setState({ quantity: event.target.value });
  }
  addToCart = (e) => {
    e.preventDefault();

    this.props.addToCart(this.props.product,this.state.quantity);

    this.setState({
      inCart: true,
    });
  };

  render() {
    const { product } = this.props;
    // product.quantity = 1;
    console.log(this.state.quantity);
    return (
      <div className="row">
        <div className="col-md-6 col-lg-7 p-b-30">
          <div className="p-l-25 p-r-30 p-lr-0-lg">
            <div className="wrap-slick3 flex-sb flex-w">
              <div className="wrap-slick3-dots" />
              <div className="wrap-slick3-arrows flex-sb-m flex-w" />
              <div className="slick3 gallery-lb">
                <div
                  className="item-slick3"
                  data-thumb={require("../../assets/images/product-detail-01.jpg")}
                >
                  <div className="wrap-pic-w pos-relative">
                    <img
                      src={require("../../assets/images/product-detail-01.jpg")}
                      alt="IMG-PRODUCT"
                    />
                    <a
                      className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                      href={require("../../assets/images/product-detail-01.jpg")}
                    >
                      <i className="fa fa-expand" />
                    </a>
                  </div>
                </div>
                <div
                  className="item-slick3"
                  data-thumb={require("../../assets/images/product-detail-02.jpg")}
                >
                  <div className="wrap-pic-w pos-relative">
                    <img
                      src={require("../../assets/images/product-detail-02.jpg")}
                      alt="IMG-PRODUCT"
                    />
                    <a
                      className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                      href={require("../../assets/images/product-detail-02.jpg")}
                    >
                      <i className="fa fa-expand" />
                    </a>
                  </div>
                </div>
                <div
                  className="item-slick3"
                  data-thumb={require("../../assets/images/product-detail-03.jpg")}
                >
                  <div className="wrap-pic-w pos-relative">
                    <img
                      src={require("../../assets/images/product-detail-03.jpg")}
                      alt="IMG-PRODUCT"
                    />
                    <a
                      className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                      href={require("../../assets/images/product-detail-03.jpg")}
                    >
                      <i className="fa fa-expand" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 p-b-30">
          <div className="p-r-50 p-t-5 p-lr-0-lg">
            <h4 className="mtext-105 cl2 js-name-detail p-b-14">
              {product.name}
            </h4>
            <span className="mtext-106 cl2">{product.price}</span>
            <p className="stext-102 cl3 p-t-23">
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
              ligula. Mauris consequat ornare feugiat.
            </p>
            {/*  */}
            <div className="p-t-33">
              <div className="flex-w flex-r-m p-b-10">
                <div className="size-203 flex-c-m respon6">Size</div>
                <div className="size-204 respon6-next">
                  <div className="rs1-select2 bor8 bg0">
                    <select className="js-select2" name="time">
                      <option>Choose an option</option>
                      <option>Size S</option>
                      <option>Size M</option>
                      <option>Size L</option>
                      <option>Size XL</option>
                    </select>
                    <div className="dropDownSelect2" />
                  </div>
                </div>
              </div>
              <div className="flex-w flex-r-m p-b-10">
                <div className="size-203 flex-c-m respon6">Color</div>
                <div className="size-204 respon6-next">
                  <div className="rs1-select2 bor8 bg0">
                    <select className="js-select2" name="time">
                      <option>Choose an option</option>
                      <option>Red</option>
                      <option>Blue</option>
                      <option>White</option>
                      <option>Grey</option>
                    </select>
                    <div className="dropDownSelect2" />
                  </div>
                </div>
              </div>
              <div className="flex-w flex-r-m p-b-10">
                <div className="size-204 flex-w flex-m respon6-next">
                  <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                    <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"  onClick={this.DecreaseItem}>
                      <i className="fs-16 zmdi zmdi-minus" />
                     
                    </div>
                    <input
                      className="mtext-104 cl3 txt-center num-product"
                      type="number"
                      name="num-product"
                      onChange={this.handleChange.bind(this)}
                      value={this.state.quantity}
                    />
                    <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"  onClick={this.IncrementItem}>
                      <i className="fs-16 zmdi zmdi-plus" />
                    </div>
                  </div>
                  {this.state.inCart ? (
                    <button className="flex-c-m stext-101 cl0 size-101 bor1 p-lr-15 trans-04 btn btn-success" disabled>
                      Added to cart
                    </button>
                  ) : (
                    <button
                      className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                      onClick={this.addToCart}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex-w flex-m p-l-100 p-t-40 respon7">
              <div className="flex-m bor9 p-r-10 m-r-11">
                <a
                  href="#"
                  className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                  data-tooltip="Add to Wishlist"
                >
                  <i className="zmdi zmdi-favorite" />
                </a>
              </div>
              <a
                href="#"
                className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                data-tooltip="Facebook"
              >
                <i className="fa fa-facebook" />
              </a>
              <a
                href="#"
                className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                data-tooltip="Twitter"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                href="#"
                className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                data-tooltip="Google Plus"
              >
                <i className="fa fa-google-plus" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
