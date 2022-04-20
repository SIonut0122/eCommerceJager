import { SET_CART_PRODUCTS          }  from "../constants/action-types";
import { SET_DISPLAY_LOADING          }  from "../constants/action-types";


export function setCartProducts(payload) {
  return { type: SET_CART_PRODUCTS, payload };
}
export function setDisplayLoading(payload) {
  return { type: SET_DISPLAY_LOADING, payload };
}
