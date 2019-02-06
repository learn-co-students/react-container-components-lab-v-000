import React, {Component} from 'react'

export default class Searcher extends Component {
  constructor () {
    super()
    this.state={
      search : ""
    }
  }

  changeHandle = (event) => {
    this.setState({
      [event.target.id] : event.target.value
    })
  }

  submitHandle = (event) => {
    event.preventDefault()
    this.props.searchUpdate(this.state.search)
  }

  render() {
    return(
      <form className="searcher" onSubmit={this.submitHandle}>
        <input type="text" id="search" onChange={this.changeHandle} value={this.state.search} />

        <input type="submit" value = "Search!" />
      </form>
    )
  }

}
