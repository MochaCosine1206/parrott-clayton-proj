import React, { useContext } from "react";
import { Context as DataContext } from "../context/DataContext";

const LoadMoreButton = () => {
    const { state, extendResults } = useContext(DataContext);
    const { data } = state;

    const fetchMoreHomes = (e) => {
        const currentAmount = data.length;
        extendResults({ currentAmount });
      };
    
  
    return (
        <button
        className="mb-8 w-11/12 md:w-1/3 max-w-xs h-16 rounded-lg bg-blue-500 text-lg text-white place-self-center"
        onClick={(e) => fetchMoreHomes(e)}
      >
        Load More
      </button>

    )
}

export default LoadMoreButton