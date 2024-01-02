import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
import ComponentC from './ComponentC'

class LifecycleA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Vishwas',
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

	static getDerivedStateFromError(error) {
		console.log('LifecycleA getDerivedStateFromError', error)
		return {
			hasError: true,
			error: error.message
		}
	}

  componentDidCatch(error, errorInfo) {
    console.log('LifecycleA componentDidCatch', error, errorInfo)
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('LifecycleA componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'Codevolution',
    })
  }

	changeKey = () => {
		this.setState({
			key: Math.random(),
		})
	}

  render() {
    console.log('LifecycleA render')
    if (this.state.hasError) return <>Oh no! Epic fail!</>

    return (
			<div>
        <h2>LifecycleA</h2>
        <button onClick={this.changeState}>Change state</button>
        <button onClick={this.changeKey}>Change Key</button>
        <LifecycleB key={this.state.key} name="B" />
        <LifecycleB key={this.state.key} name="C" />

				<ComponentC />
      </div>
    )
  }
}

export default LifecycleA
