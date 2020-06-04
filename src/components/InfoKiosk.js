import React, { Component } from 'react'
import Info from './Info.js'
import Return from './Return.js'
import { PageTitle, Kiosk, Selection, Repo } from './styledCSS.js'
import fileBG from './../assets/img/file-bg.jpg'

class InfoKiosk extends Component {
    render() {
      return (
        <div
          className='component_container'
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-evenly',
            background: `url(${fileBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>
          <PageTitle>{this.props.title}</PageTitle>
          <Kiosk>
            { this.props.items.map((item) => {
              return <Selection>{ item }</Selection>
            }) }
          </Kiosk>
          <Repo 
            as='article' 
            className='cf'>
              <Info information={ this.props.information } />
          </Repo>
          <Return/>
        </div>
      )
  }
}
export default InfoKiosk;
