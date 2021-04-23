import React, { Fragment, useContext } from "react";
import { Context as DataContext } from "../context/DataContext";

const SortingSection = () => {
    const { state, sortHomesByPrice } = useContext(DataContext);
    const { totalLength, priceSortValue } = state;

    const sortByPrice = (e) => {
        const value = e.target.value;
        sortHomesByPrice({ priceSortValue: value })
      };
    
  
  return (
    <Fragment>
      <h1 className="text-2xl text-gray-500">
        {totalLength} homes available
      </h1>
      <div className="flex space-x-5 items-center">
        <div className="uppercase text-gray-500 text-bold whitespace-nowrap">
          sort by
        </div>
        <select
          className="focus:border-light-lightBlue-500 focus:ring-1 focus:ring-lightlightBlue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border-gray-300 pl-2 pr-8"
          aria-label="form input"
          value={priceSortValue}
          name={priceSortValue}
          onChange={(e) => sortByPrice(e)}
        >
          <option value="high">Price: High to Low</option>
          <option value="low">Price: Low to High</option>
        </select>
      </div>
    </Fragment>
  );
};

export default SortingSection;
