import React                 from 'react';
import { connect           } from "react-redux";
import { counterUp         } from 'counterup2';
import { setDisplayLoading } from '../actions'; 
import Footer                from './Footer';
import Sec_section           from './Sec_section';
import Third_section         from './Third_section';
import Fourth_section        from './Fourth_section';
import Fifth_section         from './Fifth_section';
import Seventh_section       from './Seventh_section';
import Ninth_section         from './Ninth_section';
import First_section         from './First_section';
import iceCubes              from '../media/ice-cube.png';
import '../css/Home.css';
 


const mapStateToProps = state => {
    return {  
        displayLoading               : state.displayLoading,
          };
  };

  function mapDispatchToProps(dispatch) {
    return {
        setDisplayLoading : bol    => dispatch(setDisplayLoading(bol))
          };
  }



class connectedHome extends React.Component {
 
    componentDidMount() {
        // Scroll to top on mount
        window.scrollTo({ top: 0 });

        // Start loading counter
        let el = document.querySelector('.mcwrgls_loadtxt_no');
        if(el !== null) {
            counterUp( el, {
                duration: 2000,
                delay: 25,
            })
        }

        // Hide loading container
        setTimeout(() => {
                this.props.setDisplayLoading({ displayLoading: false })
        }, 4500);
    }
    
      

    render() {
        return (
                <div>
            
                    <div className='home_container'>
                        {!this.props.displayLoading ? (
                        <div className='wrap_home_container'>
                            <div className='home_section'>
                                <div className='home_content'>
                                        <First_section/>
                                </div>
                            </div>     

                            <div className='home_section'>
                                <div className='home_content'>
                                    <Sec_section/>
                                </div>
                            </div>

                            <div className='home_section'>
                                <div className='home_content'>
                                <Third_section/>
                                </div>
                            </div>

                            <div className='home_section'>
                                <div className='home_content'>
                                <Fourth_section/>
                                </div>
                            </div>

                            <div className='home_section'>
                                <div className='home_content'>
                                <Fifth_section/>
                                </div>
                            </div>

                            <div className='home_section m_section_sixthsec'>
                                <div className='home_content m_content_sixthsec'>
                                
                                </div>
                            </div>

                            <div className='home_section'>
                                <div className='home_content'>
                                    <Seventh_section/>
                                </div>
                            </div>

                            <div className='home_section m_section_eight'>
                                <div className='home_content'>
                                <iframe src="https://www.youtube.com/embed/FXnIIGYkmN8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className='home_section'>
                                <div className='home_content'>
                                 <Ninth_section/>
                                </div>
                            </div>

                            <div className='home_section'>
                                <div className='home_content'>
                                
                                </div>
                            </div>

                             <Footer/>
                        </div> )
                        :
                        (
                            <div className='mc_loadingcont'>
                                <div className='mcloadcont_wrap'>
                                    <div className='mcwrgls_loadtxt_nowrap'>
                                        <span className='mcwrgls_loadtxt_no'>100</span>
                                        <span>%</span>
                                    </div>
                                    <img src={iceCubes} alt='ice cube'/>
                                    <div className='mcloadc_wrap_glass'>
                                        <div className='mcwrgls_mid'></div>
                                        <span className='mcwrgls_bottom'></span>
                                    </div>
                                <span className='mcwrgls_loadtxt'>Loading...</span>
                                
                                </div>
                            </div>
                        )}
                    </div>
                </div>
             
        )
    }
}


const Home = connect(mapStateToProps,mapDispatchToProps)(connectedHome);
export default Home;
 
