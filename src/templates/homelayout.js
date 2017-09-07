import React, { Component } from 'react';
import firebase from '../actions/firebase';

class HomeLayout extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      agency: '',
      colour: '',
      imgdir: '',
      tags: '',
      tagsList: ['All'],
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
          tags:   items[item].tags.split(',')
        });
        let itemTags = items[item].tags.split(', ');
        itemTags = Array.from(new Set(this.state.tagsList.concat(itemTags)));
        this.setState( {
          tagsList: itemTags
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
    <button key={tagsItem} className="btn btn-primary">
      {tagsItem}
    </button>
);
//    tagsList = [].concat(...tagsList);
//    console.log(tagsList);
    return (
      <div className='app'>
        <header>
            <div className="wrapper text-center my-5 px-3">
              <h1>Glenn Domin</h1>
              <h2>Front-End Developer</h2>
            </div>
        </header>
        <div className='container-fluid px-0'>
          <section className='add-item' style={{ display: 'none' }}>
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
          <div style={{ display: 'none' }}>{tagsList}</div>
          <section className='row no-gutters'>
            {this.state.items.map((item) => {
//                let itemTags = item.tags.split(', ');
//                tagsList.push(itemTags);
              let tagsSpanned = Array();
              for (var tag of item.tags) {
                tagsSpanned.push(<span><span>{tag.trim()}</span></span>);
              }

              return (
                <div key={item.id} id={`${item.tags}`.replace(" ", "-").replace(",", "")} className='card-slide col-12 col-sm-6 col-md-4' >
                  <a className='card-slide-inner card card-inverse' style={{ backgroundColor: `${item.colour}` }}>
                    <div className='card-front'>
                      <button onClick={() => this.removeItem(item.name)} style={{ display: 'none' }}>Remove Item</button>
                      <img src={`images/${item.imgdir}/desktop.jpg`}/>
                    </div>
                    <div className='card-back card-block'>
                      <h4 className='card-title mb-0'>{item.name}</h4>
                      <p className='card-subtitle'>{item.year} - {item.agency} development</p>
                      <p className='card-text'>{tagsSpanned}</p>
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
