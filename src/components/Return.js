import React, { Component } from 'react'
import styled from 'styled-components'

const Return = styled.button`
  display: block;
  font-size: 2em;
  text-align: right;
  margin: 1em auto 0;
`

class App extends Component {
  toNav(){
     
   }

  render() {
    return (
      <div className="App">
        <Return onClick={toNav()}/>
          Return
        </Return>
      </div>
    )
  }
}

export default App;
