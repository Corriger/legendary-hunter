import styled from 'styled-components'

// Navigation Menu
const Title = styled.h1`
  display: block;
  margin: 0 auto;
  width: 80%;
  font-size: 6.5em;
  letter-spacing: .25em;
  color: #FFF;
  text-shadow: 0px 0px 2px #000, 0px 0px 2px #000, 0px 0px 2px #000, 0px 0px 2px #000;
`
const TabBox = styled.ul`
  margin: 0 auto;
  width: 80%;
  list-style: none;
`
const Tab = styled.li`
  display: flex;
  align-items: center;
  justify-contents: center;
  height: 3em;
  margin: 0 0 20px 0;
`
const TabTail = styled.span`
  position: relative;
  background: #5E0000;
  border: 3px solid #8E0000;
  border-style: solid none solid solid;
  display: block;
  left: 3px;
  height: 50%;
  width: 6em;
  z-index: 5;
`
const Name = styled.strong`
  border: 3px solid #8E0000;
  background: #5E0000;
  font-size: 2.3em;
  color: #FFF;
  border-radius: 0 3em 3em 0;
  width: 10em;
  padding: 7.5px;
  text-align: center;
  text-transform: capitalize;
  text-shadow: 0px 0px 2px #000, 0px 0px 2px #000, 0px 0px 2px #000, 0px 0px 2px #000;
  &:hover{
    color: #FFB800;
  }
`
const Info = styled.section`
  background: #5E0000;
  border: 3px solid #8E0000;
  color: #FFF;
  font-size: 3em;
  width: 80%;
  margin: 15px auto 0;
  padding: 15px;
  height: 100px;
`
// Info Kiosk Container
const PageTitle = styled.h1`
  width: 100%;
  text-align: right;
  color: #FFF;
  &:after{
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 15px solid #5E0000;
    z-index: 0;
  }
`
const Kiosk = styled.ul`
  width: calc(47% - 60px);
  height: 600px;
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
// Info
const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const ListItem = styled.li`
  display: block;
  padding: 0 0 15px;
  width: 100%;
`
const SupTitle = styled.em`
  vertical-align: super;
  font-size: smaller;
`
const Desc = styled.p`
  display: block;
  padding: 0 0 0 15px;
`
// Return Button
const Return = styled(Selection)`
  cursor: pointer;  
  display: block;
  padding: 0;
  margin: 2em auto;
  background: none;
  text-align: center;
  font-family: inherit;
  font-size: 2em;
  box-shadow: none;
  border: none;
  &:hover{
    color: #FFB800;
  }
`

export { Title, TabBox, Tab, TabTail, Name, Info, PageTitle, Kiosk, Selection, Repo, List, ListItem, SupTitle, Desc, Return }