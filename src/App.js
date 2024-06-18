import logo from './assets/images/logo.png';
import logoBlack from './assets/images/logo-black.png';
import './App.css';
import React from 'react';
import Work from './Work';


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
class DisplayedContent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      displayedItem: this.props.displayedItem
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidUpdate(prevProps){
    if (this.props.displayedItem !== prevProps.displayedItem) {
      this.setState({
        displayedItem: this.props.displayedItem
      });
    }
  }
  handleClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    window.open(href, '_blank'); 
  };
  render() {
      const displayedItem = this.state.displayedItem;
    return (
      <div className="displayed-content">

      {displayedItem === '0' && <Story />}
      {displayedItem === '1' && <Specialisation />}
      {displayedItem === '2' && <Work />}
      </div>
    )
  }
}
// class Work extends React.Component{
//   render(){
//     return(
//       <div>Content for Worksad</div>
//     )
//   }
// }
class Specialisation extends React.Component{
  render(){
    return(
      <div>
        <h6> Mobile Software Development | Web Design | Back-End integration | REST API | Firebase | AI | Front-End Technologies
        </h6>
        <ul className='skill-list'>
          <li className='skill-list-item'>
          <strong>Front-End Technologies:</strong> <a className="embed-link"href="https://www.freecodecamp.org/certification/sandroabashidze/responsive-web-design" onClick={this.handleClick}>HTML</a>,<a className="embed-link"href="https://www.freecodecamp.org/certification/sandroabashidze/responsive-web-design" onClick={this.handleClick}> CSS,</a>
          <a className="embed-link" href="https://www.freecodecamp.org/certification/sandroabashidze/javascript-algorithms-and-data-structures-v8" onClick={this.handleClick}>JavaScript</a>, <a className="embed-link" href="https://www.freecodecamp.org/certification/sandroabashidze/front-end-development-libraries" onClick={this.handleClick}>Front-end Libraries,</a>
          </li>
          <li className='skill-list-item'>
            <strong>Mobile Development:</strong> Flutter, Dart, Java, Javascript, JSX,
            React
          </li>
          <li className='skill-list-item'>
            <strong>Flutter: </strong> Bloc, Cubit State Management, Mixins, Asynchronous programming
          </li>
          <li className='skill-list-item'>
            <strong>Architecture: </strong> SOLID, Dependency Injection, Monolithic architecture

          </li>
          <li className='skill-list-item'>
            <strong>Back-End Integration:</strong> HTTP Requests, JSON Data Format, REST APIs, Firebase, Hive, SQL, <a className="embed-link" href="https://github.com/Iamyouandwhatiseeisme/CinemApp" onClick={this.handleClick}>Gemini</a>, <a className="embed-link" href="https://github.com/Iamyouandwhatiseeisme/guide_me" onClick={this.handleClick}>Google APIs</a>, Weather API
          </li>
          <li className='skill-list-item'>
            <strong>Development Tools:</strong> Git, GitHub 

          </li>
        </ul>
        
      </div>
    )
  }
}
class Story extends React.Component{
  render(){
    return(
      <div>
        <h4>My journey began with <a className="embed-link" href="https://see.stanford.edu/course/cs106a?fbclid=IwAR1eVqvkFhxEQMs9sXNqoPlZVRBl9vOkpXXiGcd5HMQMy75yxPDJg9W4jz8" onClick={this.handleClick}>CS106A</a> - Programming Methodology - Java
        </h4>   
        <p>I have completed exercises focused on object-oriented design, decomposition, encapsulation, abstraction, and testing. Simultaneously, my enrollment in the Bitcamp Bootcamp enriched my understanding of these principles and laid a solid foundation for my JavaScript journey.</p>
        <p>The next step in my journey was learning Dart/Flutter, which I absolutely fell in love with. I built several applications featured on my portfolio page and released my first app, CinemApp, for closed testing.</p>
        <p>Not one to limit myself to just one programming language, I also enrolled in courses on HTML, CSS, JavaScript, JSX, React, and PostgreSQL, earning certifications in a short period of time.</p>
        <p>Looking ahead, I am eager to become a Full-Stack Developer with a focus on the Flutter framework and to learn Python.</p> 
      </div>
    )
  }
}
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
