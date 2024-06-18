import React from 'react';
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

  export default Specialisation;