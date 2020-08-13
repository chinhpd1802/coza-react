import React from "react";
import Slider from "../paritals/Slider";
import Banner from "../paritals/Banner";
import Filter from "../products/Filter";
import FilterCategory from "../products/FilterCategory";
import SearchProduct from "../products/SearchProduct";
import ListProduct from "../products/ListProduct"
export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Slider />
        <Banner />
        <section className="bg0 p-t-23 p-b-140">
          <div className="container">
            <div className="p-b-10">
              <h3 className="ltext-103 cl5">Product Overview</h3>
            </div>

			<div className="flex-w flex-sb-m p-b-52">
                <FilterCategory/>
            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Filter
              </div>

              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Search
              </div>
            </div>
            <SearchProduct />
            <Filter />
            </div>
          <ListProduct api="/api/products/overeview-list"/>
          </div>
        </section>
      </div>
    );
  }
}
