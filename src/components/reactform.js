import React from 'react';
//import ReactDOM from 'react-dom';
import firebase from '../actions/firebase';

//const reactFormContainer = document.querySelector('.react-form-container');

/*class ReactFormLabel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    )
  }
}*/

class ReactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      agency: '',
      email: '',
      message: '',
      submitted: ''
    }
  }

  handleChange = (e) => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);

    this.handleSubmit = this.handleSubmit.bind(this);
  };



  getInitialState() {
    return {'submitted': false};
  }

  handleSubmit(e, message) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('emails');
    let item = {
      formSender: this.state.name,
      formEmail: this.state.email,
      formAgency: this.state.agency,
      formMessage: this.state.message
    }
    itemsRef.push(item);

    this.setState({
      name: '',
      email: '',
      agency: '',
      message: '',
      submitted: <div className="col-12 mt-3"><div className="alert alert-success" role="alert"><strong>Thanks!</strong> I'll get back to you shortly.</div></div>
    });
  }

  render() {
    return(
      <form className='react-form row' onSubmit={this.handleSubmit}>

        <div className='col-12 col-md-6'>
          <fieldset className='form-group'>
            <input id='formName' placeholder='Name' className='form-control' name='name' type='text' ref='formName' required onChange={this.handleChange} value={this.state.name} />
          </fieldset>
        </div>

        <div className='col-12 col-md-6'>
          <fieldset className='form-group'>
            <input id='formAgency' placeholder='Agency' className='form-control' name='agency' type='text' required onChange={this.handleChange} value={this.state.subject} />
          </fieldset>
        </div>

        <div className='col-12 col-md-6'>
          <fieldset className='form-group'>
            <input id='formEmail' placeholder='Email' className='form-control' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
          </fieldset>
        </div>

        <div className='col-12 col-md-6'>
          <fieldset className='form-group'>
            <textarea id='formMessage' placeholder='Message' className='form-control' name='message' required onChange={this.handleChange}></textarea>
          </fieldset>
        </div>

        <div className='col-12 col-md-6'>
          <div className='form-group'>
            <input id='formButton' className='submit btn btn-primary' type='submit' value='Send message' />
          </div>
        </div>
        {this.state.submitted}
      </form>
    )
  }
};

export default ReactForm;
