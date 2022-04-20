import React               from 'react';
import {  Route, Switch }  from 'react-router-dom'; 
import Header              from './comp/Header';
import Home                from './comp/Home';
import Contact             from './comp/Contact';
import Products            from './comp/Products';
import Shop                from './comp/Shop';
import Cart                from './comp/Cart';
import Favicon             from 'react-favicon'
import jagerLogo           from './media/f_sec/jagger_logo.png';
import './css/Main.css';



 

class Main extends React.Component {
 

    componentDidMount() {
         window.addEventListener('scroll', (e) => this.handleMainScroll(e));
         this.handleMainScroll();
    }

    handleMainScroll(e) {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        
        let headNavBar = document.querySelector('.head_cont_wrapnav');
        if(top > 130) {

            if(headNavBar.style.display !== 'none') {
                headNavBar.style.marginTop = '-100px';
            }
        } else {
            headNavBar.style.marginTop = '0';
        }
           // check if is view
           const DivIsInView = el => {
               if(el) {
                        const scroll = window.scrollY || window.pageYOffset;
                        const boundsTop = el.getBoundingClientRect().top + scroll;
                        
                        const viewport = {
                            top: scroll,
                            bottom: scroll + window.innerHeight,
                        }
                        const bounds = {
                        top: boundsTop,
                        bottom: boundsTop + el.clientHeight,
                        }
                    
                        return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
                        || ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
                    }
                }
        
               
                // Second section
                let seCSec = document.querySelector('.s_sec_video');
                let seCSecInview = DivIsInView(seCSec);
        
                if(seCSecInview) {
                    document.querySelector('.s_sec_slsh').style.left = 0;
                }
        
                // Third section
                let thirdCSec = document.querySelector('.th_wrhlf_f_txt');
                let thirdCSecInview = DivIsInView(thirdCSec);
        
                if(thirdCSecInview) {
                    // Animate third first text
                    let thrdFTxt = document.querySelectorAll('.th_wrhlf_f_txt');
                    thrdFTxt.forEach(el => el.classList.add('fseculbtxt_jgmst_show'));
                    // Animate third secont txt
                    let thrdFTxtTwo = document.querySelector('.thrd_thrd_wrhalf_wrap');
                    thrdFTxtTwo.classList.add('fseculbtxt_jgmst_show');
                }
        
                 // Fourth section
                 let fourthGlass = document.querySelector('.fth_fth_wrhalf_wrpgls');
                 let fourthGlassInview = DivIsInView(fourthGlass);
         
                 if(fourthGlassInview) {
                     // Animate right bottle
                     if(!document.querySelector('.fth_fth_s_wrbttl').classList.contains('fth_rightbottle_show')) {
                        document.querySelector('.fth_fth_s_wrbttl').classList.add('fth_rightbottle_show');
        
                        let fthSpanTxts = document.querySelector('.fth_fth_wrhalf_f').getElementsByTagName('span');
        
                         for(let i =0; i< fthSpanTxts.length; i++) {
                             fthSpanTxts[i].classList.add('fthspantxt_show');
                         }
                         // Reveal ice glass
                         document.querySelector('.fth_fth_wrhalf_wrpgls').classList.add('fthspantxt_show');
                    }
                 }
        
                 // Seventh section
                 let svthTitle = document.querySelector('.svth_half_sc_tittle');
                 let svthTitleInview = DivIsInView(svthTitle);
         
                 if(svthTitleInview) {
                     // Animate text
                     if(!svthTitle.classList.contains('svth_txtshow')) {
                        svthTitle.classList.add('svth_txtshow');
                        document.querySelector('.svth_half_sc_tittle_p').classList.add('svth_txtshow');
                        document.querySelector('.svth_half_btnlnk_wrap').classList.add('svth_txtshow');
                    }
                 } 
    }
    
    
    render() {
        return (
                <div>
                    <Favicon url={jagerLogo} />
                    <div className='main_container'>
                    <Header/>
                        <Switch>    
                            <Route exact path='/'   component={Home}     />    
                            <Route path='/products' component={Products} />
                            <Route path='/shop'     component={Shop}     /> 
                            <Route path='/contact'  component={Contact}  />     
                            <Route path='/cart'     component={Cart}     />    
                        </Switch>
                    </div>
                </div>
        )
    }
}


 
export default Main;
 
