import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  display: block;
  width: 100%;
  font-size: 4em;
`
const Kiosk = styled.ul`
  margin: 0 auto;
  width: 80%;
  list-style: none;
`
const Selection = styled.li`
  display: flex;
  align-items: center;
  justify-contents: center;
  height: 3em;
  margin: 0 0 20px 0;
`
const Repo = styled.section`
  font-size: 1.3em;
  width: 80%;
  border: 3px solid black;
  margin: 15px auto 0;
  padding: 15px;
  height: 100px;
`

class InfoKiosk extends Component {
    constructor(props){
     super(props)
     this.state = {
        data: this.info
     }
  }
     info = [
        {name: 'File', description: 'Defy the destiny of dark blood.'},
        {name: 'Power', description: 'Surpass those who came before.'},
        {name: 'Arms', description: 'Turn conquest into companionship.'},
        {name: 'Guns', description: 'Learn the tools of the trade.'},
        {name: 'Styles', description: 'Master all aspects of the self.'},
        {name: 'Trigger', description: 'Unleash the true devil within.'}
     ]
     hoverState(){
       this.style.display = 'block'
     }
    render() {
      const tabs = this.state.data
      // <div key={item.id.toString()} onHover={this.showDescription}>
      //       <h1 data-key={item.id.toString()}>{item.name}</h1>
      //       <p>{item.description}</p>
      //    </div>
      return (
        <div>
          <Title>Status</Title>
          <Kiosk>
            { tabs.map(
              (item) => {
              return <Selection key={ item.id }>{ item.name }</Selection></Tab>
            })}
          </Kiosk>
          <Repo>
          { tabs.map(
            (item) => {
            return <p style={{
              display: 'none'
            }} key={ item.id }>{ item.description }</p>
          }) }
          </Repo>
        </div>
      )
  }
}
export default InfoKiosk;
