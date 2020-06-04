import React, { Component } from 'react'
// import NavMenu from './components/NavMenu.js'
import InfoKiosk from './components/InfoKiosk.js'
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
          title='file'
          items={fileNavItems}/>
      </div>
    )
  }
}

export default App;
