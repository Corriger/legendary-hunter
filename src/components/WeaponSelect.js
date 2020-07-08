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
          <p>{this.props.dump}</p>
        </WeaponInfo>
        <WeaponList>
          <Arrow data-nav='up' onClick={this.props.func}></Arrow>
          <WeaponItem onClick={this.props.inherit} data-weapon={this.props.wepOne}>
            <WepImg src={this.props.imgOne} alt={this.props.nameOne}/>
            <WepName>{this.props.nameOne}</WepName>
            <WepTitle>{this.props.titleOne}</WepTitle>
          </WeaponItem>
          <WeaponItem onClick={this.props.inherit} data-weapon={this.props.wepTwo}>
            <WepImg src={this.props.imgTwo} alt={this.props.nameTwo}/>
            <WepName>{this.props.nameTwo}</WepName>
            <WepTitle>{this.props.titleTwo}</WepTitle>
          </WeaponItem>
          <WeaponItem onClick={this.props.inherit} data-weapon={this.props.wepThr}>
            <WepImg src={this.props.imgThr} alt={this.props.nameThr}/>
            <WepName>{this.props.nameThr}</WepName>
            <WepTitle>{this.props.titleThr}</WepTitle>
          </WeaponItem>
          <Arrow down data-nav='down' onClick={this.props.func}></Arrow>
        </WeaponList>
        <Return return={this.props.return} />
      </div>
    )
  }
}

export default InfoKiosk;
