import React from 'react';
import { setCartProducts } from '../actions'; 
import { connect         } from "react-redux";
import { v4 as uuidv4    } from 'uuid';
import { calcQuantity    } from '../js/quant.js';
import { getTotalCartSum } from '../js/getTotalSumCart.js';
import { Link            } from 'react-router-dom';

import Footer              from './Footer';
import emailIcon           from '../media/cart/email.png';
import cityIcon            from '../media/cart/city.png';
import zipIcon             from '../media/cart/zip.png';
import newsletterIcon      from '../media/cart/newsletter.png';
import phoneIcon           from '../media/cart/phone.png';
import userIcon            from '../media/cart/user.png';
import deliveryIcon        from '../media/cart/pin.png';

import creditCardIcon      from '../media/cart/credit-card.png';
import cvvIcon             from '../media/cart/cvv.png';
import expDateIcon         from '../media/cart/exp.png';
import acceptedIcon        from '../media/cart/accepted.png';
import americanExpIcon     from '../media/cart/american-express.png';
import applePayIcon        from '../media/cart/apple-pay.png';
import visaIcon            from '../media/cart/visa.png';
import discoverIcon        from '../media/cart/discover.png';
import shopCartIcon        from '../media/cart/shopping-cart.png';
import '../css/Cart.css';
 




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



class connectedCart extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            totalCartSumToPay       : 0,
            proceedWithCart         : false, 
            displayChckLoad         : false,
            openCheckoutDelivery    : false,
            openCheckoutPayment     : false,
            openCheckoutOrderStatus : false,
            checkoutInputsError     : false,
            firstName               :'',
            lastName                :'',
            email                   :'',
            city                    :'',
            deliveryAddress         :'',
            postalCode              :'',
            phoneNumber             :'',
            newsletterChecked       : false,
            nameOnCard              : '',
            cardNumber              : '',
            expMonth                :'',
            expYear                 :'',
            cvvCard                 : '',
            checkoutInputsErrorPay  : false,
            displayChckLoadPayment  : false,
           
        }
    }

    componentDidMount() {
        document.querySelector('.head_cont_wrcarticon').style.display = 'none';
        // Scroll to top on mount
        window.scrollTo({ top: 50 });
        // If localStorage cart is found, set as default cart
        if(window.localStorage.getItem('storageCart') !== null && !this.props.propsCartProducts.length > 0) {
            let cartLS = JSON.parse(localStorage.getItem('storageCart'));
            this.getCartTotalSum(cartLS);
        } else {
            // If not, proceed with original
            this.getCartTotalSum(this.props.propsCartProducts);
        }   
    }

    componentWillUnmount() {
        // On cart unmount,make cart icon visible
        document.querySelector('.head_cont_wrcarticon').style.display = 'flex';
        document.querySelector('.head_cont_wrcarticon').setAttribute('style','opacity:1;pointer-events:visible');
    }

    selectCartProdQuantity(type,prod) {
        // Update product quantity
        let prodQuantUpdate = calcQuantity(type,prod, this.props.propsCartProducts);
        // Update cartproducts props
        this.props.setCartProducts({ propsCartProducts: prodQuantUpdate })
        
        localStorage.setItem('storageCart', JSON.stringify(prodQuantUpdate));
        // Recalculate total cart sum
        this.getCartTotalSum(prodQuantUpdate);
    }

    removeCartProd(prod,e) {
        let propsCartProducts = [...this.props.propsCartProducts];

        // Find product by the id and display loading effect
        for(let i in propsCartProducts) {
            if(propsCartProducts[i].id === prod.id) {
                propsCartProducts[i].removeLoad = true;
                this.props.setCartProducts({ propsCartProducts: propsCartProducts })
                break;  
            }
        }
        // Remove selected product after loading effect
        setTimeout(() => {
                // Loop through cart prod and disable removeload effect for all products
                for(let i in propsCartProducts) {
                    if(propsCartProducts[i].removeLoad) {
                        propsCartProducts[i].removeLoad = false;
                        this.props.setCartProducts({ propsCartProducts: propsCartProducts })
                        break;  
                    }
                }

                let removedProduct = [...this.props.propsCartProducts].filter(el => el.id !== prod.id);
                this.props.setCartProducts({ propsCartProducts: removedProduct })

                // Save to localStorage
                localStorage.setItem('storageCart', JSON.stringify(removedProduct));

                // Recalculate total cart sum
                this.getCartTotalSum(removedProduct);
        }, 1300);  
    }

    getCartTotalSum(obj) {
        // Pass new object cart through function and get totalSum to pay
        let calcTotalCartSum = getTotalCartSum(obj);
        this.setState({ totalCartSumToPay: calcTotalCartSum })
    }
    
    proceedChckBtn() {
        this.setState({ proceedWithCart: true, openCheckoutDelivery: true, displayChckLoad: true})
        
        setTimeout(() => {
            this.setState({ displayChckLoad: false })
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    }

    goToPaymentBtn() {
        let { firstName,lastName,email,city,deliveryAddress,phoneNumber,postalCode} = this.state;

        if(firstName.length && lastName.length && email.length && city.length
            && deliveryAddress.length && phoneNumber.length && postalCode.length) {
                
                // Proceed to payment container / display loading effect
                this.setState({ checkoutInputsError: false, openCheckoutDelivery: false, openCheckoutPayment: true, displayChckLoadPayment: true })
                // Hide loading effect for payment container after 1.5s
                setTimeout(() => {
                    this.setState({ displayChckLoadPayment: false })
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 1500);
            } else {
                this.setState({ checkoutInputsError: true })
            }
    }

    finishOrder() {
        let {nameOnCard,cardNumber,cvvCard,expMonth,expYear} = this.state;

        if(nameOnCard.length && cardNumber.length && cvvCard.length && expMonth.length && expYear.length) {
                
            // Display loading effect before order status
            this.setState({ checkoutInputsErrorPay: false, displayChckLoadPayment: true })
            // Hide loading effect after 1.5s
            setTimeout(() => {
                this.setState({ displayChckLoadPayment: false, openCheckoutPayment: false, openCheckoutOrderStatus: true })
                this.props.setCartProducts({ propsCartProducts: [] })
                document.querySelector('.cart_checkout_header').setAttribute('style','pointer-events:none !important');
            }, 1500);
            } else {
                this.setState({ checkoutInputsErrorPay: true })
            }

            let today     = new Date(),
        	todayDate = today.getDate()  + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

            // Add missing zero 
            function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
            }

            // Pass hour,minutes and secons through function and add zero
            let h    = addZero(today.getHours()),
                m    = addZero(today.getMinutes()),
                s    = addZero(today.getSeconds()),
                hour = h + ":" + m + ":" + s;
            
            // Generate order number
            let generateUuid = uuidv4(),
                transId      = generateUuid.substring(24,generateUuid.length);
            this.setState({ orderToday: todayDate, orderTime: hour, orderNumber: transId})

    }

    backToDelivery() {
        this.setState({ 
            openCheckoutDelivery: true, 
            openCheckoutPayment: false,
            firstName:'',
            lastName:'',
            email:'',
            city:'',
            deliveryAddress:'',
            postalCode:'',
            phoneNumber:'',
            newsletterChecked: false,
            nameOnCard: '',
            cardNumber: '',
            expMonth:'',
            expYear:'',
            cvvCard: ''
        })
    }

    backToCart() {
        this.setState({ 
            proceedWithCart: false,
            openCheckoutDelivery: false,
            openCheckoutPayment: false,
            firstName:'',
            lastName:'',
            email:'',
            city:'',
            deliveryAddress:'',
            postalCode:'',
            phoneNumber:'',
            newsletterChecked: false,
            nameOnCard: '',
            cardNumber: '',
            expMonth:'',
            expYear:'',
            cvvCard: ''
        })
        window.scrollTo({ top: 50 });
    }


    
    render() {
        let propsCartProducts = this.props.propsCartProducts;

        return (
                <div>
                    <div className='cart_container'>

                        {!this.state.proceedWithCart ? (
                            <React.Fragment>
                                <span className='cart_cwd_title' tabIndex='0' aria-label='title'>Waiting for you</span>
                                <div className='cart_prod_wrapper'>

                                        {propsCartProducts.length > 0 ? (
                                            <React.Fragment>
                                            {propsCartProducts.map((prod,ind) =>
                                                    <div key={ind} className='cart_prbx' tabIndex='0' aria-label='product'>
                                                        <div className='cartprbx_img'>
                                                            <img id={prod.imgId} src={prod.img} alt=''/>
                                                            {prod.removeLoad && ( <div className='cartprbx_loadremove'></div> )}
                                                        </div>
                                                        <div className='cartprbx_wrdata'>
                                                            <div className='cartbx_wrdata_title' tabIndex='0'>{prod.name}</div>
                                                            <div className='cartbx_wrdata_quantity'>
                                                                <div className='cartbx_wrd_quant_wrap'>
                                                                    <span className='cartbx_wqwr_quantity cartbx_wqwr_quantity_decr' tabIndex='0' aria-label='decrease quantity' onClick={(e) => this.selectCartProdQuantity('decrease', prod)}>-</span>
                                                                    <span className='cartbx_wqwr_quantity cartbx_wqwr_quantity_no' tabIndex='0' aria-label='quantity'>{prod.quantity}</span>
                                                                    <span className='cartbx_wqwr_quantity cartbx_wqwr_quantity_incr' tabIndex='0' aria-label='increase quantity' onClick={(e) => this.selectCartProdQuantity('increase', prod)}>+</span>
                                                                </div>
                                                            </div>
                                                            <div className='cartbx_wrdata_sum'>
                                                                <span tabIndex='0' aria-label='total price'>${prod.totalPrice}</span>
                                                                <span tabIndex='0' aria-label='remove product' onClick={(e) => this.removeCartProd(prod,e)}>Remove</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                            )}
                                            <div className='cartprod_wrap_totalpay'>
                                                <span tabIndex='0'>Total:</span>
                                                <span tabIndex='0' aria-label='total cart to pay'>${this.state.totalCartSumToPay}</span>
                                            </div>
                                            <div className='cartprod_wrap_proceedbtn'>
                                            <span tabIndex='0' aria-label='checkout button' onClick={()=> this.proceedChckBtn()}>Checkout</span>
                                            </div>
                                            </React.Fragment>
                                        ) : (
                                            <div className='emptycart_prod_wrapper'>
                                                <span className='empc_pdwrp_txt'>
                                                    <p tabIndex='0'>Your cart is empty :(</p>
                                                    <p tabIndex='0'>Visit the <Link to={'/shop'} tabIndex='0' aria-label='shop button'>Shop</Link> to start the party</p>
                                                </span>
                                            </div>
                                        )}
                                </div>
                            </React.Fragment>
                        ) :
                        (
                            <React.Fragment>
                            <span className='cart_cwd_title' tabIndex='0' aria-label='title'>Checkout</span>

                                {/* Delivery checkout info */}
                                <div className='cart_checkout_header'>
                                    <span tabIndex='0' aria-label='delivery navigation button' className={this.state.openCheckoutDelivery ? 'ccheck_head_txtactive' : 'ccheck_head_txtinactive'} onClick={(e) => this.backToDelivery()}>1. Delivery</span>
                                    <span tabIndex='0' aria-label='payment navigation button' className={this.state.openCheckoutPayment ? 'ccheck_head_txtactive' : 'ccheck_head_txtinactive'} onClick={()=>this.goToPaymentBtn()}>2. Payment</span>
                                    <span tabIndex='0' aria-label='order status navigation button' className={this.state.openCheckoutOrderStatus ? 'ccheck_head_txtactive' : 'ccheck_head_txtinactive'}>3. Order status</span>
                                </div>

                                {this.state.openCheckoutDelivery && (
                                    <React.Fragment>
                                        <span className='cart_cwd_title ccwrd_tit_smt' tabIndex='0' aria-label='title'>Billing address</span>
                                        <div className='cart_prod_wrapper_proceed cpwr_prcd_del'>
                                        {this.state.displayChckLoad && (
                                        <div className='cart_checkout_loading'><div className='cart_chkt_load_ring'></div></div>
                                        )}
                                        <div className='cart_prod_wr_proc_wrinp'>
                                            <span className='ctcwd_wrinp_txt' tabIndex='0' ><img src={userIcon} alt=''/>First name*</span>
                                            <span className='ct_wrpinp_span'>
                                                <input type='text' tabIndex='0' aria-label='first name input' placeholder='John' onChange={(e)=>this.setState({ firstName: e.target.value })}></input>
                                            </span>

                                            <span className='ctcwd_wrinp_txt' tabIndex='0' ><img src={userIcon} alt=''/>Last name*</span>
                                            <span className='ct_wrpinp_span'>
                                                <input type='text' tabIndex='0' aria-label='last name input' placeholder='M. Doe' onChange={(e)=>this.setState({ lastName: e.target.value })}></input>
                                            </span>

                                            <span className='ctcwd_wrinp_txt' tabIndex='0' ><img src={emailIcon} alt=''/>Email*</span>
                                            <span className='ct_wrpinp_span'>
                                                <input type='text' tabIndex='0' aria-label='email input' placeholder='johndoe@example.com' onChange={(e)=>this.setState({ email: e.target.value })}></input>
                                            </span>

                                            <span className='ctcwd_wrinp_txt' tabIndex='0' ><img src={cityIcon} alt=''/>City*</span>
                                            <span className='ct_wrpinp_span'>
                                                <input type='text' tabIndex='0' aria-label='city input' placeholder='City' onChange={(e)=>this.setState({ city: e.target.value })}></input>
                                            </span>

                                            <span className='ctcwd_wrinp_txt' tabIndex='0' ><img src={deliveryIcon} alt=''/>Delivery address*</span>
                                            <span className='ct_wrpinp_span'>
                                                <input type='text' tabIndex='0' aria-label='delivery input' placeholder='432 W. 13th Street' onChange={(e)=>this.setState({ deliveryAddress: e.target.value })}></input>
                                            </span>
                                            

                                            <span className='ctcwd_wrinp_txt' tabIndex='0' ><img src={zipIcon} alt=''/>ZIP*</span>
                                            <span className='ct_wrpinp_span'>
                                                <input type='text' tabIndex='0' aria-label='zip code input' placeholder='90011' onChange={(e)=>this.setState({ postalCode: e.target.value })}></input>
                                            </span>

                                            <span className='ctcwd_wrinp_txt' tabIndex='0' ><img src={phoneIcon} alt=''/>Phone number*</span>
                                            <span className='ct_wrpinp_span'>
                                                <input type='text' tabIndex='0' aria-label='phone number input' placeholder='(222) 245 2555' onChange={(e)=>this.setState({ phoneNumber: e.target.value })}></input>
                                            </span>

                                            {/* Newsletter */}
                                            <div className='cart_chck_newsletter'>
                                                
                                                <span tabIndex='0' ><img src={newsletterIcon} alt=''/>Subscribe to our newsletter and get 10% discount on every online shopping cart list</span>
                                            
                                                <div className='cart_chck_newslt_wrchkinp'>
                                                    <input type='checkbox' tabIndex='0' aria-label='newsletter checkbox' name='sameadr' onChange={() => { this.setState({ newsletterChecked: !this.state.newsletterChecked})}}></input>
                                                    <span tabIndex='0'>Subscribe to the newsletter</span>
                                                </div>
                                            </div>

                                            {this.state.checkoutInputsError && ( <span tabIndex='0' className='cart_chck_errormsg'>* Please fill all the fields</span>)}
                                            
                                            <div className='cartprod_wrap_proceedbtn cart_chck_btn'>
                                                <span onClick={()=>this.goToPaymentBtn()} tabIndex='0' aria-label='payment button'>Go to payment</span>
                                            </div>
                                            <div className='cartprod_wrap_proceedbtn cart_chck_btn cchckbtn_btc'>
                                                <span onClick={()=>this.backToCart()} tabIndex='0' aria-label='back to cart button'>back to cart</span>
                                            </div>
                                        </div>
                                             {/* BIlling address cart list */}
                                            <div className='cpwr_prcd_del_cartlist'>
                                                <div className='cpwr_prcdel_cl_item'><span tabIndex='0' aria-label='cart list'>CART</span><span></span><span><img src={shopCartIcon} alt=''/></span></div>
                                                
                                                {propsCartProducts.map((prod,ind) =>
                                                <React.Fragment key={ind} tabIndex='0' aria-label='cart product'>
                                                    <div className='cpwr_prcdel_cl_item' tabIndex='0'><span tabIndex='0'>{prod.name}</span><span tabIndex='0'>x{prod.quantity}</span><span tabIndex='0'>${prod.totalPrice}</span></div>
                                                </React.Fragment>
                                                )}
                                                <div className='cpwr_prcdel_cl_item'><span tabIndex='0'>Total:</span><span></span><span tabIndex='0'>${this.state.totalCartSumToPay}</span></div>
                                            
                                            </div>
                                    </div>
                                </React.Fragment>
                                )}

                                {/* Payment checkout info */}
                                {this.state.openCheckoutPayment && (
                                    <React.Fragment>
                                        <span className='cart_cwd_title ccwrd_tit_smt' tabIndex='0' aria-label='title'>Payment</span>
                                        <div className='cart_prod_wrapper_proceed_payment'>

                                            {/* Loading effect after payment */}
                                            {this.state.displayChckLoadPayment && (
                                            <div className='cart_checkout_loading'><div className='cart_chkt_load_ring'></div></div>
                                            )}

                                            <div className='cart_prod_wr_proc_wrinp'>
                                                <span className='ctcwd_wrinp_txt' tabIndex='0'><img src={userIcon} alt=''/>Name on card</span>
                                                <span className='ct_wrpinp_span'>
                                                    <input type='text' tabIndex='0' aria-label='' placeholder='Johnny Doe' onChange={(e)=>this.setState({ nameOnCard: e.target.value })}></input>
                                                </span>

                                                <span className='ctcwd_wrinp_txt' tabIndex='0'><img src={creditCardIcon} alt=''/>Credit card number</span>
                                                <span className='ct_wrpinp_span'>
                                                    <input type='text' tabIndex='0' aria-label='credit card number input' placeholder='1111-2222-3333-4444' maxLength='16' onChange={(e)=>this.setState({ cardNumber: e.target.value })}></input>
                                                </span>
                                                <span className='ctcwd_wrinp_txt' tabIndex='0'><img src={expDateIcon} alt=''/>Exp Month</span>
                                                <span className='ct_wrpinp_span'>
                                                    <input type='text' tabIndex='0' aria-label='expiration month input' placeholder='January' onChange={(e)=>this.setState({ expMonth: e.target.value })}></input>
                                                </span>

                                                <span className='ctcwd_wrinp_txt' tabIndex='0'><img src={expDateIcon} alt=''/>Exp Year</span>
                                                <span className='ct_wrpinp_span ct_wrpinp_spexpyear'>
                                                    <input type='text' tabIndex='0' aria-label='expiration year input' placeholder='2025' maxLength='4' onChange={(e)=>this.setState({ expYear: e.target.value })}></input>
                                                </span>    
                                                <span className='ctcwd_wrinp_txt' tabIndex='0'><img src={cvvIcon} alt=''/>CVV</span>
                                                <span className='ct_wrpinp_span ct_wrpinp_spcvv'>
                                                    <input type='text' tabIndex='0' aria-label='cvv input' placeholder='233' maxLength='3' onChange={(e)=>this.setState({ cvvCard: e.target.value })}></input>
                                                </span>
                                                <span className='ctcwd_wrinp_txt' tabIndex='0'><img src={acceptedIcon} alt=''/>Accepted cards</span>
                                                <span className='ct_wrpinp_span ct_wrpinp_chckaccards'>
                                                    <img tabIndex='0' aria-label='american express' src={americanExpIcon} alt=''/>
                                                    <img tabIndex='0' aria-label='visa card' src={visaIcon} alt=''/>
                                                    <img tabIndex='0' aria-label='discover card' src={discoverIcon} alt=''/>
                                                    <img tabIndex='0' aria-label='apple card' src={applePayIcon} alt=''/>
                                                </span>  

                                                {this.state.checkoutInputsErrorPay && ( <span tabIndex='0' className='cart_chck_errormsg'>* Something went wrong. Please try again.</span>)}

                                                <div className='cartprod_wrap_proceedbtn cart_chck_btn'>
                                                    <span onClick={()=>this.finishOrder()} tabIndex='0' aria-label='finish order button'>Finish order</span>
                                                </div>

                                            </div>  
                                        </div>
                                    </React.Fragment>
                                )}

                                {/* Payment checkout info */}
                                {this.state.openCheckoutOrderStatus && (
                                    <React.Fragment>
                                        <span className='cart_cwd_title ccwrd_tit_smt' tabIndex='0' aria-label='title'>Order status</span>
                                        <div className='cart_prod_wrapper_proceed_ordersts'>
                                            <div className='cart_prodwr_prcorderstatus_wrap'>
                                                <div className='cppwr_col'>
                                                    <span tabIndex='0'>Order status:</span>
                                                    <span tabIndex='0'>Confirmed</span>
                                                </div>
                                                <div className='cppwr_col'>
                                                    <span tabIndex='0'>Order number:</span>
                                                    <span tabIndex='0'>{this.state.orderNumber}</span>
                                                </div>
                                                <div className='cppwr_col'>
                                                    <span tabIndex='0'>Approved at:</span>
                                                    <span tabIndex='0'>{this.state.orderToday} at {this.state.orderTime}</span>
                                                </div>
                                                <div className='cppwr_col'>
                                                    <span tabIndex='0'>Name:</span>
                                                    <span tabIndex='0'>{this.state.firstName}, {this.state.lastName}</span>
                                                </div>
                                                <div className='cppwr_col'>
                                                    <span tabIndex='0'>Receipt address:</span>
                                                    <span tabIndex='0'>{this.state.email}</span>
                                                </div>
                                                <div className='cppwr_col'>
                                                    <span tabIndex='0'>Delivery address:</span>
                                                    <span tabIndex='0'>{this.state.deliveryAddress},{this.state.city},{this.state.postalCode}</span>
                                                </div>
                                                <div className='cppwr_col'>
                                                    <span tabIndex='0'>Phone number:</span>
                                                    <span tabIndex='0'>{this.state.phoneNumber}</span>
                                                </div>
                                                <div className='cppwr_col'>
                                                    <span tabIndex='0'>Shipping tax:</span>
                                                    <span tabIndex='0'>$4.99</span>
                                                </div>
                                                <div className='cppwr_col'>
                                                    <span tabIndex='0'>Shipping time:</span>
                                                    <span tabIndex='0'>2-3 working days</span>
                                                </div>
                                                <div className='cppwr_col'>
                                                    <span tabIndex='0'>Total payment:</span>
                                                    <span tabIndex='0'>${this.state.totalCartSumToPay}</span>
                                                </div>


                                                <div className='cartprod_wrap_proceedbtn cart_ordsts_btn'>
                                                    <Link to={'/'} tabIndex='0' aria-label='main page button'>Main page</Link>
                                                </div>


                                            </div>
                                        </div>
                                    </React.Fragment>
                                )}

                            </React.Fragment>
                        )}

                    </div>
                            <Footer/>
                </div>
        )
    }
}

const Cart = connect(mapStateToProps,mapDispatchToProps)(connectedCart);
export default Cart;
