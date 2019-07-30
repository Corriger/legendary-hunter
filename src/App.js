import React, { Component } from 'react'
import NavMenu from './components/NavMenu.js'
import InfoKiosk from './components/InfoKiosk.js'
import Stats from './components/Stats.js'
import Return from './components/Return.js'
import WeaponSelect from './components/WeaponSelect.js'
import Dumps from './components/Dumps.js'
import Demonstration from './components/Demonstration.js'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="container">
          <NavMenu/>
        </section>
        // File
        <section className="container">
          <InfoKiosk>
            
          </InfoKiosk>
        </section>
        // Power
        <section className="container">
          <InfoKiosk>
          </InfoKiosk>
        </section>
        // Arms
        <section className="container">
          <InfoKiosk>
          </InfoKiosk>
        </section>
        // Guns
        <section className="container">
          <InfoKiosk>
          </InfoKiosk>
        </section>
      </div>
    )
  }
}

export default App;
