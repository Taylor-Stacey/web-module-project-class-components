import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { name, completed, id, toggleItem } = this.props
    return (
      <div onClick={() => toggleItem(id)} className={`todo${completed ? ' completed' : ''}`}>
        <p>{name}</p>
      </div>
    )
  }
}
