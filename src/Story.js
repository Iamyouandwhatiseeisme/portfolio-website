import React from 'react';

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

export default Story;