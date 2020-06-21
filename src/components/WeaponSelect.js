import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Return from './Return.js'

class InfoKiosk extends Component {
  render() {
    return (
      <div className='component_container'
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        background: `url(${this.props.bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }}>
        <article>
          <p></p>
        </article>
        <ul>
          <li class='prev'></li>
          <li>
            <img class='weapon' src='' alt='weapon 1' />
            <div>
              <strong>Test 1</strong>
              <em>The Testening</em>
            </div>
          </li>
          <li>
            <img class='weapon' src='' alt='weapon 2' />
            <div>
              <strong>Test 2</strong>
              <em>Akuma No Testo</em>
            </div>
          </li>
          <li>
            <img class='weapon' src='' alt='weapon 3' />
            <div>
              <strong>Test 3</strong>
              <em>Tester's Awakening</em>
            </div>
          </li>
          <li class='next'></li>
        </ul>
        <Return return={this.props.return} />
      </div>
    )
  }
}

export default InfoKiosk;
