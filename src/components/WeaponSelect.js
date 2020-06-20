import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Return from './Return.js'

class InfoKiosk extends Component {
    render() {
      return (
        <div>
          <Return return={this.props.return}/>
        </div>
      )
  }
}

export default InfoKiosk;
