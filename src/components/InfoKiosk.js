import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  display: block;
  width: 100%;
  font-size: 4em;
  text-align: right;
  &:after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 0 90px;
    border-bottom: 15px solid green;
    z-index: -2;
  }
`
const Kiosk = styled.ul`
  width: calc(47% - 30px);
  height: 100%;
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
        <div>
          <Title>Status</Title>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            height: '450px'
          }}>
          <Kiosk>
            
          </Kiosk>
          <Repo as='section'>
          </Repo>
          </div>
        </div>
      )
  }
}
export default InfoKiosk;
