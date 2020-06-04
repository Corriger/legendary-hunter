import React, { Component } from 'react'
import { List, ListItem, SupTitle, Desc } from './styledCSS.js'

class Stats extends Component {
  render() {
    return (
      <div>
        <List>
          {this.props.information.map(
            (infoPiece, i) => {
              return <ListItem>
                <SupTitle>
                  { infoPiece[0] }
                </SupTitle>
                <Desc>
                  { infoPiece[1] }
                </Desc>
              </ListItem>
            }
          )}
        </List>
      </div>
    )
  }
}

export default Stats
