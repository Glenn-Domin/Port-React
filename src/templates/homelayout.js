import React, { Component } from 'react';
import firebase from '../actions/firebase';

class HomeLayout extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
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
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          agency: items[item].agency,
          year:   items[item].year,
          img:    items[item].imgdir,
          colour: items[item].colour
        });
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
                  <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
                  <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
                  <button>Add Item</button>
                </form>
          </section>
          <section className='row'>
              {this.state.items.map((item) => {
                return (
                  <div key={item.id} className="port-item col col-sm-4 px-0">
                    <a className='port-inner card' style={{ backgroundColor: `${item.colour}` }}>
                      <div className='port-front'>
                        <button onClick={() => this.removeItem(item.id)} style={{ display: 'none' }}>Remove Item</button>
                        <img src={`images/${item.img}/desktop.jpg`}/>
                        <div className='card-block'>
                          <h4 className='card-title'>{item.id}</h4>
                        </div>
                      </div>
                      <div className='port-back card-block'>
                        <h4 className='card-title'>{item.id}</h4>
                        <p className='card-text'>{item.year} - {item.agency}</p>
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
