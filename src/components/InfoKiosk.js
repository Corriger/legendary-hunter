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
    constructor(props){
     super(props)
     this.state = {
        data: this.info,
        test: 'red'
     }
  }
     info = [
        {
        name: 'File',
        description: [
          'Test 1',
          'Test II',
          'Test 0--0'
        ]},
     ]
     hoverState(){
       this.style.display = 'block'
     }
     renderScreen(){
       if(this.state.test == 'red'){
         return (
           // <MyFirstComponent/>
           <p>Red Screen Component</p>
         )
       }else if(this.state.test == 'blue'){
         return (
           <p>Blue Screen Component</p>
         )
       }else if (this.state.test == 'green'){
         return(
           <p>Green Screen Component</p>
         )
       } else{
         return (
           <p>Default</p>
         )
       }
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
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            height: '450px'
          }}>
          <Kiosk>
            { tabs.map(
              (item) => {
              return <Selection key={ item.id }>{ item.name }</Selection>
            })}
          </Kiosk>
          <Repo as='section'>
            { this.renderScreen() }
            <button onClick={ () => {this.setState({test: 'blue'})} } >Blue</button>
            <button onClick={ () => {this.setState({test: 'Red'})} } >Red</button>
            <button onClick={ () => {this.setState({test: 'green'})} } >green</button>
          </Repo>
          </div>
        </div>
      )
  }
}
export default InfoKiosk;
