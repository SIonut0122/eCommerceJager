import React        from 'react';
import s_sec_video  from '../media/s_sec/s_sec_video.mp4';
import '../css/Sec_section.css';
 



 


class Sec_section extends React.Component {

    render() {
        return (
                <div>
                    <div className='sec_section_container'>
                       <div className='sec_sec_wrhalf sec_sec_wrhalf_f'>
                       <video autoPlay muted loop className='s_sec_video'>
                        <source src={s_sec_video} tabIndex='0' type='video/mp4'/>
                       </video>
                        <span className='s_sec_slsh'></span>
                       </div>
                       <div className='sec_sec_wrhalf sec_sec_wrhalf_t'>
                            <div className='s_sec_wrhalf_wraptxt'>
                                <span className='ssec_wrhtxt_quote'></span>
                                <span className='ssec_txt' tabIndex='0'>You don't need to speak</span>
                                <span className='ssec_txt' tabIndex='0'>german</span>
                                <span className='ssec_txt' tabIndex='0'>to understand</span>
                                <span className='ssec_txt s_sectxt_gtxt' tabIndex='0'>good taste.</span>
                                <span className='ssec_txt s_sectxt_jaggtag' tabIndex='0'>#jägermeister</span>
                            </div>
                       </div>
                    </div>
                </div>
        )
    }
}

 
export default Sec_section;
