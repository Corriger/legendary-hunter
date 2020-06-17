import React, { Component } from 'react'
import { Return } from './styledCSS.js'

class App extends Component {
  render() {
    return (
      <div style={{
        width: '100%'
      }}>
        <Return onClick={this.props.return}>
          Return
        </Return>
      </div>
    )
  }
}

export default App;
