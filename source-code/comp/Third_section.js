import React     from 'react';
import { Link }  from 'react-router-dom'
import '../css/Third_section.css';
 



 


class Third_section extends React.Component { 

    render() {
        return (
                <div>
                    <div className='third_section_container'>
                       <div className='thrd_thrd_wrhalf thrd_thrd_wrhalf_f'>
                        <span className='th_wrhlf_f_txt' tabIndex='0'>Jäger</span> 
                        <span className='th_wrhlf_f_txt' tabIndex='0'>Manifest</span>
                       </div>
                       <div className='thrd_thrd_wrhalf thrd_thrd_wrhalf_s'>
                            <div className='thrd_thrd_wrhalf_wrap'>
                            <span tabIndex='0'>A masterful expression to celebrate</span>
                            <span tabIndex='0'>extraordinary occasions.</span>
                            <Link to={'/shop'} tabIndex='0' role='link button'>Get Jägermeister Manifest Delivered.</Link>
                            </div>
                       </div>
                    </div>
                </div>
        )
    }
}

 
export default Third_section;
