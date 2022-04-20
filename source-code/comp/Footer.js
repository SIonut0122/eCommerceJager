import React     from 'react';
import { Link }  from 'react-router-dom'
import '../css/Footer.css';
 
 
class Footer extends React.Component {

    componentDidMount() {
        // Add click event for every country list name to toggle location list
        let footerWrapUl = document.querySelector('.fcwrp_f_wraploclist_ul').getElementsByTagName('li');
        for (let i = 0; i < footerWrapUl.length; i++) {
            footerWrapUl[i].addEventListener('click', () => this.openListLocations());
        }
    }

    openListLocations() {
        // Show / hide location list
        document.querySelector('.fcwrp_f_wraploclist').classList.toggle('fcwrp_f_wloclist_show');
    }


    render() {
        return (
                <div>
                    <div className='footer_container'>
                        <div className='footer_container_wrapper'>
                              <div className='foot_cwrp_f'>
                                  <div className='fcwrp_f_wrapchangeloc' onClick={() => this.openListLocations()}>
                                    <span></span>
                                    <span>Change location</span>
                                    <span></span>
                                  </div>
                                <div className='fcwrp_f_wraploclist'>
                                    <ul className='fcwrp_f_wraploclist_ul'>
                                        <li><a href='#'>Australia</a></li>
                                        <li><a href='#'>Belgium</a></li>
                                        <li><a href='#'>Bulgaria</a></li>
                                        <li><a href='#'>Canada</a></li>
                                        <li><a href='#'>Czech republic</a></li>
                                        <li><a href='#'>France</a></li>
                                        <li><a href='#'>Germany</a></li>
                                        <li><a href='#'>Global</a></li>
                                        <li><a href='#'>China</a></li>
                                        <li><a href='#'>Greece</a></li>
                                        <li><a href='#'>India</a></li>
                                        <li><a href='#'>Japan</a></li>
                                        <li><a href='#'>Korea</a></li>
                                        <li><a href='#'>Mexico</a></li>
                                        <li><a href='#'>Netherlands</a></li>
                                        <li><a href='#'>Peru</a></li>
                                        <li><a href='#'>Romania</a></li>
                                        <li><a href='#'>Spain</a></li>
                                        <li><a href='#'>United kingdom</a></li>
                                        <li><a href='#'>USA</a></li>
                                        
                                    </ul>
                                </div>
                              </div>
                              <div className='foot_cwrp_s'>
                                <div className='fcwrp_s_sec fcwrp_s_sec_f'>
                                    <ul>    
                                        <li><a href='#'>History</a></li>
                                        <li><a href='#'>Marketing code</a></li>
                                        <li><a href='#'>Corporate website</a></li>
                                        <li><a href='#'>Factory tour</a></li>
                                        <li><a href='#'>Condition of use</a></li>
                                        <li><a href='#'>Use policy</a></li>
                                    </ul>
                                </div>
                                <div className='fcwrp_s_sec fcwrp_s_sec_s'>
                                <ul>    
                                        <li><a href='#'>Privacy settings</a></li>
                                        <li><a href='#'>Accessibility</a></li>
                                        <li><a href='#'>Legal</a></li>
                                        <li><Link to={'/contact'}>Contact</Link></li>
                                        <li><Link to={'/contact'}>Join us</Link></li>
                                    </ul>
                                </div>
                                <div className='fcwrp_s_sec fcwrp_s_sec_th'>
                                    <div className='fcwrp_ssec_wrapflinks'><Link to={'/contact'}>Contact us</Link><Link to={'/contact'}>Visit us</Link></div>
                                    <div className='fcwrp_ssec_wrapsociallinks'>
                                        <a href='https://www.facebook.com/jagermeisterromania/'></a>
                                        <a href='https://www.instagram.com/jagermeisterofficial/'></a>
                                        <a href='https://twitter.com/jagermeister?lang=ro'></a>
                                        <a href='https://www.youtube.com/channel/UCP8TYmDVES_iPVBuIHv3T3w'></a>
                                    </div>
                                    <span className='fcwrp_ssec_socialtxt'>
                                        <span>Be the social</span>
                                        <span>meister</span>
                                    </span>
                                </div>
                              </div>

                              <div className='foot_cwrp_t'>
                                    <span>Please Drink responsibly | Jagermeister@2022</span>
                              </div>
                        </div>
                    </div>
                </div>
        )
    }
}

 
export default Footer;
