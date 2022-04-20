import React from 'react';
import '../css/Ninth_section.css';
 
 
class Ninth_section extends React.Component {


    render() {
        return (
                <div>
                    <div className='ninth_section_container'>

                       <div className='ninth_ninth_wrhalf ninth_ninth_wrhalf_f'>
                           <span className='nth_nth_overlaybg'></span>
                           <span className='nth_nth_wrapsocialtag'>
                                <span className='nthnth_wrsocialicon nthnth_wrsocialicon_insta'></span>
                                <a href='https://www.instagram.com/jagermeisterofficial/' tabIndex='0' aria-label='instagram link' >#Jagermeister</a>
                           </span>
                       </div>
                       <div className='ninth_ninth_wrhalf ninth_ninth_wrhalf_s'>
                       <span className='nth_nth_overlaybg'></span>
                       <span className='nth_nth_wrapsocialtag'>
                           <span className='nthnth_wrsocialicon nthnth_wrsocialicon_twitt'></span>
                           <a href='https://twitter.com/JagermeisterUSA' tabIndex='0' aria-label='twitter link'>#Jagermeister</a>
                       </span>
                       </div>

                    </div>
                </div>
        )
    }
}

 
export default Ninth_section;
