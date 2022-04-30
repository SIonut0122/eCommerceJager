import React  from 'react';
import Footer from './Footer';
import '../css/Contact.css';
 

class Contact extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName   : '',
            lastName    : '',
            email       : '',
            message     : '',
            successMsg  : false,
            errorMsg    : false
        }
    }

    contactSubmitBtn() {
        let { firstName, lastName, email, message } = this.state;
        
        if(firstName.length && lastName.length && email.length && message.length) {
            this.setState({ successMsg: true, errorMsg: false })
        } else {
            this.setState({ successMsg: false, errorMsg: true })
        }
    }
 

    render() {
        return (
        
                <div>
                
                    <div className='contact_container'>
                        <div className='contact_cont_wrapper'>
                            <div className='ct_cont_wrapdata'>
                                <span className='ct_cwd_title' tabIndex='0' role='title'>Contact</span>
                                
                                <span className='ct_cwd_subtitle' tabIndex='0'>
                                 We put the ICE in customer service. Write to us whenever you have questions, suggestions, problems or just if you want to praise us. We'll be back soon with an answer.
                                </span>
                                <div className='ct_cwd_wrapinpvalue'>
                                    <span className='ctcwd_wrinp_txt ctcwd_wrinp_txtctmd' tabIndex='0'>First name</span>
                                    <span className='ct_wrpinp_span'>
                                        <input type='text' tabIndex='0' role='first name input' onChange={(e) => { this.setState({  firstName: e.target.value })}} placeholder='First Name'></input>
                                    </span>
                                    <span className='ctcwd_wrinp_txt ctcwd_wrinp_txtctmd' tabIndex='0'>Last name</span>
                                    <span className='ct_wrpinp_span'>
                                        <input type='text' tabIndex='0' role='last name input' onChange={(e) => { this.setState({  lastName: e.target.value })}} placeholder='Last name'></input>
                                    </span>
                                    <span className='ctcwd_wrinp_txt ctcwd_wrinp_txtctmd' tabIndex='0'>Email</span>
                                    <span className='ct_wrpinp_span'>
                                        <input type='text' tabIndex='0' role='email input' onChange={(e) => { this.setState({  email: e.target.value })}} placeholder='Email'></input>
                                    </span>
                                    <span className='ctcwd_wrinp_txt ctcwd_wrinp_txtctmd' tabIndex='0'>Message</span>
                                    <span className='ct_wrpinp_span_txtarea'>
                                        <textarea type='text' tabIndex='0' role='message input' onChange={(e) => { this.setState({  message: e.target.value })}} placeholder='Message'/>
                                    </span>
                                    {this.state.errorMsg && ( <span className='ct_smbttxt_qry ct_smbttxt_qry_error' tabIndex='0'>* Please fill all the fields</span>)}
                                    {this.state.successMsg && ( <span className='ct_smbttxt_qry ct_smbttxt_qry_success' tabIndex='0'>* Thank your for your query! We'll be back soon with an answer.</span>)}
                                    <span className='contact_submitform_btn' onClick={() => this.contactSubmitBtn()} tabIndex='0' role='submit query button'>Submit query</span>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
      
        )
    }
}


export default Contact;
 
