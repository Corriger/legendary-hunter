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
let fileKioskItems = [
['name','dante'],
['title(s)','legendary devil hunter, slayer, redgrave'],
['d.o.b.','09\/15\/1955'],
['occupation','paranormal mercenary, private investigator'],
['height','6\'6\"'],
['hobbies','none'],
['weight','216 lbs'],
['likes','his wife, pizza, strawberry sundaes'],
['blood type','AB-'],
['dislikes','olives, smoking, ambition'],
['species','awakened cambion'],
['alignment','true neutral']
]

class App extends Component {
  render() {
    return (
      <div className="App">
          <InfoKiosk
            bgImg={ fileBG }
            title='file'
            items={ fileNavItems }
            information={ fileKioskItems }
            />
      </div>
    )
  }
}

export default App;
