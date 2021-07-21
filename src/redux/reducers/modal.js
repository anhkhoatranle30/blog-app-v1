import { INIT_STATE } from "../../constant";
import { getType, showModal, hideModal } from "../actions";

export default function modalReducers(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case getType(showModal): {
      return {
        ...state,
        isShown: true,
      };
    }
    case getType(hideModal): {
      return {
        ...state,
        isShown: false,
      };
    }
    default: {
      return state;
    }
  }
}
