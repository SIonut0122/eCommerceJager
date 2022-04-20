import React     from 'react';
import { Link }  from 'react-router-dom'
import '../css/Seventh_section.css';
 
 
class Seventh_section extends React.Component {

    render() {
        return (
                <div>
                    <div className='seventh_section_container'>

                       <div className='seventh_svth_wrhalf seventh_svth_wrhalf_f'></div>
                       <div className='seventh_svth_wrhalf seventh_svth_wrhalf_s'>
                            <span className='svth_half_sc_tittle' tabIndex='0'>unique taste</span>
                            <p className='svth_half_sc_tittle_p' tabIndex='0'>Every German masterpiece contains equal parts precision and inspiration. Bold, yet balanced, our herbal liqueur is no different.</p>
                            <div className='svth_half_btnlnk_wrap'>
                                <Link to={'/products'} tabIndex='0' role='products link button' className='svth_half_btnlnk'>learn more</Link>
                            </div>
                       </div>

                    </div>
                </div>
        )
    }
}

 
export default Seventh_section;
