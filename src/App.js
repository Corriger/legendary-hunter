import React, { Component } from 'react'
import NavMenu from './components/NavMenu.js'
import * as File from './assets/data/file.js'
import InfoKiosk from './components/InfoKiosk.js'
import fileBG from './assets/img/file-bg.jpg'
import './index.css'

class App extends Component {
  constructor(props){
    super(props)
    this.textEventHandler = this.textEventHandler.bind(this)
    this.navMenuClickEvent = this.navMenuClickEvent.bind(this)
    this.state = {
      data: File,
      currentComponent: <NavMenu inherit={this.navMenuClickEvent}/>,
      currentData: File['statistics']
    }
  }
  textEventHandler(e){
    e = e.target.textContent
    return this.setState({
      currentData: this.props.title[`${e}`]
    })
  }
  navMenuClickEvent(e){
    e = e.target.innerText
    console.log(e)
    return e == 'file' ? this.setState({
      currentComponent: <InfoKiosk inherit={this.textEventHandler} bg={fileBG} title={`${e}`} items={Object.keys(this.state.data[`${e}`])} information={this.state.currentData}/>
    })
    : alert('in progress')
  }
  render() {
    return (
      <div className="App">
        {this.state.currentComponent}
      </div>
    )
  }
}

export default App;
