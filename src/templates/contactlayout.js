import React, { Component } from 'react';
import firebase from '../actions/firebase';

import ReactForm from '../components/reactform';

class ContactLayout extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      agency: '',
      email: '',
      message: ''
    }
  }
  render() {
    return (
      <div className='app'>
        <header>
          <div className="wrapper text-center my-5">
            <h1>Contact Me</h1>
            <h2>I'm happy to hear from you!</h2>
          </div>
        </header>
        <div className='container'>
          <section className='row no-gutters'>
            <ReactForm />
          </section>
        </div>
      </div>
    );
  }
}

export default ContactLayout;
