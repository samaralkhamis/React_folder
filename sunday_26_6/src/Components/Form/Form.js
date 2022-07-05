import React, { Component } from 'react';
import Home from '../Home/Home';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state =
       { User_Name: '',
         Email : '' , 
         PhoneNumber : '',
         isDisplay:true,
         isForm:false,
        };

      this.handleChange = this.handleChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePhoneChange = this.handlePhoneChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({User_Name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({Email :event.target.value});
    }

    handlePhoneChange(event) {
      this.setState({PhoneNumber :event.target.value });
    }

    About(){
        window.location.href="/About"
      }
     Home(){
        window.location.href="/"
      }

    handleSubmit(event) {
        event.preventDefault();  
     alert(this.state.User_Name, this.state.Email , this.state.PhoneNumber);
     this.setState({
        isDisplay:false ,
        isForm:true,
        });
    }

    render() {
      return (
        
        <div className='container'>
          {/* <button className='btn btn-danger two' onClick={this.About} variant="primary" type="submit">
        About
      </button>
      <button  className='btn btn-danger onee' onClick={this.Home} variant="primary" type="submit">
        Home
      </button> */}

<h1 className='b'> Form to send Data</h1>
         {!this.state.isForm &&(
          <form className='one'>
          <label>
                User Name:
                <input type="text" name="name" className='form-control' onChange={this.handleChange} />
          </label><br></br><br></br>

          <label>
            Email :
            <input type="email" name="email" className='form-control' onChange={this.handleEmailChange} />
          </label><br></br><br></br>

          <label>
            Phone Number :
            <input type="tel" name="phone" className='form-control' onChange={this.handlePhoneChange} />
          </label><br></br><br></br>

          <input type="submit" value="Submit" className='btn btn-primary' onClick={this.handleSubmit} />

        </form>
             )}
        <h1 id="par"></h1>
        {!this.state.isDisplay &&(
             <Home  name={this.state.User_Name} Email={this.state.Email} PhoneNumber={this.state.PhoneNumber}/> )}
        </div>
      );
    }
  }

  export default NameForm;