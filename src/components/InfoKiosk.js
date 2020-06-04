import React, { Component } from 'react'
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
            background: `url(${pageBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
          <Title>{this.props.title}</Title>
          <Kiosk>
            { this.props.items.map((item) => {
              return <Selection>{ item }</Selection>
            }) }
          </Kiosk>
          <Repo as='section'>
          </Repo>
        </div>
      )
  }
}
export default InfoKiosk;
