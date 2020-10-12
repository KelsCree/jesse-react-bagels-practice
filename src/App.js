import React, { Component } from 'react';
import BagelsContainer from './Components/BagelsContainer'
import Form from './Components/Form'

class App extends Component {

  state = {
    bagels:[]
  }

  componentDidMount() {
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
    .then(response => response.json())
    .then(result => this.setState({bagels:result}))
  }

   submitBagel = (bagel) => {
    fetch('http://bagel-api-fis.herokuapp.com/bagels', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type:bagel })
    }).then(response => response.json())
      .then(bagel => this.setState({bagels: [...this.state.bagels, bagel]}))
  }

  deleteBagel = (bagel) => {
    const newBagels = this.state.bagels.filter(newBagel => newBagel !== bagel)
    this.setState({bagels:newBagels})
    fetch(`http://bagel-api-fis.herokuapp.com/bagels/${bagel.id}`, {method: 'DELETE'})
  }


  render(){
    return (
      <>
        <h1>This is our bagels app</h1>
        <Form submitBagel={this.submitBagel}/>
        <BagelsContainer bagels={this.state.bagels} deleteBagel={this.deleteBagel}/>
      </>
    );
  }
}

export default App;
