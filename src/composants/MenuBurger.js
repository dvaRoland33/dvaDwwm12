import React from "react";
import SideBar from "./sidebar";

function MenuBurger() {
    return (
      <div id="outer-container">
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}  right/>
        <div id="page-wrap">
         </div>
      </div>
    );
  }

  export default MenuBurger; 