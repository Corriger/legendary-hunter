import React, { Component } from 'react'
<<<<<<< HEAD
import { PageTitle, Kiosk, Selection, Repo } from './styledCSS.js'
import fileBG from './../assets/img/file-bg.jpg'
=======
import styled from 'styled-components'
import Dumps from './Dumps.js'
import Stats from './Stats.js'
import Return from './Return.js'

const Title = styled.h1`
  display: block;
  width: 100%;
  font-size: 9em;
  text-align: right;
  color: #FFF;
  text-shadow: 1px 1px 1px #000, 
  -1px 1px 1px #000, 
  1px -1px 1px #000, 
  -1px -1px 1px #000;
  }
`
const TitleLB = styled.div`
  top: 30px;
  width: 100%;
  height: 15px;
  background: #5E0000;
`
const Kiosk = styled.ul`
  display: block;
  float: left;
  margin: 0 15px;
  padding: 15px;
  width: calc(50% - 60px);
  height: 60%;
  background: #5E0000;
`
const Selection = styled.li`
  cursor: pointer;
  color: #FFF;
  font-size: 2.4em;
  width: 40%;
  padding: 7.5px 7.5px 7.5px 30px;
  text-transform: capitalize;
  text-shadow: 1px 1px 1px #000, 
  -1px 1px 1px #000, 
  1px -1px 1px #000, 
  -1px -1px 1px #000;
  &:hover
    color: #FFB800;
  }
`
const Repo = styled(Kiosk)`
  font-size: 1em;
  overflow-y: auto;
`
>>>>>>> page-file

class InfoKiosk extends Component {
    render() {
      return (
<<<<<<< HEAD
        <div
          className='component_container'
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-evenly',
            background: `url(${fileBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
          <PageTitle>{this.props.title}</PageTitle>
          <Kiosk>
=======
        <div 
        className='component_container'
        style={{
          backgroundImage: `url(${this.props.bgImg})`
        }}>
           <Title>{this.props.title}</Title>
           <TitleLB/>
          <Kiosk
            className='cf'>
>>>>>>> page-file
            { this.props.items.map((item) => {
              return <Selection>{ item }</Selection>
            }) }
          </Kiosk>
          <Repo 
            as='article' 
            className='cf'>
              {/* <Dumps
                summary={this.props.theInfo}/> */}
              <Stats
                information={ this.props.information }
                />
          </Repo>
          <Return/>
        </div>
      )
  }
}
export default InfoKiosk;
