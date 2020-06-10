import React, { Component } from 'react'
import Info from './Info.js'
import Return from './Return.js'
import { PageTitle, Kiosk, Selection, Repo } from './styledCSS.js'

class InfoKiosk extends Component {
  inheritFunction(){
    return this.props.inherit
  }
    render() {
      return (
        <div
          className='component_container'
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-evenly',
            background: `url(${this.props.bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>
          <PageTitle>{this.props.title}</PageTitle>
          <Kiosk>
            { this.props.items.map((item, i) => {
              return <Selection onClick={ this.inherit } key={i}>{ item }</Selection>
            }) }
          </Kiosk>
          <Repo>
              <Info information={ this.props.information } />
          </Repo>
          <Return/>
        </div>
      )
  }
}
Info.defaultProps = {
  bg: '#000',
  title: 'in progress',
  items: 'tbd'
};

export default InfoKiosk;
