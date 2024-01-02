import React, { Component } from 'react'

class LifecycleB extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Vishwas'
    }
    console.log(this.props.name + ' constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props.name + 'getDerivedStateFromProps')
    return null
  }

  static getDerivedStateFromError(error) {
		console.log('B' + ' getDerivedStateFromError', error)
		return {
			hasError: true,
			error: error.message
		}
	}

  componentDidCatch(error, errorInfo) {
    console.log(this.props.name + ' componentDidCatch', error, errorInfo)
  }

  componentDidMount() {
    console.log(this.props.name + ' componentDidMount')
  }

  componentWillUnmount() {
    console.log(this.props.name + ' componentWillUnmount')
  }

  shouldComponentUpdate() {
    console.log(this.props.name + ' shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(this.props.name + ' getSnapshotBeforeUpdate')
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(this.props.name + ' componentDidUpdate')
	}

  render() {
    console.log(this.props.name + ' render')
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div>
          {this.state.hasError}
          {this.state.error}
        </div>
      </div>
    )
  }
}

export default LifecycleB
