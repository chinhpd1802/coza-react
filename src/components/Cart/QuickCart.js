import React from "react";

export default class QuickCart extends React.Component {
  render() {
   
    return (
      <div className="wrap-header-cart js-panel-cart">
        <div className="s-full js-hide-cart" />
        <div className="header-cart flex-col-l p-l-65 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 cl2">Your Cart</span>
            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
              <i className="zmdi zmdi-close" />
            </div>
          </div>
          <div className="header-cart-content flex-w js-pscroll">
            <ul className="header-cart-wrapitem w-full">
             {this.props.cart} 
            </ul>
            <div className="w-full">
              <div className="header-cart-total w-full p-tb-40">
                Total: ${this.props.total}
              </div>
              <div className="header-cart-buttons flex-w w-full">
                <a
                  href="shoping-cart.html"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                >
                  View Cart
                </a>
                <a
                  href="shoping-cart.html"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
                >
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
