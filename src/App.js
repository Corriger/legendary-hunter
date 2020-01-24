import React, { Component } from 'react'

import InfoKiosk from './components/InfoKiosk.js'
// import Stats from './components/Stats.js'
// import Return from './components/Return.js'
// import Dumps from './components/Dumps.js'
import './index.css'
import fileBG from './assets/img/file-bg.jpg'
// import './assets/fonts/Requiem.tff'

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
          bgImg={ fileBG }
          title='file'
          items={fileNavItems}/>
      </div>
    )
  }
}

export default App;
