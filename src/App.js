import React, { Component } from 'react'
import NavMenu from './components/NavMenu.js'
import InfoKiosk from './components/InfoKiosk.js'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu/>
        <InfoKiosk style={{
          position: 'relative',
          zIndex: '99999'
        }}/>
      </div>
    )
  }
}

export default App;
