import React, { Component } from 'react'
import NavMenu from './components/NavMenu.js'
import { Arms } from './assets/data/weapon-select-data.js'
import InfoKiosk from './components/InfoKiosk.js'
import WeaponSelect from './components/WeaponSelect.js'
import ArmsBG from './assets/img/ArmsBG.jpg'
import GunsBG from './assets/img/GunsBG.jpg'
import './index.css'

// Object.entries(Arms[`rebellion`])
console.log(Arms)

let component = ''
let count = 0

class App extends Component {
  constructor(props){
    super(props)
    this.textEventHandler = this.textEventHandler.bind(this)
    this.navMenuClickEvent = this.navMenuClickEvent.bind(this)
    this.return = this.return.bind(this)
    this.setChange = this.setChange.bind(this)
    this.state = {
      data: {
        // File,
        // Power,
        // Styles
      },
      background: {
        // FileBG,
        // PowerBG,
        // StylesBG,
        ArmsBG,
        GunsBG
      },
      foreground: { 
        // FileFore, 
        // PowerFore, 
        // StylesFore
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
    // e === 'File' || e === 'Power' || e === 'Styles' ? this.setState({
    //   currentComponent: <InfoKiosk 
    //   inherit={this.textEventHandler} 
    //   bg={this.state.background[`${e}BG`]}
    //   title={`${e}`} 
    //   items={Object.keys(this.state.data[`${e}`])} 
    //   information={this.state.currentData} 
    //   fore={this.state.foreground[`${e}Fore`]} 
    //   return={this.return}/>
    // })
    e === 'Arms' ? this.setState({
      currentComponent: <WeaponSelect
      bg={ArmsBG}
      func={this.setChange}
      wepOne={this.state.data[`${component}`][indexOne + count][0]} 
      wepTwo={this.state.data[`${component}`][indexTwo + count][0]} 
      wepThr={this.state.data[`${component}`][indexThr + count][0]}
      imgOne={this.state.data[`${component}`][indexOne + count][7]} nameOne={this.state.data[`${component}`][indexOne + count][0]} titleOne={this.state.data[`${component}`][indexOne + count][1]}
      imgTwo={this.state.data[`${component}`][indexTwo + count][7]} nameTwo={this.state.data[`${component}`][indexTwo + count][0]} titleTwo={this.state.data[`${component}`][indexTwo + count][1]}
      imgThr={this.state.data[`${component}`][indexThr + count][7]} nameThr={this.state.data[`${component}`][indexThr + count][0]} titleThr={this.state.data[`${component}`][indexThr + count][1]}
      />
    })
    : alert('in progress')
  }
  setChange(e){
    e = e.target.dataset.nav
    switch (e){
      case 'up' && indexOne + count < component.length:
      case 'up' && indexTwo + count < component.length:
      case 'up' && indexThr + count < component.length:
        console.log('previous')
        break
        case 'down' && indexOne + count > component.length:
        case 'down' && indexTwo + count > component.length:
        case 'down' && indexThr + count > component.length:
        console.log('next')
        break
      default:
        console.log('error')
    }
  }
  render() {
    console.log(component)
    return (
      <div className="App">
        {this.state.currentComponent}
        {/* <WeaponSelect
        bg={ArmsBG}
        func={this.setChange}
        wepOne={component[indexOne + count][0]} 
        wepTwo={component[indexTwo + count][0]} 
        wepThr={component[indexThr + count][0]}
        imgOne={component[indexOne + count][7]} nameOne={component[indexOne + count][0]} titleOne={component[indexOne + count][1]}
        imgTwo={component[indexTwo + count][7]} nameTwo={component[indexTwo + count][0]} titleTwo={component[indexTwo + count][1]}
        imgThr={component[indexThr + count][7]} nameThr={component[indexThr + count][0]} titleThr={component[indexThr + count][1]}
        /> */}
      </div>
    )
  }
}

export default App;
