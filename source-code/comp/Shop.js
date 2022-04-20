import React               from 'react';
import Footer              from './Footer';
import shopProducts        from '../js/ShopProducts.js';
import { connect         } from "react-redux";
import { setCartProducts } from '../actions'; 
import { calcQuantity    } from '../js/quant.js';
import '../css/Shop.css';



const mapStateToProps = state => {
    return {  
        propsCartProducts : state.propsCartProducts,
          };
  };

  function mapDispatchToProps(dispatch) {
    return {
        setCartProducts : arr => dispatch(setCartProducts(arr))
          };
  }




class connectedShop extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            stateShopProd : shopProducts,
            cartProducts  : []
        }
    }

    componentDidMount() {

        // Scroll to top on mount
        window.scrollTo({ top: 50 });
    }

    selectProdQuantity(type, prod) {

    // Pass action through function and update quantity
    let prodQuantUpdate = calcQuantity(type,prod, shopProducts);
    this.setState({ stateShopProd: prodQuantUpdate })  
    }
    
    addToCart(prod, e) {

        // Set 1s opacity low effect when the products was added to cart
        let targetDOM = e.target;
        let prodBoxes = document.querySelectorAll('.shp_prodbox');
        targetDOM.parentNode.setAttribute('style', 'opacity: 0.8');
        // Pointer events none for all prod box
        prodBoxes.forEach(el => el.classList.add('shpbox_atcload'));
        // Remove addtocart effect from all prodbox with 1s delay
        setTimeout(() => {
            prodBoxes.forEach(el =>  { 
                el.classList.remove('shpbox_atcload');
                // Remove opacity
                el.removeAttribute('style');
            });
        }, 1000);

        // Add product to cart
        let cartProducts = [...this.props.propsCartProducts];
        let prodFound = false;
        let prodIndex;

        // Proceed only if cartProducts array length > 0
        if(cartProducts.length > 0) {
            // // Loop through cartProducts to find id
            for(let i in cartProducts) {
                if(cartProducts[i].id === prod.id) {
                     // If found, set prodFound to true and get prodIndex
                     prodFound = true;
                     prodIndex = cartProducts.indexOf(cartProducts[i]);
                     // If id was found, stop loop
                     break;
                }
            }
        
            // If id was found, update index product (totalPrice)
          if(prodFound) {
            cartProducts[prodIndex].totalPrice = cartProducts[prodIndex].price * cartProducts[prodIndex].quantity;
          } else {
            // If array length || !prod.id, add prod
            prod.totalPrice = prod.price * prod.quantity;
            cartProducts.push(prod);
          }
          
        // If cartProducts length === 0, proceed
        } else {
            // If !array length, add product
            prod.totalPrice = prod.price * prod.quantity;
            cartProducts.push(prod);
        }

        // Set to default and update new cartproducts state
        prodFound = false;
        this.setState({ cartProducts })
        this.props.setCartProducts({ propsCartProducts: cartProducts })
        // Save cart to localStorage
        localStorage.setItem('storageCart', JSON.stringify(cartProducts));
  
        
    }

    render() {
        return (
        
                <div>
                    <div className='shop_container'>
                        <span className='shop_cwd_title' tabIndex='0' role='title'>get delivered</span>

                        <div className='shop_prod_wrapper'>
                            {this.state.stateShopProd.map((prod,ind) =>
                                <div key={ind} className='shp_prodbox' tabIndex='0' role='group' aria-label='product'>
                                    <img src={prod.img} alt='' className={prod.className}></img>
                                    <span className='shpprodbox_title' tabIndex='0'>{prod.name}</span>
                                    <span className='shpprodbox_price' tabIndex='0'>${prod.price}</span>
                                    <div className='shpprodbox_quantity'>
                                        <span className='sprdbx_quantity_btn' tabIndex='0' role='decrease quantity' onClick={(e) => this.selectProdQuantity('decrease', prod)}>-</span>
                                        <span className='sprdbx_quantity_quantno' tabIndex='0' role='produt quantity'>{prod.quantity}</span>
                                        <span className='sprdbx_quantity_btn' tabIndex='0' role='increase quantity' onClick={(e) => this.selectProdQuantity('increase', prod)}>+</span>
                                    </div>
                                    <div className='shpprodbox_addtocart' onClick={(e) => this.addToCart(prod,e)} tabIndex='0' role='add to cart button'>Add to cart</div>
                                </div>
                            )}
                        </div>

                        <Footer/>
                    </div>
            
                </div>
      
        )
    }
}


const Shop = connect(mapStateToProps,mapDispatchToProps)(connectedShop);
export default Shop;
 
