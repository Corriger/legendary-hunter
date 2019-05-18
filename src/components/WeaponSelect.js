import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Info = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: calc(50% - 30px);
  height: 60%;
  padding: 15px;
`
const WepRack = styled(Container)``
const Item = styled.section`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-flow: column wrap;
  border: 3px solid darkred;
  background: #5E0000;
  border-radius: 60px 0 0 0;
  padding: 0 45px;
  margin: 0 0 15px;
  height: 100px;
  width: 100%;
`

class WeaponSelect extends Component {
  render() {
    return (
      <div>
        <Container>
          <Info>
            <p style={{
              display: 'block',
              padding: '0 0 15px'
             }}>
              {  }
             </p>
          </Info>
          <WepRack as='ul'>
            <Item>
              <img style={{
                height: '75%',
                objectFit: 'contain',
                objectPosition: 'center'
               }}src={  } alt="">
              <strong style={{
                display: 'block',
                fontSize: '30px'
              }}>{  }</strong>
            </Item>
          </WepRack>
          </Container>
      </div>
    )
  }
}

export default WeaponSelect;
