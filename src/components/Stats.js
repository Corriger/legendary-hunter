import React, { Component } from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const ListItem = styled.li`
  display: block;
  padding: 0 0 15px;
  width: 100%;
`
const SupTitle = styled.em`
  vertical-align: super;
  font-size: smaller;
`
const Desc = styled.p`
  display: block;
  padding: 0 0 0 15px;
`

class Stats extends Component {
  render() {
    return (
      <div>
        <List>
          <ListItem>
            <SupTitle></SupTitle>
            <Desc></Desc>
          </ListItem>
        </List>
      </div>
    )
  }
}

export default Stats