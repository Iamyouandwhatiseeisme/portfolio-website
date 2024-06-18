import logo from './assets/images/logo.png';
import './App.css';
import React from 'react';
import DisplayedContent  from './DisplayContent';
import AppBar  from './AppBar';
import SideBar from './SideBar';

function App() {

  
  return (
    <Portfolio />
    
  );
}
class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.state={
      displayedItem: '0'
    }
    this.changeDisplayedItem = this.changeDisplayedItem.bind(this);

  }
  changeDisplayedItem(item){
    this.setState({
      displayedItem: item
    })

    console.log(item);

  }

  render(){
    return (
      <div className="Portoflio">
      <header className="App-header">
      <header><h1>Welcome to Sandro Abashidze's Portfolio Page</h1></header>
        
        <div className="items-screen wave-background">
          <AppBar />
          
          <div className="page-content">
            <SideBar 
              displayedItem={this.state.displayedItem} 
              changeDisplayedItem={this.changeDisplayedItem} 
            />
            <DisplayedContent displayedItem={this.state.displayedItem}/>
            
          </div>
         

          

          
        </div>
      </header>
    </div>
    )
  }
}







document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
  });
});


export default App;
