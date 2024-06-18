import React from 'react';
import logoBlack from './assets/images/logo-black.png';

class SideBar extends React.Component{
    render(){
      return (
        <div id="side-bar">
              <div className={`side-bar-item  ${this.props.displayedItem === '0' ? 'selected' : ''}`} onClick={()=>this.props.changeDisplayedItem('0')}>My story</div>
              <div className={`side-bar-item  ${this.props.displayedItem === '1' ? 'selected' : ''}`} onClick={()=>this.props.changeDisplayedItem('1')}>Specialisation</div>
              <div className={`side-bar-item  ${this.props.displayedItem === '2' ? 'selected' : ''}`} onClick={()=>this.props.changeDisplayedItem('2')}>Work</div>
        </div>
  
      )
    }
  }

export default SideBar;