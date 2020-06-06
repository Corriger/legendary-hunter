import React, { Component } from 'react'
import { List, ListItem, SupTitle, Desc } from './styledCSS.js'

class Info extends Component {
  render() {
    return (
      <div>
        <List>
          { this.props.information.map((item) => {
            return  <ListItem><SupTitle>{ item[0] }</SupTitle> <Desc>{ item[1] }</Desc> </ListItem>
            }) }
        </List>
      </div>
    )
  }
}

export default Info
