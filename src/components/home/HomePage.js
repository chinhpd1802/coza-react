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
        <section class="bg0 p-t-23 p-b-140">
          <div class="container">
            <div class="p-b-10">
              <h3 class="ltext-103 cl5">Product Overview</h3>
            </div>

			<div class="flex-w flex-sb-m p-b-52">
                <FilterCategory/>
            <div class="flex-w flex-c-m m-tb-10">
              <div class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                <i class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                <i class="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Filter
              </div>

              <div class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                <i class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                <i class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Search
              </div>
            </div>
            <SearchProduct />
            <Filter />
            </div>
          <ListProduct/>
          </div>
        </section>
      </div>
    );
  }
}
