import React from 'react'
import Stopwatch from './Components/Stopwatch'

export default class App extends React.Component {
    render() {
      return(
        <div className="app">
          <div className="header">
            <p className="lg-text app-descript">
              Set Time
            </p>
          </div>
          <div className="stopwatch">
            <Stopwatch />
          </div>
        </div>
      )
    }
} 