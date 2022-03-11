import './App.css';
import { Button } from 'bold-ui';
import React from 'react';
import appAxios from './appAxios';

class App extends React.Component {

  state = {
    text: ''
  }

  async requestRandomText () {
    const response = await appAxios.get('/text')
    console.log(response)
    const body = response.data
    this.setState({text: body}) 
  }

  componentDidMount () {
    this.requestRandomText()
  }

  handleClick = () => {
    this.requestRandomText()
  }

  render () {
    return <Button kind='primary' onClick={this.handleClick}>Hello {this.state.text}</Button>
  }
}

export default App;
