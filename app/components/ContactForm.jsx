import React, { Component } from "react";
import "../styles/main.scss";
import axios from 'axios'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}


const withSuccessHandling = WrappedComponent => ({ showSuccess, children }) => {
    return (
      <WrappedComponent>
        {showSuccess && <div className="success">Wiadomość została wysłana! <br/>
         Wkrótce się z Tobą skontaktujemy.</div>}
        {children}
      </WrappedComponent>
    );
  };

  const DivWithSuccessHandling = withSuccessHandling(({children}) => <div>{children}</div>)



class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: null,
            message: null,
            showSuccess: false,
            errors: {
                fullName: '',
                email: '',
                message: '',
            }
        };
    }


    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'fullName':
                errors.fullName =
                    value.length < 5
                        ? 'name must be 5 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'email is not valid!';
                break;
            case 'message':
                errors.message =
                    value.length < 120
                        ? 'message must be 120 characters in length'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

 

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.log('Valid Form');
            toggleSuccess = () => {
                this.setState((prevState, props,) => {
                  return { showSuccess: !prevState.showSuccess }
                });
              };
        } else {
            console.log('Invalid Form')
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <>

         <DivWithSuccessHandling showSuccess={this.state.showSuccess} /> 

            <div className="container-flex contact-form">
                <form onSubmit={this.handleSubmit} noValidate>

                    <div className="container-flex">
                        <div className="box-flex">
                            <label htmlFor="fullName"><p className="input-title"> Wpisz swoje imię:</p></label>
                            <input type='text' name='fullName' onChange={this.handleChange} noValidate />
                            {errors.fullName.length > 0 &&
                                <span className="error">Podane imię jest nieprawidłowe</span>}
                        </div>
                        <div className="box-flex">
                            <label htmlFor="email"><p className="input-title">Wpisz swoj email:</p></label>
                            <input type='email' name='email' onChange={this.handleChange} noValidate />
                            {errors.email.length > 0 &&
                               <span className="error">Podany email jest nieprawidłowy</span>}
                        </div>
                    </div>
                    <div className="box-flex">
                        <label htmlFor="message"><p className="input-title"> Wpisz swoją wiadomość:</p></label>
                        <textarea type='text' name='message' onChange={this.handleChange} noValidate />
                        {errors.message.length > 0 &&
                             <span className="error">Wiadomość musi mieć conajmniej 120 znaków</span>}
                    </div>
                    <div className='info'>
                    </div>
                    <div className='container-flex container-btn'>
                        <button onClick={this.toggleSuccess} className="submitBtn">Wyślij</button>
                    </div>

                </form>
            </div>
</>
        );
    }
}
export default ContactForm;




