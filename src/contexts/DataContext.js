import React, { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "./../reducers/DataReducer";
import {videosList} from "../database";

const DataContext = createContext();

const initialState = {
  videos: [],
  likedVideos: [],
  savedVideos: [],
  sortBy: "",
  filters: {
    filterByCategories: []
  }
}

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        dispatch({
          type: "SET_VIDEOS",
          payload: videosList,
        });
        
      } catch (err) {
        console.log("Error message: ", err);
      }
    })(); //IFFE
  }, []);

  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    </>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
