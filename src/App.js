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
    this.state = {
      data: File,
      focusData: ' ',
      currentData: ' '
    }
  }

  textEventHandler(e){
    e = e.target.innerText
    console.log(e)
    return this.setState({
      currentData: this.state.data.e
    })
  }

  render() {
    const inFo = this.state.data
    let infoCurrent = this.state.currentData
    console.log(Object.keys(inFo))
    console.log(infoCurrent)
    return (
      <div className="App">
          <InfoKiosk
            inherit={this.textEventHandle}
            bg={fileBG}
            title='File'
            items={inFo.fileNavItems}
            information={Object.keys(infoCurrent)}
          />
      </div>
    )
  }
}

export default App;
