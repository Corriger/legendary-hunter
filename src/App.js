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
  [
    'name',
    'd.o.b.',
    'height',
    'weight',
    'blood type',
    'species',
    'title(s)',
    'occupation',
    'hobbies',
    'likes',
    'dislikes',
    'alignment'
  ],
  [
    'dante (née sparda)',
    '09\/15\/1955',
    '6\'6\"',
    '216 lbs',
    'AB\-',
    'awakened cambion',
    'legendary devil hunter, slayer, tony redgrave',
    'paranormal mercenary, private investigator',
    'none',
    'his wife, the occasional fight, pizza, strawberry sundae',
    'olives, smoking, blind ambition',
    'true neutral'
  ]

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
