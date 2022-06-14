// context creation  ✅
// provider -> delivry the data ✅
// consumer -> for getting data -- removed
// useContext hook-> now using ✅

import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/reducer";

let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: "Java",
    nbPages: 0,
    page: 0,
    hits: []
}

const AppContext = React.createContext();

// to create a provider function
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) => {

        dispatch({ type: "SET_LOADING" });

        try {
            const res = await fetch(url);
            const data = await res.json();
           // console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            })
        } catch (error) {
            console.log(error);
        }
    };

    //to remove post
    const removePost = (post_ID) => {
        dispatch({
            type: "REMOVE_POST",
            payload: post_ID,
        })
    }

    //to search post
    const searchPost = (searchQuery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery,
        })
    }

    //paginaton
    const getNextPost = () => {
        dispatch({
            type: "NEXT_PAGE",
        })
    }

    const getPrevPost = () => {
        dispatch({
            type: "PREV_PAGE",
        })
    }

    //to call tech API 
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);

    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost, getNextPost, getPrevPost }}>{children}</AppContext.Provider>
    );
};

//custom hook create
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };

