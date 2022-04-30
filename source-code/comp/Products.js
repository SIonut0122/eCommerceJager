import React             from 'react';
import { Link }          from 'react-router-dom'
import Footer            from './Footer';
import firstImgSec       from '../media/products/002_stag_assets_the_bottle.webp';
import secImgSec         from '../media/products/prod_ssec_img.png';
import jagerColdBrew     from '../media/products/jager_cold_brew.webp';
import miniMeister       from '../media/products/mini-meister.webp';
import jagerColdBrewMini from '../media/products/jagermeister-cold-brew-mini.webp';
import jagerCoolPack     from '../media/products/jager_coolpackphs.png';
import jagerSpice        from '../media/products/jager_spice.webp';
import alantImg          from '../media/products/ingr/alant.webp';
import cinnamonImg       from '../media/products/ingr/cinnamon.webp';
import gingerImg         from '../media/products/ingr/ginger.webp';
import kaldamonImg       from '../media/products/ingr/kaldamon.webp';
import orangePealImg     from '../media/products/ingr/orange_peal.webp';
import vanImg            from '../media/products/ingr/van.webp';
import '../css/Products.css';



class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

  
    componentDidMount() {
        window.addEventListener('scroll', (e) => this.productsContScroll(e));
        // Scroll event to reveal product images
        this.productsContScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', (e) => this.productsContScroll(e));
    }

    productsContScroll() {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

        // Divide scroll value for a lower value
        let parVal = top / 60;
        let ingrImg = document.querySelectorAll('.prod_ingr_img');
        // Set margin-top style on every scroll to animate the ingredients images
        for(let i =0; i< ingrImg.length;i++) {
          ingrImg[i].setAttribute('style', `margin-top: ${parVal}px`)
        }

        // Animate image bottle products
             // Check if is view
                
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
        
               
                // // First section image
                let firstSecImg = document.querySelector('.prodc_cshalf_img_f');
                let firstSecImgInview = DivIsInView(firstSecImg);
                
                if(firstSecImgInview) {
                   if(!firstSecImg.classList.contains('prod_flleft_show')) {
                    firstSecImg.classList.add('prod_flleft_show');
                   }
                }
                // // Second section image
                let secondSecImg = document.querySelector('.prodc_cshalf_img_s');
                let secondSecImgInview = DivIsInView(secondSecImg);
                
                if(secondSecImgInview) {
                    if(!secondSecImg.classList.contains('prod_frright_show')) {
                    secondSecImg.classList.add('prod_frright_show');
                    }
                }
                // Third section image
                let thirdSecImg = document.querySelector('.prodc_cshalf_img_thrd');
                let thirdSecImgInview = DivIsInView(thirdSecImg);
                
                if(thirdSecImgInview) {
                    if(!thirdSecImg.classList.contains('prod_flleft_show')) {
                    thirdSecImg.classList.add('prod_flleft_show');
                    }
                }
                // Fourth section image
                let fourthSecImg = document.querySelector('.prodc_cshalf_img_fth');
                let fourthSecImgInview = DivIsInView(fourthSecImg);
                
                if(fourthSecImgInview) {
                    if(!fourthSecImg.classList.contains('prod_frright_show')) {
                        fourthSecImg.classList.add('prod_frright_show');
                    }
                }
                // Fifth section image
                let fifthSecImg = document.querySelector('.prodc_cshalf_img_fifth');
                let fifthSecImgInview = DivIsInView(fifthSecImg);

                if(fifthSecImgInview) {
                    if(!fifthSecImg.classList.contains('prod_flleft_show')) {
                        fifthSecImg.classList.add('prod_flleft_show');
                    }
                }
                // Sixth section image
                let sixthSecImg = document.querySelector('.prodc_cshalf_img_sixth');
                let sixthSecImgInview = DivIsInView(sixthSecImg);
                
                if(sixthSecImgInview) {
                    if(!sixthSecImg.classList.contains('prod_frright_show')) {
                        sixthSecImg.classList.add('prod_frright_show');
                    }
                }  
                // Seventh section image
                let seventhSecImg = document.querySelector('.prod_imgprof_svth');
                let seventhSecImgInview = DivIsInView(seventhSecImg);
                
                if(seventhSecImgInview) {
                    if(!seventhSecImg.classList.contains('prod_flleft_show')) {
                        seventhSecImg.classList.add('prod_flleft_show');
                    }
                }    
    }
     
     

    render() {
        return (
          
                <div>
                    <div className='products_container'>
                        {/* First prod section */}
                         <div className='prodcont_colsec'>
                            <div className='prodc_colsec_half prodc_colsec_half_fsec_first'>
                                <img src={firstImgSec} tabIndex='0' aria-label='jagermeister original' alt='' className='prod_imgprof  prodc_cshalf_img_f'></img>
                                <img src={kaldamonImg} alt='' style={{top:75+'%'}} className='prod_ingr_img'></img>
                            </div>
                            <div className='prodc_colsec_half prodc_colsec_half_fsec_sec'>
                                <div className='prodc_cshalf_txt'>
                                    <img src={orangePealImg} alt='' className='prod_ingr_img'></img>
                                    <span className='prodc_cshtxt_mtitle' tabIndex='0'>Jägermeister</span>
                                    <span className='prodc_cshtxt_stxt' tabIndex='0'>The original. Never changed, never revealed.</span>
                                    <span className='prodc_cshtxt_smtxt' tabIndex='0'>
                                        Every German masterpiece contains equal parts precision and inspiration. Bold, yet balanced, our herbal liqueur is no different.
                                    </span>
                                    <span className='prodc_cshtxt_smtxt' tabIndex='0'>
                                        Blending 56 botanicals, our ice-cold shot has always been embraced by those who take originality to the next level.
                                    </span>
                                </div>
                            </div>
                         </div>

                        {/* Second prod section */}
                         <div className='prodcont_colsec'>
                            <div className='prodc_colsec_half prodc_colsec_halfsec_sec'>
                                <img src={gingerImg} alt='' className='prod_ingr_img'></img>
                                <div className='prodc_cshalf_txt prodc_cshalf_txt_secprodsec'>
                                    <span className='prodc_cshtxt_mtitle prodc_cshtxt_mtitle_secsec' tabIndex='0'>The Things We Dare To Do</span>
                                    <span className='prodc_cshtxt_smtxt prodc_cshtxt_smtxt_secsec' tabIndex='0'>
                                         Uncompromising belief in the extraordinary has always been our credo. It’s given us the drive to do things our own way since 1878. 
                                    </span>
                                    <span className='prodc_cshtxt_smtxt prodc_cshtxt_smtxt_secsec' tabIndex='0'>
                                         It’s an attitude that manifests itself in our latest creation. Based on our original elixir, we’ve crafted a truly special flavour that put Jägermeister again in a class of its own: We call it Jägermeister Manifest.
                                    </span>
                                </div>
                            </div>
                            <div className='prodc_colsec_half prodcont_colsec_secsect'>
                                <img src={secImgSec} alt='' className='prod_imgprof  prodc_cshalf_img_s' tabIndex='0' aria-label='jagermeister manifest'></img>
                                <img src={alantImg} alt='' className='prod_ingr_img'></img>
                            </div>
                         </div>

                        {/* Third prod section */}
                        <div className='prodcont_colsec'>
                            <div className='prodc_colsec_half prodc_colsec_half_third'>
                            <img src={jagerColdBrew} alt='' className='prod_imgprof  prodc_cshalf_img_thrd' tabIndex='0' aria-label='jagermeister cold brew'></img>
                            <img src={kaldamonImg} alt='' className='prod_ingr_img'></img>
                            </div>
                            <div className='prodc_colsec_half'>
                                <div className='prodc_cshalf_txt prodc_cshalf_txt_thrdwrtxt'>
                                    <img src={orangePealImg} alt='' className='prod_ingr_img'></img>
                                    <span className='prodc_cshtxt_mtitle prodc_cshtxt_mtitle_thrd' tabIndex='0'>New Mix</span>
                                    <span className='prodc_cshtxt_mtitle prodc_cshtxt_mtitle_thrd' tabIndex='0'>New Beat</span>
                                    <span className='prodc_cshtxt_stxt' tabIndex='0'>Shake & serve at -18°C</span>
                                    <span className='prodc_cshtxt_smtxt' tabIndex='0'>
                                        Inspired by the innovative, everchanging drinks scene, we instinctively knew how a drop of Jägermeister and a backbeat of cold brew coffee could transform any night. The enviable result?
                                    </span>
                                    <span className='prodc_cshtxt_smtxt' tabIndex='0'>
                                        A brand-new mix. JÄGERMEISTER COLD BREW COFFEE. A unique fusion of JÄGERMEISTER’s 56 botanicals and intense cold brew coffee. 
                                    </span>
                                </div>
                            </div>
                         </div>

                        {/* Fourth prod section */}
                        <div className='prodcont_colsec prodcont_colsec_fthpsec'>
                            <div className='prodc_colsec_half'>
                                <div className='prodc_cshalf_txt prodc_cshalf_txt_fth'>
                                    <img src={alantImg} alt='' className='prod_ingr_img'></img>
                                    <span className='prodc_cshtxt_mtitle prodc_cshtxt_mtitle_fthsec' tabIndex='0'>10 ICE COLD SHOTS TO GO</span>
                                    <span className='prodc_cshtxt_stxt prodc_cshtxt_stxt_fth' tabIndex='0'>Precisely packaged for any ocasion.</span>
                                    <span className='prodc_cshtxt_smtxt prodc_cshtxt_smtxt_fth' tabIndex='0'>
                                         Uncompromising belief in the extraordinary has always been our credo. It’s given us the drive to do things our own way since 1878. 
                                    </span>
                                    <span className='prodc_cshtxt_smtxt prodc_cshtxt_smtxt_fth' tabIndex='0'>
                                         It’s an attitude that manifests itself in our latest creation. Based on our original elixir, we’ve crafted a truly special flavour that put Jägermeister again in a class of its own: We call it Jägermeister Manifest.
                                    </span>
                                </div>
                            </div>
                            <div className='prodc_colsec_half prodcont_colsec_fthect'>
                                <img src={miniMeister} alt='' className='prod_imgprof prodc_cshalf_img_fth' tabIndex='0' aria-label='jagermeister mini pack original'></img>
                                <img src={gingerImg} alt='' className='prod_ingr_img'></img>
                            </div>
                         </div>


                        {/* Fifth prod section */}
                        <div className='prodcont_colsec prodcont_colsec_fifthpsec'>
                            <div className='prodc_colsec_half'>
                            <img src={jagerColdBrewMini} alt='' className='prod_imgprof prodc_cshalf_img_fifth' tabIndex='0' aria-label='jagermeister cold brew mini pack'></img>
                            </div>
                            <div className='prodc_colsec_half'>
                                <div className='prodc_cshalf_txt prodc_colsec_half_fifth'>
                                    <img src={vanImg} alt='' className='prod_ingr_img'></img>
                                    <span className='prodc_cshtxt_mtitle' tabIndex='0'>Cold brew coffee shots to-go</span>
                                    <span className='prodc_cshtxt_smtxt prodc_cshtxt_smtxt_fifth' tabIndex='0'>
                                        Precisely packaged for any occasion. NEW Jägermeister Cold Brew Coffee Mini Meisters are perfekt to share with your crew.
                                    </span>
                                </div>
                            </div>
                         </div>

                        {/* Sixth prod section */}
                        <div className='prodcont_colsec'>
                            <div className='prodc_colsec_half prodc_colsec_halfsec_sec'>
                                <div className='prodc_cshalf_txt prodc_cshalf_txt_secprod_sixth'>
                                    <img src={cinnamonImg} alt='' className='prod_ingr_img'></img>
                                    <span className='prodc_cshtxt_mtitle prodc_cshtxt_mtitle_secsec' tabIndex='0'>HOT NEW DESIGN</span>
                                    <span className='prodc_cshtxt_stxt prodc_cshtxt_stxt_sixth' tabIndex='0'>Don’t let anything limit your perfekt adventure.</span>
                            
                                    <span className='prodc_cshtxt_smtxt prodc_cshtxt_smtxt_secsec' tabIndex='0'>
                                        Jägermeister is best served ice-cold. Now, you can bring the perfekt shot on any adventure, with our latest design.  
                                    </span>
                                </div>
                            </div>
                            <div className='prodc_colsec_half'>
                                <img src={jagerCoolPack} alt='' className='prod_imgprof prodc_cshalf_img_sixth' tabIndex='0' aria-label='jagermeister cool pack'></img>
                            </div>
                         </div>

                        {/* Seventh prod section */}
                        <div className='prodcont_colsec'>
                            <div className='prodc_colsec_half prodc_colsec_half_svth'>
                            <img src={jagerSpice} alt='' tabIndex='0' aria-label='jagermeister spice flavour' className='prod_imgprof prod_imgprof_svth'></img>
                            <img src={vanImg} alt='' className='prod_ingr_img'></img>
                            </div>
                            <div className='prodc_colsec_half prodc_colsec_half_svth_sec'>
                                <img src={vanImg} alt='' className='prod_ingr_img'></img>
                                <div className='prodc_cshalf_txt'>
                                    <span className='prodc_cshtxt_mtitle' tabIndex='0'>Spicy flavour</span>
                                    <span className='prodc_cshtxt_stxt' tabIndex='0'>* Limited edition *</span>
                                    <span className='prodc_cshtxt_smtxt' tabIndex='0'>
                                            Jägermeister Spice is made from the same recipe of 56 herbs, blossoms, roots and fruits combined with added cinnamon and vanilla, using the same traditional techniques as the original.
                                    </span>
                                </div>
                            </div>
                         </div>

                        {/* Eight prod section */}
                        <div className='prodcont_colsec_eight'>
                            <Link to={'/shop'} tabIndex='0' role='shop link button'>Get delivered</Link>
                        </div>

                    <Footer />
                    </div>
                </div>
        )
    }
}


 
export default Products;
 
