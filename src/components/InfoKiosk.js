import React, { Component } from 'react'
import styled from 'styled-components'
import pageBG from './../assets/img/file-bg.jpg'

const Title = styled.h1`
  display: block;
  width: 100%;
  font-size: 9em;
  text-align: right;
  color: #FFF;
  }
`
const TitleLB = styled.div`
  top: 30px;
  width: 100%;
  height: 15px;
  background: green;
`
const Kiosk = styled.ul`
  display: block;
  float: left;
  margin: 0 15px; 
  width: calc(50% - 30px);
  height: 60%;
  background: green;
`
const Selection = styled.li`
  color: #FFF;
  font-size: 2.4em;
  width: 40%;
  padding: 7.5px;
  text-transform: capitalize;
  text-shadow: 0px 0px 1px #000, 0px 0px 1px #000, 0px 0px 3px #000, 0px 0px 5px #000;
  &:hover{
    color: #FFB800;
  }
`
const Repo = styled(Kiosk)`
  font-size: 1em;
  overflow-y: auto;
`

class InfoKiosk extends Component {
    render() {
      return (
        <div 
        className='component_container'
        style={{
          backgroundImage: this.props.bgImg
        }}>
           <Title>{this.props.title}</Title>
           <TitleLB/>
          <Kiosk
            className='cf'>
            { this.props.items.map((item) => {
              return <Selection>{ item }</Selection>
            }) }
          </Kiosk>
          <Repo 
            as='section' 
            className='cf'>
          </Repo>
        </div>
      )
  }
}
export default InfoKiosk;
