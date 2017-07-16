import React, { Component } from 'react';
import firebase from '../actions/firebase';
//import _ from 'lodash';

class HomeLayout extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      agency: '',
      colour: '',
      imgdir: '',
      tags: '',
      tagsList: [],
      year: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      name  : this.state.name,
      agency: this.state.agency,
      colour: this.state.colour,
      imgdir: this.state.imgdir,
      tags  : this.state.tags,
      year  : this.state.year
    }
    itemsRef.push(item);
    this.setState({
      name: '',
      agency: '',
      colour: '',
      imgdir: '',
      tags: '',
      year: ''
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      let tagsList = [];
      for (let item in items) {
        newState.push({
          id:     item,
          name:   items[item].name,
          agency: items[item].agency,
          year:   items[item].year,
          imgdir: items[item].imgdir,
          colour: items[item].colour,
          tags:   items[item].tags
        });
        let itemTags = items[item].tags.split(', ');
        this.setState( {
          tagsList: Array.from(new Set(this.state.tagsList.concat(itemTags)))
        } );
      }
      this.setState({
        items: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render() {

    let tagsList = this.state.tagsList.map(tagsItem =>
    <div key={tagsItem.id} className="station">
      {tagsItem}
    </div>
);
//    tagsList = [].concat(...tagsList);
//    console.log(tagsList);
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <h1>Portfolio</h1>
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
              <input type="text" name="agency" placeholder="Agency" onChange={this.handleChange} value={this.state.agency} />
              <input type="text" name="colour" placeholder="Colour" onChange={this.handleChange} value={this.state.colour} />
              <input type="text" name="imgdir" placeholder="Imgdir" onChange={this.handleChange} value={this.state.imgdir} />
              <input type="text" name="tags" placeholder="Tags" onChange={this.handleChange} value={this.state.tags} />
              <input type="text" name="year" placeholder="Year" onChange={this.handleChange} value={this.state.year} />
              <button>Add Item</button>
            </form>
          </section>
          <div>{
              tagsList
            }{console.log(this.state.tagsList)}</div>
          <section className='row'>
            {this.state.items.map((item) => {
//                let itemTags = item.tags.split(', ');
//                tagsList.push(itemTags);

              return (
                <div key={item.id} className="card-flip col col-sm-4 px-0">
                  <a className='card-flip-inner card card-inverse' style={{ backgroundColor: `${item.colour}` }}>
                    <div className='card-front'>
                      <button onClick={() => this.removeItem(item.name)} style={{ display: 'none' }}>Remove Item</button>
                      <img src={`images/${item.imgdir}/desktop.jpg`}/>
                      <div className='card-footer'>{item.name}</div>
                    </div>
                    <div className='card-back card-block'>
                      <h4 className='card-title'>{item.name}</h4>
                      <p className='card-subtitle'>{item.year} - {item.agency} development</p>
                      <p className='card-text'>{item.tags}</p>
                    </div>
                  </a>
                </div>
              )
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default HomeLayout;
