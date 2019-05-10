import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  display: block;
  font-size: 8em;
  width: 80%;
  margin: 0 auto;
`
const TabBox = styled.ul`
  width: 80%;
  margin: 0 auto;
  list-style: none;
  border: 1px solid blue;
`
const Tab = styled.li`
  display: flex;
  align-items: center;
  justify-contents: center;
  height: 3em;
  margin: 0 0 20px 0;
`
const TabTail = styled.span`
  background: white;
  border: 3px solid;
  border-style: solid none solid solid;
  display: block;
  left: 3px;
  height: 50%;
  width: 6em;
  z-index: 5;
`
const Name = styled.strong`
  font-size: 2em;
  border: 3px solid;
  font-size: 2em;
  border-radius: 0 3em 3em 0;
  width: 14em;
  padding: 7.5px;
  text-align: center;
`

class NavMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:
      'File',
      'Power',
      'Arms',
      'Guns',
      'Styles',
      'Trigger'
    }
  }
  render() {
    return (
      <div>
        <Name></Name>
        <TabBox>
        { name.map(i = {
          <Tab>
          <TabTail/><Name/>
          </Tab>
        } )}
        </TabBox>
      </div>
    )
  }
}

export default NavMenu;
