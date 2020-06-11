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
      currentData: File['statistics']
    }
  }

  textEventHandler(e){
    e = e.target.innerText
    console.log(File[`${e}`])
    return this.setState({
      currentData: File[`${e}`]
    })
  }

  render() {
    const inFo = this.state.data
    console.log(inFo['statistics'])
    return (
      <div className="App">
          <InfoKiosk
            inherit={this.textEventHandler}
            bg={fileBG}
            title='File'
            items={Object.keys(inFo)}
            information={this.state.currentData}
          />
      </div>
    )
  }
}

export default App;
