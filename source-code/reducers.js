import { SET_CART_PRODUCTS   }  from "./constants/action-types";
import { SET_DISPLAY_LOADING }  from "./constants/action-types";

    const initialState = {
         displayLoading     : true,
         propsCartProducts  : []
  }



    function rootReducer(state = initialState, action) {

      switch(action.type) {
        case SET_CART_PRODUCTS: 
            return Object.assign({}, state, {
              propsCartProducts: action.payload.propsCartProducts
          });
          break;
        case SET_DISPLAY_LOADING: 
          return Object.assign({}, state, {
            displayLoading: action.payload.displayLoading
        });
        break;

      }

      return state;
    }



  export default rootReducer;