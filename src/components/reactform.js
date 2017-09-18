import React from 'react';
import firebase from '../actions/firebase';

class ReactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      agency: '',
      email: '',
      message: '',
      ask: '',
      meet: '',
      hire: '',
      submitted: ''
    }
  }

  handleChange = (e) => {
    let newState = {};

    if(e.target.type === "checkbox") {
      newState[e.target.name] = e.target.checked;
    } else {
      newState[e.target.name] = e.target.value;
    }

//    console.log(e.target.type == "checkbox");

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
      formAsk: this.state.ask,
      formMeet: this.state.meet,
      formHire: this.state.hire,
      formMessage: this.state.message
    }
    itemsRef.push(item);

    this.setState({
      name: '',
      email: '',
      agency: '',
      message: '',
      ask: '',
      meet: '',
      hire: '',
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


            <div className="gcore-line-td" id="ftd-wantto">

              <label htmlFor="wantto" className="gcore-label-left">I want to</label>
              <div className="gcore-display-table gcore-input" id="fin-wantto">
                <div className="gcore-single-column" id="fclmn">
                  <div className="gcore-checkbox-item" id="fitem">
                    <input name="ask" id="ask" type="checkbox" value="Ask" onChange={this.handleChange} />
                    <label className="gcore-label" htmlFor="ask"><span></span>Ask you a question</label>
                  </div>
                  <div className="gcore-checkbox-item" id="fitem1">
                    <input name="meet" id="meet" type="checkbox" value="Meet" onChange={this.handleChange} />
                    <label className="gcore-label" htmlFor="meet"><span></span>Meet you</label>
                  </div>
                  <div className="gcore-checkbox-item" id="fitem2">
                    <input name="hire" id="hire" type="checkbox" value="Hire" onChange={this.handleChange} />
                    <label className="gcore-label" htmlFor="hire"><span></span>Hire you</label>
                  </div>
                </div>
              </div>
            </div>

          </div>
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
