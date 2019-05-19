import React, { Component } from 'react'
import styled from 'styled-components'

const Demo = styled.section`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-flow: column;
  &:after{
    content: "";
    height: 50%;
    right: 0;
    opacity: .4;
    position: absolute;
    width: 50%;
    bottom: 0;
    z-index: -1;
  }
`
const DemoImg = styled.img`
  display: block;
  margin: 0 auto 15px;
`
const DemoDesc = styled(DemoImg)`
`

class Demonstration extends Component {
  render() {
    return (
      <div>
        <Demo style={{
          background: ''
        }}>
          <DemoImg src={}/>
          <DemoDesc as='p'>
          </DemoDesc>
        </Demo>
      </div>
    )
  }
}

export default Demonstration
