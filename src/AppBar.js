import React from 'react';
import logoBlack from './assets/images/logo-black.png';

class AppBar extends React.Component{
    textToCopy = "saabashidze@gmail.com";
    handleCopyText = () => {
     navigator.clipboard.writeText(this.textToCopy).then(() => {
       alert('Mail copied to clipboard!');
     }).catch(err => {
       alert('Failed to copy text: ', err);
     });
   };
    handleClick = (e) => {
     e.preventDefault();
     const href = e.currentTarget.getAttribute('href');
     window.open(href, '_blank'); 
   };
   render(){
     return (
       <div className="app-bar">
             <div className="circular-image"><img src={logoBlack} id="app-bar-image"></img></div>
             <div className="spacer"></div>
             <div className="app-bar-title">Portfolio Showcase</div>
             {/* <div className="spacer"></div> */}
             <a className="icon-wrapper" href="https://github.com/Iamyouandwhatiseeisme/" onClick={this.handleClick}><i className="fa fa-github" style={{fontSize: "32px"}}></i></a>
             <div className="icon-wrapper" onClick={ this.handleCopyText}><i className="fa fa-google" aria-hidden="true" style={{fontSize: "32px"}}></i></div>
             <a className="icon-wrapper" href="https://www.linkedin.com/in/sandro-abashidze-6a6b3a25a/" onClick={this.handleClick}><i className="fa fa-linkedin" aria-hidden="true" style={{fontSize: "32px"}}></i></a>
             
             
           </div>
 
     )
   }
 
 }

 export default AppBar;