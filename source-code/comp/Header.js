import React               from 'react';
import { Link            } from 'react-router-dom'
import { connect         } from "react-redux";
import { setCartProducts } from '../actions'; 
import shopCartIcon        from '../media/cart/shopping-cart.png';
import '../css/Header.css';
 



const mapStateToProps = state => {
    return {  
        propsCartProducts : state.propsCartProducts,
          };
  };

  
function mapDispatchToProps(dispatch) {
    return {
        setCartProducts : arr  => dispatch(setCartProducts(arr))
          };
  }




class connectedHeader extends React.Component {
 
    
    componentDidMount() {
        // Event listener for hamburger mobile menu
        window.addEventListener('resize', (e) => this.closeHambMenu(e));

        // Check localStorage Cart if exists and set the cart items
        if(window.localStorage.getItem('storageCart') !== null && !this.props.propsCartProducts.length > 0) {
            let cartLS = JSON.parse(localStorage.getItem('storageCart'));
            this.props.setCartProducts({ propsCartProducts: cartLS })
        }
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.propsCartProducts.length > prevProps.propsCartProducts.length) {
            // Add shake effect to cart icon
            document.querySelector('.hcwr_cicon').classList.add('hshk_cic');
            // Remove shake effect 
            setTimeout(() => {
                document.querySelector('.hcwr_cicon').classList.remove('hshk_cic');
            }, 1000);
        }
    }

    closeHambMenu(e) {
        let hambMenu = document.querySelector('.head_burgermenu');
        let mobMenu = document.querySelector('.h_mobmenu_left');
        // If mob menu is open, turn off.
        if(window.innerWidth > 780 && mobMenu.classList.contains('hmobmen_active')) {
            mobMenu.classList.remove('hmobmen_active');
            hambMenu.classList.remove('active');
            // give the opacity back for cart icon
            document.querySelector('.head_cont_wrcarticon').setAttribute('style','opacity:1;pointer-events:visible');
        }
    }
 

 
    openMobMenu() {
        let hambMenu = document.querySelector('.head_burgermenu');
        let mobMenu = document.querySelector('.h_mobmenu_left');
        
        // Show / hide hamb menu; Animate on/off hamb button
        if(!hambMenu.classList.contains('active')) {
            mobMenu.classList.add('hmobmen_active');
            hambMenu.classList.add('active');     
            // hide cart icon
            document.querySelector('.head_cont_wrcarticon').setAttribute('style','opacity:0;pointer-events:none');
        } else {
            mobMenu.classList.remove('hmobmen_active');
            hambMenu.classList.remove('active');
            // show cart icon when Cart is not mounted
            if(!document.querySelector('.cart_container')) {
                document.querySelector('.head_cont_wrcarticon').setAttribute('style','opacity:1;pointer-events:visible');
            }
        }
    }

 
    render() {
        let onMobile = window.innerWidth <= 780 ? true : false;

        return (
                <div>
                    <div className='header_container'>
                        <div className='head_contwrap'>
                            <Link to={'/'} className='head_cont_wraplogo'></Link>

                            <div aria-label='navigation' tabIndex='0' className='head_cont_wrapnav'>
                                <Link to={'/'} aria-label='home' tabIndex='0'>Home</Link>
                                <Link to={'/products'} aria-label='products' tabIndex='0'>Products</Link>
                                <Link to={'/shop'} aria-label='shop' tabIndex='0'>Shop</Link>
                                <Link to={'/contact'} aria-label='contact' tabIndex='0'>Contact</Link>
                                <Link to={'/cart'} aria-label='cart' tabIndex='0'>Cart</Link>
                            </div>
                            
                            {/* Cart icon */}
                            <div className='head_cont_wrcarticon'>
                                <span tabIndex='0' aria-label='cart number'>{this.props.propsCartProducts.length}</span>
                                <Link to={'/cart'} className='hcwr_cicon' tabIndex='0' aria-label='view cart'><img src={shopCartIcon} alt=''/></Link>
                            </div>
                            {/* Hamburger  menu */}
                            <div className='head_cont_wrhmbbtn'>
                                <div className='head_burgermenu' tabIndex='0' aria-label='open mobile menu' onClick={() => this.openMobMenu()}> 
                                    <span className='burger_line burger_line-top'></span>
                                    <span className='burger_line burger_line-center'></span>
                                    <span className='burger_line burger_line-bottom'></span>
                                </div>
                            </div>

                        </div>
                        {/* Mobile dropmenu */}
                        <div className='h_mobmenu_left'>
                            <div className='h_mobmenu_left_wrapnav' tabIndex={onMobile ? 0 : -1} aria-label='mobile navigation menu'>
                                <span><Link to={'/'} aria-label='home' tabIndex={onMobile ? 0 : -1} onClick={() => this.openMobMenu()}>Home</Link></span>
                                <span><Link to={'/products'} aria-label='products' tabIndex={onMobile ? 0 : -1} onClick={() => this.openMobMenu()}>Products</Link></span>
                                <span><Link to={'/shop'} aria-label='shop' tabIndex={onMobile ? 0 : -1} onClick={() => this.openMobMenu()}>Shop</Link></span>
                                <span><Link to={'/contact'} aria-label='contact' tabIndex={onMobile ? 0 : -1} onClick={() => this.openMobMenu()}>Contact</Link></span>
                                <span><Link to={'/cart'} className='hmobleft_cart_lk' aria-label='cart' tabIndex={onMobile ? 0 : -1} onClick={() => this.openMobMenu()}>Cart (<span>{this.props.propsCartProducts.length}</span>)</Link></span>
                            </div>
                            <div className='h_mobmenu_left_wrapsocial'>
                            <div className='fcwrp_ssec_wrapsociallinks' aria-label='social links group'>
                                    <a href='https://www.facebook.com/jagermeisterromania/' tabIndex={onMobile ? 0 : -1} aria-label='facebook link'></a>
                                    <a href='https://www.instagram.com/jagermeisterofficial/' tabIndex={onMobile ? 0 : -1} aria-label='instagram link'></a>
                                    <a href='https://twitter.com/jagermeister?lang=ro' tabIndex={onMobile ? 0 : -1} aria-label='twitter link'></a>
                                    <a href='https://www.youtube.com/channel/UCP8TYmDVES_iPVBuIHv3T3w' tabIndex={onMobile ? 0 : -1} aria-label='youtube link'></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

const Header = connect(mapStateToProps,mapDispatchToProps)(connectedHeader);
export default Header;
