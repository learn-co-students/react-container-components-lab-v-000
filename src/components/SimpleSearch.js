import React, { Component } from 'react' 

class SimpleSearch extends Component {
	constructor (props) {
		super(props)
  
		this.state = { searchText: "" }

	  this.handleChange = this.handleChange.bind(this)
	  this.handleSubmit = this.handleSubmit.bind(this)
	}

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
		this.props.updateSearchParam(this.state.searchText)
  }

  render () {
    return (
      <div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Search Parameter:
						<input type="text" name="searchText" value={this.state.searchText} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
    )
  }
}

export default SimpleSearch
