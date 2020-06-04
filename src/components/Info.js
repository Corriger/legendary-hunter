import React, { Component } from 'react'
import { List, ListItem, SupTitle, Desc } from './styledCSS.js'

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
