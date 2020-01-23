import React, { Component } from 'react'
// import NavMenu from './components/NavMenu.js'
import InfoKiosk from './components/InfoKiosk.js'
// import Stats from './components/Stats.js'
// import Return from './components/Return.js'
// import WeaponSelect from './components/WeaponSelect.js'
// import Dumps from './components/Dumps.js'
// import Demonstration from './components/Demonstration.js'
import './index.css'

let fileNavItems = [
  'statistics',
  'appearance',
  'personality',
  'relationships',
  'history',
  'outfits'
]
let fileKioskItems

class App extends Component {
  render() {
    return (
      <div className="App">
          <InfoKiosk 
            title='status'
            items={fileNavItems}/>
      </div>
    )
  }
}

export default App;
