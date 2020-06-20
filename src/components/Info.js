import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, SupTitle, Desc } from './styledCSS.js'

class Info extends Component {
  render() {
    return (
      <div 
      className='foreground'
      style={{
        backgroundImage: `url(${this.props.fore})`,
        backgroundSize: `45%`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `bottom 1rem right 1rem`
      }}>
        <List>
          { this.props.information.map((item, i) => {
            return <ListItem key={i}><SupTitle key={i + (Math.random() ** 2)}>{ item[0] }</SupTitle> <Desc key={i + (Math.random() ** 2)}>{ item[1] }</Desc> </ListItem>
            }) }
        </List>
      </div>
    )
  }
}

Info.propTypes = {
  information: PropTypes.array
}

export default Info
