import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  display: block;
  margin: 0 auto;
  width: 80%;
  font-size: 6.5em;
  letter-spacing: .25em;
  color: #FFF;
  text-shadow: 0px 0px 2px #000, 0px 0px 2px #000, 0px 0px 2px #000, 0px 0px 2px #000;
`
const TabBox = styled.ul`
  margin: 0 auto;
  width: 80%;
  list-style: none;
`
const Tab = styled.li`
  display: flex;
  align-items: center;
  justify-contents: center;
  height: 3em;
  margin: 0 0 20px 0;
`
const TabTail = styled.span`
  position: relative;
  background: #5E0000;
  border: 3px solid #8E0000;
  border-style: solid none solid solid;
  display: block;
  left: 3px;
  height: 50%;
  width: 6em;
  z-index: 5;
`
const Name = styled.strong`
  border: 3px solid #8E0000;
  background: #5E0000;
  font-size: 2.3em;
  color: #FFF;
  border-radius: 0 3em 3em 0;
  width: 10em;
  padding: 7.5px;
  text-align: center;
  text-transform: capitalize;
  text-shadow: 0px 0px 2px #000, 0px 0px 2px #000, 0px 0px 2px #000, 0px 0px 2px #000;
  &:hover{
    color: #FFB800;
  }
`
const Info = styled.section`
  background: #5E0000;
  border: 3px solid #8E0000;
  color: #FFF;
  font-size: 1.3em;
  width: 80%;
  margin: 15px auto 0;
  padding: 15px;
  height: 100px;
`

class NavMenu extends Component {
    constructor(props){
     super(props)
     this.state = {
        data: this.info
     }
  }
     info = [
        {name: 'File', description: 'Defy the destiny of dark blood.'},
        {name: 'Power', description: 'Surpass those who came before.'},
        {name: 'Arms', description: 'Turn conquest into companionship.'},
        {name: 'Guns', description: 'Learn the tools of the trade.'},
        {name: 'Styles', description: 'Master all aspects of the self.'},
        {name: 'Trigger', description: 'Unleash the true devil within.'}
     ]
     hoverState(){
       this.style.display = 'block'
     }
    render() {
      const tabs = this.state.data
      // <div key={item.id.toString()} onHover={this.showDescription}>
      //       <h1 data-key={item.id.toString()}>{item.name}</h1>
      //       <p>{item.description}</p>
      //    </div>
      return (
        <div>
          <Title>Status</Title>
          <TabBox>
          { tabs.map(
            (item) => {
            return <Tab key={ item.id }><TabTail/><Name>{ item.name }</Name></Tab>
          }) }
          </TabBox>
          <Info>
          { tabs.map(
            (item) => {
            return <p style={{
              display: 'none'
            }} key={ item.id }>{ item.description }</p>
          }) }
          </Info>
        </div>
      )
  }
}
export default NavMenu;
