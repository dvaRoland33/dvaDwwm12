import React from "react"
import SideBar from "./sidebar"

class MenuBurger extends React.Component {
  render(){
    return (
        <div id="outer-container">
          <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}  right/>
          <div id="page-wrap">
          </div>
        </div>
      )
    }
  }
  export default MenuBurger