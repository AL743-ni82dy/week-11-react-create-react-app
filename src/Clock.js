import React from 'react';

class Clock extends React.Component {
    // 'constructor' is part of 'class' and React components
    //always caslled when an instance of our class is created
    //aka 'contruct'd
      constructor (props) {
        super(props)
        // bad code:  this.state.displayTime = ''
        // we must set state to an object
        this.state = {
          displayTime: '',
          visitorName: 'Galaxy Cardiff'
        }
      }
    
      // 'componentDidMount' is standard in React
      // this is where we load data or otherwise initialize data
      componentDidMount () {
        this.timerId = setInterval(() => {
          // call the 'tick'
          this.tick()
        }, 1000);
      }
    
      tick () {
        console.log("In tick")
        this.setState({
          displayTime: new Date().toLocaleTimeString()
        })
      }
    
      // 'render' is the standard for getting
      // html into our web page
      render () {
        const {displayTime, visitorName} = this.state;
    
        return (
          <div className="clock">
            <h2>Time is {displayTime}</h2>
            <div>Thanks for visiting {visitorName}</div>
          </div>
        )
      }
    }

    export default Clock;