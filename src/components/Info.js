import React, { Component } from 'react'
<<<<<<< HEAD:src/components/Info.js
import { List, ListItem, SupTitle, Desc } from './styledCSS.js'
=======
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const ListItem = styled.li`
  color: #FF0000;
  display: block;
  padding: 0 0 15px;
  width: 50%;
`
const SupTitle = styled.em`
  color: #FFF;
  vertical-align: super;
  font-size: 0.6666em;
  font-weight: bold;
  text-decoration: capitalize;
`
const Desc = styled.p`
  display: block;
  padding: 0 0 0 15px;
  font-size: 1em;
  text-decoration: capitalize;
`
>>>>>>> page-file:src/components/Stats.js

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
