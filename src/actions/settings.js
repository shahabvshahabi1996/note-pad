import { SET_DIR, SET_THEME, SET_LANG } from "../constant/types";

export const toggleTheme = theme => {
  let newTheme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  return dispatch => {
    return dispatch({ type: SET_THEME, payload: newTheme });
  };
};

export const setDirection = dir => {
  localStorage.setItem("dir", dir);
  return dispatch => {
    return dispatch({ payload: dir, type: SET_DIR });
  };
};

export const setLanguage = lang => {
  localStorage.setItem("lang", lang);
  return dispatch => {
    dispatch({ payload: lang, type: SET_LANG });
  };
};
