import React from 'react'

class Form extends React.Component {
  
  state = {
    bagel: 'default bagel'
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.submitBagel(this.state.bagel)
    this.setState({ bagel: "" })
  }

  handleUserBagel(event) {
    this.setState({
      bagel: event.target.value
    })
  }

  render() {
    return (
      <>
        <form onSubmit={(event => this.handleSubmit(event))}>
          <input onChange={(event) => this.handleUserBagel(event)} name='bagel' type='text' value={this.state.bagel}/>
          <button type='submit'>Submit</button>
        </form>
      </>
    )
  }
}

export default Form