import { SET_DIR, SET_LANG, SET_THEME } from "../constant/types";

const INITIAL = {
  theme: localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light",
  dir: localStorage.getItem("dir") ? localStorage.getItem("dir") : "ltr",
  lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
};

export default function(state = INITIAL, action) {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: action.payloda
      };
    }

    case SET_LANG: {
      return {
        ...state,
        lang: action.payloda
      };
    }

    case SET_DIR: {
      return {
        ...state,
        dir: action.payloda
      };
    }

    default: {
      return state;
    }
  }
}
