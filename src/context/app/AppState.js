import React, { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { SET_NAVBAR,SET_LANG } from "./types/Types";
const initialState = {
  isNavbar: true,
  selectedLanguage: localStorage.getItem("i18nextLng") || 'en'
};

const AppState = (props) => {


  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setNavbarValue = (val) => {
    dispatch({ type: SET_NAVBAR, payload: val })
  }
  const setSelectedLang = (val) => {
    dispatch({ type: SET_LANG, payload: val })
  }

  return (
    <AppContext.Provider
      value={{
        isNavbar: state.isNavbar,
        selectedLanguage: state.selectedLanguage,
        setNavbarValue,
        setSelectedLang
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;