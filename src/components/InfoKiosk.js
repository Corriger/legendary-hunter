import React, { Component } from 'react'
import styled from 'styled-components'
import pageBG from './../assets/img/file-bg.jpg'

const Title = styled.h1`
  display: block;
  width: 100%;
  font-size: 4em;
  text-align: right;
  color: #FFF;
  &:after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 0 90px;
    border-bottom: 15px solid #5E0000;
    z-index: 0;
  }
`
const Kiosk = styled.ul`
  margin: 0 30px;
  width: calc(47% - 60px);
  height: 568px;
  background: #5E0000;
`
const Selection = styled.li`
  cursor: pointer;
  color: #FFF;
  font-size: 2.4em;
  width: 40%;
  padding: 7.5px 7.5px 7.5px 30px;
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
