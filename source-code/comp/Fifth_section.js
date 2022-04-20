import React     from 'react';
import { Link }  from 'react-router-dom'
import '../css/Fifth_section.css';
 

class Fifth_section extends React.Component {

    render() {
        return (
                <div>
                    <div className='fifth_section_container'>
                       <div className='fifth_fifth_wrhalf fifth_fifth_wrhalf_f'></div>
                       <div className='fifth_fifth_wrhalf fifth_fifth_wrhalf_s' role='description'>
                             <span className='fif_fif_wrhalf_maintxt' tabIndex='0'>be the</span>
                             <span className='fif_fif_wrhalf_maintxt' tabIndex='0'>meister</span>
                             <span className='fif_fif_wrhalf_subtxt' tabIndex='0'>prepare for the strong spiced ginger taste</span>
                             <Link to={'/shop'} tabIndex='0' role='shop link button' className='fif_fif_wrhalf_getdelbtn'>get delivered</Link>
                       </div>
                    </div>
                </div>
        )
    }
}

 
export default Fifth_section;
