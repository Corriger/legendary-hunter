import React, { Component } from 'react'
import NavMenu from './components/NavMenu.js'
import { fileNavItems, statistics, appearance } from './assets/data/file.js'
import InfoKiosk from './components/InfoKiosk.js'
import fileBG from './assets/img/file-bg.jpg'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <InfoKiosk
            bg={fileBG}
            title='File'
            items={fileNavItems}
            information={statistics}
          />
      </div>
    )
  }
}

export default App;
