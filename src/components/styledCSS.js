import styled from 'styled-components'

let colors = {
  'backOne': '#3E0000',
  'backTwo': '#9b0000',
  'textTitle': '#fff',
  'textBody': '#a1fef9',
  'hiLite': '#ffb800'
}

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
  background: url(${props => props.tabBox});
  background-size: contain;
  background-position: bottom right;
  background-repeat: no-repeat;
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
  font-size: 2em;
  width: 80%;
  margin: 15px auto 0;
  padding: 15px;
  height: 100px;
`
// Info Kiosk Container
const PageTitle = styled.h1`
  width: 100%;
  text-align: right;
  text-shadow: 0px 0px 1px #000, 0px 0px 1px #000, 0px 0px 3px #000, 0px 0px 5px #000;
`
// Info Kiosk Container
const Kiosk = styled.ul`
  padding: 45px 0;
  width: calc(45% - 30px);
  height: 50%;
  max-height: 600px;
  background: ${colors.backOne};
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
    color: ${colors.hiLite};
  }
  &:active{
    color: ${colors.hiLite}
  }
`
const Repo = styled(Kiosk)`
  font-size: 1em;
  overflow-y: auto;
  scrollbar-width: 10px;
  scrollbar-color: #FF0000 #2E0000;
  &:before{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${props => props.fore});
    background-size: 45%;
    background-repeat: no-repeat;
    background-position: bottom 1rem right 1rem;
    opacity: .667;
    z-index: 0;
  }
`
// Info
const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-y: auto;
`
const ListItem = styled.li`
  display: block;
  margin: 0 auto;
  padding: 0 0 15px;
  width: 90%;
`
const SupTitle = styled.em`
  vertical-align: super;
`
const Desc = styled.p`
  display: block;
  padding: 0 0 0 1em;
  color: ${colors.textBody};
`

// Weapon Select Container
const WeaponInfo = styled.article`
  width: calc(45% - 30px);
  height: 60%;
`
const WeaponList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  width: 40%;
  height: 60%;
`
const Arrow = styled.li`
  cursor: pointer;
  margin: 0 auto;
  border-top: ${props => props.down ? '30px solid #FFF' : '0px solid transparent'};
  border-bottom: ${props => props.down ? '0px solid transparent' : '30px solid #FFF'};
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
`
const WeaponItem = styled.li`
  display: flex;
  padding: 0 45px;
  flex-flow: column wrap;
  justify-content: space-evenly;
  height: calc(30% - 30px);
  border: 5px solid #200101;
  background: ${colors.backOne};
  text-align: right;
  border-radius: 30px 0 0 0;
  &:hover{
    background: ${colors.backTwo}
    border: 5px solid #FF0000;
  }
`
const WepImg = styled.img`
  width: 33%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`
const WepName = styled.strong`
  display: block;
  font-size: 1.667em;
  text-shadow: 0px 0px 2px #000, 0px 0px 2px #000, 0px 0px 2px #000, 0px 0px 2px #000;
`
const WepTitle = styled(WepName)`
  font-size: 1.25em;
  font-style: italic;
  text-shadow: 2px 2px 3px ${colors.textBody}
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
    color: ${colors.hiLite};
  }
`

export { Title, TabBox, Tab, TabTail, Name, Info, PageTitle, Kiosk, Selection, Repo, List, ListItem, SupTitle, Desc, WeaponInfo, Arrow, WeaponList, WeaponItem, WepImg, WepName, WepTitle, Return }