import React from "react";
import Product from "./Product";
// import "../../assets/vendor/select2/select2.min.css";
// import "../../assets/vendor/daterangepicker/daterangepicker.css";
// import "../../assets/vendor/slick/slick.css";
// import "../../assets/vendor/animate/animate.css";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let wrap_modal = "wrap-modal" + this.props.index;
    // let js_modal = "js-modal" + this.props.index;
    // let overlay_modal = "overlay-modal" + this.props.index;
    // let js_hide_modal = "js-hide-modal" + this.props.index;
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
              <Product name={this.props.name} price={this.props.price} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
