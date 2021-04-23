import createDataContext from "./createDataContext";
import listings from "../data/listings";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.payload.data,
        totalLength: action.payload.totalLength,
        priceSortValue: action.payload.priceSortValue,
      };
    case "EXTEND_LISTINGS":
      return { ...state, data: action.payload };
    case "SORT_LISTINGS":
      return {
        ...state,
        data: action.payload.data,
        priceSortValue: action.payload.priceSortValue,
      };
    default:
      return state;
  }
};

const getData = (dispatch) => () => {
  dispatch({
    type: "GET_DATA",
    payload: {
      data: listings
      .sort((a, b) => a.startingPrice - b.startingPrice).slice(0, 9),
      totalLength: listings.length,
      priceSortValue: "low",
    },
  });
};

const extendResults = (dispatch) => ({ currentAmount }) => {
  const extendedListings = listings.slice(0, (currentAmount += 3));
  dispatch({ type: "EXTEND_LISTINGS", payload: extendedListings });
};

const sortHomesByPrice = (dispatch) => ({ priceSortValue }) => {
  switch (priceSortValue) {
    case "low":
      dispatch({
        type: "SORT_LISTINGS",
        payload: {
          data: listings
            .sort((a, b) => a.startingPrice - b.startingPrice).slice(0, 9),
          priceSortValue,
        },
      });
      break;
    case "high":
      dispatch({
        type: "SORT_LISTINGS",
        payload: {
          data: listings
            .sort((a, b) => b.startingPrice - a.startingPrice).slice(0, 9),
          priceSortValue,
        },
      });
      break;
    default:
      break;
  }
};

export const { Provider, Context } = createDataContext(
  dataReducer,
  { getData, extendResults, sortHomesByPrice },
  { data: [], totalLength: 200, priceSortValue: "" }
);
