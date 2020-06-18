import React, { Component } from 'react'
import NavMenu from './components/NavMenu.js'
import { File, Power, Styles } from './assets/data/info-kiosk-data.js'
import InfoKiosk from './components/InfoKiosk.js'
import './index.css'

let component = ''

class App extends Component {
  constructor(props){
    super(props)
    this.textEventHandler = this.textEventHandler.bind(this)
    this.navMenuClickEvent = this.navMenuClickEvent.bind(this)
    this.return = this.return.bind(this)
    this.state = {
      data: {
        File,
        Power
      },
      currentComponent: <NavMenu inherit={this.navMenuClickEvent}/>,
      currentData: File['statistics']
    }
  }
  return(e){
    e = e.target
    this.setState({
      currentComponent: <NavMenu inherit={this.navMenuClickEvent}/>
    })
  }
  textEventHandler(e){
    e = e.target.textContent
    this.setState({
      currentComponent: <InfoKiosk inherit={this.textEventHandler} bg={`${component}-bg.jpg`} title={component} items={Object.keys(this.state.data[`${component}`])} information={this.state.data[`${component}`][`${e}`]} return={this.return}/>
    })
  }
  navMenuClickEvent(e){
    e = e.target.innerText
    component = e
    console.log(component)
    e === 'File' || e === 'Power' || e === 'Styles' ? this.setState({
      currentComponent: <InfoKiosk inherit={this.textEventHandler} bg={`${e}BG`} title={`${e}`} items={Object.keys(this.state.data[`${e}`])} information={this.state.currentData} return={this.return}/>
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
