
const actions = {
  SET_NAVBAR: setNavbarValue,
  SET_LANG: setLang
}

function setNavbarValue(state, action) {
  return {
    ...state,
    isNavbar: action.payload,
  }
}
function setLang(state, action) {
  return {
    ...state,
    selectedLanguage: action.payload,
  }
}


export default (state, action) => { return actions[action.type](state, action) };