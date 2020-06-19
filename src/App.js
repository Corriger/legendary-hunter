import React, { Component } from 'react'
import NavMenu from './components/NavMenu.js'
import { File, Power, Styles } from './assets/data/info-kiosk-data.js'
import InfoKiosk from './components/InfoKiosk.js'
import FileBG from './assets/img/FileBG.jpg'
import PowerBG from './assets/img/PowerBG.jpg'
import StylesBG from './assets/img/StylesBG.jpg'
import ArmsBG from './assets/img/ArmsBG.jpg'
import GunsBG from './assets/img/GunsBG.jpg'
import FileFore from './assets/img/FileFore.png'
import PowerFore from './assets/img/PowerFore.png'
import StylesFore from './assets/img/StylesFore.png'
import './index.css'

console.log(FileFore)
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
        Power,
        Styles
      },
      background: {
        FileBG,
        PowerBG,
        StylesBG,
        ArmsBG,
        GunsBG
      },
      foreground: { 
        FileFore, 
        PowerFore, 
        StylesFore
      },
      currentComponent: <NavMenu inherit={this.navMenuClickEvent}/>,
      // need to figure out a less 'good bad bugs' way to handle this, but it works for now in satifying the props
      currentData: Object.values(`${component}`)
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
      currentComponent: <InfoKiosk 
      inherit={this.textEventHandler} 
      bg={this.state.background[`${component}BG`]} 
      title={component} 
      items={Object.keys(this.state.data[`${component}`])} 
      information={this.state.data[`${component}`][`${e}`]} 
      fore={this.state.foreground[`${component}Fore`]} 
      return={this.return}
      />
    })
  }
  navMenuClickEvent(e){
    e = e.target.innerText
    component = e
    e === 'File' || e === 'Power' || e === 'Styles' ? this.setState({
      currentComponent: <InfoKiosk 
      inherit={this.textEventHandler} 
      bg={this.state.background[`${e}BG`]}
      title={`${e}`} 
      items={Object.keys(this.state.data[`${e}`])} 
      information={this.state.currentData} 
      fore={this.state.foreground[`${e}Fore`]} 
      return={this.return}/>
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
