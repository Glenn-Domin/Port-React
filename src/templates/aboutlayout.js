import React, { Component } from 'react';

class AboutLayout extends Component {
  render() {
    return (
      <div className='app'>
        <header>
          <div className="wrapper text-center my-5">
            <h1>About Me</h1>
          </div>
        </header>
        <div className='container'>
          <section className='row no-gutters'>
            <p>I've been a Front-End Developer (and Joomla Developer, and WordPress Developer) in an agency for four years. Prior to that I've done freelance work, as well as creating websites for businesses I've worked at in other capacities.</p>
            <p>I've attempted to be a bit of an all-rounder, gaining exposure in as many facets of web development as I can. Having said that, I've also managed to also specialise in a few key areas:</p>
            <ul>
              <li>Standards-compliant Front-End Development (Bootstrap, SASS, GitHub)</li>
              <li>Joomla/WordPress site development</li>
              <li>HTML EDM template creation</li>
              <li>Tricky CSS problems</li>
              <li>Site Optimisation</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default AboutLayout;
