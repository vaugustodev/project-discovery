import { useReducer } from "react";

export const useReposActions = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

export const useFetchReposState = () => {
  let [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case useReposActions.FETCH_START:
        return { ...state, loading: true };
      case useReposActions.FETCH_SUCCESS:
        return { ...state, loading: false, repos: action.repos };
      case useReposActions.FETCH_ERROR:
        return { ...state, loading: false, error: true };
      default:
        return state;
    }
  }, {
    loading: true,
    repos: [],
    error: false,
  });

  return [state, dispatch];
};