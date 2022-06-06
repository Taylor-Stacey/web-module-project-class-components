import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      itemText: "",
    }
  }

  handleChange = e => {
    this.setState({
      itemText: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.itemText)
    this.setState({
      itemText: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="itemText"
            value={this.state.itemText}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
        <button onClick={()=> this.props.clearCompleted()}>Clear</button>
      </div>
    )
  }
}
