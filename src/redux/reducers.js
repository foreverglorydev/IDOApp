import { SET_WALLET, SET_ADDRESS } from "./actions";

const initialState = {
  wallet: undefined,
  address: ''
};


function reducer(state = initialState, action) {  
  switch(action.type) {
    case SET_WALLET:
      return {
        ...state,
        wallet : action.payload
      };

      case SET_ADDRESS:
      return {
        ...state,
        address : action.payload
      };

    default:
      return state;
    }
  }
  export default reducer;