import React, { Component } from 'react'
import { Title, TabBox, Tab, TabTail, Name, Info } from './styledCSS.js'

class NavMenu extends Component {
  constructor(props){
    super(props)
    // seems to bind a function to a specific... thingy
    // this.hoverState is the VARIABLE you should be using; do not add ''()''
    this.hoverState = this.hoverState.bind(this)
    this.state = {
       data: this.info,
       tab: [
         'file',
         'power',
         'arms',
         'guns',
         'להתעורר'
       ],
       currentHoverState: ''
    }
 }
 info = [
      'Defy the destiny of dark blood.',
      'Surpass those who came before.',
      'Conquer and command Hell itself.',
      'Learn the tools of the trade.',
      'Awaken to one\'s Reason.'
    ]

 hoverState(e){
   e = e.target.innerText
   let text = ''

   switch (e){
     case 'File':
       text = this.state.data[0]
     break
     case 'Power':
       text = this.state.data[1]
     break
     case 'Arms':
       text = this.state.data[2]
     break
     case 'Guns':
       text = this.state.data[3]
     break
     case 'להתעורר':
       text = this.state.data[4]
     break
     default:
       return null
   }
   // works technically as intended but keeps updating <li> too. need to fix that somehow
   return this.setState(
     {currentHoverState: text}
   )
 }
    render() {
      const tabs = this.state.data
      return (
        <div>
          <Title>Status</Title>
          <TabBox>
          { tabs.map(
            (item, i) => {
            return <Tab key={i + (Math.random() ** 2)}><TabTail/><Name onMouseOver={this.hoverState}>{ this.state.tab[i] }</Name></Tab>
          }) }
          </TabBox>
          <Info>
           <p>{this.state.currentHoverState}</p>
          </Info>
        </div>
      )
  }
}
export default NavMenu;
