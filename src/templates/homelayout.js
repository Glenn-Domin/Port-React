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
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='card card-inverse card-outline-primary container mb-5'>
                <div className='card-block row'>
                  <p className='lead col-12'>My award winning websites while working at iFactory from Interactive Media Awards:</p>
                  <div className='col-12 col-lg-4'>
                    <ul>
                    <li><a href='http://interactivemediaawards.com/winners/certificate.asp?param=763812&cat=1'  target='_blank'>Toyota Tsusho South Pacific Holdings</a></li>
                    <li><a href='http://interactivemediaawards.com/winners/certificate.asp?param=764043&cat=1'  target='_blank'>Vivir Healthcare</a></li>
                    <li><a href='http://interactivemediaawards.com/winners/certificate.asp?param=508179&cat=1'  target='_blank'>Veracity</a></li>
                    <li><a href='http://interactivemediaawards.com/winners/certificate.asp?param=648522&cat=1'  target='_blank'>Noosa Radiology</a></li>
                    </ul>
                  </div>
                  <div className='col-12 col-lg-4'>
                    <ul>
                    <li><a href='http://interactivemediaawards.com/winners/certificate.asp?param=311892&cat=1'  target='_blank'>Queensland Regional Training Networks</a></li>
                    <li><a href='http://interactivemediaawards.com/winners/certificate.asp?param=311899&cat=1'  target='_blank'>Drake Collectibles</a></li>
                    <li><a href='http://interactivemediaawards.com/winners/certificate.asp?param=311885&cat=1'  target='_blank'>Site Group International Limited</a></li>
                    <li><a href='http://interactivemediaawards.com/winners/certificate.asp?param=290625&cat=1'  target='_blank'>Coevolve</a></li>
                    </ul>
                  </div>
                  <div className='col-12 col-lg-4'>
                    <ul>
                    <li><a href='http://interactivemediaawards.com/winners/certificate.asp?param=648515&cat=1'  target='_blank'>Starflight Australia</a></li>
                    <li><a href='http://interactivemediaawards.com/winners/certificate.asp?param=291836&cat=1'  target='_blank'>Pelofy</a></li>
                    <li><a href='http://interactivemediaawards.com/winners/certificate.asp?param=764092&cat=1'  target='_blank'>Prescare</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-12 mb-5 text-center'>
              <h3>Here's an assortment of sites I've worked on...</h3>
            </div>
          </div>
        </div>

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
                <div key={item.id} id={`${item.tags}`.replace(" ", "-").replace(",", "")} className='card-slide col-12 col-md-6 col-lg-4' >
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
