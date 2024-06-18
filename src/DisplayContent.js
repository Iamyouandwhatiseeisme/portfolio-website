import React from 'react';
import Work from './Work';
import Specialisation from './Specialisation';
import Story from './Story';

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
  export default DisplayedContent;