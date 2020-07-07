import React, { Component } from 'react'
import Return from './Return.js'
import { PageTitle, WeaponInfo, Arrow, WeaponList, WeaponItem, WepImg, WepName, WepTitle } from './styledCSS.js'

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
        <PageTitle>Arms</PageTitle>
        <WeaponInfo>
          <p></p>
        </WeaponInfo>
        <WeaponList>
          <Prev></Prev>
          <WeaponItem>
            <WepImg src='' alt=''/>
            <WepName>Test 1</WepName>
            <WepTitle>The Testening</WepTitle>
          </WeaponItem>
          <WeaponItem>
            <WepImg src='' alt=''/>
            <WepName>Test 1</WepName>
            <WepTitle>The Testening</WepTitle>
          </WeaponItem>
          <WeaponItem>
            <WepImg src='' alt=''/>
            <WepName>Test 1</WepName>
            <WepTitle>The Testening</WepTitle>
          </WeaponItem>
          <Next></Next>
        </WeaponList>
        <Return return={this.props.return} />
      </div>
    )
  }
}

export default InfoKiosk;
