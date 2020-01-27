import React, { Component } from 'react'
import styled from 'styled-components'

const Return = styled.a`
  display: block;
  font-size: 2.5em;
  text-align: center;
  margin: 0 auto;
  clear: both;
  color: #FFF;
  &:hover{
    font-size: 2.5em;
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <Return>
          Return
        </Return>
      </div>
    )
  }
}

export default App;
