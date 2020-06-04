import React, { Component } from 'react'
import { Title, TabBox, Tab, TabTail, Name, Info } from './styledCSS.js'

class NavMenu extends Component {
    constructor(props){
     super(props)
  }
     hoverState(){
       this.style.display = 'block'
     }
    render() {
      const tabs = this.state.data
      return (
        <div>
          <Title>Status</Title>
          <TabBox>
          { tabs.map(
            (item) => {
            return <Tab key={ this.props.id }><TabTail/><Name>{ this.props.name }</Name></Tab>
          }) }
          </TabBox>
          <Info>
          { tabs.map(
            (item) => {
            return <p style={{
              display: 'none'
            }} key={ this.props.id }>{ this.props.description }</p>
          }) }
          </Info>
        </div>
      )
  }
}
export default NavMenu;
